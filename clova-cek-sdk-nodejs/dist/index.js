'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crypto = require('crypto');
var bodyParser = require('body-parser');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document) && _isObject(document.createElement);
var _domCreate = function (it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$1
};

var isEnum = _objectPie.f;
var _objectToArray = function (isEntries) {
  return function (it) {
    var O = _toIobject(it);
    var keys = _objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

// https://github.com/tc39/proposal-object-values-entries

var $values = _objectToArray(false);

_export(_export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

var values = _core.Object.values;

/**
 * Create Context for clova response.
 *
 * @class ClientContext
 */
var Context = /** @class */ (function () {
    function Context(req) {
        this.requestObject = req;
        this.responseObject = {
            response: {
                card: {},
                directives: [],
                outputSpeech: {},
                shouldEndSession: false,
            },
            sessionAttributes: req.session.sessionAttributes,
            version: req.version,
        };
    }
    /**
     * Set session end attributes for clova response.
     *
     * @memberOf Context
     */
    Context.prototype.endSession = function () {
        this.responseObject.response.shouldEndSession = true;
        this.responseObject.sessionAttributes = {};
    };
    /**
     * Get {Clova.User} from clova request
     *
     * @memberOf Context
     */
    Context.prototype.getUser = function () {
        return this.requestObject.session.user;
    };
    /**
     * Get sessionId from clova request
     *
     * @memberOf Context
     */
    Context.prototype.getSessionId = function () {
        return this.requestObject.session.sessionId;
    };
    /**
     * Get intent name from clova IntentRequest
     *
     * @memberOf Context
     */
    Context.prototype.getIntentName = function () {
        var request = this.requestObject.request;
        return request.intent ? request.intent.name : null;
    };
    /**
     * Get slots key-value pair from clova IntentRequest.
     *
     * @memberOf Context
     */
    Context.prototype.getSlots = function () {
        var request = this.requestObject.request;
        if (!request.intent || !request.intent.slots)
            return {};
        return Object.values(request.intent.slots).reduce(function (acc, curr) {
            var _a;
            return Object.assign({}, acc, (_a = {}, _a[curr.name] = curr.value, _a));
        }, {});
    };
    /**
     * Get slot value for particular slot name from clova IntentRequest.
     *
     * @param {string} slotName
     * @memberOf Context
     */
    Context.prototype.getSlot = function (slotName) {
        return this.getSlots()[slotName] || null;
    };
    /**
     * Set outputSpeech content
     *
     * @param {Clova.OutputSpeech} outputSpeech
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setOutputSpeech = function (outputSpeech, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        if (reprompt) {
            this.responseObject.response.reprompt = { outputSpeech: outputSpeech };
        }
        else {
            this.responseObject.response.outputSpeech = outputSpeech;
        }
    };
    /**
     * Set reprompt content
     *
     * @param {Clova.OutputSpeech} outputSpeech
     * @memberOf Context
     */
    Context.prototype.setReprompt = function (outputSpeech) {
        this.responseObject.response.reprompt = { outputSpeech: outputSpeech };
    };
    /**
     * Set SimpleSpeech object for outputSpeech content.
     *
     * @param {Clova.SpeechInfoObject} speechInfo
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setSimpleSpeech = function (speechInfo, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        var outputSpeech = {
            type: 'SimpleSpeech',
            values: speechInfo,
        };
        this.setOutputSpeech(outputSpeech, reprompt);
        return this;
    };
    /**
     * Set SpeechList object for outputSpeech content.
     *
     * @param {Clova.SpeechInfoObject[]} speechInfo
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setSpeechList = function (speechInfo, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        var outputSpeech = {
            type: 'SpeechList',
            values: speechInfo,
        };
        this.setOutputSpeech(outputSpeech, reprompt);
        return this;
    };
    /**
     * Set SpeechSet object for outputSpeech content.
     *
     * @param {Clova.SpeechInfoObject} speechInfoBrief
     * @param {Clova.OutputSpeechListVerbose} speechInfoVerbose
     * @param {boolean} reprompt
     * @memberOf Context
     */
    Context.prototype.setSpeechSet = function (speechInfoBrief, speechInfoVerbose, reprompt) {
        if (reprompt === void 0) { reprompt = false; }
        var outputSpeech = {
            type: 'SpeechSet',
            brief: speechInfoBrief,
            verbose: speechInfoVerbose,
        };
        this.setOutputSpeech(outputSpeech, reprompt);
        return this;
    };
    /**
     * Get sessionAttributes from clova request.
     *
     * @memberOf Context
     */
    Context.prototype.getSessionAttributes = function () {
        return this.requestObject.session.sessionAttributes;
    };
    /**
     * Set sessionAttributes for clova response.
     *
     * @memberOf Context
     */
    Context.prototype.setSessionAttributes = function (sessionAttributes) {
        this.responseObject.sessionAttributes = sessionAttributes;
    };
    return Context;
}());

var SkillConfigurator = /** @class */ (function () {
    function SkillConfigurator() {
        this.config = {
            requestHandlers: {},
        };
    }
    /**
     * Add a request handler for a given request type.
     *
     * @param {String} requestType
     * @param {Function} requestHandler
     * @returns
     * @memberOf SkillConfigurator
     */
    SkillConfigurator.prototype.on = function (requestType, requestHandler) {
        if (!this.config.requestHandlers[requestType]) {
            this.config.requestHandlers[requestType] = requestHandler;
        }
        return this;
    };
    /**
     * Add LaunchRequest handler for clova request.
     *
     * @param requestHandler
     */
    SkillConfigurator.prototype.onLaunchRequest = function (requestHandler) {
        this.on('LaunchRequest', requestHandler);
        return this;
    };
    /**
     * Add IntentRequest handler for clova request.
     *
     * @param requestHandler
     */
    SkillConfigurator.prototype.onIntentRequest = function (requestHandler) {
        this.on('IntentRequest', requestHandler);
        return this;
    };
    /**
     * Add SessionEndedRequest handler for clova request.
     *
     * @param requestHandler
     */
    SkillConfigurator.prototype.onSessionEndedRequest = function (requestHandler) {
        this.on('SessionEndedRequest', requestHandler);
        return this;
    };
    /**
     * Create esxpress route handler for dispatching request.
     *
     * @returns {Function}
     * @memberOf SkillConfigurator
     */
    SkillConfigurator.prototype.handle = function () {
        var _this = this;
        return function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var ctx, requestType, requestHandler, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = new Context(req.body);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        requestType = ctx.requestObject.request.type;
                        requestHandler = this.config.requestHandlers[requestType];
                        if (!requestHandler) return [3 /*break*/, 3];
                        return [4 /*yield*/, requestHandler.call(ctx, ctx)];
                    case 2:
                        _a.sent();
                        res.json(ctx.responseObject);
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Unable to find requestHandler for '" + requestType + "'");
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1.message);
                        res.sendStatus(500);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
    };
    return SkillConfigurator;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    /**
     * Create SkillConfigurator for clova skills.
     *
     * @returns SkillConfigurator
     */
    Client.configureSkill = function () {
        return new SkillConfigurator();
    };
    return Client;
}());

function checkSignature(certBody, signature, requestBody) {
    var veri = crypto.createVerify('RSA-SHA256');
    veri.update(requestBody, 'utf8');
    if (!veri.verify(certBody, signature, 'base64')) {
        throw new Error("Invalid signature: \"" + signature + "\".");
    }
}
function checkApplicationId(jsonRequestBody, applicationId) {
    if (jsonRequestBody.context.System.application.applicationId !== applicationId) {
        throw new Error("Invalid application id: " + applicationId + ".");
    }
}
function getCertificate() {
    return "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwiMvQNKD/WQcX9KiWNMb\nnSR+dJYTWL6TmqqwWFia69TyiobVIfGfxFSefxYyMTcFznoGCpg8aOCAkMxUH58N\n0/UtWWvfq0U5FQN9McE3zP+rVL3Qul9fbC2mxvazxpv5KT7HEp780Yew777cVPUv\n3+I73z2t0EHnkwMesmpUA/2Rp8fW8vZE4jfiTRm5vSVmW9F37GC5TEhPwaiIkIin\nKCrH0rXbfe3jNWR7qKOvVDytcWgRHJqRUuWhwJuAnuuqLvqTyAawqEslhKZ5t+1Z\n0GN8b2zMENSuixa1M9K0ZKUw3unzHpvgBlYmXRGPTSuq/EaGYWyckYz8CBq5Lz2Q\nUwIDAQAB\n-----END PUBLIC KEY-----";
}
function verifier(signature, applicationId, requestBody) {
    return __awaiter(this, void 0, void 0, function () {
        var certBody, jsonRequestBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!signature) {
                        throw new Error('Missing signature.');
                    }
                    if (!applicationId) {
                        throw new Error('Missing applicationId.');
                    }
                    if (!requestBody) {
                        throw new Error('Missing requestBody.');
                    }
                    return [4 /*yield*/, getCertificate()];
                case 1:
                    certBody = _a.sent();
                    checkSignature(certBody, signature, requestBody);
                    jsonRequestBody = JSON.parse(requestBody);
                    checkApplicationId(jsonRequestBody, applicationId);
                    return [2 /*return*/, jsonRequestBody];
            }
        });
    });
}

function verifierMiddleware(config) {
    var _this = this;
    return function (req, res, next) {
        var signature = req.headers.signaturecek;
        var applicationId = config.applicationId;
        var process = function (rawBody) { return __awaiter(_this, void 0, void 0, function () {
            var body, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = Buffer.isBuffer(rawBody) ? rawBody.toString() : rawBody;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = req;
                        return [4 /*yield*/, verifier(signature, applicationId, body)];
                    case 2:
                        _a.body = _b.sent();
                        next();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        if (typeof req.body === 'string' || Buffer.isBuffer(req.body)) {
            return process(req.body);
        }
        bodyParser.raw({ type: '*/*' })(req, res, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, process(req.body)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
}

var SpeechBuilder = /** @class */ (function () {
    function SpeechBuilder() {
    }
    Object.defineProperty(SpeechBuilder, "DEFAULT_LANG", {
        get: function () {
            return SpeechBuilder.defaultLang;
        },
        set: function (lang) {
            SpeechBuilder.defaultLang = lang;
        },
        enumerable: true,
        configurable: true
    });
    SpeechBuilder.createSpeechText = function (value, lang) {
        return {
            lang: lang || SpeechBuilder.DEFAULT_LANG,
            type: 'PlainText',
            value: value,
        };
    };
    SpeechBuilder.createSpeechUrl = function (value) {
        return {
            lang: '',
            type: 'URL',
            value: value,
        };
    };
    SpeechBuilder.defaultLang = 'ja';
    return SpeechBuilder;
}());

exports.Client = Client;
exports.Context = Context;
exports.SpeechBuilder = SpeechBuilder;
exports.verifier = verifier;
exports.Middleware = verifierMiddleware;
//# sourceMappingURL=index.js.map
