/**
 * @file
 * @copyright 2016, loocat.
 */

// const crypto = require('crypto');
var xml2js = require('xml2js');
var moment = require('moment');
var util = require('util');
var uuid = require('uuid');
var name = require('./name');
var code = require('./code');

/**
 * 
 */
var getDatetime = function (hrLen) {
  var tmp = moment().format("YYYYMMDDTHHmmss");
  if (hrLen > 0) {
    tmp += ('000000000' + process.hrtime()[1]).slice(-9).slice(0, hrLen > 9 ? 9 : hrLen);
  }
  return tmp;
}

/**
 * 
 */
var createRequestID = function () {
  return util.format('rqi-%s', uuid.v1());
}

/**
 * 
 */
var createResourceID = function (typeCode) {
  return util.format('%s-%s', name.getShort(code.getResourceType(typeCode)), uuid.v4());
}

/**
 * 
 **/
var translateOperation = function (operationType, bindType) {
  var toHttp = function (op) {
    if (op === 'Create') {
      return 'post';
    }
    else if (op === 'Retrieve') {
      return 'get';
    }
    else if (op === 'Update') {
      return 'put';
    }
    else if (op === 'Delete') {
      return 'delete';
    }
    else if (op === 'Notify') {
      // TODO fix this
      return 'post';
    }
    log.error('unknown oneM2M operation: ' + op)
    throw op;
  }

  var toMqtt = function (op) {
    return code.getOperation(op);
  }

  return (bindType && bindType.toLowerCase() === 'http' ? toHttp : toMqtt)(operationType);
}

/**
 * 
 */
var isSimple = function (ttt) {
  return (ttt === 'string' || ttt === 'number' || ttt === 'boolean');
}

/**
 * 
 */
var attributes = ['rn'];
var attributize = function (pc, cty, level) {
  if (typeof level === 'undefined') level = 0;
  var tr = {
    'xml': (key) => {
      if (key && pc[key]) {
        var ttt = pc['$'];
        if (!ttt) { ttt = {}; pc['$'] = ttt; }
        ttt[key] = pc[key].substring(0);
        delete pc[key];
      }
    }
  };

  if (tr[cty] && isSimple(typeof pc) === false) {
    if (Object.keys(pc).length > 0) {
      attributes.forEach(tr[cty]);
      Object.keys(pc).forEach((key) => {
        if (key !== '$' && pc[key]) {
          pc[key] = attributize(pc[key], cty, level + 1);
        }
      });
    }
    else if (Array.isArray(pc)) {
      pc.forEach((ttt) => {
        ttt = attributize(ttt, cty, level + 1);
      });
    }
  }

  return pc;
}

/**
 * 
 */
var wrapMessage = function (root, content, format, long) {
  content = attributize(content, format);
  var category = ['PrimitiveRootElements', 'ResourceTypes', 'ComplexDataTypesMembers'];
  var wrapped = undefined;
  var wrapType = (long ? name.getLong : name.getShort)(root, category);
  var message = (long ? toLongName(content, true) : content);
  if (format && format.indexOf('xml') > -1) {
    var atr = message['$'];
    if (!atr) { atr = {}; message['$'] = atr; }
    atr['xmlns:m2m'] = 'http://www.onem2m.org/xml/protocols';
    wrapped = (new xml2js.Builder({
      rootName: 'm2m:' + wrapType,
      renderOpts: {pretty: false}
    })).buildObject(message);
  }
  else {
    wrapped = {};
    wrapped[wrapType] = message;
  }
  return wrapped;
}

/**
 * 
 */
var nameLengthChanger = function (changer) {

  var cat = {
    rsc: ['ResourceTypes', 'PrimitiveRootElements'],
    atr: ['PrimitiveParameters', 'ResourceAttributes', 'ComplexDataTypesMembers']
  };

  var process = function (src) {
    if (isSimple(typeof src)) {
      return src;
    }
    var dst;
    if (Array.isArray(src)) {
      dst = [];
      for (var i = 0; i < src.length; ++i) {
        dst.push(process(src[i]));
      }
    }
    else {
      dst = {};
      for (var ii in src) {
        var id = ii;
        if (id !== 'address') try {
          id = changer(ii, isSimple(typeof src[ii]) ? cat.atr : cat.rsc);
        }
          catch (e) {
            try {
              id = changer(ii, isSimple(typeof src[ii]) ? cat.rsc : cat.atr);
            }
            catch (e) {
              // ignore not exsting jargon
              log.error('cannot find jargon: ' + id);
            }
          }
        dst[id] = process(src[ii]);
      }
    }
    return dst;
  }

  return process;
};

var toLongName = nameLengthChanger(name.getLong);
var toShortName = nameLengthChanger(name.getShort);

/**
 * 
 */
var parseJson = function (str) {
  var obj;
  try {
    obj = JSON.parse(str);
  }
  catch (err) {
    log.debug(typeof str === 'string' ? str : str.toString());
    log.debug(err);
  }
  return obj;
}

/**
 * 
 */
var meanchild = function (src) {
  var dst = {};
  for (var ii in src) {
    if (ii !== 'child') {
      dst[ii] = (typeof src[ii] === 'object') ? meanchild(src[ii]) : src[ii];
    }
  }
  if (src.child && Array.isArray(src.child)) {
    src.child.forEach((child) => {
      child = meanchild(child);
      for (var jj in child) {
        if (!dst[jj]) {
          dst[jj] = child[jj];
        }
        else {
          if (!Array.isArray(dst[jj])) {
            dst[jj] = [dst[jj]];
          }
          dst[jj].push(child[jj]);
        }
      }
    });
  }
  return dst;
}

/**
 * determine Resource Addressing Method
 */
var determineResourceAddressingMethod = function (addr) {
  if (addr.match(/^\/[^\/]/)) return code.getResourceAddressingMethod('SP-Relative');
  if (addr.match(/^\/\/[^\/]/)) return code.getResourceAddressingMethod('Absolute');
  return code.getResourceAddressingMethod('CSE-Relative');
}

/**
 * determine Resource Address type
 */
var determineResourceAddressingType = function (addr, cseid, spid) {
  var ttt = getCSERelativeAddress(addr, cseid, spid).split('/');
  if (ttt.length > 1) {
    return code.getDiscResType('structured');
  }
  else if (ttt.length === 1) {
    return code.getDiscResType('unstructured');
  }
  return null;
}

/**
 * 
 */
var getCSERelativeAddress = (addr, cseid, spid) => {
  var ttt = addr.split('/');
  var method = determineResourceAddressingMethod(addr); 
  if (method === code.getResourceAddressingMethod('CSE-Relative')) {
    if (ttt[0] !== cseid) addr = cseid + '/' + addr;
    return addr;
  } 
  if (method === code.getResourceAddressingMethod('SP-Relative')) {
    if (ttt[0].length === 0 && ttt[1] === cseid) {
      return addr.replace(/^\//, '');
    }
  } 
  if (method === code.getResourceAddressingMethod('Absolute')) {
    if (ttt[2] === spid && ttt[3] === cseid) {
      return ttt.slice(3).join('/');
    } 
  }
  console.error('[//%s/%s] cannot handle: %s', spid, cseid, addr);
  // throw new Error(addr);
  return null;
}

/**
 * 
 */
var getSPRelativeAddress = (addr, cseid, spid) => {
  var ttt = addr.split('/');
  var method = determineResourceAddressingMethod(addr); 
  if (method === code.getResourceAddressingMethod('CSE-Relative')) {
    if (ttt[0] !== cseid) addr = cseid + '/' + addr;
    return '/' + addr;
  } 
  if (method === code.getResourceAddressingMethod('SP-Relative')) {
    if (ttt[0].length === 0 && ttt[1] === cseid) {
      return addr;
    }
  } 
  if (method === code.getResourceAddressingMethod('Absolute')) {
    if (ttt[2] === spid && ttt[3] === cseid) {
      return '/' + ttt.slice(3).join('/');
    } 
  }
  console.error('[//%s/%s] cannot handle: %s', spid, cseid, addr);
  // throw new Error(addr);
  return null;
}

/**
 * 
 */
var getAbsoluteAddress = (addr, cseid, spid) => {
  var ttt = addr.split('/');
  var method = determineResourceAddressingMethod(addr); 
  if (method === code.getResourceAddressingMethod('CSE-Relative')) {
    if (ttt[0] !== cseid) addr = cseid + '/' + addr;
    return '//' + spid + '/' + addr;
  } 
  if (method === code.getResourceAddressingMethod('SP-Relative')) {
    if (ttt[0].length === 0 && ttt[1] === cseid) {
      return '//' + spid + addr;
    }
  } 
  if (method === code.getResourceAddressingMethod('Absolute')) {
    if (ttt[2] === spid && ttt[3] === cseid) {
      return addr;
    } 
  }
  console.error('[//%s/%s] cannot handle: %s', spid, cseid, addr);
  // throw new Error(addr);
  return null;
}

/**
 * 
 */
var processData = function (data, callback) {
  var parser = new xml2js.Parser({ explicitArray: false });
  parser.parseString(data, function (err, result) {
    var msg = undefined;
    if (err) {
      msg = parseJson(data);
      if (!msg) {
        log.error('json string syntax error has occurred while parsing request body');
      }
      for (var ii in msg) {
        if (ii.match(/^m2m:/)) {
          msg[ii.replace('m2m:', '')] = msg[ii];
          delete msg[ii];
        }
      }
    }
    else {
      msg = {};
      for (var ii in result) {
        log.debug(ii);
        if (Object.hasOwnProperty.call(result[ii], '$')) {
          var ttt = result[ii]['$'];
          Object.keys(ttt).forEach((key) => {
            if (key !== 'xmlns:m2m') {
              msg[key.replace('^m2m', '')] = ttt[key]; 
            }
          })
          delete result[ii]['$'];
        }
        msg[ii.replace('m2m:', '')] = result[ii];
      }
    }
    
    // console.log(JSON.stringify(msg, null, ' '));
    if (msg) msg = toShortName(msg);
    if (callback) callback(msg);
  });
};

/**
 * 
 */
var path2addr = (path) => {
  // see clause 6.2.2.1 Path component (oneM2M TS-0009-V2.6.1)
  if (path.indexOf('/~/') === 0) return path.replace('/~/', '/');
  if (path.indexOf('/_/') === 0) return path.replace('/_/', '//');
  if (path.indexOf('/') === 0) return path.replace('/', '');
  return path;
}

/**
 * 
 */
var addr2path = (addr) => {
  // see clause 6.2.2.1 Path component (oneM2M TS-0009-V2.6.1)
  var pre = ((ram) => {
    // if (ram === code.getResourceAddressingMethod('CSE-Relative')) return '/' + myID + '/';
    if (ram === code.getResourceAddressingMethod('CSE-Relative')) return '/';
    else if (ram === code.getResourceAddressingMethod('SP-Relative')) return '/~' ;
    else if (ram === code.getResourceAddressingMethod('Absolute')) return '/_';
  }) (determineResourceAddressingMethod(addr));
  return pre + addr;
}

/**
 * get mime type of oneM2M primitive
 */
var mime = (pri) => {
  var ser = pri.cty || 'json';
  if (pri.op && pri.op === code.getOperation('Notify')) {
    dat = 'ntfy';
  }
  else {
    dat = 'res';
  }
  return util.format('application/vnd.onem2m-%s+%s', dat, ser); 
}

/**
 * 
 */
var log = (function () {
  try {
    return require('./logger').logger();
  }
  catch (e) {
    return {
      info: console.info,
      debug: console.log,
      warn: console.warn,
      error: console.error,
    };
  }
})();

//
// utilities
//
exports.createRequestID = createRequestID;
exports.createResourceID = createResourceID;
exports.translateOperation = translateOperation;
exports.wrapMessage = wrapMessage;
exports.toLongName = toLongName;
exports.toShortName = toShortName;
exports.parseJson = parseJson;
exports.meanchild = meanchild;
exports.determineResourceAddressingMethod = determineResourceAddressingMethod;
exports.determineResourceAddressingType = determineResourceAddressingType;
exports.getCSERelativeAddress = getCSERelativeAddress;
exports.getSPRelativeAddress = getSPRelativeAddress;
exports.getAbsoluteAddress = getAbsoluteAddress;
exports.processData = processData;
exports.path2addr = path2addr;
exports.addr2path = addr2path;
exports.mime = mime;
exports.log = log;
