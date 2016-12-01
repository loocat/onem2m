/**
 * @file
 * @copyright 2016, loocat.
 */

//
// see clause 8.2 Short names (TS_118.104)
//
var longShort = {
  PrimitiveParameters: {
    // table 8.2.2-1: PRIMITIVE_PARAMETERS
    "operation": "op",
    "to": "to",
    "from": "fr",
    "requestIdentifier": "rqi",
    "resourceType": "ty",
    "primitiveContent": "pc",
    "roleIDs": "rids",
    "originatingTimestamp": "ot",
    "requestExpirationTimestamp": "rqet",
    "resultExpirationTimestamp": "rset",
    "operationExecutionTime": "oet",
    "responseType": "rt",
    "resultPersistence": "rp",
    "resultContent": "rcn",
    "rventCategory": "ec",
    "deliveryAggregation": "da",
    "groupRequestIdentifier": "gid",
    "filterCriteria": "fc",
    "discoveryResultType": "drt",
    "responseStatusCode": "rsc",
    "tokens": "ts",
    "tokenIDs": "tids",
    "tokenReqIndicator": "tqi",
    "localTokenIDs": "ltids",
    "assignedTokenIdentifiers": "ati",
    "tokenReqInfo": "tqf",
    "contentStatus": "cnst",
    "contentOffset": "cnot"
  },

  // FilterCrieteria: {
  //   // Table 6.3.5.8-1: FILTER_CRIETERIA
  //   "createdBefore": "crb",
  //   "createdAfter": "cra",
  //   "modifiedSince": "ms",
  //   "unmodifiedSince": "us",
  //   "stateTagSmaller": "sts",
  //   "stateTagBigger": "stb",
  //   "expireBefore": "exb",
  //   "expireAfter": "exa",
  //   "labels": "lbl",
  //   "resourceType": "ty",
  //   "sizeAbove": "sza",
  //   "sizeBelow": "szb",
  //   "contentType": "cty",
  //   "attribute": "atr",
  //   "filterUsage": "fu",
  //   "limit": "lim",
  //   semanticsFilter: 'smf',
  //   filterOperation: 'fo',
  //   contentFilterSyntax: 'cfs',
  //   contentFilterQuery: 'cqf',
  //   level: 'lvl',
  //   offset: 'ofst'
  // },

  PrimitiveRootElements: {
    // table 8.2.2-2: PRIMITIVE_ROOT_ELEMENTS
    "requestPrimitive": "rqp",
    "responsePrimitive": "rsp",
  },

  ResourceAttributes: {
    // table 8.2.3-1: RESOURCE_ATTRIBUTES_1_OF_6
    "accessControlPolicyIDs": "acpi",
    "announcedAttribute": "aa",
    "announceTo": "at",
    "creationTime": "ct",
    "expirationTime": "et",
    "labels": "lbl",
    "lastModifiedTime": "lt",
    "Link": "lnk",
    "parentID": "pi",
    "resourceID": "ri",
    "resourceType": "ty",
    "stateTag": "st",
    "resourceName": "rn",
    "privileges": "pv",
    "selfPrivileges": "pvs",
    "App-ID": "api",
    "AE-ID": "aei",
    "appName": "apn",
    "pointOfAccess": "poa",
    "ontologyRef": "or",
    "nodeLink": "nl",
    "contentSerialization": "csz",
    "creator": "cr",
    "maxNrOfInstances": "mni",
    "maxByteSize": "mbs",
    "maxInstanceAge": "mia",
    "currentNrOfInstances": "cni",
  
    // table 8.2.3-2: RESOURCE_ATTRIBUTES_2_OF_6
    "currentByteSize": "cbs",
    "locationID": "li",
    "contentInfo": "cnf",
    "contentSize": "cs",
    "contentRef": "conr",
    "containerDefinition": "cnd",
    "primitiveContent": "pc",
    "content": "con",
    "cseType": "cst",
    "CSE-ID": "csi",
    "supportedResourceType": "srt",
    "source": "sr",
    "target": "tg",
    "lifespan": "Ls",
    "eventCat": "ec*",
    "deliveryMetaData": "dmd",
    "aggregatedRequest": "arq",
    "eventID": "evi",
    "eventType": "evt",
    "evenStart": "evs",
    "eventEnd": "eve",
    "operationType": "opt",
    "dataSize": "ds",
    "execStatus": "exs",
    "execResult": "exr",
    "execDisable": "exd",
    "execTarget": "ext",
    "execMode": "exm",
    "execFrequency": "exf",
    "execDelay": "exy",
    "execNumber": "exn",
    "execReqArgs": "exra",
    "execEnable": "exe",
    "memberType": "mt",
    "currentNrOfMembers": "cnm",
    "maxNrOfMembers": "mnm",
    "memberIDs": "mid",
    "membersAccessControlPolicyIDs": "macp",
    "memberTypeValidated": "mtv",
    "consistencyStrategy": "csy",
    "groupName": "gn",
    "locationSource": "los",
    "locationUpdatePeriod": "lou",
    "locationTargetId": "lot",
    "locationServer": "lor",
    "locationContainerID": "loi",
    "locationContainerName": "lon",
    "locationStatus": "lost",
    "serviceRoles": "svr",
    "description": "dc",
    "cmdType": "cmt",
    "mgmtDefinition": "mgd",
    "objectIDs": "obis",
  
    // table 8.2.3-3: RESOURCE_ATTRIBUTES_3_OF_6
    "objectPaths": "obps",
    "nodeID": "ni",
    "hostedCSELink": "hcl",
    "CSEBase": "cb",
    "M2M-Ext-ID": "mei",
    "Trigger-Recipient-ID": "tri",
    "requestReachability": "rr",
    "originator": "org",
    "metaInformation": "mi",
    "requestStatus": "rs",
    "operationResult": "ors",
    "operation": "op",
    "requestID": "rid",
    "scheduleElement": "se",
    "deviceIdentifier": "di",
    "statsCollectID": "sci",
    "collectingEntityID": "cei",
    "collectedEntityID": "cdi",
    "status": "ss",
    "statsRuleStatus": "srs",
    "statModel": "sm",
    "collectPeriod": "cp",
    "eventNotificationCriteria": "enc",
    "expirationCounter": "exc",
    "notificationURI": "nu",
    "notificationForwardingURI": "nfu",
    "batchNotify": "bn",
    "rateLimit": "rl",
    "preSubscriptionNotify": "psn",
    "pendingNotification": "pn",
    "notificationStoragePriority": "nsp",
    "latestNotify": "ln",
    "notificationContentType": "nct",
    "notificationEventCat": "nec",
    "subscriberURI": "su",
    "version": "vr",
    "update": "ud",
    "updateStatus": "uds",
    "install": "in",
    "uninstall": "un",
    "installStatus": "ins",
    "activate": "act",
    "deactivate": "dea",
    "activateStatus": "acts",
    "memAvailable": "mma",
    "memTotal": "mmt",
  
    // table 8.2.3-4: RESOURCE_ATTRIBUTES_4_OF_6
    "areaNwkType": "ant",
    "listOfDevices": "ldv",
    "devId": "dvd",
    "devType": "dvt",
    "areaNwkId": "awi",
    "sleepInterval": "sli",
    "sleepDuration": "sld",
    "listOfNeighbors": "lnh",
    "batteryLevel": "btl",
    "batteryStatus": "bts",
    "deviceLabel": "dlb",
    "manufacturer": "man",
    "model": "mod",
    "deviceType": "dty",
    "fwVersion": "fwv",
    "swVersion": "swv",
    "hwVersion": "hwv",
    "capabilityName": "can",
    "attached": "att",
    "capabilityActionStatus": "cas",
    "enable": "ena",
    "disable": "dis",
    "currentState": "cus",
    "reboot": "rbo",
    "factoryReset": "far",
    "logTypeId": "lgt",
    "logData": "lgd",
    "logStatus": "lgst",
    "logStart": "lga",
    "logStop": "lgo",
    "firmwareName": "fwnnam",
    "softwareName": "swn",
    "cmdhPolicyName": "cpn",
    "mgmtLink": "cmlk",
    "activeCmdhPolicyLink": "acmlk",
    "order": "od",
    "defEcValue": "dev",
    "requestOrigin": "ror",
    "requestContext": "rct",
    "requestContextNotification": "rctn",
    "requestCharacteristics": "rch",
    "applicableEventCategories": "aecs",
    "applicableEventCategory": "aec",
    "defaultRequestExpTime": "dqet",
    "defaultResultExpTime": "dset",
    "defaultOpExecTime": "doet",
    "defaultRespPersistence": "drp",
    "defaultDelAggregation": "dda",
    "limitsEventCategory": "lec",
    "limitsRequestExpTime": "lqet",
    "limitsResultExpTime": "lset",
    "limitsOpExecTime": "loet",
    "limitsRespPersistence": "lrp",
    "limitsDelAggregation": "lda",
    "targetNetwork": "ttn",
    
    // table 8.2.3-5: RESOURCE_ATTRIBUTES_5_OF_6
    "minReqVolume": "mrv",
    "spreadingWaitTime": "swt",
    "backOffParameters": "bop",
    "otherConditions": "ohc",
    "maxBufferSize": "mbfs",
    "storagePriority": "sgp",
    "applicableCredIDs": "apci",
    "allowedApp-IDs": "aai",
    "allowedAEs": "aae",
    "notificationTargetURI": "ntu",
    "notificationlPolicyID": "npi",
    "action": "ac",
    "policyLabel": "plbl",
    "rulesRelationship": "rrs",
    "creator": "cr",
    "deletionRules": "dr",
    "deletionRulesRelation": "drr",
    "dynamicAuthorizationConsultationIDs": "daci",
    "dynamicAuthorizationEnabled": "dae",
    "dynamicAuthorizationPoA": "dap",
    "dynamicAuthorizationLifetime": "dal",
    "descriptorRepresentation": "dcrp",
    "semanticOpExec": "soe",
    "descriptor": "dsp",
    "relatedSemantics": "rels",
    "periodicInterval": "pei",
    "missingDataDetect": "mdd",
    "missingDataMaxNr": "mdn",
    "missingDataList": "mdlt",
    "missingDataCurrentNr": "mdc",
    "missingDataDetectTimer": "mdt",
    "dataGenerationTime": "dgt",
    "sequenceNr": "snr",
    "providedToNSE": "ptn",
    "periodicIndicator": "pri",
    "periodicDurationTime": "pdt",
    "periodicIntervalTime": "pit",
    "stationaryIndication": "sti",
    "dataSizeIndicator": "dsi",
    "validityTime": "vdt",
    "roleID": "rlid",
    "roleName": "rlnm",
    "tokenLink": "rltl",
    "tokenID": "tkid",
    "tokenObject": "tkob",
    "issuer": "tkis",
    "holder": "tkhd",
    "notBefore": "tknb",
    "notAfter": "tkna",
    "tokenName": "tknm",
    "audience": "tkau",
    "permissions": "tkps",
    "extension": "tkex",
    "e2eSecInfo": "esi",

    // table 8.2.3-6: RESOURCE_ATTRIBTUES_6_OF_6
    "serviceName": "gisn",
    "operationName": "gion",
    "inputDataPointLinks": "giip",
    "outputDataPointLinks": "giop",
    "inputLinks": "giil",
    "outputLinks": "giol",
    "operationState": "gios",
    "direction": "dir",
    "objectPath": "ajop",
    "interfaceIntrospectXmlRef": "ajir",
    "input": "inp",
    "callStatus": "clst",
    "output": "out",
    "currentValue": "crv",
    "requestedValue": "rqv",
    
    // (extra) not in table 6.3.2-1
    "triggerRecipientID": "trid",
    
    // missing specific attribute of <subscription> resource
    "groupID": "gi"
  },

  ComplexDataTypesMembers: {
    // table 8.2.5-1 ComplexDataTypesMembers short names
    // TS-0004 page 238
    createdBefore: 'crb',
    createdAfter: 'cra',
    modifiedSince: 'ms',
    unmodifiedSince: 'us',
    stateTagSmaller: 'sts',
    stateTagBigger: 'stb',
    expireBefore: 'exb',
    expireAfter: 'exa',
    labels: 'lbl',
    resourceType: 'ty',
    sizeAbove: 'sza',
    sizeBelow: 'szb',
    contentType: 'cty',
    limit: 'lim',
    attribute: 'atr',
    contentFilterSyntax: 'cfs',
    contentFilterQuery: 'cqf',
    level: 'lvl',
    offset: 'ofst',
    notificationEventType: 'net',
    operationMonitor: 'om',
    representation: 'rep',
    filterUsage: 'fu',
    eventCatType: 'ect',
    eventCatNo: 'ecn',
    number: 'num',
    duration: 'dur',
    notification: 'sgn',
    notificationEvent: 'nev',
    verificationRequest: 'vrq',
    subscriptionDeletion: 'sud',
    subscriptionReference: 'sur',
    creator: 'cr',
    notificationForwardingURI: 'nfu',
    IPEDiscoveryRequest: 'idr',
    filterCriteria: 'fc',
    operation: 'op',
    originator: 'or',
    accessId: 'aci',
    MSISDN: 'msd',
    action: 'can',
    status: 'sus',
    childResource: 'ch',
    accessControlRule: 'acr',
    accessControlOriginators: 'acor',
    accessControlOperations: 'acop',
    accessControlContexts: 'acco',
    accessControlWindow: 'actw',
    accessControlIpAddress: 'acip',
    ipv4Addresses: 'ipv4',
    ipv6Addresses: 'ipv6',
    accessControlLocationRegion: 'aclr',
    countryCode: 'accc',
    circRegion: 'accr',
    name: 'nm',
    specializationID: 'spid',
    value: 'val',
    type: 'typ',
    // TS-0004 page 239
    MaxNrOfNotify: 'mnn',
    timeWindow: 'tww',
    scheduleEntry: 'sce',
    aggregatedNotification: 'agn',
    attributeList: 'atrl',
    securityInfo: 'seci',
    aggregatedResponse: 'agr',
    resource: 'rce',
    URIList: 'uril',
    debugInfo: 'dbg',
    anyArg: 'any',
    fileType: 'ftyp',
    URI: 'uri',
    URL: 'url',
    username: 'unm',
    password: 'pwd',
    filesize: 'fsi',
    targetFile: 'tgf',
    delaySeconds: 'dss',
    successURL: 'surl',
    startTime: 'stt',
    completeTime: 'cpt',
    UUID: 'uuid',
    executionEnvRef: 'eer',
    version: 'vr',
    reset: 'rst',
    reboot: 'rbo',
    upload: 'uld',
    download: 'dld',
    softwareInstall: 'swin',
    softwareUpdate: 'swup',
    softwareUninstall: 'swun',
    tracingOption: 'tcop',
    tracingInfo: 'tcin',
    responseTypeValue: 'rtv',
    notificationURI: 'nu',
    timeOfDay: 'tod',
    locationRegions: 'lr',
    URIReference: 'urir',
    semanticsFilter: 'smf',
    missingDataList: 'mdl',
    missingData: 'md',
    tokenID: 'tkid',
    holder: 'tkhd',
    issuer: 'tkis',
    notBefore: 'tknb',
    notAfter: 'tkna',
    tokenName: 'tknm',
    audience: 'tkau',
    // TS-0004 page 240
    permissions: 'tkps',
    extension: 'tkex',
    permission: 'pm',
    resourceIDs: 'ris',
    privileges: 'pv',
    roleIDs: 'rids',
    localTokenIdAssignment: 'ltia',
    localTokenID: 'lti',
    dasInfo: 'dasi',
    securedDasRequest: 'sdr',
    filterOperation: 'fo',
    targetedResourceType: 'trt',
    originatorIP: 'oip',
    ipv4Address: 'ip4',
    ipv6Address: 'ip6',
    origiantorLocation: 'olo',
    originatorRoleIDs: 'orid',
    requestTimestamp: 'rts',
    targetedResourceID: 'trid',
    proposedPrivilegesLifetime: 'ppl',
    roleIDsFromACPs: 'rfa',
    tokenIDs: 'tids',
    dynamicACPInfo: 'dai',
    grantedPriveleges: 'gp',
    privilegesLifetime: 'pl',
    tokens: 'tkns',
    securityInfoType: 'sit',
    dasRequest: 'dreq',
    dasResponse: 'dres',
    esprimRandObject: 'ero',
    esprimObject: 'epo',
    escertkeMessage: 'eckm',
    resourceRef: 'rrf',
    resourceRefList: 'rrl',
    esprimRandID: 'esri',
    esprimRandValue: 'esrv',
    esprimRandExpiry: 'esrx',
    esprimKeyGenAlgID: 'esk',
    esprimKeyGenAlgIDs: 'esks',
    esprimProtocolAndAlgIDs: 'espa',
    supported2ESecFeatures: 'esf',
    certificates: 'escert',
    sharedReceiverESPrimRandObject: 'esro',
    networkAction: 'nwa',
    initialBackoffTime: 'ibt',
    additionalBackoffTime: 'abt',
    maximumBackoffTime: 'bbt',
    optionalRandomBackoffTime: 'rbt',
    backOffParametersSet: 'bops',
    dataLink: 'dali',
    attributeName: 'atn',
    dataContainerID: 'dcid',
    accessControlAuthenticationFlag: 'acaf',
    dataLinkEntry: 'dle',

    // (extra) not in table 8.2.5-1
    resourceStatus: 'rss'
  },

  ResourceTypes: {
    // table 8.2.4-1 ResourceTypes
    notification: 'sgn',
    accessControlPolicy: 'acp',
    accessControlPolicyAnnc: 'acpA',
    AE: 'ae',
    AEAnnc: 'aeA',
    container: 'cnt',
    containerAnnc: 'cntA',
    latest: 'la',
    oldest: 'ol',
    contentInstance: 'cin',
    contentInstanceAnnc: 'cinA',
    CSEBase: 'cb',
    delivery: 'dlv',
    eventConfig: 'evcg',
    execInstance: 'exin',
    fanOutPoint: 'fopt',
    group: 'grp',
    groupAnnc: 'grpA',
    locationPolicy: 'lcp',
    locationPolicyAnnc: 'lcpA',
    m2mServiceSubscriptionPolicy: 'mssp',
    mgmtCmd: 'mgc',
    node: 'nod',
    nodeAnnc: 'nodA',
    pollingChannel: 'pch',
    pollingChannelURI: 'pcu',
    remoteCSE: 'csr',
    remoteCSEAnnc: 'csrA',
    request: 'req',
    schedule: 'sch',
    scheduleAnnc: 'schA',
    serviceSubscribedAppRule: 'asar',
    serviceSubscribedNode: 'svsn',
    statsCollect: 'stcl',
    statsConfig: 'stcg',
    subscription: 'sub',
    firmware: 'fwr',
    firmwareAnnc: 'fwrA',
    software: 'swr',
    softwareAnnc: 'swrA',
    memory: 'mem',
    memoryAnnc: 'memA',
    areaNwkInfo: 'ani',
    areaNwkInfoAnnc: 'aniA',
    areaNwkDeviceInfo: 'andi',
    areaNwkDeviceInfoAnnc: 'andiA',
    battery: 'bat',
    batteryAnnc: 'batA',
    deviceInfo: 'dvi',
    deviceInfoAnnc: 'dviA',
    deviceCapability: 'dvc',
    deviceCapabilityAnnc: 'dvcA',
    reboot: 'rbo',
    rebootAnnc: 'rboA',
    eventLog: 'evl',
    eventLogAnnc: 'evlA',
    cmdhPolicy: 'cmp',
    activeCmdhPolicy: 'acmp',
    cmdhDefaults: 'cmdf',
    cmdhDefEcValue: 'cmdv',
    cmdhEcDefParamValues: 'cmpv',
    cmdhLimits: 'cml',
    cmdhNetworkAccessRules: 'cmnr',
    cmdhNwAccessRule: 'cmwr',
    cmdhBuffer: 'cmbf',
    notificationTargetMgmtPolicyRef: 'ntpr',
    notificationTargetPolicy: 'ntp',
    policyDeletionRules: 'pdr',
    notificationTargetSelfReference: 'ntsr',
    dynamicAuthorizationConsultation: 'dac',
    semanticDescriptor: 'smd',
    semanticDescriptorAnnc: 'smdA',
    semanticFanOutPoint: 'sfop',
    timeSeries: 'ts',
    timeSeriesAnnc: 'tsa',
    timeSeriesInstance: 'tsi',
    timeSeriesInstanceAnnc: 'tsia',
    trafficPattern: 'trpt',
    trafficPatternAnnc: 'trptA',
    role: 'rol',
    token: 'tk',
    genericInterworkingService: 'gis',
    genericInterworkingServiceAnnc: 'gisa',
    genericInterworkingOperationInstance: 'gio',
    genericInterworkingOperationInstanceAnnc: 'gioa',
    svcObjWrapper: 'ajsw',
    svcObjWrapperAnnc: 'ajswa',
    svcFwWrapper: 'ajfw',
    svcFwWrapperAnnc: 'ajfwa',
    allJoynApp: 'ajap',
    allJoynAppAnnc: 'ajapa',
    allJoynSvcObject: 'ajso',
    allJoynSvcObjectAnnc: 'ajsoa',
    allJoynInterface: 'ajif',
    allJoynInterfaceAnnc: 'ajifa',
    allJoynMethod: 'ajmd',
    allJoynMethodAnnc: 'ajmda',
    allJoynMethodCall: 'ajmc',
    allJoynMethodCallAnnc: 'ajmca',
    allJoynProperty: 'ajpr',
    allJoynPropertyAnnc: 'ajpra'
  }
}

var shortLong = {};
var flatShort = {};
var flatLong = {};

//
// initialize table: shortLong
//
for (var category in longShort) {
  shortLong[category] = {};
  for (var longName in longShort[category]) {
    var shortName = longShort[category][longName];
    if (shortLong[category].hasOwnProperty(shortName)) {
      throw new Error('[ERR] duplicated short name representation: ' + shortName);
    }
    shortLong[category][shortName] = longName;
  }
}

//
// initialize table: flatLong, flatShort
//
for (var category in longShort) {
  flatLong[category] = {};
  flatShort[category] = {};
  for (var longName in longShort[category]) {
    var flatName = longName.replace('-', '').toLowerCase();
    if (flatLong[category].hasOwnProperty(flatName)) {
      throw new Error('[ERR] duplicated flat name representation: ' + flatName);
    }
    flatLong[category][flatName] = longName;
    flatShort[category][flatName] = longShort[category][longName];
  }
}

/**
 * @description
 * Get array of categories
 * 
 * @returns array of strings
 */
var getCategories = function () {
  var tmp = [];
  for (var i in longShort) {
    tmp[tmp.length] = i;
  }
  return tmp;
}

/**
 * @description
 * Get array of categories
 * 
 * @returns array of strings
 */
var rebuildCategoryList = function (cats) {
  if (typeof cats === 'undefined') {
    cats = getCategories();
  }
  else if (Array.isArray(cats) === false) {
    cats = [cats];
  }
  return cats;
}

/**
 * @description
 * Exchange name representation: long <--> short
 * 
 * @param {name} long or short identifier
 * @param {cat} category name
 * @returns string
 */
exports.exchange = function (name, cats) {
  cats = rebuildCategoryList(cats);
  for (var i = 0; i < cats.length; ++i) {
    var cat = cats[i];
    if (!shortLong.hasOwnProperty(cat)) {
      throw ('[ERR:exchange] unknown category name: ' + cat);
    }
    if (shortLong[cat].hasOwnProperty(name)) {
      return shortLong[cat][name];
    }
    else if (longShort[cat].hasOwnProperty(name)) {
      return longShort[cat][name];
    }
  }
  throw new Error('[ERR:exchange] unknown name identifier: ' + name);
}

/**
 * @description
 * Get short representation of name
 * 
 * @param {name} long or short identifier
 * @param {cat} category name
 * @returns string
 */
exports.getShort = function (name, cats) {
  cats = rebuildCategoryList(cats);
  for (var i = 0; i < cats.length; ++i) {
    var cat = cats[i];
    if (!shortLong.hasOwnProperty(cat)) {
      throw ('[ERR:getShort] unknown category name: ' + cat);
    }
    if (shortLong[cat].hasOwnProperty(name)) {
      return name;
    }
    else if (longShort[cat].hasOwnProperty(name)) {
      return longShort[cat][name];
    }
  }
  throw new Error('[ERR:getShort] unknown name identifier: ' + name);
}

/**
 * @description
 * Get long representation of name
 * 
 * @param {name} long or short identifier
 * @param {cat} category name
 * @returns string
 */
exports.getLong = function (name, cats) {
  cats = rebuildCategoryList(cats);
  for (var i = 0; i < cats.length; ++i) {
    var cat = cats[i];
    if (!longShort.hasOwnProperty(cat)) {
      throw new Error('[ERR:getLong] unknown category name: ' + cat);
    }
    if (longShort[cat].hasOwnProperty(name)) {
      return name;
    }
    else if (shortLong[cat].hasOwnProperty(name)) {
      return shortLong[cat][name];
    }
  }
  throw new Error('[ERR:getLong] unknown name identifier: ' + name);
}

/**
 * @description
 * Transform flat representation to long
 * 
 * @param {name} flat identifier
 * @param {cat} category name
 * @returns string
 */
exports.flatToLong = function (name, cats) {
  cats = rebuildCategoryList(cats);
  for (var i = 0; i < cats.length; ++i) {
    var cat = cats[i];
    if (!flatLong.hasOwnProperty(cat)) {
      throw new Error('[ERR:flatToLong] unknown category name: ' + cat);
    }
    if (flatLong[cat].hasOwnProperty(name)) {
      return flatLong[cat][name];
    }
  }
  throw new Error('[ERR:flatToLong] unknown name identifier: ' + name);
}

/**
 * @description
 * Transform flat representation to short
 * 
 * @param {name} flat identifier
 * @param {cat} category name
 * @returns string
 */
exports.flatToShort = function (name, cats) {
  cats = rebuildCategoryList(cats);
  for (var i = 0; i < cats.length; ++i) {
    var cat = cats[i];
    if (!flatShort.hasOwnProperty(cat)) {
      throw new Error('[ERR:flatToLong] unknown category name: ' + cat);
    }
    if (flatShort[cat].hasOwnProperty(name)) {
      return flatShort[cat][name];
    }
  }
  throw new Error('[ERR:flatToShort] unknown name identifier: ' + name);
}

/**
 * @description
 * test exported members: exchange(), getShort(), getLong()
 * 
 * @param {cat} category name
 * @retrun
 */
var testCategory = function (cat) {
  var test = [];
  for (var i in longShort[cat]) {
    if (typeof longShort[cat][i] === 'string') {
      test[test.length] = longShort[cat][i];
    }
  }
  for (var i in shortLong) {
    if (typeof shortLong[cat][i] === 'string') {
      test[test.length] = shortLong[cat][i];
    }
  }
  for (var i in flatLong[cat]) {
    if (typeof flatLong[cat][i] === 'string') {
      test[test.length] = i;
    }
  }
  test[test.length] = 'xxx';

  log.debug('GET long names:-----------------------------');
  for (var i in test) {
    try {
      log.debug(test[i] + ' --> ' + exports.getLong(test[i]), cat);
    }
    catch (e) {
      log.debug(e);
    }
  }

  log.debug('GET short names:-----------------------------');
  for (var i in test) {
    try {
      log.debug(test[i] + ' --> ' + exports.getShort(test[i], cat));
    }
    catch (e) {
      log.debug(e);
    }
  }

  log.debug('EXCHANGE names:------------------------------');
  for (var i in test) {
    try {
      log.debug(test[i] + ' --> ' + exports.exchange(test[i], cat));
    }
    catch (e) {
      log.debug(e);
    }
  }

  log.debug('flat2orig names:------------------------------');
  for (var i in test) {
    try {
      log.debug(test[i] + ' --> ' + exports.flatToLong(test[i], cat));
    }
    catch (e) {
      log.debug(e);
    }
  }
} 

/**
 * @description
 * test exported members for all catefories: exchange(), getShort(), getLong()
 * 
 * @return 
 */
var testAll = function () {
  var cats = getCategories();
  for (var i in cats) {
    log.debug('\n\nTEST CATEGORY: ' + cats[i]);
    testCategory(cats[i]);
  }
}

//testAll();

//
// examples
//
//log.debug(exports.getLong('api', 'ResourceAttributes'));
//log.debug(exports.getShort('App-ID', 'ResourceAttributes'));
//log.debug(exports.exchange('App-ID', 'ResourceAttributes'));
