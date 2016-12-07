/**
 * @file
 * @copyright 2016, loocat.
 */

/**
 * CodeTable
 * required table structure {
 *   [string]    : [non negative integer]
 *   identifier1 : code1,
 *   identifier2 : code2,
 *   identifier3 : code3,
 * }
 */
var CodeTable = function (table) {
  var _table = table || {};

  // numeric code --> string identifier
  var getIdentifier = function (code) {
    for (var id in _table) {
      if (_table[id] === code) {
        return id;
      }
    }
    throw new Error('invalid code: ' + code);
  }

  // string identifier ---> numeric code
  var getCode = function (id) {
    var code = _table[id];
    if (typeof code === 'undefined') {
      throw new Error('invalid identifier: ' + id);
    }
    return code;
  }

  // string identifier <--> numeric code
  var exchange = function (value) {
    return (typeof value === 'string' ? getCode : getIdentifier)(value);
  }

  // expose 3 methods
  this.getIdentifier = getIdentifier;
  this.getCode = getCode;
  this.exchange = exchange;
};

/**
 * declare code tables:
 *   operationType
 *   responseStatusCode
 *   HttpStatusCode
 *   resourceType
 *   resultContent
 *   eventType
 *   filterUsage
 *   cseTypeID
 */
var tables = {

  //
  // see caluse 6.6.3 (oneM2M TS-0004-V2.7.1)
  //
  responseStatusCode: new CodeTable({
    // 6.6.3.2 Informational response class
    ACCEPTED: 1000,

    // 6.6.3.3 Successful response class
    OK: 2000,
    CREATED: 2001,
    DELETED: 2002,
    CHANGED: 2004,

    // 6.6.3.4 Redirection response class

    // 6.6.3.5 Originator Error response class 
    BAD_REQUEST: 4000,
    NOT_FOUND: 4004,
    OPERATION_NOT_ALLOWED: 4005,
    REQUEST_TIMEOUT: 4008,
    SUBSCRIPTION_CREATOR_HAS_NO_PRIVILEGE: 4101,
    CONTENTS_UNACCEPTABLE: 4102,
    ORIGINATOR_HAS_NO_PRIVILEGE: 4103,
    GROUP_REQUEST_IDENTIFIER_EXISTS: 4104,
    CONFLICT: 4105,
    ORIGINATOR_HAS_NOT_REGISTERED: 4106,
    SECURITY_ASSOCIATION_REQUIRED: 4107,
    INVALID_CHILD_RESOURCE_TYPE: 4108,
    NO_MEMBERS: 4109,
    GROUP_MEMBER_TYPE_INCONSISTENT: 4110,
    ESPRIM_UNSUPPORTED_OPTION: 4111,
    ESPRIM_UNKNOWN_KEY_ID: 4112,
    ESPRIM_UNKNOWN_ORIG_RAND_ID: 4113,
    ESPRIM_UNKNOWN_RECV_RAND_ID: 4114,
    ESPRIM_BAD_MAC: 4115,

    // 6.6.3.6 Receiver Error response class
    INTERNAL_SERVER_ERROR: 5000,
    NOT_IMPLEMENTED: 5001,
    TARGET_NOT_REACHABLE: 5103,
    NO_PRIVILEGE: 5105,
    ALREADY_EXISTS: 5106,
    TARGET_NOT_SUBSCRIABLE: 5203,
    SUBSCRIPTION_VERIFICATION_INDICATION_FAILED: 5204,
    SUBSCRIPTION_HOST_HAS_NO_PRIVILEGE: 5205,
    NON_BLOCKING_REQUEST_NOT_SUPPROTED: 5206,
    NOT_ACCEPTABLE: 5207,
    DISCOVERY_DENIED_BY_IPE: 5208,
    GROUP_MEMBERS_NOT_RESPONDED: 5209,
    ESPRIM_DECRYPTION_ERROR: 5210,
    ESPRIM_ENCRYPTION_ERROR: 5211,
    SPARQL_UPDATE_ERROR: 5212,

    // 6.6.3.7 Network System Error response class
    EXTERNAL_OBJECT_NOT_REACHABLE: 6003,
    EXTENRAL_ONJECT_NOT_FOUND: 6005,
    MAX_NUMBER_OF_MEMBER_EXCEEDES: 6010,
    MANAGEMENT_SESSION_CANNOT_BE_ESTABLISHED: 6020,
    MANAGEMENT_SESSION_ESTABLISHMENT_TIMEOUT: 6021,
    INVALID_CMDTYPE: 6022,
    INVALID_ARGUMENT: 6023,
    INSUFFICIENT_ARGUMENT: 6024,
    MGMT_CONVERSION_ERROR: 6025,
    CANCELATION_FAILED: 6026,
    ALREADY_COMPLETE: 6028,
    COMMAND_NOT_CANCELLABLE: 6029
  }),

  // 
  // see caluse 6.3.2 Status-Code (oneM2M TS-0009-V2.6.1)
  // 
  HttpStatusCode: new CodeTable({
    // 6.6.3.2 Informational response class
    'Accepted': 202,

    // 6.6.3.3 Successful response class
    'OK': 200,
    'Created': 201,

    // 6.6.3.4 Redirection response class

    // 6.6.3.5 Originator Error response class 
    'Bad Request': 400,
    'Not Found': 404,
    'Method Not Allowed': 405,
    'Request Timeout': 408,
    'Forbidden': 403,
    'Conflict': 409,

    // 6.6.3.6 Receiver Error response class
    'Internal Server Error': 500,
    'Not Implemented': 501,

    // Network System Error response class
  }),

  //
  // see clause 6.3.4.2.1 m2m:resourceType (oneM2M TS-0004-V2.7.1)
  //
  resourceType: new CodeTable({
    accessControlPolicy: 1,
    AE: 2,
    container: 3,
    contentInstance: 4,
    CSEBase: 5,
    delivery: 6,
    eventConfig: 7,
    execInstance: 8,
    group: 9,
    locationPolicy: 10,
    m2mServiceSubscriptionPolicy: 11,
    mgmtCmd: 12,
    mgmtObj: 13,
    node: 14,
    pollingChannel: 15,
    remoteCSE: 16,
    request: 17,
    schedule: 18,
    serviceSubscribedAppRule: 19,
    serviceSubscribedNode: 20,
    statsCollect: 21,
    statsConfig: 22,
    subscription: 23,
    semanticDescriptor: 24,
    notificationTargetMgmtPolicyRef: 25,
    notificationTargetPolicy: 26,
    policyDeletionRules: 27,
    flexContainer: 28,
    timeSeries: 29,
    timeSeriesInstance: 30,
    role: 31,
    token: 32,
    trafficPattern: 33,
    dynamicAuthorizationConsultation: 34,
    accessControlPolicyAnnc: 10001,
    AEAnnc: 10002,
    containerAnnc: 10003,
    contentInstanceAnnc: 10004,
    groupAnnc: 10009,
    locationPolicyAnnc: 10010,
    mgmtObjAnnc: 10013,
    nodeAnnc: 10014,
    remoteCSEAnnc: 10016,
    scheduleAnnc: 10018,
    semanticDescriptorAnnc: 10024,
    flexContainerAnnc: 10028,
    timeSeriesAnnc: 10029,
    timeSeriesInstanceAnnc: 10030,
    trafficPatternAnnc: 10033,
    dynamicAuthorizationConsultationAnnc: 10034,
    latest: -1,
    oldest: -2,
    fanOutPoint: -3
  }),

  //
  // see clause 6.3.4.2.2 m2m:cseTypeID (oneM2M TS-0004-V2.7.1)
  //
  cseTypeID: new CodeTable({
    IN_CSE: 1,
    MN_CSE: 2,
    ASN_CSE: 3
  }),

  //
  // see clause 6.3.4.2.3 m2m:resultContent (oneM2M TS-0004-V2.7.1)
  //
  locationSource: new CodeTable({
    Network_based: 1,
    Devce_based: 2,
    Sharing_based: 3
  }),

  //
  // see clause 6.3.4.2.4 m2m:stdEventCats (oneM2M TS-0004-V2.7.1)
  //
  stdEventCats: new CodeTable({
    Immediate: 2,
    BestEffort: 3,
    Latest: 4
  }),

  //
  // see clause 6.3.4.2.5 m2m:operation (oneM2M TS-0004-V2.7.1)
  //
  operation: new CodeTable({
    Create: 1,
    Retrieve: 2,
    Update: 3,
    Delete: 4,
    Notify: 5
  }),

  //
  // see clause 6.3.4.2.6 m2m:responseType (oneM2M TS-0004-V2.7.1)
  //
  responseType: new CodeTable({
    nonBlockingRequestSynch: 1,
    nonBlockingRequestAsynch: 2,
    blockRequest: 3,
    flexBlocking: 4
  }),

  //
  // see clause 6.3.4.2.7 m2m:resultContent (oneM2M TS-0004-V2.7.1)
  //
  resultContent: new CodeTable({
    'Nothing': 0,                                   // This setting is not valid for a retrieve operation.
    'Attributes': 1,                                // When this is used for Create operation, only assigned/modified attributes shall be included in the content.
    // This setting is not valid for a Notify operation.
    'Hierarchical address': 2,                      // This shall be only valid for a Create operation
    'Hierarchical address and attributes': 3,       // This shall be only valid for a Create operation.
    'Attributes and child resources': 4,            // This setting is only valid for a Retrieve operation.
    'Attributes and child resource references': 5,  // This setting is not valid for a Notify operation.
    'Child resource references': 6,                 // This setting is not valid for a Notify operation.
    'Original resource': 7,                         // This setting is only valid for a RETRIEVE Request where the To parameter targets the announced resource.
    'Child resources': 8
  }),

  //
  // see clause 6.3.4.2.8 m2m:discResType (oneM2M TS-0004-V2.7.1)
  //
  discResType: new CodeTable({
    structured: 1,
    unstructured: 2
  }),

  //
  // see clause 6.3.4.2.25 m2m:eventType (oneM2M TS-0004-V2.7.1)
  //
  eventType: new CodeTable({
    DataOperation: 1,
    Storagebased: 2,
    TimerBased: 3
  }),

  //
  // see clause 6.3.4.2.31 m2m:filterUsage (oneM2M TS-0004-V2.7.1)
  //
  filterUsage: new CodeTable({
    'Discovery Criteria': 1,
    'Event Notification Criteria': 2,
    'IPE On-demand Discovery': 3
  }),

  //
  // see table 9.3.1-1 Resource addressing method
  //
  resourceAddressingMethod: new CodeTable({
    'Invalid': 0, 
    'CSE-Relative': 1,
    'SP-Relative': 2,
    'Absolute': 3
  })
};

//
// see caluse 6.3.2 Status-Code (oneM2M TS-0009-V2.6.1)
//
var rscToHttp = {
  OK: "OK",
  DELETED: "OK",
  UPDATED: "OK",
  CREATED: "Created",
  ACCEPTED: "Accepted",
  BAD_REQUEST: "Bad Request",
  CONTENTS_UNACCEPTABLE: "Bad Request",
  MAX_NUMBER_OF_MEMBER_EXCEEDED: "Bad Request",
  MEMBER_TYPE_INCONSISTENT: "Bad Request",
  INVALID_CMDTYPE: "Bad Request",
  INVALID_ARGUMENTS: "Bad Request",
  INSUFFICIENT_ARGUMENT: "Bad Request",
  ALREADY_COMPLETE: "Bad Request",
  MGMT_COMMAND_NOT_CANCELLABLE: "Bad Request",
  SUBSCRIPTION_CREATOR_HAS_NO_PRIVILEGE: "Forbidden",
  ORIGINATOR_HAS_NO_PRIVILEGE: "Forbidden",
  RECEIVER_HAS_NO_PRIVILEGE: "Forbidden",
  ALREADY_EXISTS: "Forbidden",
  TARGET_NOT_SUBSCRIBABLE: "Forbidden",
  SUBSCRIPTION_HOST_HAS_NO_PRIVILEGE: "Forbidden",
  ORIGINATOR_HAS_NOT_REGISTERED: "Forbidden",
  SECURITY_ASSOCIATION_REQUIRED: "Forbidden",
  INVALID_CHILD_RESOURCE_TYPE: "Forbidden",
  NO_MEMBERS: "Forbidden",
  ESPRIM_UNSUPPORTED_OPTION: "Forbidden",
  ESPRIM_UNKNOWN_KEY_ID: "Forbidden",
  ESPRIM_UNKNOWN_ORIG_RAND_ID: "Forbidden",
  ESPRIM_UNKNOWN_RECV_RAND_ID: "Forbidden",
  ESPRIM_BAD_MAC: "Forbidden",
  NOT_FOUND: "Not Found",
  TARGET_NOT_REACHABLE: "Not Found",
  EXTERNAL_OBJECT_NOT_REACHABLE: "Not Found",
  EXTERNAL_OBJECT_NOT_FOUND: "Not Found",
  OPERATION_NOT_ALLOWED: "Method Not Allowed",
  NOT_ACCEPTABLE: "Not Acceptable",
  REQUEST_TIMEOUT: "Request Timeout",
  GROUP_REQUEST_IDENTIFIER_EXISTS: "Conflict",
  CONFLICT: "Conflict",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  SUBSCRIPTION_VERIFICATION_INITIATION_FAILED: "Internal Server Error",
  GROUP_MEMBERS_NOT_RESPONDED: "Internal Server Error",
  ESPRIM_DECRYPTION_ERROR: "Internal Server Error",
  ESPRIM_ENCRYPTION_ERROR: "Internal Server Error",
  SPARQL_UPDATE_ERROR: "Internal Server Error",
  MANAGEMENT_SESSION_CANNOT_BE_ESTABLISHED: "Internal Server Error",
  MANAGEMENT_SESSION_ESTABLISHMENT_TIMEOUT: "Internal Server Error",
  MGMT_CONVERSION_ERROR: "Internal Server Error",
  MGMT_CANCELLATION_FAILED: "Internal Server Error",
  NOT_IMPLEMENTED: "Not Implemented",
  NON_BLOCKING_REQUEST_NOT_SUPPORTED: "Not Implemented"
};

/**
 * convert : ResponseStatusCode --> HttpStatusCode
 */
var translateResponseStatusCodeToHttpStatusCode = function (desc) {
  var id = (typeof desc === 'number') ? tables.responseStatusCode.getIdentifier(desc) : desc;
  return tables.HttpStatusCode.exchange(rscToHttp[id]);
}

//
// exchangers : string identifier <--> numeric code
//
exports.getCseTypeID = tables.cseTypeID.exchange;
exports.getOperation = tables.operation.exchange;
exports.getResponseStatusCode = tables.responseStatusCode.exchange;
exports.getHttpStatusCode = tables.HttpStatusCode.exchange;
exports.getResourceType = tables.resourceType.exchange;
exports.getResultContent = tables.resultContent.exchange;
exports.getFilterUsage = tables.filterUsage.exchange;
exports.getDiscResType = tables.discResType.exchange;
exports.getEventType = tables.eventType.exchange;
exports.getResourceAddressingMethod = tables.resourceAddressingMethod.exchange;

//
// utilities
//
exports.translateResponseStatusCodeToHttpStatusCode = translateResponseStatusCodeToHttpStatusCode;
