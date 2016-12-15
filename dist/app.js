/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vueRouter = __webpack_require__(1);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _index = __webpack_require__(2);

	var _components = __webpack_require__(4);

	var _components2 = _interopRequireDefault(_components);

	var _components3 = __webpack_require__(4);

	var _routers = __webpack_require__(189);

	var _routers2 = _interopRequireDefault(_routers);

	var _vueValidator = __webpack_require__(265);

	var _vueValidator2 = _interopRequireDefault(_vueValidator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// window._ = {
	//     curry : require('lodash.curry'),
	//     flowright : require('lodash.flowright')
	// }
	// console.log(_)

	// Object.keys(components).forEach(k => {
	//     var a = Vue.component(k, components[k])
	//     // console.log(a)
	// })
	// regeister cmoponents.
	Vue.use(_components2.default);
	console.log(_components3.KsComponents);

	Vue.use(VueResource);
	Vue.use(_vueRouter2.default);
	Vue.use(_vueValidator2.default);
	(0, _index.proxy_mock)(Vue);

	// *** 实例化VueRouter
	var router = new _vueRouter2.default({
	    hashbang: true,
	    history: false,
	    saveScrollPosition: true,
	    transitionOnLoad: true
	});
	(0, _routers2.default)(Vue, router);

	var app = Vue.extend({});
	router.start(app, '#app');

	var mount = Vue.prototype.$mount;

	// Vue.http.get('./aaa', {})
	//     .then(res => {
	//         console.log('')
	//     })


	__webpack_require__(266);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.proxy_mock = proxy_mock;
	/**
	 * [proxy_mock 代理、mock]
	 * @param  {[type]} Vue [Vue]
	 */
	function proxy_mock(Vue) {
	    console.log('environment: ' + APP_ENV, 'version: ' + APP_VERSION);
	    Vue.config.debug = false;
	    if (APP_ENV === 'dev') {
	        __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(3)]; (function (_ref) {
	            var proxy_mock_core = _ref.proxy_mock_core;

	            proxy_mock_core(Vue);
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	    }
	}

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsComponents = undefined;

	var _values = __webpack_require__(5);

	var _values2 = _interopRequireDefault(_values);

	var _keys = __webpack_require__(40);

	var _keys2 = _interopRequireDefault(_keys);

	var _KSSwitch = __webpack_require__(45);

	var _KSSwitch2 = _interopRequireDefault(_KSSwitch);

	var _KSCheckbox = __webpack_require__(49);

	var _KsRadio = __webpack_require__(56);

	var _KsButton = __webpack_require__(67);

	var _KsModal = __webpack_require__(78);

	var _KsDialog = __webpack_require__(90);

	var _dater = __webpack_require__(95);

	var _KsCitySelect = __webpack_require__(122);

	var _KsToolTip = __webpack_require__(126);

	var _pager = __webpack_require__(178);

	var _KsDirective = __webpack_require__(185);

	var _KsDirective2 = _interopRequireDefault(_KsDirective);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VERSION = '0.0.1'; /**
	                        * @description 卡说前端公用库
	                        * @summary
	                        *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
	                        * @author pkeros.
	                        * @date 2016/11/11.
	                        */

	var KsComponents = {
	  VERSION: VERSION,
	  page: _pager.page,
	  pagegroup: _pager.pagegroup,
	  // KsDater,
	  KsDaterPure: _dater.KsDaterPure,
	  KsDatePicker: _dater.KsDatePicker,
	  KsDaterMulti: _dater.KsDaterMulti,
	  KsDateMultiPicker: _dater.KsDateMultiPicker,
	  KsDateMonth: _dater.KsDateMonth,
	  KsSwitch: _KSSwitch2.default,
	  KsCheckbox: _KSCheckbox.KsCheckbox,
	  KsCheckboxGroup: _KSCheckbox.KsCheckboxGroup,
	  KsRadio: _KsRadio.KsRadio,
	  KsBtnRadio: _KsRadio.KsBtnRadio,
	  KsRadioGroup: _KsRadio.KsRadioGroup,
	  KsButton: _KsButton.KsButton,
	  KsModal: _KsModal.KsModal,
	  KsModalEntity: _KsModal.KsModalEntity,
	  KsDialog: _KsDialog.KsDialog,
	  KsDialogEntity: _KsDialog.KsDialogEntity,
	  KsCitySelect: _KsCitySelect.KsCitySelect,
	  KsToolTip: _KsToolTip.KsToolTip
	};
	var install = function install(Vue) {
	  if (install.installed) {
	    return;
	  }

	  // register components.
	  (0, _keys2.default)(KsComponents).forEach(function (k) {
	    Vue.component(k, KsComponents[k]);
	  });

	  // register directive.
	  (0, _values2.default)(_KsDirective2.default).forEach(function (v) {
	    return Vue.use(v);
	  });
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = install;
	exports.KsComponents = KsComponents;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	module.exports = __webpack_require__(10).Object.values;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(23)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(24)
	  , toIObject = __webpack_require__(27)
	  , isEnum    = __webpack_require__(39).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(25)
	  , enumBugKeys = __webpack_require__(38);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(26)
	  , toIObject    = __webpack_require__(27)
	  , arrayIndexOf = __webpack_require__(31)(false)
	  , IE_PROTO     = __webpack_require__(35)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(28)
	  , defined = __webpack_require__(30);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(29);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(27)
	  , toLength  = __webpack_require__(32)
	  , toIndex   = __webpack_require__(34);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(33)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(33)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(36)('keys')
	  , uid    = __webpack_require__(37);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 39 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(10).Object.keys;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(43)
	  , $keys    = __webpack_require__(24);

	__webpack_require__(44)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(30);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(19);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsSwitch = undefined;

	var _IosSwitch = __webpack_require__(46);

	var _IosSwitch2 = _interopRequireDefault(_IosSwitch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _IosSwitch2.default; /**
	                                        * @description: 封装了一些列的的开关组件。
	                                        * @summary:
	                                        *  KsSwitch 中封装了多种 Switch, 它们可以分别导入。
	                                        * @author: pkeros.
	                                        * @date: 2016/10/11.
	                                        */

	exports.KsSwitch = _IosSwitch2.default;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IosSwitch.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KSSwitch/src/IosSwitch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b47b5ae/IosSwitch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classesSize">
	//     <!-- IosSwitch 背景自定义 -->
	//     <style type="text/css">
	//       {{ '.KSIosSwitch__UID--' + _uid }} .KSIosSwitch__entity:checked + .KSIosSwitch__slide {
	//         {{ styleBgColor }}
	//       }
	//     </style>
	//     <input class="KSIosSwitch__entity" type="checkbox"
	//            v-model="checked" @change.stop
	//            :checked="defChecked && 'checked'"
	//            :disabled="disable && 'disabled'"/>
	//     <div class="KSIosSwitch__slide">
	//       <small class="KSIosSwitch__btn"></small>
	//       <slot name="checkedChildren"></slot>
	//       <slot name="unCheckedChildren"></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KsIosSwitch',

	  props: {
	    color: { type: String, default: '#04BE02' },
	    size: { type: String, default: 'normal' },
	    checked: { type: Boolean, twoWay: true },
	    disable: { type: Boolean, default: false }
	  },

	  computed: {
	    /**
	     * @description 开关根 div 的 class
	     * @summary 用于控制组件大小, 标识组件
	     * @return {string}
	     */
	    classesSize: function classesSize() {
	      return 'KSIosSwitch KSIosSwitch--' + this.size + ' KSIosSwitch__UID--' + this._uid;
	    },

	    /**
	     * @description 开关滑动槽的 style
	     * @summary 用于控制组件的颜色
	     * @return {string}
	     */
	    styleBgColor: function styleBgColor() {
	      return 'box-shadow: ' + this.color + ' 0 0 0 16.667px inset!important;\n      background: ' + this.color + '!important;border: 1px solid ' + this.color + '!important;';
	    }
	  },

	  watch: {
	    /**
	     * @description 监测 checked 属性
	     * @param checked {Boolean} checked 值
	     * @summary 用于监测改变并发送 OnChange 事件
	     */
	    checked: function checked(_checked) {
	      this.$emit('change', _checked);
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/IosSwitch";
	// </style>

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classesSize\">\n  <!-- IosSwitch 背景自定义 -->\n  <style type=\"text/css\">\n    {{ '.KSIosSwitch__UID--' + _uid }} .KSIosSwitch__entity:checked + .KSIosSwitch__slide {\n      {{ styleBgColor }}\n    }\n  </style>\n  <input class=\"KSIosSwitch__entity\" type=\"checkbox\"\n         v-model=\"checked\" @change.stop\n         :checked=\"defChecked && 'checked'\"\n         :disabled=\"disable && 'disabled'\"/>\n  <div class=\"KSIosSwitch__slide\">\n    <small class=\"KSIosSwitch__btn\"></small>\n    <slot name=\"checkedChildren\"></slot>\n    <slot name=\"unCheckedChildren\"></slot>\n  </div>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsCheckboxGroup = exports.KsCheckbox = undefined;

	var _NrCheckbox = __webpack_require__(50);

	var _NrCheckbox2 = _interopRequireDefault(_NrCheckbox);

	var _CheckboxGroup = __webpack_require__(53);

	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的复选框组件。
	 * @summary:
	 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.default = _NrCheckbox2.default;
	exports.KsCheckbox = _NrCheckbox2.default;
	exports.KsCheckboxGroup = _CheckboxGroup2.default;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NrCheckbox.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(51)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KSCheckbox/src/NrCheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e5cca18a/NrCheckbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="KSNRCheckbox" cid="KSNRCheckbox">
	//     <input type="checkbox" class="_entity" v-model="checked" @change.stop
	//            :disabled="disable && 'disabled'" :id="`KSNRCheckbox--${_uid}`" />
	//     <label class="_skin" :for="`KSNRCheckbox--${_uid}`">
	//       <em class="_cube" :style="{background: color}"></em>
	//     </label>
	//     <label class="_text" :for="`KSNRCheckbox--${_uid}`">
	//       <slot>LABEL</slot>
	//     </label>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KsNormalCheckbox',

	  props: {
	    name: { type: String, default: 'KsNormalCheckbox' },
	    color: { type: String, default: '#00A5E0' },
	    checked: { type: Boolean, twoWay: true },
	    disable: { type: Boolean, default: false }
	  },

	  events: {
	    /**
	     * @description VMChange 事件响应
	     * @summary 负责接受 Group 组件的 change 事件, 改变选中状态
	     */
	    VMChange: function VMChange(vModel) {
	      this.checked = vModel.indexOf(this.name) > -1;
	    }
	  },

	  watch: {
	    /**
	     * @description 监测 checked 属性
	     * @param checked {Boolean} checked 的值
	     * @summary 用于监测改变并发送 OnChange 事件
	     */
	    checked: function checked(_checked) {
	      this.$emit('change', _checked, this.name);
	      this.$dispatch('CChange', _checked, this.name);
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import '../../../../sass/components/NrCheckbox';
	// </style>

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSNRCheckbox\" cid=\"KSNRCheckbox\">\n  <input type=\"checkbox\" class=\"_entity\" v-model=\"checked\" @change.stop\n         :disabled=\"disable && 'disabled'\" :id=\"`KSNRCheckbox--${_uid}`\" />\n  <label class=\"_skin\" :for=\"`KSNRCheckbox--${_uid}`\">\n    <em class=\"_cube\" :style=\"{background: color}\"></em>\n  </label>\n  <label class=\"_text\" :for=\"`KSNRCheckbox--${_uid}`\">\n    <slot>LABEL</slot>\n  </label>\n</div>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckboxGroup.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(54)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KSCheckbox/src/CheckboxGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1b283dd0/CheckboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ks-checkbox-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KsCheckboxGroup',

	  props: {
	    vModel: { type: Array, towWay: true }
	  },

	  events: {
	    /**
	     * @description change 事件处理函数
	     * @param value {Boolean} 事件传递的 value
	     * @param name {String} 组件的名称
	     * @summary 负责处理子组件产生的 change 事件
	     */
	    CChange: function CChange(value, name) {
	      var vModel = this.vModel;
	      var pos = vModel.indexOf(name);

	      if (pos > -1 && !value) {
	        vModel.splice(pos, 1);
	      } else if (pos === -1 && value) {
	        vModel.push(name);
	      }
	    }
	  },

	  watch: {
	    /**
	     * @description vModel 监听器
	     * @param vModel {Array} vModel 属性值
	     */
	    vModel: function vModel(_vModel) {
	      this.$emit('change', _vModel);
	      this.$broadcast('VMChange', _vModel);
	    }
	  },

	  ready: function ready() {
	    // 通知子组件初始化状态
	    this.$broadcast('VMChange', this.vModel);
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import '../../../../sass/components/checkbox';
	//
	//
	//   .ks-checkbox-group { font-size: 0 }
	// </style>

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-checkbox-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsRadioGroup = exports.KsBtnRadio = exports.KsRadio = undefined;

	var _NrRadio = __webpack_require__(57);

	var _NrRadio2 = _interopRequireDefault(_NrRadio);

	var _BtnRadio = __webpack_require__(61);

	var _BtnRadio2 = _interopRequireDefault(_BtnRadio);

	var _RadioGroup = __webpack_require__(64);

	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _NrRadio2.default; /**
	                                      * @description: 封装了一些列的单选组件。
	                                      * @summary:
	                                      *  KsRadio 中封装了多种 Radio, 它们可以分别导入。
	                                      * @author: pkeros.
	                                      * @date: 2016/10/14.
	                                      */

	exports.KsRadio = _NrRadio2.default;
	exports.KsBtnRadio = _BtnRadio2.default;
	exports.KsRadioGroup = _RadioGroup2.default;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NrRadio.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsRadio/src/NrRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4a50b275/NrRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radioLogic = __webpack_require__(59);

	var _radioLogic2 = _interopRequireDefault(_radioLogic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'KsNormalRadio',

	  mixins: [_radioLogic2.default],

	  computed: {
	    /**
	     * @description 复选框根 div 的 class
	     * @summary 用于标识复选框
	     * @return {string}
	     */
	    classes: function classes() {
	      return 'KSNRRadio KSNRRadio__UID--' + this._uid;
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/NrRadio";
	// </style>
	// <template>
	//   <div :class="classes">
	//     <!-- NrRadio 选择色块自定义 -->
	//     <style type="text/css">
	//       {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__skin:before {
	//         {{ styleCubeColor }}
	//       }
	//       {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__entity:checked + .KSNRRadio__skin:before {
	//         {{ styleCubeColor }}
	//       }
	//     </style>
	//     <input type="radio" class="KSNRRadio__entity" :name="!!name && name"
	//            :id="'KSNRCheckbox__entity--' + _uid"
	//            v-model="checked" :value="value" @change.stop
	//            :disabled="disable && 'disabled'"
	//            :checked="defChecked && 'checked'"
	//            :id="`KSNRRadio__entity--${_uid}`" />
	//     <label class="KSNRRadio__skin" :for="'KSNRCheckbox__entity--' + _uid"></label>
	//     <label class="KSNRRadio__text" :for="'KSNRCheckbox__entity--' + _uid">
	//       <slot>LABEL</slot>
	//     </label>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description radio 的逻辑
	 * @author: pkeros.
	 * @date: 2016/10/14.
	 */
	exports.default = {
	  props: {
	    name: { type: String, default: '' },
	    color: { type: String, default: '#00A5E0' },
	    value: { default: '' },
	    checked: { twoWay: true },
	    defChecked: { type: Boolean, default: false },
	    disable: { type: Boolean, default: false }
	  },

	  computed: {
	    /**
	     * @description 选择框中方块 style
	     * @summary 用于控制选择框中方块的颜色
	     * @return {string}
	     */
	    styleCubeColor: function styleCubeColor() {
	      return 'background: ' + this.color + '!important;';
	    }
	  },

	  watch: {
	    /**
	     * @description 监测 checked 属性
	     * @param checked {Boolean} checked 的值
	     * @summary 用于监测改变并发送 change 事件
	     */
	    checked: function checked(_checked) {
	      this.$dispatch('CChange', _checked);
	    }
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n  <!-- NrRadio 选择色块自定义 -->\n  <style type=\"text/css\">\n    {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__skin:before {\n      {{ styleCubeColor }}\n    }\n    {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__entity:checked + .KSNRRadio__skin:before {\n      {{ styleCubeColor }}\n    }\n  </style>\n  <input type=\"radio\" class=\"KSNRRadio__entity\" :name=\"!!name && name\"\n         :id=\"'KSNRCheckbox__entity--' + _uid\"\n         v-model=\"checked\" :value=\"value\" @change.stop\n         :disabled=\"disable && 'disabled'\"\n         :checked=\"defChecked && 'checked'\"\n         :id=\"`KSNRRadio__entity--${_uid}`\" />\n  <label class=\"KSNRRadio__skin\" :for=\"'KSNRCheckbox__entity--' + _uid\"></label>\n  <label class=\"KSNRRadio__text\" :for=\"'KSNRCheckbox__entity--' + _uid\">\n    <slot>LABEL</slot>\n  </label>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BtnRadio.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsRadio/src/BtnRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e356bfde/BtnRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radioLogic = __webpack_require__(59);

	var _radioLogic2 = _interopRequireDefault(_radioLogic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'KsNormalRadio',

	  mixins: [_radioLogic2.default],

	  computed: {
	    /**
	     * @description 复选框根 div 的 class
	     * @summary 用于标识复选框
	     * @return {string}
	     */
	    classes: function classes() {
	      return 'KSBtnRadio KSBtnRadio__UID--' + this._uid;
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/BtnRadio";
	// </style>
	// <template>
	//   <div :class="classes">
	//     <!-- BtnRadio 选择色块自定义 -->
	//     <style type="text/css">
	//       {{ '.KSBtnRadio__UID--' + _uid }} .KSBtnRadio__skin:before {
	//         {{ styleCubeColor }}
	//       }
	//       {{ '.KSBtnRadio__UID--' + _uid }} .KSBtnRadio__entity:checked + .KSBtnRadio__skin:before {
	//         {{ styleCubeColor }}
	//       }
	//     </style>
	//     <input type="radio" class="KSBtnRadio__entity" :name="!!name && name"
	//            :id="'KSNRCheckbox__entity--' + _uid"
	//            v-model="checked" :value="value" @change.stop
	//            :disabled="disable && 'disabled'"
	//            :checked="defChecked && 'checked'"
	//            :id="`KSBtnRadio__entity--${_uid}`" />
	//     <label class="KSBtnRadio__text" :for="'KSNRCheckbox__entity--' + _uid">
	//       <slot>LABEL</slot>
	//     </label>
	//   </div><!-- -->
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n  <!-- BtnRadio 选择色块自定义 -->\n  <style type=\"text/css\">\n    {{ '.KSBtnRadio__UID--' + _uid }} .KSBtnRadio__skin:before {\n      {{ styleCubeColor }}\n    }\n    {{ '.KSBtnRadio__UID--' + _uid }} .KSBtnRadio__entity:checked + .KSBtnRadio__skin:before {\n      {{ styleCubeColor }}\n    }\n  </style>\n  <input type=\"radio\" class=\"KSBtnRadio__entity\" :name=\"!!name && name\"\n         :id=\"'KSNRCheckbox__entity--' + _uid\"\n         v-model=\"checked\" :value=\"value\" @change.stop\n         :disabled=\"disable && 'disabled'\"\n         :checked=\"defChecked && 'checked'\"\n         :id=\"`KSBtnRadio__entity--${_uid}`\" />\n  <label class=\"KSBtnRadio__text\" :for=\"'KSNRCheckbox__entity--' + _uid\">\n    <slot>LABEL</slot>\n  </label>\n</div><!-- -->\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioGroup.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsRadio/src/RadioGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-794d5756/RadioGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ks-radio-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KsRadioGroup',

	  props: {
	    vModel: { type: Array, towWay: true }
	  },

	  events: {
	    /**
	     * @description change 事件处理函数
	     * @param value {Boolean} 事件传递的 value
	     * @summary 负责处理子组件产生的 change 事件
	     */
	    CChange: function CChange(value) {
	      this.$emit('change', value);
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/RadioGroup";
	// </style>

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-radio-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GhostButton = exports.NrButton = exports.KsButton = undefined;

	var _Button = __webpack_require__(68);

	var _Button2 = _interopRequireDefault(_Button);

	var _NrButton = __webpack_require__(70);

	var _NrButton2 = _interopRequireDefault(_NrButton);

	var _GhostButton = __webpack_require__(74);

	var _GhostButton2 = _interopRequireDefault(_GhostButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Button2.default; /**
	                                     * @description modal 组件
	                                     * @summary
	                                     *  鉴于设计规范中按钮分为 `幽灵按钮` `普通按钮`
	                                     *  颜色又分为红橙黄绿青蓝紫, 每次想找个按钮宛如大海捞针
	                                     *  后有 WebComponents 思想指导, 故将按钮封装成组件, 简化 Api 方便使用与拓展。
	                                     * @author: pkeros.
	                                     * @date: 2016/10/18.
	                                     */

	exports.KsButton = _Button2.default;
	exports.NrButton = _NrButton2.default;
	exports.GhostButton = _GhostButton2.default;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Button.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsButton/src/Button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-74bc6717/Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _NrButton = __webpack_require__(70);

	var _NrButton2 = _interopRequireDefault(_NrButton);

	var _GhostButton = __webpack_require__(74);

	var _GhostButton2 = _interopRequireDefault(_GhostButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="KSButton">
	//     <!-- 普通按钮 -->
	//     <nr-button v-if="!ghost" :native-type="nativeType"
	//                :disable="disable" :loading.sync="loading"
	//                :btn-class-name="btnClassName"
	//     >
	//       <slot></slot>
	//     </nr-button>
	//     <!-- 幽灵按钮 -->
	//     <ghost-button v-if="ghost" :native-type="nativeType"
	//                   :disable="disable"
	//                   :btn-class-name="btnClassName"
	//     >
	//       <slot></slot>
	//     </ghost-button>
	//   </div>
	// </template>
	//
	// <script lang="babel">
	var sizeMapper = {
	  normal: '',
	  middle: 'xl',
	  large: 'xxl'
	};

	exports.default = {
	  name: 'KsButton',

	  data: function data() {
	    return {};
	  },


	  props: {
	    loading: { type: Boolean, twoWay: true },
	    disable: { type: Boolean, default: false },
	    size: { type: String, default: 'normal' },
	    type: { type: String, default: 'primary' },
	    ghost: { type: Boolean, default: false },
	    nativeType: { type: String, default: 'button' }
	  },

	  computed: {
	    /**
	     * @description 计算按钮 size type 对应选项的 class name.
	     */
	    btnClassName: function btnClassName() {
	      var size = sizeMapper[this.size];
	      var sizeClass = size ? '-' + size : '';
	      var ghostName = this.ghost ? '-plain' : '';

	      return 'btn' + ghostName + '-' + this.type + sizeClass;
	    }
	  },

	  components: { NrButton: _NrButton2.default, GhostButton: _GhostButton2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/Button";
	//   @import '../../../../sass/components/button';
	// </style>

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NrButton.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(71)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsButton/src/NrButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-65f68cbb/NrButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _btnMixins = __webpack_require__(72);

	var _btnMixins2 = _interopRequireDefault(_btnMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'KsNrButton',

	  mixins: [_btnMixins2.default]
	};
	// </script>
	//
	// <style lang="scss">
	//   @import '../../../../sass/components/icon-loading';
	// </style>
	// <template>
	//   <div class="KSNRButton" cid="KSNRButton">
	//     <button class="_entity" :type="nativeType" :class="btnClassName"
	//             :disabled="(disable || loading) && 'disabled'"
	//     >
	//       <div v-if="loading" class="_loading icon-loading">
	//         <div class="line-fade">
	//           <div v-for="i in 8"></div>
	//         </div>
	//       </div>
	//       <slot></slot>
	//     </button>
	//   </div>
	// </template>
	//
	// <script lang="babel">

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description button 的复合
	 * @author: pkeros.
	 * @date: 2016/10/18.
	 */

	exports.default = {
	  props: {
	    btnClassName: { type: String, required: true },
	    disable: { type: Boolean, default: false },
	    loading: { type: Boolean, twoWay: true },
	    nativeType: { type: String, default: 'button' }
	  }
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSNRButton\" cid=\"KSNRButton\">\n  <button class=\"_entity\" :type=\"nativeType\" :class=\"btnClassName\"\n          :disabled=\"(disable || loading) && 'disabled'\"\n  >\n    <div v-if=\"loading\" class=\"_loading icon-loading\">\n      <div class=\"line-fade\">\n        <div v-for=\"i in 8\"></div>\n      </div>\n    </div>\n    <slot></slot>\n  </button>\n</div>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GhostButton.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsButton/src/GhostButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7d5ffae8/GhostButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _btnMixins = __webpack_require__(72);

	var _btnMixins2 = _interopRequireDefault(_btnMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'KsGhostButton',

	  mixins: [_btnMixins2.default]
	};
	// </script>
	//
	// <style lang="scss">
	//    @import '../../../../sass/components/button';
	// </style>
	//
	// <template>
	//   <div class="KSGhostButton" cid="KSGhostButton">
	//     <button class="_entity" :type="nativeType" :class="btnClassName"
	//             :disabled="(disable || loading) && 'disabled'"
	//     >
	//       <slot></slot>
	//     </button>
	//   </div>
	// </template>
	//
	// <script lang="babel">

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSGhostButton\" cid=\"KSGhostButton\">\n  <button class=\"_entity\" :type=\"nativeType\" :class=\"btnClassName\"\n          :disabled=\"(disable || loading) && 'disabled'\"\n  >\n    <slot></slot>\n  </button>\n</div>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSButton\">\n  <!-- 普通按钮 -->\n  <nr-button v-if=\"!ghost\" :native-type=\"nativeType\"\n             :disable=\"disable\" :loading.sync=\"loading\"\n             :btn-class-name=\"btnClassName\"\n  >\n    <slot></slot>\n  </nr-button>\n  <!-- 幽灵按钮 -->\n  <ghost-button v-if=\"ghost\" :native-type=\"nativeType\"\n                :disable=\"disable\"\n                :btn-class-name=\"btnClassName\"\n  >\n    <slot></slot>\n  </ghost-button>\n</div>\n";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsModalEntity = exports.KsModal = undefined;

	var _main = __webpack_require__(79);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(82);

	var _main4 = _interopRequireDefault(_main3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description modal 组件
	 * @summary
	 *  我是一个单纯可爱的模态组件.
	 * @author: pkeros.
	 * @date: 2016/10/19.
	 */

	exports.default = _main2.default;
	exports.KsModal = _main2.default;
	exports.KsModalEntity = _main4.default;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsModal = undefined;

	var _vue = __webpack_require__(80);

	var _vue2 = _interopRequireDefault(_vue);

	var _main = __webpack_require__(82);

	var _main2 = _interopRequireDefault(_main);

	var _KsMask = __webpack_require__(84);

	var _KsMask2 = _interopRequireDefault(_KsMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pueMapper = ['primary', 'success', 'info', 'warn', 'danger', 'normal']; /**
	                                                                             * @description modal 对话框
	                                                                             * @summary
	                                                                             *  可以进行全局调用的哦, 棒棒哒
	                                                                             * @author: pkeros.
	                                                                             * @date: 2016/10/19.
	                                                                             */

	var defaults = {
	  showConfirmBtn: true,
	  showCancelBtn: true,
	  showCloseBtn: true,
	  cancelBtnText: '取消',
	  confirmBtnText: '确定',
	  mask: true,
	  title: 'Title',
	  content: 'Content...',
	  type: 'normal'
	};

	var KsModalConstructor = _vue2.default.extend(_main2.default);

	var currentMsg = void 0,
	    instance = void 0,
	    _KsModal = void 0,
	    id = 0;
	var modalQueue = [];

	/**
	 * @description 合并选项
	 * @param target 需要合并的目标
	 * @return {*} 目标
	 */
	var merge = function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	/**
	 * @description 初始化 Modal 实例
	 */
	var initInstance = function initInstance() {
	  // 实例化 modal
	  instance = new KsModalConstructor({
	    el: document.createElement('div')
	  });
	  instance.show = false;

	  // 监听关闭动作
	  instance.$on('close', _KsModal.close);
	};

	/**
	 * @description 显示队列中的下一个信息
	 */
	var showNextModal = function showNextModal() {
	  if (!instance) {
	    initInstance();
	  }

	  // 检测是否阻塞
	  if (instance.show || currentMsg || !modalQueue.length) {
	    return;
	  }

	  // 获取当前信息
	  currentMsg = modalQueue.shift();

	  // 合并配置项
	  var options = currentMsg.options;
	  for (var prop in options) {
	    if (instance.hasOwnProperty(prop)) {
	      instance[prop] = options[prop];
	    }
	  }

	  // 绑定事件
	  var _currentMsg = currentMsg,
	      _currentMsg$confirmCb = _currentMsg.confirmCb,
	      confirmCb = _currentMsg$confirmCb === undefined ? _KsModal.close : _currentMsg$confirmCb,
	      _currentMsg$cancelCb = _currentMsg.cancelCb,
	      cancelCb = _currentMsg$cancelCb === undefined ? _KsModal.close : _currentMsg$cancelCb;

	  instance.$off('confirm');
	  instance.$off('cancel');
	  instance.$on('confirm', confirmCb);
	  instance.$on('cancel', cancelCb);

	  // 实例化 mask
	  if (typeof currentMsg.maskInstance !== 'undefined') {
	    instance['maskConfig'] = currentMsg.maskInstance(cancelCb);
	  }

	  document.body.appendChild(instance.$el);
	  _vue2.default.nextTick(function () {
	    return instance.show = true;
	  });
	};

	/**
	 * @description 构造函数
	 * @param options {Object} 配置项
	 * @constructor
	 */
	exports.KsModal = _KsModal = function KsModal(options) {
	  // 配置 modal 并加入显示队列
	  return function (confirmCb, cancelCb) {
	    // 参数正确性校验
	    if (typeof confirmCb !== 'undefined' && typeof confirmCb !== 'function' || typeof cancelCb !== 'undefined' && typeof cancelCb !== 'function') {
	      throw new TypeError('KsModal: Parameter is not correct, member not a function!');
	    }

	    var config = {
	      id: id++,
	      options: merge({}, defaults, _KsModal.defaults || {}, options),
	      confirmCb: confirmCb,
	      cancelCb: cancelCb
	    };

	    // 创建 mask 配置
	    options.mask && (config['maskInstance'] = (0, _KsMask2.default)(options));

	    modalQueue.push(config);
	    showNextModal();
	    return config;
	  };
	};

	/**
	 * @description 关闭 modal
	 */
	_KsModal.close = function () {
	  instance.show = false;
	  currentMsg = null;

	  showNextModal();
	};

	/**
	 * @description 设置默认配置项
	 * @param defaults 默认配置项
	 */
	_KsModal.setDefaults = function (defaults) {
	  _KsModal.defaults = defaults;
	};

	/**
	 * @description 警告类型模态
	 * @summary
	 *  这是一种没有取消和确定的的模态类型, 我们称它为警告类型
	 *  一般警告类型的运用场景就是弹出一些信息展示给用户, 没有相关后续操作.
	 *  @param content {String} 显示的内容
	 *  @param title {String} 标题
	 *  @param hue {String} 色调
	 *  @param options {Object} 附加配置项
	 */
	_KsModal.alert = function (content, title, hue, options) {
	  return _KsModal(merge({
	    showConfirmBtn: false,
	    showCancelBtn: false,
	    showCloseBtn: true,
	    content: content,
	    title: title,
	    type: hue
	  }, options));
	};

	/**
	 * @description confirm 类型模态
	 * @summary
	 *  这是一种只有确定和取消的模态, 用户必须做出选择.
	 * @param content {String} 显示的内容
	 * @param title {String} 标题
	 * @param hue {String} 色调
	 * @param options {Object} 附加配置项
	 */
	_KsModal.confirm = function (content, title, hue, options) {
	  return _KsModal(merge({
	    showConfirmBtn: true,
	    showCancelBtn: true,
	    showCloseBtn: false,
	    content: content,
	    title: title,
	    type: hue
	  }, options));
	};

	/**
	 * @description prompt 类型模态
	 * @summary
	 *  提示类型也是默认的类型, 拥有确定取消并且有关闭按钮.
	 * @param content {String} 显示的内容
	 * @param title {String} 标题
	 * @param hue {String} 色调
	 * @param options {Object} 附加配置项
	 */
	_KsModal.prompt = function (content, title, hue, options) {
	  return _KsModal(merge({
	    showConfirmBtn: true,
	    showCancelBtn: true,
	    showCloseBtn: true,
	    content: content,
	    title: title,
	    type: hue
	  }, options));
	};

	// 注册不同色调的函数
	pueMapper.forEach(function (hue) {
	  _KsModal[hue] = function (content, title) {
	    return _KsModal.prompt(content, title, hue, {});
	  };
	});

	exports.default = _KsModal;
	exports.KsModal = _KsModal;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(81)))

/***/ },
/* 81 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(83)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsModal/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b345a58e/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsButton = __webpack_require__(67);

	var _KsButton2 = _interopRequireDefault(_KsButton);

	var _KsMask = __webpack_require__(84);

	var _KsMask2 = _interopRequireDefault(_KsMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 类型对色调映射
	// <template>
	//   <div class="KSModal__wrapper">
	//     <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->
	//     <div :class="'KSModal KSModal__UID--' + _uid" v-if="show" transition="Zoom">
	//       <!-- 模态颜色 -->
	//       <style type="text/css">
	//         .KSModal__UID--{{ _uid }} .KSModal__header {
	//           background: {{ hue.hue }};
	//           color: {{ hue.font }};
	//         }
	//       </style>
	//       <header class="KSModal__header">
	//         <div class="innerWrap">
	//           <h3 class="KSModal__title">
	//             {{ title }} <slot name="title"></slot>
	//           </h3>
	//           <i class="KSModal__close" v-if="showCloseBtn" @click.stop="$emit('close') && (show = false)"
	//           >
	//             <!-- close 图标 -->
	//             <svg class="icon" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	//               <g transform="scale(0.03125, 0.03125)">
	//                 <path
	//                   d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z">
	//                 </path>
	//               </g>
	//             </svg>
	//           </i>
	//           <!-- 神奇的分隔线 -->
	//           <div class="KSModal__separation" v-if="type === 'normal'"></div>
	//         </div>
	//       </header>
	//       <article class="KSModal__content">
	//         {{ content }} <slot name="content"></slot>
	//       </article>
	//       <footer class="KSModal__footer" :style="type !== 'normal' && 'padding-top: 0'">
	//         <aside class="KSModal__btnWarp">
	//           <ks-button :ghost="true" type="other" @click.stop="$emit('cancel')"
	//                      v-if="showCancelBtn" style="margin-right: 10px"
	//           >{{ cancelBtnText }}</ks-button>
	//           <ks-button :type="type === 'normal' ? 'primary' : type" @click.stop="$emit('confirm')"
	//                      v-if="showConfirmBtn"
	//           >{{ confirmBtnText }}</ks-button>
	//         </aside>
	//       </footer>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	var colorMapper = {
	  primary: { hue: '#2196F3', font: '#FFF' },
	  success: { hue: '#4CAF50', font: '#FFF' },
	  info: { hue: '#00BCD4', font: '#FFF' },
	  warn: { hue: '#FF5722', font: '#FFF' },
	  danger: { hue: '#F44336', font: '#FFF' },
	  normal: { hue: '#FFF', font: '#444' }
	};

	exports.default = {
	  name: 'KsModal',

	  data: function data() {
	    return {};
	  },


	  props: {
	    showConfirmBtn: { type: Boolean, default: true },
	    showCancelBtn: { type: Boolean, default: true },
	    showCloseBtn: { type: Boolean, default: true },
	    cancelBtnText: { type: String, default: '取消' },
	    confirmBtnText: { type: String, default: '确定' },
	    title: { type: String, default: '' },
	    content: { type: String, default: '' },
	    type: { type: String, default: 'normal' },
	    mask: { type: Boolean, default: true },
	    show: { type: Boolean, default: true, towWay: true }
	  },

	  computed: {
	    /**
	     * @description 当前模态的主色调
	     * @return {*} color
	     */
	    hue: function hue() {
	      return colorMapper[this.type];
	    }
	  },

	  watch: {
	    show: function show(_show) {
	      var maskConfig = this.maskConfig;

	      if (!_show && maskConfig) {
	        _KsMask2.default.close();
	      }
	    }
	  },

	  components: { KsButton: _KsButton2.default, KsMask: _KsMask2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/modal";
	// </style>

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsMask = undefined;

	var _main = __webpack_require__(85);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _main2.default; /**
	                                   * @description mask 组件
	                                   * @summary
	                                   *  我是一个单纯可爱的 mask 组件.
	                                   * @author: pkeros.
	                                   * @date: 2016/10/20.
	                                   */

	exports.KsMask = _main2.default;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsMask = undefined;

	var _vue = __webpack_require__(80);

	var _vue2 = _interopRequireDefault(_vue);

	var _main = __webpack_require__(86);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description mask 遮罩
	 * @summary
	 *  可以进行全局调用的哦, 棒棒哒
	 * @author: pkeros.
	 * @date: 2016/10/21.
	 */

	var defaults = {
	  backgroundColor: '#000'
	};

	var KsMaskConstructor = _vue2.default.extend(_main2.default);

	var currentMask = void 0,
	    instance = void 0,
	    _KsMask = void 0,
	    id = 0;
	var maskQueue = [];

	/**
	 * @description 合并选项
	 * @param target 需要合并的目标
	 * @return {*} 目标
	 */
	var merge = function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	/**
	 * @description 初始化 Mask 实例
	 */
	var initInstance = function initInstance() {
	  // 实例化 modal
	  instance = new KsMaskConstructor({
	    el: document.createElement('div')
	  });
	  instance.show = false;
	};

	/**
	 * @description 显示队列中的下一个 mask
	 */
	var showNextMask = function showNextMask() {
	  if (!instance) {
	    initInstance();
	  }

	  // 检测是否阻塞
	  if (instance.show || currentMask || !maskQueue.length) {
	    return;
	  }

	  // 获取当前 mask
	  currentMask = maskQueue.shift();

	  // 合并配置项
	  var options = currentMask.options;
	  for (var prop in options) {
	    if (instance.hasOwnProperty(prop)) {
	      instance[prop] = options[prop];
	    }
	  }

	  // 监听关闭动作
	  var _currentMask = currentMask,
	      _currentMask$callback = _currentMask.callback,
	      callback = _currentMask$callback === undefined ? _KsMask.close : _currentMask$callback;

	  instance.$off('spaceClick');
	  instance.$on('spaceClick', callback);

	  document.body.appendChild(instance.$el);
	  _vue2.default.nextTick(function () {
	    return instance.show = true;
	  });
	};

	/**
	 * @description 构造函数
	 * @param options {Object} 配置项
	 * @constructor
	 */
	exports.KsMask = _KsMask = function KsMask(options) {
	  return function (callback) {
	    // 参数正确性校验
	    if (typeof callback !== 'undefined' && typeof callback !== 'function') {
	      throw new TypeError('KsMask: Parameter is not correct, member not a function!');
	    }

	    var config = {
	      id: id++,
	      options: merge({}, defaults, _KsMask.defaults || {}, options),
	      callback: callback
	    };

	    maskQueue.push(config);
	    showNextMask();
	    return config;
	  };
	};

	/**
	 * @description 关闭 mask
	 */
	_KsMask.close = function () {
	  instance.show = false;
	  currentMask = null;

	  showNextMask();
	};

	exports.default = _KsMask;
	exports.KsMask = _KsMask;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsMask/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(88)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-86ceadf8/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="KSMask__wrapper">
	//     <div class="KSMask__container" transition="Fade"
	//          :style="maskStyle" v-if="show" @click.stop="$emit('spaceClick')"
	//     >
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KsMask',

	  data: function data() {
	    return {
	      zIndex: 19940926
	    };
	  },


	  props: {
	    fillModel: { type: String, default: 'full' },
	    show: { type: Boolean, default: true, twoWay: true },
	    backgroundColor: { type: String, default: '#000' }
	  },

	  computed: {
	    /**
	     * @description mask sytles.
	     */
	    maskStyle: function maskStyle() {
	      return 'background: ' + this.backgroundColor + ';\n      z-index: ' + ++this.zIndex + ';\n      position: ' + (this.fillModel === 'full' ? 'fixed' : 'absolute');
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../styles/sassMagic/_sassMagic";
	//   /*@import "../../styles/common/transtionEffect/fade";*/
	//
	//   @include b(KSMask) {
	//     @include e(container) {
	//       top: 0; right: 0; bottom: 0; left: 0;
	//       opacity: .3;
	//     }
	//   }
	// </style>

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSMask__wrapper\">\n  <div class=\"KSMask__container\" transition=\"Fade\"\n       :style=\"maskStyle\" v-if=\"show\" @click.stop=\"$emit('spaceClick')\"\n  >\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSModal__wrapper\">\n  <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->\n  <div :class=\"'KSModal KSModal__UID--' + _uid\" v-if=\"show\" transition=\"Zoom\">\n    <!-- 模态颜色 -->\n    <style type=\"text/css\">\n      .KSModal__UID--{{ _uid }} .KSModal__header {\n        background: {{ hue.hue }};\n        color: {{ hue.font }};\n      }\n    </style>\n    <header class=\"KSModal__header\">\n      <div class=\"innerWrap\">\n        <h3 class=\"KSModal__title\">\n          {{ title }} <slot name=\"title\"></slot>\n        </h3>\n        <i class=\"KSModal__close\" v-if=\"showCloseBtn\" @click.stop=\"$emit('close') && (show = false)\"\n        >\n          <!-- close 图标 -->\n          <svg class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"scale(0.03125, 0.03125)\">\n              <path\n                d=\"M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z\">\n              </path>\n            </g>\n          </svg>\n        </i>\n        <!-- 神奇的分隔线 -->\n        <div class=\"KSModal__separation\" v-if=\"type === 'normal'\"></div>\n      </div>\n    </header>\n    <article class=\"KSModal__content\">\n      {{ content }} <slot name=\"content\"></slot>\n    </article>\n    <footer class=\"KSModal__footer\" :style=\"type !== 'normal' && 'padding-top: 0'\">\n      <aside class=\"KSModal__btnWarp\">\n        <ks-button :ghost=\"true\" type=\"other\" @click.stop=\"$emit('cancel')\"\n                   v-if=\"showCancelBtn\" style=\"margin-right: 10px\"\n        >{{ cancelBtnText }}</ks-button>\n        <ks-button :type=\"type === 'normal' ? 'primary' : type\" @click.stop=\"$emit('confirm')\"\n                   v-if=\"showConfirmBtn\"\n        >{{ confirmBtnText }}</ks-button>\n      </aside>\n    </footer>\n  </div>\n</div>\n";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsDialogEntity = exports.KsDialog = undefined;

	var _main = __webpack_require__(91);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(92);

	var _main4 = _interopRequireDefault(_main3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description dialog 组件
	 * @summary
	 *  我是一个单纯可爱的对话框组件.
	 * @author: pkeros.
	 * @date: 2016/10/25.
	 */

	exports.default = _main2.default;
	exports.KsDialog = _main2.default;
	exports.KsDialogEntity = _main4.default;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsDialog = undefined;

	var _vue = __webpack_require__(80);

	var _vue2 = _interopRequireDefault(_vue);

	var _main = __webpack_require__(92);

	var _main2 = _interopRequireDefault(_main);

	var _KsMask = __webpack_require__(84);

	var _KsMask2 = _interopRequireDefault(_KsMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pueMapper = ['success', 'info', 'warn', 'danger']; /**
	                                                        * @description Dialog 对话框
	                                                        * @summary
	                                                        *  可以进行全局调用的哦, 棒棒哒
	                                                        * @author: pkeros.
	                                                        * @date: 2016/10/19.
	                                                        */

	var defaults = {
	  showCancelBtn: false,
	  cancelBtnText: '取消',
	  confirmBtnText: '确定',
	  mask: true,
	  title: 'Title',
	  text: 'Content...',
	  type: 'success'
	};

	var KsDialogConstructor = _vue2.default.extend(_main2.default);

	var currentMsg = void 0,
	    instance = void 0,
	    _KsDialog = void 0,
	    id = 0;
	var DialogQueue = [];

	/**
	 * @description 合并选项
	 * @param target 需要合并的目标
	 * @return {*} 目标
	 */
	var merge = function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	/**
	 * @description 初始化 Dialog 实例
	 */
	var initInstance = function initInstance() {
	  // 实例化 Dialog
	  instance = new KsDialogConstructor({
	    el: document.createElement('div')
	  });
	  instance.show = false;

	  // 监听关闭动作
	  instance.$on('close', _KsDialog.close);
	};

	/**
	 * @description 显示队列中的下一个信息
	 */
	var showNextDialog = function showNextDialog() {
	  if (!instance) {
	    initInstance();
	  }

	  // 检测是否阻塞
	  if (instance.show || currentMsg || !DialogQueue.length) {
	    return;
	  }

	  // 获取当前信息
	  currentMsg = DialogQueue.shift();

	  // 合并配置项
	  var options = currentMsg.options;
	  for (var prop in options) {
	    if (instance.hasOwnProperty(prop)) {
	      instance[prop] = options[prop];
	    }
	  }

	  // 绑定事件
	  var _currentMsg = currentMsg,
	      _currentMsg$confirmCb = _currentMsg.confirmCb,
	      confirmCb = _currentMsg$confirmCb === undefined ? _KsDialog.close : _currentMsg$confirmCb,
	      _currentMsg$cancelCb = _currentMsg.cancelCb,
	      cancelCb = _currentMsg$cancelCb === undefined ? _KsDialog.close : _currentMsg$cancelCb;

	  instance.$off('confirm');
	  instance.$off('cancel');
	  instance.$on('confirm', confirmCb);
	  instance.$on('cancel', cancelCb);

	  // 实例化 mask
	  if (typeof currentMsg.maskInstance !== 'undefined') {
	    instance['maskConfig'] = currentMsg.maskInstance(cancelCb);
	  }

	  document.body.appendChild(instance.$el);
	  _vue2.default.nextTick(function () {
	    return instance.show = true;
	  });
	};

	/**
	 * @description 构造函数
	 * @param options {Object} 配置项
	 * @constructor
	 */
	exports.KsDialog = _KsDialog = function KsDialog(options) {
	  // 配置 Dialog 并加入显示队列
	  return function (confirmCb, cancelCb) {
	    // 参数正确性校验
	    if (typeof confirmCb !== 'undefined' && typeof confirmCb !== 'function' || typeof cancelCb !== 'undefined' && typeof cancelCb !== 'function') {
	      throw new TypeError('KsDialog: Parameter is not correct, member not a function!');
	    }

	    var config = {
	      id: id++,
	      options: merge({}, defaults, _KsDialog.defaults || {}, options),
	      confirmCb: confirmCb,
	      cancelCb: cancelCb
	    };

	    // 创建 mask 配置
	    options.mask && (config['maskInstance'] = (0, _KsMask2.default)(options));

	    DialogQueue.push(config);
	    showNextDialog();
	    return config;
	  };
	};

	/**
	 * @description 关闭 Dialog
	 */
	_KsDialog.close = function () {
	  instance.show = false;
	  currentMsg = null;

	  showNextDialog();
	};

	/**
	 * @description dialog
	 * @param text {String} 显示的内容
	 * @param title {String} 标题
	 * @param hue {String} 色调
	 * @param options {Object} 附加配置项
	 */
	_KsDialog.dialog = function (text, title, hue, options) {
	  return _KsDialog(merge({
	    showConfirmBtn: true,
	    showCancelBtn: true,
	    text: text,
	    title: title,
	    mask: true,
	    type: hue
	  }, options));
	};

	/**
	 * @description 设置默认配置项
	 * @param defaults 默认配置项
	 */
	_KsDialog.setDefaults = function (defaults) {
	  _KsDialog.defaults = defaults;
	};

	// 注册不同色调的函数
	pueMapper.forEach(function (hue) {
	  _KsDialog[hue] = function (text, title) {
	    var cancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	    return _KsDialog.dialog(text, title, hue, {
	      showCancelBtn: cancel
	    });
	  };
	});

	exports.default = _KsDialog;
	exports.KsDialog = _KsDialog;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(93)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsDialog/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(94)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59ce9a30/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsButton = __webpack_require__(67);

	var _KsButton2 = _interopRequireDefault(_KsButton);

	var _KsMask = __webpack_require__(84);

	var _KsMask2 = _interopRequireDefault(_KsMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 类型对色调映射
	// <template>
	//   <div class="KSDialog__wrapper">
	//     <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->
	//     <div :class="'dialog-icon KSDialog KSDialog__UID--' + _uid"
	//          v-if="show" transition="Zoom" :style="zIndex">
	//       <!--
	//         TODO: 需要设置模态框的背景颜色, 不然遮罩时候背景是透明的, 还需要设置定位, 使 z-index 生效,
	//         TODO: 组件要是圆角这点也需要处理下
	//         TODO: 居中效果也是需要添加
	//       -->
	//       <style type="text/css">
	//         .KSDialog {
	//           position: relative; background: #FFF;
	//         }
	//       </style>
	//       <!-- 模态颜色 -->
	//       <style type="text/css">
	//         .KSDialog__UID--{{ _uid }} .icon-bor {
	//           color: {{ hue.hue }};
	//         }
	//       </style>
	//       <!-- TODO: 此处 class 需要注意修改 -->
	//       <aside class="KSDialog__icon icon-bor">
	//         <i :class="'icon ' + hue.icon"></i>
	//       </aside>
	//       <article class="KSDialog__content">
	//         <!--
	//           TODO: 此处 class 需要注意修改
	//           TODO: 这边一个小小的 title 也会定义这么长的 class 是想强调它的结构性
	//          -->
	//         <h3 class="KSDialog__title title">
	//           {{ title }} <slot name="title"></slot>
	//         </h3>
	//         <!-- TODO: 此处 class 需要注意修改 -->
	//         <p class="content">
	//           {{ text }} <slot name="text"></slot>
	//         </p>
	//       </article>
	//       <!-- TODO: 此处 class 需要注意修改 -->
	//       <footer class="KSDialog__footer operation">
	//         <aside class="KSDialog__btnWarp">
	//           <ks-button :ghost="true" type="other" @click.stop="$emit('cancel')"
	//                      v-if="showCancelBtn" style="margin-right: 10px"
	//           >{{ cancelBtnText }}</ks-button>
	//           <ks-button :type="type" @click.stop="$emit('confirm')"
	//           >{{ confirmBtnText }}</ks-button>
	//         </aside>
	//       </footer>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	var colorMapper = {
	  success: { hue: '#4CAF50', icon: 'icon-chenggongtubiao' },
	  info: { hue: '#00BCD4', icon: 'icon-xinxitubiao' },
	  warn: { hue: '#FF5722', icon: 'icon-cuowutubiao' },
	  danger: { hue: '#F44336', icon: 'icon-cuowutubiao' }
	};
	// z-index
	var _zIndex = 19941026;

	exports.default = {
	  name: 'KSDialog',

	  data: function data() {
	    return {};
	  },


	  props: {
	    showCancelBtn: { type: Boolean, default: true },
	    cancelBtnText: { type: String, default: '取消' },
	    confirmBtnText: { type: String, default: '确定' },
	    title: { type: String, default: '' },
	    text: { type: String, default: '' },
	    type: { type: String, default: 'success' },
	    mask: { type: Boolean, default: true },
	    show: { type: Boolean, default: true, towWay: true }
	  },

	  computed: {
	    /**
	     * @description 当前模态的主色调
	     * @return {*} color
	     */
	    hue: function hue() {
	      return colorMapper[this.type];
	    },

	    /**
	     * @description 用于控制组件的层叠顺序
	     * @return {string} z-index
	     */
	    zIndex: function zIndex() {
	      return 'z-index:' + _zIndex++;
	    }
	  },

	  watch: {
	    show: function show(_show) {
	      var maskConfig = this.maskConfig;

	      if (!_show && maskConfig) {
	        _KsMask2.default.close();
	      }
	    }
	  },

	  components: { KsButton: _KsButton2.default, KsMask: _KsMask2.default }
	};
	// </script>
	//
	// <style lang="scss">
	// </style>

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSDialog__wrapper\">\n  <!-- 不想加这个 wrapper, but 不加会变成片断实例 -->\n  <div :class=\"'dialog-icon KSDialog KSDialog__UID--' + _uid\"\n       v-if=\"show\" transition=\"Zoom\" :style=\"zIndex\">\n    <!--\n      TODO: 需要设置模态框的背景颜色, 不然遮罩时候背景是透明的, 还需要设置定位, 使 z-index 生效,\n      TODO: 组件要是圆角这点也需要处理下\n      TODO: 居中效果也是需要添加\n    -->\n    <style type=\"text/css\">\n      .KSDialog {\n        position: relative; background: #FFF;\n      }\n    </style>\n    <!-- 模态颜色 -->\n    <style type=\"text/css\">\n      .KSDialog__UID--{{ _uid }} .icon-bor {\n        color: {{ hue.hue }};\n      }\n    </style>\n    <!-- TODO: 此处 class 需要注意修改 -->\n    <aside class=\"KSDialog__icon icon-bor\">\n      <i :class=\"'icon ' + hue.icon\"></i>\n    </aside>\n    <article class=\"KSDialog__content\">\n      <!--\n        TODO: 此处 class 需要注意修改\n        TODO: 这边一个小小的 title 也会定义这么长的 class 是想强调它的结构性\n       -->\n      <h3 class=\"KSDialog__title title\">\n        {{ title }} <slot name=\"title\"></slot>\n      </h3>\n      <!-- TODO: 此处 class 需要注意修改 -->\n      <p class=\"content\">\n        {{ text }} <slot name=\"text\"></slot>\n      </p>\n    </article>\n    <!-- TODO: 此处 class 需要注意修改 -->\n    <footer class=\"KSDialog__footer operation\">\n      <aside class=\"KSDialog__btnWarp\">\n        <ks-button :ghost=\"true\" type=\"other\" @click.stop=\"$emit('cancel')\"\n                   v-if=\"showCancelBtn\" style=\"margin-right: 10px\"\n        >{{ cancelBtnText }}</ks-button>\n        <ks-button :type=\"type\" @click.stop=\"$emit('confirm')\"\n        >{{ confirmBtnText }}</ks-button>\n      </aside>\n    </footer>\n  </div>\n</div>\n";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KsDateMonth = exports.KsDateMultiPicker = exports.KsDaterMulti = exports.KsDatePicker = exports.KsDaterPure = undefined;

	var _daterPure = __webpack_require__(96);

	var _daterPure2 = _interopRequireDefault(_daterPure);

	var _datePicker = __webpack_require__(104);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _daterMulti = __webpack_require__(112);

	var _daterMulti2 = _interopRequireDefault(_daterMulti);

	var _dateMultiPicker = __webpack_require__(116);

	var _dateMultiPicker2 = _interopRequireDefault(_dateMultiPicker);

	var _dateMonth = __webpack_require__(119);

	var _dateMonth2 = _interopRequireDefault(_dateMonth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.KsDaterPure = _daterPure2.default;
	exports.KsDatePicker = _datePicker2.default;
	exports.KsDaterMulti = _daterMulti2.default;
	exports.KsDateMultiPicker = _dateMultiPicker2.default;
	exports.KsDateMonth = _dateMonth2.default; // import KsDater from './dater.vue'

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(97)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/dater-pure.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(103)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1a34b912/dater-pure.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _sub = __webpack_require__(98);

	var _sub2 = _interopRequireDefault(_sub);

	var _lang = __webpack_require__(101);

	var _apage = __webpack_require__(102);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        sub: _sub2.default
	    },
	    data: function data() {
	        return {
	            dates: [],
	            now: new Date(),
	            value: '',
	            val: 'eeeee'
	        };
	    },

	    methods: {
	        pick: function pick(e) {
	            var id = event.target.id.split('_');
	            var unit_index = +id[1];
	            var index = +id[2];
	            // console.log(unit_index,index)
	            if (isNaN(unit_index) || isNaN(index) || id[2] == 'disabled') return;

	            this.value = this.dates[unit_index][index].dater;
	            // console.log(unit_index,index,this.value)

	            // this.dates[unit_index][index].status = 'active'
	            // this.dates[0] = this.pages_date(this.now,this.filter,1)[0]
	            // this.dates.splice(0,1,this.pages_date(this.now,this.filter,1)[0])
	            this.init();
	            // this.dates.splice(1,unit_index,)
	            this.val = Math.random() * 1000;
	        },
	        pick2: function pick2(e) {
	            var id = event.target.id.split('_');
	            var index = +id[1];
	            console.log(index);
	            if (isNaN(index) || id[2] == 'disabled') return;

	            this.value = this.dates[index].dater;
	            console.log(index, this.value);

	            // this.dates[10].status='active'

	            this.init();
	            // this.dates.splice(1,unit_index,)

	        },
	        filter: function filter(item) {
	            // console.log(item)
	            if (this.value === item) return 'active';
	        },
	        init: function init() {
	            this.dates = this.pages_date(this.now, this.filter, 4);
	            // console.log(this.dates)
	        },
	        pages_date: function pages_date(date, callback_filter, length) {
	            var arr = [];
	            var ym = {
	                year: date.getFullYear(),
	                month: date.getMonth()
	            };

	            for (var i = 0, len = length; i < len; i++) {
	                arr.push((0, _apage.one_page_date)(ym.year, ym.month, callback_filter));
	                // 对象
	                // var data = {}
	                // data.date = one_page_date(ym.year,ym.month,callback_filter)
	                // arr.push(data)
	                // 对象 end
	                ym = (0, _lang.next_month)(ym.year, ym.month);
	            }
	            return arr;
	        },
	        val_change: function val_change(val) {
	            console.log(val);
	            this.val = val;
	            this.val = 'val_I_' + Math.random() * 1000;
	        }
	    },
	    watch: {
	        value: function value() {
	            // this.init()
	        }
	    },
	    created: function created() {
	        this.init();
	        // this.dates.push(get_page_dates(2016,7,this.select))
	        // this.dates.push(get_page_dates(2016,8))
	        // this.dates.push(get_page_dates(2016,9))
	        // this.dates.push(get_page_dates(2016,10))
	        // this.dates.push(get_page_dates(2016,11))
	    }
	};
	// </script>
	// <template>
	// <div class="KsDater" cid="KsDater"
	//     v-on:click="pick($event)">
	//
	// <div class="_date" v-for="(key,date) in dates">
	// <div>
	//     <div class="_days"
	//         v-for="week in 6">
	//         <span 
	//             v-for="day in  7"
	//             :id="'dater'+_uid+'_'+key+'_'+(+week * 7 + day)"
	//             :class="{
	//                 'pass':date[week * 7 + day] && date[week * 7 + day].status=='disabled',
	//                 'active':date[week * 7 + day] && date[week * 7 + day].status=='active'}">
	//                 {{date[week * 7 + day] && +date[week * 7 + day].datetext}}</span>
	//     </div>
	// </div>
	// </div>
	//
	// <!-- <div class="date-bd" v-for="(key,data) in dates">
	// <div>
	//     <div class="date-days"
	//         v-for="week in 6">
	//         <span 
	//             v-for="day in  7"
	//             :id="'dater'+_uid+'_'+key+'_'+(+week * 7 + day)"
	//             :class="{
	//                 'pass':data.date[week * 7 + day] && data.date[week * 7 + day].status=='disabled',
	//                 'active':data.date[week * 7 + day] && data.date[week * 7 + day].status=='active'}">
	//                 {{data.date[week * 7 + day] && +data.date[week * 7 + day].datetext}}</span>
	//     </div>
	// </div>
	// </div> -->
	//
	// <!-- <div class="_date">
	// <div>
	//     <div class="_days"
	//         v-for="week in 6">
	//         <span 
	//             v-for="day in  7"
	//             :id="'dater'+_uid+'_'+(+week * 7 + day)"
	//             :class="{
	//                 'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
	//                 'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
	//                 {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
	//     </div>
	// </div>
	// </div> -->
	// {{val}}
	// <sub :val="val" v-on:change="val_change"></sub>
	// </div>
	// </template>
	// <script>

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/sub.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(100)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ccf7c44c/sub.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div v-on:click="click">
	//         {{val}}
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    props: {
	        val: {}
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {
	        click: function click() {
	            this.val = 'val_' + Math.random() * 1000;
	            this.$emit('change', this.val);
	        }
	    },
	    watch: {
	        val: function val(v) {
	            console.log(v);
	        }
	    }

	};
	// </script>

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "\n<div v-on:click=\"click\">\n    {{val}}\n</div>\n";

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';

	// 解析date
	exports.parse = function (str) {
	    var dater = new Date(str);
	    return isNaN(dater.getTime()) ? null : dater;
	};
	// 转换date为string
	exports.stringify = function (dater, format) {

	    var year = dater.getFullYear();
	    var month = dater.getMonth() + 1;
	    var date = dater.getDate();
	    // var monthName = months[dater.getMonth()]

	    format = format || 'YYYY-MM-DD';

	    var map = {
	        YYYY: year,
	        // MMM: monthName,
	        MM: ('0' + month).slice(-2),
	        M: month,
	        DD: ('0' + date).slice(-2),
	        D: date
	    };
	    return format.replace(/Y+|M+|D+/g, function (str) {
	        return map[str];
	    });
	};

	// 上一个月
	exports.prev_month = function (year, month) {
	    return api_ym(year, month, -1);
	};
	// 当前月
	exports.cur_month = function (year, month) {
	    return api_ym(year, month);
	};
	// 下一个月
	exports.next_month = function (year, month) {
	    return api_ym(year, month, +1);
	};
	/**
	 * [ymd 获取年月日]
	 * @param  {[type]} dater [2016-10-01]
	 * @return {[type]}       [{y:'2016',m:'10',d:'01'}]
	 */
	exports.ymd = function (dater) {
	    var dater = dater.split('-');

	    return {
	        y: dater[0],
	        m: dater[1],
	        ym: dater[0] + '-' + dater[1],
	        d: dater[2]
	    };
	};

	// number -> [0~11]
	function api_month(month) {
	    month = month > 11 ? 0 : month < 0 ? 11 : month;
	    return month;
	}
	exports.api_month = api_month;

	/**
	 * [api_ym Date api 中的年月]
	 * @param  {[Number]} year      [2016]
	 * @param  {[Number]} month     [8]
	 * @param  {[Number]} sgn       [+1|-1]
	 * @return {[Object]}           [{year:'2016',month:'08'}]
	 */
	function api_ym(year, month, sgn) {
	    year = parseInt(year);
	    month = parseInt(month);
	    if (sgn) {
	        month = month + sgn;
	        month > 11 && ++year;
	        month < 0 && --year;
	        month = api_month(month);
	    } else {
	        month = api_month(month);
	    }
	    return { year: year, month: month, stringify: year + '-' + (month + 1) };
	}
	exports.api_ym = api_ym;
	/**
	 * [split_dt 分割 '2016-10-11 10:01:03']
	 * @return {[type]} [description]
	 */
	function split_dt(val) {
	    if (val && (/:(\d{2}):(\d{2}):(\d{2})/g.test(val) || /(\d{2}):(\d{2}):(\d{2})/g.test(val))) {
	        var dater_timer = val.replace(/:(\d{2}):(\d{2}):(\d{2})/g, '$1:$2:$3').replace(/(\d{2}):(\d{2}):(\d{2})/g, '|$1:$2:$3').split('|');
	        return {
	            dater: dater_timer[0].trim(),
	            timer: dater_timer[1]
	        };
	    }
	    return '';
	}

	exports.split_dt = split_dt;

	var addzero = function addzero(len) {
	    return ('' + Math.pow(10, len)).substr(1);
	};

	function fullzero(val, len) {
	    var real_len = ('' + val).length;
	    len = len || 2;
	    return real_len < len ? addzero(len - real_len) + val : val;
	}
	exports.fullzero = fullzero;

	/**
	 * (string , YYYY-MM-DD HH:mm:ss) => 2016-10-11 10:10:10
	 */
	function format_conver(dater_timer, format) {
	    if (typeof dater_timer != 'string') return;
	    dater_timer = dater_timer.match(/(\d+)/g);

	    format = format || 'YYYY-MM-DD HH:mm:ss';

	    var _date = new Date();
	    var year = _date.getFullYear();
	    var month = _date.getMonth() + 1;
	    var date = _date.getDate();
	    var hour = _date.getHours();
	    var minute = _date.getMinutes();
	    var second = _date.getSeconds();

	    // YYYY-MM-DD HH:mm:ss

	    var map = {
	        YYYY: year,
	        MM: ('0' + month).slice(-2),
	        M: month,
	        DD: ('0' + date).slice(-2),
	        D: date,
	        HH: ('0' + hour).slice(-2),
	        H: hour,
	        mm: ('0' + minute).slice(-2),
	        m: minute,
	        ss: ('0' + second).slice(-2),
	        s: second
	    };

	    format.match(/Y+|M+|D+|H+|m+|s+/g).forEach(function (key, i) {
	        map[key] = fullzero(dater_timer[i], key.length) || map[key];
	    });

	    return format.replace(/Y+|M+|D+|H+|m+|s+/g, function (str) {
	        return map[str];
	    });
	}
	exports.format_conver = format_conver;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lang = __webpack_require__(101);

	/**
	 * [one_page_date 获取某页日期数据 上个月(部分) + 当前月(满月) + 下个月(部分)]
	 * @param  {Number}   year  [年]
	 * @param  {Number}   month [月]
	 * @param  {Function} cb    [description]
	 * @return {Array}         [description]
	 */
	exports.one_page_date = function (year, month, cb) {
		// console.log(year,month)
		// 生成年月
		var pre_date = (0, _lang.prev_month)(year, month, -1);
		var date = (0, _lang.cur_month)(year, month);
		var next_date = (0, _lang.next_month)(year, month, +1);
		// 年月最后一天
		var prev = month_last_day(pre_date.year, pre_date.month);
		var cur = month_last_day(date.year, date.month);
		var next = month_last_day(next_date.year, next_date.month);

		// 当页面数据
		var prev_month_dates = get_prev_month_dates(prev.day, prev.dater);
		var full_month_dates = get_full_month_dates(cur.dater, cb);

		var arr = [].concat(prev_month_dates).concat(full_month_dates);
		var next_month_dates = get_next_month_dates(arr.length, next.dater);
		arr = arr.concat(next_month_dates);
		// console.log(arr)
		return arr;
	};
	/**
	 * [month_last_day 返回“某”月份的最后一天]
	 * @param  {[type]} year  [2016]
	 * @param  {[type]} month [月份 0~11]
	 * @return {[type]}       {day:1~6、0 , dater:2016-09-30}
	 */

	function month_last_day(year, month) {

		var date,
		    year = year,
		    month = month + 1,
		    date_temp;

		// console.log(year+'-'+month+'-'+1)
		// date_temp = new Date(year+'-'+month+'-'+1)
		date_temp = new Date();
		date_temp.setFullYear(year, month, 1);
		date = new Date(date_temp.getTime() - 24 * 60 * 60 * 1000);

		return {
			day: date.getDay() || 7,
			dater: (0, _lang.stringify)(date)
		};
	}

	exports.month_last_day = month_last_day;

	/**
	 * [get_prev_month_dates 上个月(部分)]
	 * @param  {[type]} day   [周几]
	 * @param  {[type]} dater [YY-MM-DD]
	 */
	function get_prev_month_dates(day, dater) {

		var ymdr = (0, _lang.ymd)(dater),
		    counts = (day + 1) % 7 || 7;

		return get_month_dates(counts, ymdr.d, ymdr.ym, 'disabled');
	}
	// 当前月(满月) YY-MM-DD
	function get_full_month_dates(dater, cb) {
		var ymdr = (0, _lang.ymd)(dater),
		    counts = ymdr.d;

		return get_month_dates(counts, ymdr.d, ymdr.ym, cb);
	}
	exports.get_full_month_dates = get_full_month_dates;
	// 下个月(部分)
	function get_next_month_dates(counts, dater) {

		var ymdr = (0, _lang.ymd)(dater);
		counts = 42 - counts;

		return get_month_dates(counts, counts, ymdr.ym, 'disabled');
	}

	/**
	 * [get_month_dates 获取整月或部分的数据]
	 * @param  {[type]} counts    [天数 -> length]
	 * @param  {[type]} datetext   [日期号 -> 31]
	 * @param  {[type]} status [ym -> 2016-10]
	 * @param  {[type]} status ['disable|active']
	 * @return {[type]}        [{datetext:26,status:'active',dater:'2016-10-03'},{}[,...]]
	 */
	function get_month_dates(counts, datetext, ym, status) {

		var arr = [],
		    dater,
		    status_temp = '',
		    datetext_temp;

		while (counts--) {

			datetext_temp = '' + datetext--;
			// 3 -> 03
			datetext_temp.length == 1 && (datetext_temp = '0' + datetext_temp);
			// 2016-10,03 -> 2016-10-03
			dater = ym + '-' + datetext_temp;

			if (typeof status === 'function') {
				status_temp = status(dater);
			}
			// 'disabled' 或 选中的值
			// if( status!='active' || dater === this.value ){
			//     status_temp = status
			// // 范围值 头尾 + 中间
			// }else if(~this.range_daters.indexOf(dater)){
			//     status_temp = (this.range_daters[0] == dater || this.range_daters[this.range_daters.length-1] == dater)
			//                     ? status : 'scope-bg'

			// }else if(~this.point_daters.indexOf(dater)){
			//     status_temp = 'active'
			// }else{
			//     status_temp = ''
			// }

			if (status == 'disabled') {
				status_temp = status;
			}

			arr.push({
				datetext: datetext_temp,
				status: status_temp,
				dater: dater
			});
		}
		return arr.reverse();
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDater\" cid=\"KsDater\"\n    v-on:click=\"pick($event)\">\n\n<div class=\"_date\" v-for=\"(key,date) in dates\">\n<div>\n    <div class=\"_days\"\n        v-for=\"week in 6\">\n        <span \n            v-for=\"day in  7\"\n            :id=\"'dater'+_uid+'_'+key+'_'+(+week * 7 + day)\"\n            :class=\"{\n                'pass':date[week * 7 + day] && date[week * 7 + day].status=='disabled',\n                'active':date[week * 7 + day] && date[week * 7 + day].status=='active'}\">\n                {{date[week * 7 + day] && +date[week * 7 + day].datetext}}</span>\n    </div>\n</div>\n</div>\n\n<!-- <div class=\"date-bd\" v-for=\"(key,data) in dates\">\n<div>\n    <div class=\"date-days\"\n        v-for=\"week in 6\">\n        <span \n            v-for=\"day in  7\"\n            :id=\"'dater'+_uid+'_'+key+'_'+(+week * 7 + day)\"\n            :class=\"{\n                'pass':data.date[week * 7 + day] && data.date[week * 7 + day].status=='disabled',\n                'active':data.date[week * 7 + day] && data.date[week * 7 + day].status=='active'}\">\n                {{data.date[week * 7 + day] && +data.date[week * 7 + day].datetext}}</span>\n    </div>\n</div>\n</div> -->\n\n<!-- <div class=\"_date\">\n<div>\n    <div class=\"_days\"\n        v-for=\"week in 6\">\n        <span \n            v-for=\"day in  7\"\n            :id=\"'dater'+_uid+'_'+(+week * 7 + day)\"\n            :class=\"{\n                'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',\n                'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}\">\n                {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>\n    </div>\n</div>\n</div> -->\n{{val}}\n<sub :val=\"val\" v-on:change=\"val_change\"></sub>\n</div>\n";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./date-picker.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/date-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6d00f2a7/date-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _props = __webpack_require__(106);

	var _props2 = _interopRequireDefault(_props);

	var _lang = __webpack_require__(101);

	var _apage = __webpack_require__(102);

	var _dater = __webpack_require__(107);

	var _dater2 = _interopRequireDefault(_dater);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="KsDatePicker" cid="KsDatePicker"
	//        :class="{'readonly':readonly}">
	//     <div class="_input" v-on:click="show=!show">
	//       <div class="ks-col-auto date-icon"><i class="icon"></i></div>
	//       <input type="text" class="ks-col" placeholder="{{placeholder}}" :value="input_value" readonly>
	//     </div>
	//     <ks-dater v-show="show" :value="value" :time="time" :exclude="exclude" :readonly="readonly" v-on:change="current_change"></ks-dater>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        'ks-dater': _dater2.default
	    },
	    mixins: [_props2.default],
	    props: {
	        placeholder: { type: String, default: '' }
	    },
	    data: function data() {
	        var _this = this;

	        this.tempvalue = this.value;
	        var timer = '';
	        if (!~this.value.indexOf(' ')) {
	            timer = this.time && ' ' + this.time.join(':');
	        }
	        this.value = this.value || (0, _lang.stringify)(new Date());
	        this.dater_timer = this.value + timer;

	        this.$nextTick(function () {
	            _this.value = _this.dater_timer;
	        });

	        return {
	            show: false,
	            input_value: this.dater_timer
	        };
	    },


	    methods: {
	        close: function close() {
	            this.show = false;
	        },

	        // dater callback
	        current_change: function current_change(cur_date, no_close) {
	            this.exclude ? this.is_exclude(cur_date) : this.no_exclude(cur_date, no_close);
	        },

	        // 排除具体时间
	        is_exclude: function is_exclude(cur_date) {
	            this.input_value = cur_date;
	            this.$emit('change', cur_date);
	        },

	        // 不排除时间
	        no_exclude: function no_exclude(cur_date, no_close) {
	            // console.log(cur_date)
	            this.input_value = cur_date;
	            this.value = cur_date;
	            this.$emit('change', cur_date);
	            !no_close && this.close();
	        }
	    },
	    watch: {
	        value: function value(val) {
	            console.log(val);
	            this.input_value = val;
	        }
	    },
	    created: function created() {
	        if (!this.tempvalue) {
	            this.$emit('change', this.dater_timer);
	        }
	    },
	    ready: function ready() {
	        var _this2 = this;

	        document.addEventListener('click', function (e) {
	            if (_this2.$el && !_this2.$el.contains(e.target)) {
	                _this2.close();
	            }
	        }, false);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.close, false);
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../../../sass/components/date';
	// </style>

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lang = __webpack_require__(101);

	exports.default = {
	    props: {

	        readonly: { type: Boolean, default: false },
	        exclude: { type: Boolean, default: false },
	        value: {
	            type: String
	        },
	        time: {
	            // type:String,
	            coerce: function coerce(val) {
	                // console.log(val)
	                if (val) {
	                    var date = new Date();
	                    // 'now' == val && (val = format_conver(''))
	                    typeof val == 'string' && val.split(':').length && (val = val.split(':'));
	                    // console.log(val)
	                    return val;
	                }
	                return '';
	            }
	        },
	        format: { type: String, default: 'YYYY-MM-DD' }

	    }
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dater.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(108)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/dater.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dde728c4/dater.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(109);

	var _index2 = _interopRequireDefault(_index);

	var _lang = __webpack_require__(101);

	var _apage = __webpack_require__(102);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_index2.default],
	    data: function data() {

	        if (this.exclude) {
	            this.point_daters = [];
	            ~this.value.indexOf(',') && (this.point_daters = this.value.split(','));
	        }

	        return {};
	    },

	    methods: {
	        today: function today() {
	            if (this.readonly) return;
	            this.cur_value = (0, _lang.stringify)(new Date());
	            this.now = new Date();
	            var timer = this.time ? ' ' + this.time.join(':') : '';
	            this.value = this.cur_value + timer;
	            this.$emit('change', this.value);
	        },
	        clear: function clear() {
	            if (!this.cur_value || this.readonly) return;
	            var value_temp = this.cur_value;
	            this.cur_value = '';
	            this.now = new Date(value_temp);
	            this.$emit('change', '');
	        },
	        selectd: function selectd(dater) {
	            // console.log('dater----',dater , this.cur_value)
	            var status = '';
	            if (this.exclude) {
	                ~this.point_daters.indexOf(dater) && (status = 'active');
	            } else if (dater == this.cur_value) {

	                status = 'active';
	            }
	            return status;
	        },
	        pick_date: function pick_date(event) {
	            var id = event.target.id.split('_');
	            var index = +id[1];

	            if (isNaN(index) || id[2] == 'disabled' || this.readonly) return;

	            var cur_date = this.dates[index];
	            var dater = cur_date.dater;

	            this.cur_value = dater;
	            // console.log(this.cur_value)
	            this.exclude ? this.is_exclude(dater) : this.no_exclude(dater);
	            this.now = new Date(dater);
	        },
	        pick_time: function pick_time() {
	            var dater = this.cur_value || (0, _lang.stringify)(new Date());
	            // console.log('dater',dater)
	            // dater = dater.substr(0,10)
	            this.no_exclude(dater, true);
	        },

	        // 排除具体时间
	        is_exclude: function is_exclude(dater) {
	            this.point_daters = this.non(this.point_daters, dater);
	            this.$emit('change', this.point_daters.join(','));
	        },

	        // 不排除时间
	        no_exclude: function no_exclude(dater, no_close) {
	            // console.log(dater,this.time)
	            var timer = this.time ? ' ' + this.time.join(':') : '';
	            this.value = dater + timer;
	            // console.log('change',this.value)
	            this.$emit('change', this.value, no_close);
	        },

	        // 数组中数值，无则加，有则去除
	        non: function non(point_daters, dater) {
	            var index = point_daters.indexOf(dater);
	            if (~index) {
	                point_daters.splice(index, 1);
	            } else {
	                point_daters.push(dater);
	            }
	            // console.log(point_daters)
	            return point_daters;
	        }
	    },
	    watch: {
	        value: function value(val, oldval) {
	            if (this.exclude) {

	                this.point_daters = val.split(',');
	                var long = val.length > oldval.length ? val : oldval;
	                var short = val.length < oldval.length ? val : oldval;
	                var diff_start = long.split(',').filter(function (i) {
	                    return !~short.indexOf(i);
	                })[0];
	                // console.log(diff_start,'----')
	                diff_start && (this.now = new Date(diff_start));
	            } else {
	                try {
	                    this.time = (0, _lang.split_dt)(val) && (0, _lang.split_dt)(val).timer.split(':') || this.time;
	                    val = (0, _lang.split_dt)(val) && (0, _lang.split_dt)(val).dater || val;
	                } catch (e) {}

	                this.cur_value = val;
	                val && (this.now = new Date(val));
	            }
	            // console.log('val',val,val.length)
	        },
	        now: function now() {
	            this.dates = (0, _apage.one_page_date)(this.now.getFullYear(), this.now.getMonth(), this.selectd);
	        }
	    },
	    created: function created() {}
	};
	// </script>
	// <style lang="scss">
	//     @import '../../../sass/components/date';
	// </style>
	// <template>
	//
	//   <div class="KsDater" cid="KsDater">
	//     <div class="_date">
	//       <div class="_head">
	//         <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
	//         <div class="year">{{now.getFullYear()}}年</div>
	//         <div class="interstice"></div>
	//         <div class="month">{{now.getMonth()+1}}月</div>
	//         <div class="next" v-on:click="click_month(1)">&gt;</div>
	//       </div>
	//       <div class="_week">
	//         <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
	//       </div>
	//       <div v-on:click="pick_date($event)">
	//         <div class="_days"
	//              v-for="week in 6">
	//                 <span
	//                   v-for="day in  7"
	//                   :id="'dater'+_uid+'_'+(+week * 7 + day)"
	//                   :class="{
	//                         'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
	//                         'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
	//                         {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
	//         </div>
	//       </div>
	//       <div class="_btn" v-if="time">
	//         <select class="input" v-model="time[0]" v-on:change.stop="pick_time">
	//           <option v-bind:value="i|fr_limit" v-for="i in 24">{{i|fr_limit}}</option>
	//         </select>
	//         <select class="input mlr-10" v-model="time[1]" v-on:change.stop="pick_time">
	//           <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
	//         </select>
	//         <select class="input" v-model="time[2]" v-on:change.stop="pick_time">
	//           <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
	//         </select>
	//       </div>
	//       <div class="_btn" v-if="!exclude">
	//         <span class="today" v-on:click="today()">今天</span>
	//         <span class="clear" v-on:click="clear()">清除</span>
	//       </div>
	//     </div>
	//   </div>
	//
	// </template>
	// <script type="text/javascript">

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lang = __webpack_require__(101);

	var _props = __webpack_require__(106);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_props2.default],
	    data: function data() {
	        var months = function () {
	            var arr = [];
	            for (var i = 0; i < 12; i++) {
	                arr.push(i + 1 + '月');
	            }
	            return arr;
	        }();

	        this.cur_value = '';
	        return {
	            days: ['日', '一', '二', '三', '四', '五', '六'],
	            months: months,
	            dates: [],
	            now: new Date()
	        };
	    },

	    filters: {
	        fr_limit: function fr_limit(val, len) {
	            return (0, _lang.fullzero)(val, len);
	        }
	    },
	    methods: {

	        // 切换年
	        click_year: function click_year(flag) {
	            this.now.setFullYear(this.now.getFullYear() + flag);
	            this.now = new Date(this.now);
	        },

	        // 切换月
	        click_month: function click_month(flag) {
	            this.now.setMonth(this.now.getMonth() + flag, 1);
	            this.now = new Date(this.now);
	        }
	    },

	    created: function created() {
	        try {
	            if (!this.exclude) {
	                this.time && (this.time = (0, _lang.split_dt)(this.value).timer.split(':'));
	                this.value = (0, _lang.split_dt)(this.value).dater || this.value;
	            }
	        } catch (e) {}

	        this.cur_value = this.value || (0, _lang.stringify)(this.now);
	        this.now = (0, _lang.parse)(this.cur_value) || new Date();
	    }
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"KsDater\" cid=\"KsDater\">\n  <div class=\"_date\">\n    <div class=\"_head\">\n      <div class=\"retreat\" v-on:click=\"click_month(-1)\">&lt;</div>\n      <div class=\"year\">{{now.getFullYear()}}年</div>\n      <div class=\"interstice\"></div>\n      <div class=\"month\">{{now.getMonth()+1}}月</div>\n      <div class=\"next\" v-on:click=\"click_month(1)\">&gt;</div>\n    </div>\n    <div class=\"_week\">\n      <span v-for=\"day in days\" :class=\"{'week':day=='六'||day=='日'}\">{{day}}</span>\n    </div>\n    <div v-on:click=\"pick_date($event)\">\n      <div class=\"_days\"\n           v-for=\"week in 6\">\n              <span\n                v-for=\"day in  7\"\n                :id=\"'dater'+_uid+'_'+(+week * 7 + day)\"\n                :class=\"{\n                      'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',\n                      'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}\">\n                      {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>\n      </div>\n    </div>\n    <div class=\"_btn\" v-if=\"time\">\n      <select class=\"input\" v-model=\"time[0]\" v-on:change.stop=\"pick_time\">\n        <option v-bind:value=\"i|fr_limit\" v-for=\"i in 24\">{{i|fr_limit}}</option>\n      </select>\n      <select class=\"input mlr-10\" v-model=\"time[1]\" v-on:change.stop=\"pick_time\">\n        <option v-bind:value=\"i|fr_limit\" v-for=\"i in 60\">{{i|fr_limit}}</option>\n      </select>\n      <select class=\"input\" v-model=\"time[2]\" v-on:change.stop=\"pick_time\">\n        <option v-bind:value=\"i|fr_limit\" v-for=\"i in 60\">{{i|fr_limit}}</option>\n      </select>\n    </div>\n    <div class=\"_btn\" v-if=\"!exclude\">\n      <span class=\"today\" v-on:click=\"today()\">今天</span>\n      <span class=\"clear\" v-on:click=\"clear()\">清除</span>\n    </div>\n  </div>\n</div>\n\n";

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDatePicker\" cid=\"KsDatePicker\"\n     :class=\"{'readonly':readonly}\">\n  <div class=\"_input\" v-on:click=\"show=!show\">\n    <div class=\"ks-col-auto date-icon\"><i class=\"icon\"></i></div>\n    <input type=\"text\" class=\"ks-col\" placeholder=\"{{placeholder}}\" :value=\"input_value\" readonly>\n  </div>\n  <ks-dater v-show=\"show\" :value=\"value\" :time=\"time\" :exclude=\"exclude\" :readonly=\"readonly\" v-on:change=\"current_change\"></ks-dater>\n</div>\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(113)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/dater-multi.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e758fb6c/dater-multi.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(109);

	var _index2 = _interopRequireDefault(_index);

	var _lang = __webpack_require__(101);

	var _apage = __webpack_require__(102);

	var _range = __webpack_require__(114);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="KsDaterMulti" cid="KsDaterMulti">
	//         <div class="_date">
	//             <div class="_head">
	//                 <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
	//                 <div class="year">{{now.getFullYear()}}年</div>
	//                 <div class="interstice"></div>
	//                 <div class="month">{{now.getMonth()+1}}月</div>
	//                 <div class="next" v-on:click="click_month(1)">&gt;</div>
	//             </div>
	//             <div class="_week">
	//                 <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
	//             </div>
	//             <div v-on:click="pick_date($event)">
	//                 <div class="_days" v-for="week in 6">
	//                     <span 
	//                         v-for="day in  7"
	//                         :id="'dater'+_uid+'_'+(+week * 7 + day)+'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)"
	//                         :class="{
	//                             'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
	//                             'scope-bg':dates[week * 7 + day] && dates[week * 7 + day].status=='scope-bg',
	//                             'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
	//                             {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
	//                 </div>
	//             </div>
	//             <div class="_btn">
	//                 <span class="reset" v-on:click="reset()">重置</span>
	//             </div>
	//         </div>
	//         <div class="_date">
	//             <div class="_head">
	//                 <div class="retreat" v-on:click="click_next_month(-1)">&lt;</div>
	//                 <div class="year">{{next_data.year}}年</div>
	//                 <div class="interstice"></div>
	//                 <div class="month">{{next_data.month+1}}月</div>
	//                 <div class="next" v-on:click="click_next_month(1)">&gt;</div>
	//             </div>
	//             <div class="_week">
	//                 <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
	//             </div>
	//             <div v-on:click="pick_date($event)">
	//                 <div class="_days"
	//                     v-for="week in 6">
	//                     <span 
	//                         v-for="day in  7"
	//                         :id="'dater'+_uid+'_'+(42+week * 7 + day)+'_'+(next_dates[week * 7 + day] && next_dates[week * 7 + day].status)"
	//                         :class="{
	//                             'pass':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='disabled',
	//                             'scope-bg':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='scope-bg',
	//                             'active':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='active'}">
	//                             {{next_dates[week * 7 + day] && +next_dates[week * 7 + day].datetext}}</span>
	//                 </div>
	//             </div>
	//             <div class="_btn">
	//                 <span class="selects">已选择{{range_daters_length}}天</span>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    mixins: [_index2.default],
	    props: {
	        range_dater: {
	            type: Array
	        }
	    },
	    data: function data() {
	        this.range_daters = [];
	        return {
	            range_daters_length: 0,
	            next_dates: [],
	            next_now: new Date(),
	            next_data: {
	                year: '',
	                month: ''
	            }
	        };
	    },

	    methods: {
	        redraw: function redraw(show_range, range_daters) {
	            var show_start = show_range[0],
	                show_end = show_range[1];
	            this.value = '';

	            this.range_daters = range_daters;
	            // this.point_daters = range_daters
	            // 取具体日期
	            range_daters.length == 2 && (this.range_daters = (0, _range.get_range_dates)(range_daters));
	            // 视图中选中长度
	            this.range_daters_length = this.range_daters.length;
	            if (this.range_daters.length == 2 && this.range_daters[0] == this.range_daters[this.range_daters.length - 1]) {
	                this.range_daters_length = 1;
	            }

	            // console.log(show_start,show_end)
	            // 比较展示
	            if (this.compared_month(show_end, show_start)) {
	                var ym = (0, _range.split_ym)(show_end);
	                show_end = (0, _lang.next_month)(ym.year, ym.month).stringify + '-01';
	                // console.log('show_end',show_end)
	            }

	            this.now = new Date(show_start);
	            this.next_now = new Date(show_end);
	        },
	        reset: function reset() {
	            this.redraw([(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)], []);
	        },

	        // 点击日期
	        pick_date: function pick_date(event) {
	            var id = event.target.id.split('_');
	            var index = +id[1],
	                _date,
	                range_dater;

	            if (isNaN(index) || id[2] == 'disabled') return;

	            if (index > 42) {
	                _date = this.next_dates[index - 42];
	            } else {
	                _date = this.dates[index];
	            }

	            range_dater = this.get_range(this.range_daters, _date.dater);

	            this.redraw([(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)], range_dater);
	            // console.log('range_dater',range_dater)
	            this.$emit('change', range_dater);
	        },

	        // [a,b] , e => [c,d]
	        get_range: function get_range(range_daters, select_value) {

	            if (range_daters.length >= 2) {
	                range_daters = [];
	            }

	            if (range_daters.length && this.compared(select_value, range_daters[0])) {
	                range_daters.unshift(select_value);
	            } else {
	                range_daters.push(select_value);
	            }

	            return range_daters;
	        },

	        // 切换月(右侧)
	        click_next_month: function click_next_month(flag) {
	            this.next_now.setMonth(this.next_now.getMonth() + flag, 1);
	            this.next_now = new Date(this.next_now);

	            if (this.compared_month((0, _lang.stringify)(this.next_now), (0, _lang.stringify)(this.now))) {
	                this.click_month(-1);
	            }
	        },

	        // 切换月(左侧)
	        click_month: function click_month(flag) {
	            this.now.setMonth(this.now.getMonth() + flag, 1);
	            this.now = new Date(this.now);
	            // console.log(this.stringify(this.next_now) , this.stringify(this.now))
	            if (this.compared_month((0, _lang.stringify)(this.next_now), (0, _lang.stringify)(this.now))) {
	                this.click_next_month(1);
	            }
	        },
	        compared: function compared(val1, val2) {
	            return +val1.replace(/-/g, '') <= +val2.replace(/-/g, '');
	        },
	        compared_month: function compared_month(val1, val2) {
	            var val1 = (0, _range.split_ym)(val1);
	            var val2 = (0, _range.split_ym)(val2);
	            return +(val1.year + '' + (val1.month + 10)) <= +(val2.year + '' + (val2.month + 10));
	        },
	        next_month_dates: function next_month_dates() {
	            var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.next_now.getFullYear();
	            var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.next_now.getMonth();

	            this.next_data = (0, _lang.cur_month)(year, month);

	            this.next_dates = (0, _apage.one_page_date)(this.next_data.year, this.next_data.month, this.selectd);
	        },
	        selectd: function selectd(dater) {
	            // console.log(dater)
	            if (~this.range_daters.indexOf(dater)) {
	                if (this.range_daters[0] == dater || this.range_daters[this.range_daters.length - 1] == dater) {
	                    return 'active';
	                } else {
	                    return 'scope-bg';
	                }
	            }
	        }
	    },
	    watch: {
	        now: function now() {
	            this.dates = (0, _apage.one_page_date)(this.now.getFullYear(), this.now.getMonth(), this.selectd);
	        },
	        next_now: function next_now() {
	            this.next_month_dates();
	        }
	    },
	    created: function created() {

	        this.range_dater = this.range_dater || [(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)];
	        // this.next_month_dates()
	        // this.click_next_month (1) 
	        // this.dates = one_page_date(this.now.getFullYear(),this.now.getMonth(),this.selectd)
	        // this.range_dater
	        this.redraw(this.range_dater, this.range_dater);
	    }
	};
	// </script>

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lang = __webpack_require__(101);

	var _apage = __webpack_require__(102);

	// 选择范围取值
	function get_range_dates(range_dater) {
	    range_dater = range_dater || [];
	    var prev_date = range_dater[0];
	    var next_date = range_dater[1];

	    if (!prev_date || !next_date || gt(prev_date, next_date)) return null;
	    if (prev_date === next_date) return range_dater;

	    var prev = split_ym(prev_date);
	    var next = split_ym(next_date);

	    if (prev.year == next.year && prev.month == next.month) {
	        return one_month(prev, next);
	    } else {
	        return span_month(prev, next, next_date);
	    }
	}

	// 选择同一个月
	function one_month(prev, next) {

	    var month = prev.month + 1,
	        counts = next.datetext - prev.datetext + 1,
	        arr = [],
	        val,
	        ym;('' + month).length == 1 && (month = '0' + month);
	    ym = prev.year + '-' + month;

	    while (counts--) {
	        val = +prev.datetext + counts;
	        ('' + val).length == 1 && (val = '0' + val);
	        arr.push(ym + '-' + val);
	    }

	    return arr;
	}
	/**
	 * [span_month 选择两个月以上]
	 *     第一个月部分日期 + 中间完整月份日期 + 最后一个月部分日期
	 * @param  {[type]}   prev      [范围第一个值]
	 * @param  {Function} next      [范围第二个值]
	 * @param  {[type]}   next_date []
	 * @return {[type]}             [description]
	 */
	function span_month(prev, next, next_date) {

	    var prev_dates = first_month_part(prev.year, prev.month, prev.datetext);
	    var dates = full_month_dates(loop_full_month(prev, next)).reduce(function (pre, cur, i, arr) {
	        return pre.concat(cur);
	    }, []);
	    var next_dates = last_month_part(next_date);
	    return prev_dates.concat([].concat(dates)).concat(next_dates).map(function (_date) {
	        return _date.dater;
	    });
	}

	function first_month_part(year, month, datetext) {
	    var prev = (0, _lang.cur_month)(year, month);
	    var last_day = (0, _apage.month_last_day)(prev.year, prev.month);

	    return (0, _apage.get_full_month_dates)(last_day.dater).filter(function (_date) {

	        if (_date.datetext >= datetext) {
	            return true;
	        }
	    });
	}

	function last_month_part(dater) {
	    return (0, _apage.get_full_month_dates)(dater);
	}

	// [ '2015-10-03','2015-10-03'[,...] ]
	function full_month_dates(dater_arr) {
	    return dater_arr.map(function (dater) {
	        return (0, _apage.get_full_month_dates)(dater);
	    });
	}

	// 尾调用
	function loop_full_month(prev, next, arr) {
	    var last_day, prev_ym;

	    arr = arr || [];

	    prev_ym = (0, _lang.next_month)(prev.year, prev.month);

	    if (prev_ym.year + '' + (+prev_ym.month + 10) >= next.year + '' + (+next.month + 10)) return arr;

	    last_day = (0, _apage.month_last_day)(prev_ym.year, prev_ym.month);
	    arr.push(last_day.dater);
	    return loop_full_month(prev_ym, next, arr);
	}

	function gt(start, end) {
	    return +start.replace(/-/g, '') > +end.replace(/-/g, '');
	}

	function split_ym(dater) {
	    dater = dater.split('-');
	    return {
	        year: dater[0],
	        month: dater[1] - 1,
	        datetext: dater[2]
	    };
	}

	module.exports = {
	    split_ym: split_ym,
	    get_range_dates: get_range_dates
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDaterMulti\" cid=\"KsDaterMulti\">\n    <div class=\"_date\">\n        <div class=\"_head\">\n            <div class=\"retreat\" v-on:click=\"click_month(-1)\">&lt;</div>\n            <div class=\"year\">{{now.getFullYear()}}年</div>\n            <div class=\"interstice\"></div>\n            <div class=\"month\">{{now.getMonth()+1}}月</div>\n            <div class=\"next\" v-on:click=\"click_month(1)\">&gt;</div>\n        </div>\n        <div class=\"_week\">\n            <span v-for=\"day in days\" :class=\"{'week':day=='六'||day=='日'}\">{{day}}</span>\n        </div>\n        <div v-on:click=\"pick_date($event)\">\n            <div class=\"_days\" v-for=\"week in 6\">\n                <span \n                    v-for=\"day in  7\"\n                    :id=\"'dater'+_uid+'_'+(+week * 7 + day)+'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)\"\n                    :class=\"{\n                        'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',\n                        'scope-bg':dates[week * 7 + day] && dates[week * 7 + day].status=='scope-bg',\n                        'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}\">\n                        {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>\n            </div>\n        </div>\n        <div class=\"_btn\">\n            <span class=\"reset\" v-on:click=\"reset()\">重置</span>\n        </div>\n    </div>\n    <div class=\"_date\">\n        <div class=\"_head\">\n            <div class=\"retreat\" v-on:click=\"click_next_month(-1)\">&lt;</div>\n            <div class=\"year\">{{next_data.year}}年</div>\n            <div class=\"interstice\"></div>\n            <div class=\"month\">{{next_data.month+1}}月</div>\n            <div class=\"next\" v-on:click=\"click_next_month(1)\">&gt;</div>\n        </div>\n        <div class=\"_week\">\n            <span v-for=\"day in days\" :class=\"{'week':day=='六'||day=='日'}\">{{day}}</span>\n        </div>\n        <div v-on:click=\"pick_date($event)\">\n            <div class=\"_days\"\n                v-for=\"week in 6\">\n                <span \n                    v-for=\"day in  7\"\n                    :id=\"'dater'+_uid+'_'+(42+week * 7 + day)+'_'+(next_dates[week * 7 + day] && next_dates[week * 7 + day].status)\"\n                    :class=\"{\n                        'pass':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='disabled',\n                        'scope-bg':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='scope-bg',\n                        'active':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='active'}\">\n                        {{next_dates[week * 7 + day] && +next_dates[week * 7 + day].datetext}}</span>\n            </div>\n        </div>\n        <div class=\"_btn\">\n            <span class=\"selects\">已选择{{range_daters_length}}天</span>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(117)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/date-multi-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(118)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-69e4d20a/date-multi-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _props = __webpack_require__(106);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_props2.default],
	    props: {
	        range: {
	            type: Array
	        },
	        placeholder: {
	            coerce: function coerce(val) {
	                val = val || '';
	                if (~val.indexOf(',')) {
	                    console.log(val.split(','));
	                    return val.split(',');
	                }

	                return [val];
	            }
	        }
	    },
	    data: function data() {
	        return {
	            show: false
	        };
	    },

	    methods: {
	        close: function close() {
	            this.show = false;
	        },
	        change: function change(range) {
	            // console.log(range)
	            this.range = range;
	            range.length == 2 && this.$emit('change', range);
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        document.addEventListener('click', function (e) {
	            if (_this.$el && !_this.$el.contains(e.target)) {
	                _this.close();
	            }
	        }, false);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.close, false);
	    }
	};
	// </script>
	// <template>
	// <div class="KsDaterMultiPicker readonly" cid="KsDaterMultiPicker">
	//     <div class="_input" v-on:click="show=!show">
	//         <div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
	//         <div class="ks-col">
	//             <div class="ks-row-auto">
	//                 <div class="ks-col">
	//                     <input type="text" placeholder="{{placeholder[0]}}" :value="range[0]">
	//                 </div>
	//                 <i class="icon ks-col-auto scope-icon">&#xe677;</i>
	//                 <div class="ks-col">
	//                     <input type="text" placeholder="{{placeholder[1]}}" :value="range[1]">
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	//     <ks-dater-multi v-show="show" v-on:change="change" :range_dater="range"></ks-dater-multi> 
	// </div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDaterMultiPicker readonly\" cid=\"KsDaterMultiPicker\">\n    <div class=\"_input\" v-on:click=\"show=!show\">\n        <div class=\"ks-col-auto date-icon\"><i class=\"icon\">&#xe615;</i></div>\n        <div class=\"ks-col\">\n            <div class=\"ks-row-auto\">\n                <div class=\"ks-col\">\n                    <input type=\"text\" placeholder=\"{{placeholder[0]}}\" :value=\"range[0]\">\n                </div>\n                <i class=\"icon ks-col-auto scope-icon\">&#xe677;</i>\n                <div class=\"ks-col\">\n                    <input type=\"text\" placeholder=\"{{placeholder[1]}}\" :value=\"range[1]\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <ks-dater-multi v-show=\"show\" v-on:change=\"change\" :range_dater=\"range\"></ks-dater-multi> \n</div>\n";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/dater/date-month.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(121)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-559d1277/date-month.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="KsDateMonth" cid="KsDateMonth">
	//         <div class="_date">
	//             <div class="_head">
	//                 <div class="retreat">&lt;</div>
	//                 <div class="year">2016年</div>
	//                 <div class="next">&gt;</div>
	//             </div>
	//             <div class="_days"
	//                 v-for="row in 3">
	//                 <span class="pass" v-for="item in 4">{{months[4*row+item]}}</span>
	//             </div>
	//             <!-- <div class="_days">
	//                 <span class="pass">一月</span>
	//                 <span class="pass">二月</span>
	//                 <span class="pass">三月</span>
	//                 <span class="pass">四月</span>
	//             </div>
	//             <div class="_days">
	//                 <span>五月</span>
	//                 <span>六月</span>
	//                 <span>七月</span>
	//                 <span>八月</span>
	//             </div>
	//             <div class="_days">
	//                 <span>九月</span>
	//                 <span>十月</span>
	//                 <span class="active">十一月</span>
	//                 <span>十二月</span>
	//             </div> -->
	//
	//             <div class="_btn">
	//                 <span class="today">本月</span>
	//                 <span class="clear">清除</span>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    data: function data() {
	        return {
	            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	        };
	    }
	};
	// </script>

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDateMonth\" cid=\"KsDateMonth\">\n    <div class=\"_date\">\n        <div class=\"_head\">\n            <div class=\"retreat\">&lt;</div>\n            <div class=\"year\">2016年</div>\n            <div class=\"next\">&gt;</div>\n        </div>\n        <div class=\"_days\"\n            v-for=\"row in 3\">\n            <span class=\"pass\" v-for=\"item in 4\">{{months[4*row+item]}}</span>\n        </div>\n        <!-- <div class=\"_days\">\n            <span class=\"pass\">一月</span>\n            <span class=\"pass\">二月</span>\n            <span class=\"pass\">三月</span>\n            <span class=\"pass\">四月</span>\n        </div>\n        <div class=\"_days\">\n            <span>五月</span>\n            <span>六月</span>\n            <span>七月</span>\n            <span>八月</span>\n        </div>\n        <div class=\"_days\">\n            <span>九月</span>\n            <span>十月</span>\n            <span class=\"active\">十一月</span>\n            <span>十二月</span>\n        </div> -->\n        \n        <div class=\"_btn\">\n            <span class=\"today\">本月</span>\n            <span class=\"clear\">清除</span>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsCitySelect = undefined;

	var _KsCitySelect = __webpack_require__(123);

	var _KsCitySelect2 = _interopRequireDefault(_KsCitySelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _KsCitySelect2.default; /**
	                                           * @description 省市区联动组件.
	                                           * @summary
	                                           *  I'am cute component.
	                                           * @author: pkeros.
	                                           * @date: 2016/11/10.
	                                           */

	exports.KsCitySelect = _KsCitySelect2.default;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsCitySelect.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsCitySelect/src/KsCitySelect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(125)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1a091eff/KsCitySelect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="KsCitySelect" cid="KsCitySelect"
	//        v-ks-scroll-bound-value:150:200:100:10="scrollHandle">
	//     <div class="_input">
	//       <div class="_icon">
	//         <i class="icon">&#xe668;</i>
	//       </div>
	//       <input type="text" class="ks-col" readonly v-model="selectedValue"
	//              @click="show = true"
	//       >
	//     </div>
	//     <div class="_bd" v-if="show">
	//       <ul class="_tab" @click.stop="tabSwitchHandle">
	//         <li v-for="tab in tabs" :class="tabsCurrentActived === $index && 'active'"
	//             :data-tabId="$index" v-text="tab"></li>
	//       </ul>
	//       <div class="_content">
	//         <p v-if="!dataSource.length">Sorry, 暂无相关数据!</p>
	//         <table class="_list" @click.stop="itemSelectedHandle" v-if="dataSource.length">
	//           <tr v-for="line in locationList">
	//             <td v-for="location in line" v-text="location[itemTextKey]"
	//                 :data-itemId="$parent.$index*lineSize + $index"
	//                 :class="itemActivitedControl === $parent.$index*lineSize + $index && 'active'"></td>
	//           </tr>
	//         </table>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KSCitySelect',

	  data: function data() {
	    return {
	      show: false,
	      tabsCurrentActived: 0,
	      itemCurrentActived: [{ id: null, name: '' }]
	    };
	  },


	  props: {
	    tabs: { type: Array, default: function _default() {
	        return ['省', '市', '区/县'];
	      }
	    },
	    dataSource: { type: Array, required: true, towWay: true },
	    lineSize: { type: Number, default: 4 },
	    itemTextKey: { type: String, required: true }
	  },

	  methods: {
	    /**
	     * @description 切换 `忒伯` 处理函数.
	     * @summary 此处绑定在 `ul` 利用事件冒泡是为了
	     *  减少事件绑定的数量.
	     * @param target {Element} Dom 对象.
	     */
	    tabSwitchHandle: function tabSwitchHandle(_ref) {
	      var target = _ref.target;

	      var tabId = target.getAttribute('data-tabId');

	      if (!tabId) {
	        return;
	      }
	      // 切换 tab
	      this.dataSource = [];
	      this.tabsCurrentActived = Number(tabId);
	      this.$emit('switch', Number(tabId), null);
	    },


	    /**
	     * @description 处理选择器关闭.
	     */
	    closeHandle: function closeHandle() {
	      if (this.show) {
	        this.show = false;
	      }
	    },


	    /**
	     * @description 地域选中处理函数.
	     * @summary 此处绑定在 `table` 利用事件冒泡是为了
	     *  减少事件绑定的数量.
	     * @param target {Element} Dom 对象.
	     */
	    itemSelectedHandle: function itemSelectedHandle(_ref2) {
	      var target = _ref2.target;

	      var itemId = target.getAttribute('data-itemId');
	      var curTab = this.tabsCurrentActived;
	      var tabsSize = this.tabs.length;

	      if (!itemId) {
	        return;
	      }

	      // 选中 item 并且清除后续选中项
	      this.$set('itemCurrentActived[' + curTab + ']', { id: itemId, name: target.innerText });
	      for (var i = curTab + 1; i <= tabsSize - 1; i++) {
	        this.$set('itemCurrentActived[' + i + ']', { id: null, name: '' });
	      }
	      // 选中 tabs
	      this.tabsCurrentActived = curTab >= tabsSize - 1 ? curTab : curTab + 1;

	      this.$emit('switch', this.tabsCurrentActived, this.dataSource[Number(itemId)]);
	    }
	  },

	  computed: {
	    /**
	     * @description 用于计算当前选中 item.
	     * @return {Boolean/Number} *
	     */
	    itemActivitedControl: function itemActivitedControl() {
	      var ica = 'itemCurrentActived';
	      var tca = 'tabsCurrentActived';
	      var hasSelect = this[ica][this[tca]] ? this[ica][this[tca]].id : false;

	      if (!hasSelect) {
	        return false;
	      }
	      return Number(hasSelect);
	    },


	    /**
	     * @description 地域列表.
	     * @summary 就是当前需要显示的地域.
	     * @returns {Array}
	     */
	    locationList: function locationList() {
	      var _this = this;

	      var result = [],
	          line = [],
	          accumulator = -1;

	      this.dataSource.forEach(function (item, i) {
	        var hasBreakLine = ++accumulator === _this.lineSize;

	        // 检查是否需要折行
	        if (hasBreakLine) {
	          result.push(line);line = [];accumulator = 0;
	        }
	        line.push(item);
	      });
	      result.push(line);

	      return result;
	    },


	    /**
	     * @description 当前已经选中的值.
	     */
	    selectedValue: function selectedValue() {
	      var result = [];
	      var tabsSize = this.tabs.length;
	      var ica = this.itemCurrentActived;

	      for (var i = 0; i < tabsSize; i++) {
	        if (!ica[i]) {
	          continue;
	        }
	        if (!ica[i].id) {
	          result.push('请选择');
	        } else {
	          result.push(ica[i].name);
	        }
	      }

	      return result.join(' / ');
	    }
	  },

	  created: function created() {
	    // 初始化组件数据
	    var initData = { id: null, name: '请选择' };
	    var tabsSize = this.tabs.length;
	    for (var i = 0; i < tabsSize; i++) {
	      this.$set('itemCurrentActived[' + i + ']', initData);
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//     /*@import '../../sass/components/city-select';*/
	// </style>

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsCitySelect\" cid=\"KsCitySelect\"\n     v-ks-scroll-bound-value:150:200:100:10=\"scrollHandle\">\n  <div class=\"_input\">\n    <div class=\"_icon\">\n      <i class=\"icon\">&#xe668;</i>\n    </div>\n    <input type=\"text\" class=\"ks-col\" readonly v-model=\"selectedValue\"\n           @click=\"show = true\"\n    >\n  </div>\n  <div class=\"_bd\" v-if=\"show\">\n    <ul class=\"_tab\" @click.stop=\"tabSwitchHandle\">\n      <li v-for=\"tab in tabs\" :class=\"tabsCurrentActived === $index && 'active'\"\n          :data-tabId=\"$index\" v-text=\"tab\"></li>\n    </ul>\n    <div class=\"_content\">\n      <p v-if=\"!dataSource.length\">Sorry, 暂无相关数据!</p>\n      <table class=\"_list\" @click.stop=\"itemSelectedHandle\" v-if=\"dataSource.length\">\n        <tr v-for=\"line in locationList\">\n          <td v-for=\"location in line\" v-text=\"location[itemTextKey]\"\n              :data-itemId=\"$parent.$index*lineSize + $index\"\n              :class=\"itemActivitedControl === $parent.$index*lineSize + $index && 'active'\"></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsToolTip = undefined;

	var _main = __webpack_require__(127);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _main2.default; /**
	                                   * @description: tooltip 组件.
	                                   * @author: pkeros.
	                                   * @date: 2016/11/14.
	                                   */

	exports.KsToolTip = _main2.default;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(128)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/KsToolTip/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2d940503/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(80);

	var _vue2 = _interopRequireDefault(_vue);

	var _util = __webpack_require__(129);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div v-el:reference cid="KsToolTip" style="display: inline-block"
	//         @mouseenter="handleShowPopper"
	//         @mouseleave="handleClosePopper"
	//   >
	//     <div style="display: inline-block">
	//         <slot></slot>
	//     </div>
	//
	//     <div transition="KsTooltipTransition" class="KsToolTip"
	//          v-el:popper v-show="!disabled && showPopper">
	//       <div v-text="content"></div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'KsToolTip',

	  mixins: [_util.VuePopper],

	  data: function data() {
	    return {};
	  },


	  props: {
	    arrowClassName: { type: String, default: 'KsToolTip-arrow' },
	    openDelay: { type: Number, default: 0 },
	    disabled: Boolean,
	    content: String,
	    visibleArrow: { default: true },
	    transition: { type: String, default: 'fade-in-linear' },
	    options: {
	      default: function _default() {
	        return {
	          boundariesPadding: 10,
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  methods: {
	    handleShowPopper: function handleShowPopper() {
	      var _this = this;

	      this.timeout = setTimeout(function () {
	        _this.showPopper = true;
	      }, this.openDelay);
	    },
	    handleClosePopper: function handleClosePopper() {
	      clearTimeout(this.timeout);
	      this.showPopper = false;
	    }
	  },

	  created: function created() {
	    // 初始化
	    _vue2.default.transition('KsTooltipTransition', {
	      afterLeave: this.doDestroy
	    });
	  }
	};
	// </script>
	//
	// <style lang="scss">
	// </style>

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VuePopper = exports.StringUtil = exports.DomUtil = undefined;

	var _DomUtil = __webpack_require__(130);

	var _DomUtil2 = _interopRequireDefault(_DomUtil);

	var _Popper = __webpack_require__(131);

	var _Popper2 = _interopRequireDefault(_Popper);

	var _StringUtil = __webpack_require__(176);

	var _StringUtil2 = _interopRequireDefault(_StringUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DomUtil = _DomUtil2.default;
	exports.StringUtil = _StringUtil2.default;
	exports.VuePopper = _Popper2.default; /**
	                                       * @description 包含一些公用的工具方法.
	                                       * @author pkeros.
	                                       * @date 2016/11/11.
	                                       */

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	var query = function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	};

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	var inDoc = function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	};

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	var getAttr = function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	};

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	var getBindAttr = function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	};

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	var hasBindAttr = function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	};

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	var before = function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	};

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	var after = function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	};

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	var remove = function remove(el) {
	  el.parentNode.removeChild(el);
	};

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	var prepend = function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	};

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	var replace = function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	};

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	var on = function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	};

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	var off = function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	};

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	var setClass = function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	};

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	var addClass = function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	};

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	var removeClass = function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	};

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	var extractContent = function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	};

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	var trimNode = function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while (child = node.firstChild, isTrimmable(child)) {
	    node.removeChild(child);
	  }
	  while (child = node.lastChild, isTrimmable(child)) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	};

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	var isTemplate = function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	};

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	var createAnchor = function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	};

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;
	var findRef = function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	};

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	var mapNodeRange = function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	};

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	var removeNodeRange = function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	};

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	var isFragment = function isFragment(node) {
	  return node && node.nodeType === 11;
	};

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	var getOuterHTML = function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	};

	exports.default = {
	  query: query,
	  off: off,
	  on: on,
	  after: after,
	  before: before,
	  setClass: setClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  inDoc: inDoc,
	  getAttr: getAttr,
	  getBindAttr: getBindAttr,
	  hasBindAttr: hasBindAttr,
	  remove: remove,
	  prepend: prepend,
	  replace: replace,
	  extractContent: extractContent,
	  trimNode: trimNode,
	  isTemplate: isTemplate,
	  findRef: findRef,
	  getOuterHTML: getOuterHTML,
	  mapNodeRange: mapNodeRange,
	  removeNodeRange: removeNodeRange,
	  isFragment: isFragment
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popper = __webpack_require__(132);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
	 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
	 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -right), left(-start, -end)
	 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
	 * @param {Boolean} [visible=false] Visibility of the popup element.
	 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
	 */
	exports.default = {
	  props: {
	    placement: { type: String, default: 'bottom' },
	    boundariesPadding: { type: Number, default: 5 },
	    reference: Object,
	    popper: Object,
	    offset: { default: 0 },
	    value: Boolean,
	    visibleArrow: Boolean,
	    transition: String,
	    options: { type: Object, default: function _default() {
	        return {};
	      }
	    }
	  },

	  data: function data() {
	    return {
	      showPopper: false
	    };
	  },


	  watch: {
	    value: {
	      immediate: true,
	      handler: function handler(val) {
	        this.showPopper = val;
	        this.$emit('input', val);
	      }
	    },

	    showPopper: function showPopper(val) {
	      val ? this.updatePopper() : this.destroyPopper();
	      this.$emit('input', val);
	    }
	  },

	  methods: {
	    createPopper: function createPopper() {
	      var _this = this;

	      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
	        return;
	      }

	      var options = this.options;
	      var popper = this.popper || this.$els.popper;
	      var reference = this.reference || this.$els.reference;

	      if (!popper || !reference) return;
	      if (this.visibleArrow) {
	        this.appendArrow(popper);
	      }

	      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
	        this.popperJS.destroy();
	      }

	      options.placement = this.placement;
	      options.offset = this.offset;

	      this.$nextTick(function () {
	        _this.popperJS = new _popper2.default(reference, popper, options);
	        _this.popperJS.onCreate(function (popper) {
	          _this.resetTransformOrigin(popper);
	          _this.$emit('created', _this);
	        });
	      });
	    },
	    updatePopper: function updatePopper() {
	      if (this.popperJS) {
	        this.popperJS.update();
	      } else {
	        this.createPopper();
	      }
	    },
	    doDestroy: function doDestroy() {
	      if (this.showPopper) return;
	      this.popperJS.destroy();
	      this.popperJS = null;
	    },
	    destroyPopper: function destroyPopper() {
	      if (this.popperJS) {
	        this.resetTransformOrigin(this.popperJS);
	      }
	    },
	    resetTransformOrigin: function resetTransformOrigin(popper) {
	      var placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
	      var placement = popper._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      popper._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
	    },
	    appendArrow: function appendArrow(element) {
	      var hash = void 0;
	      if (this.appended) {
	        return;
	      }

	      this.appended = true;

	      for (var item in element.attributes) {
	        if (/^_v-/.test(element.attributes[item].name)) {
	          hash = element.attributes[item].name;
	          break;
	        }
	      }

	      var arrow = document.createElement('div');

	      if (hash) {
	        arrow.setAttribute(hash, '');
	      }
	      arrow.setAttribute('x-arrow', '');
	      arrow.className = this.arrowClassName;
	      element.appendChild(arrow);
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    if (this.popperJS) {
	      this.popperJS.destroy();
	    }
	  }
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(133);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(40);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(137);

	var _assign2 = _interopRequireDefault(_assign);

	var _typeof2 = __webpack_require__(142);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version {{version}}
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */

	//
	// Cross module loader
	// Supported: Node, AMD, Browser globals
	//
	;(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.Popper = factory();
	    }
	})(undefined, function () {

	    'use strict';

	    var root = window;

	    // default options
	    var DEFAULTS = {
	        // placement of the popper
	        placement: 'bottom',

	        gpuAcceleration: true,

	        // shift popper from its origin by the given amount of pixels (can be negative)
	        offset: 0,

	        // the element which will act as boundary of the popper
	        boundariesElement: 'viewport',

	        // amount of pixel used to define a minimum distance between the boundaries and the popper
	        boundariesPadding: 5,

	        // popper will try to prevent overflow following this order,
	        // by default, then, it could overflow on the left and on top of the boundariesElement
	        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

	        // the behavior used by flip to change the placement of the popper
	        flipBehavior: 'flip',

	        arrowElement: '[x-arrow]',

	        // list of functions used to modify the offsets before they are applied to the popper
	        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

	        modifiersIgnored: [],

	        forceAbsolute: false
	    };

	    /**
	     * Create a new Popper.js instance
	     * @constructor Popper
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement|Object} popper
	     *      The HTML element used as popper, or a configuration used to generate the popper.
	     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
	     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
	     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
	     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
	     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
	     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
	     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
	     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
	     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
	     * @param {Object} options
	     * @param {String} [options.placement=bottom]
	     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
	     *      left(-start, -end)`
	     *
	     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
	     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	     *      reference element.
	     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	     *
	     * @param {Boolean} [options.gpuAcceleration=true]
	     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	     *      browser to use the GPU to accelerate the rendering.
	     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	     *
	     * @param {Number} [options.offset=0]
	     *      Amount of pixels the popper will be shifted (can be negative).
	     *
	     * @param {String|Element} [options.boundariesElement='viewport']
	     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	     *      of the defined boundaries (except if `keepTogether` is enabled)
	     *
	     * @param {Number} [options.boundariesPadding=5]
	     *      Additional padding for the boundaries
	     *
	     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
	     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	     *      this means that the last ones will never overflow
	     *
	     * @param {String|Array} [options.flipBehavior='flip']
	     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	     *      its axis (`right - left`, `top - bottom`).
	     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	     *
	     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
	     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
	     *      to this array to edit the offsets and placement.
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Array} [options.modifiersIgnored=[]]
	     *      Put here any built-in modifier name you want to exclude from the modifiers list
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Boolean} [options.removeOnDestroy=false]
	     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	     */
	    function Popper(reference, popper, options) {
	        this._reference = reference.jquery ? reference[0] : reference;
	        this.state = {};

	        // if the popper variable is a configuration object, parse it to generate an HTMLElement
	        // generate a default popper if is not defined
	        var isNotDefined = typeof popper === 'undefined' || popper === null;
	        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	        if (isNotDefined || isConfig) {
	            this._popper = this.parse(isConfig ? popper : {});
	        }
	        // otherwise, use the given HTMLElement as popper
	        else {
	                this._popper = popper.jquery ? popper[0] : popper;
	            }

	        // with {} we create a new object with the options inside it
	        this._options = (0, _assign2.default)({}, DEFAULTS, options);

	        // refactoring modifiers' list
	        this._options.modifiers = this._options.modifiers.map(function (modifier) {
	            // remove ignored modifiers
	            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

	            // set the x-placement attribute before everything else because it could be used to add margins to the popper
	            // margins needs to be calculated to get the correct popper offsets
	            if (modifier === 'applyStyle') {
	                this._popper.setAttribute('x-placement', this._options.placement);
	            }

	            // return predefined modifier identified by string or keep the custom one
	            return this.modifiers[modifier] || modifier;
	        }.bind(this));

	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position });

	        // fire the first update to position the popper in the right place
	        this.update();

	        // setup event listeners, they will take care of update the position in specific situations
	        this._setupEventListeners();
	        return this;
	    }

	    //
	    // Methods
	    //
	    /**
	     * Destroy the popper
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.destroy = function () {
	        this._popper.removeAttribute('x-placement');
	        this._popper.style.left = '';
	        this._popper.style.position = '';
	        this._popper.style.top = '';
	        this._popper.style[getSupportedPropertyName('transform')] = '';
	        this._removeEventListeners();

	        // remove the popper if user explicity asked for the deletion on destroy
	        if (this._options.removeOnDestroy) {
	            this._popper.remove();
	        }
	        return this;
	    };

	    /**
	     * Updates the position of the popper, computing the new offsets and applying the new style
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.update = function () {
	        var data = { instance: this, styles: {} };

	        // store placement inside the data object, modifiers will be able to edit `placement` if needed
	        // and refer to _originalPlacement to know the original value
	        data.placement = this._options.placement;
	        data._originalPlacement = this._options.placement;

	        // compute the popper and reference offsets and put them inside data.offsets
	        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

	        // get boundaries
	        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

	        data = this.runModifiers(data, this._options.modifiers);

	        if (typeof this.state.updateCallback === 'function') {
	            this.state.updateCallback(data);
	        }
	    };

	    /**
	     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onCreate = function (callback) {
	        // the createCallbacks return as first argument the popper instance
	        callback(this);
	        return this;
	    };

	    /**
	     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
	     * used to style popper and its arrow.
	     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onUpdate = function (callback) {
	        this.state.updateCallback = callback;
	        return this;
	    };

	    /**
	     * Helper used to generate poppers from a configuration file
	     * @method
	     * @memberof Popper
	     * @param config {Object} configuration
	     * @returns {HTMLElement} popper
	     */
	    Popper.prototype.parse = function (config) {
	        var defaultConfig = {
	            tagName: 'div',
	            classNames: ['popper'],
	            attributes: [],
	            parent: root.document.body,
	            content: '',
	            contentType: 'text',
	            arrowTagName: 'div',
	            arrowClassNames: ['popper__arrow'],
	            arrowAttributes: ['x-arrow']
	        };
	        config = (0, _assign2.default)({}, defaultConfig, config);

	        var d = root.document;

	        var popper = d.createElement(config.tagName);
	        addClassNames(popper, config.classNames);
	        addAttributes(popper, config.attributes);
	        if (config.contentType === 'node') {
	            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	        } else if (config.contentType === 'html') {
	            popper.innerHTML = config.content;
	        } else {
	            popper.textContent = config.content;
	        }

	        if (config.arrowTagName) {
	            var arrow = d.createElement(config.arrowTagName);
	            addClassNames(arrow, config.arrowClassNames);
	            addAttributes(arrow, config.arrowAttributes);
	            popper.appendChild(arrow);
	        }

	        var parent = config.parent.jquery ? config.parent[0] : config.parent;

	        // if the given parent is a string, use it to match an element
	        // if more than one element is matched, the first one will be used as parent
	        // if no elements are matched, the script will throw an error
	        if (typeof parent === 'string') {
	            parent = d.querySelectorAll(config.parent);
	            if (parent.length > 1) {
	                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	            }
	            if (parent.length === 0) {
	                throw 'ERROR: the given `parent` doesn\'t exists!';
	            }
	            parent = parent[0];
	        }
	        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
	        // the first one will be used as parent
	        if (parent.length > 1 && parent instanceof Element === false) {
	            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	            parent = parent[0];
	        }

	        // append the generated popper to its parent
	        parent.appendChild(popper);

	        return popper;

	        /**
	         * Adds class names to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} classes
	         */
	        function addClassNames(element, classNames) {
	            classNames.forEach(function (className) {
	                element.classList.add(className);
	            });
	        }

	        /**
	         * Adds attributes to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} attributes
	         * @example
	         * addAttributes(element, [ 'data-info:foobar' ]);
	         */
	        function addAttributes(element, attributes) {
	            attributes.forEach(function (attribute) {
	                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	            });
	        }
	    };

	    /**
	     * Helper used to get the position which will be applied to the popper
	     * @method
	     * @memberof Popper
	     * @param config {HTMLElement} popper element
	     * @returns {HTMLElement} reference element
	     */
	    Popper.prototype._getPosition = function (popper, reference) {
	        var container = getOffsetParent(reference);

	        if (this._options.forceAbsolute) {
	            return 'absolute';
	        }

	        // Decide if the popper will be fixed
	        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	        var isParentFixed = isFixed(reference, container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    };

	    /**
	     * Get offsets to the popper
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Element} popper - the popper element
	     * @param {Element} reference - the reference element (the popper will be relative to this)
	     * @returns {Object} An object containing the offsets which will be applied to the popper
	     */
	    Popper.prototype._getOffsets = function (popper, reference, placement) {
	        placement = placement.split('-')[0];
	        var popperOffsets = {};

	        popperOffsets.position = this.state.position;
	        var isParentFixed = popperOffsets.position === 'fixed';

	        //
	        // Get reference element position
	        //
	        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

	        //
	        // Get popper sizes
	        //
	        var popperRect = getOuterSizes(popper);

	        //
	        // Compute offsets of popper
	        //

	        // depending by the popper placement we have to compute its offsets slightly differently
	        if (['right', 'left'].indexOf(placement) !== -1) {
	            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	            if (placement === 'left') {
	                popperOffsets.left = referenceOffsets.left - popperRect.width;
	            } else {
	                popperOffsets.left = referenceOffsets.right;
	            }
	        } else {
	            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	            if (placement === 'top') {
	                popperOffsets.top = referenceOffsets.top - popperRect.height;
	            } else {
	                popperOffsets.top = referenceOffsets.bottom;
	            }
	        }

	        // Add width and height to our offsets object
	        popperOffsets.width = popperRect.width;
	        popperOffsets.height = popperRect.height;

	        return {
	            popper: popperOffsets,
	            reference: referenceOffsets
	        };
	    };

	    /**
	     * Setup needed event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._setupEventListeners = function () {
	        // NOTE: 1 DOM access here
	        this.state.updateBound = this.update.bind(this);
	        root.addEventListener('resize', this.state.updateBound);
	        // if the boundariesElement is window we don't need to listen for the scroll event
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.addEventListener('scroll', this.state.updateBound);
	        }
	    };

	    /**
	     * Remove event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._removeEventListeners = function () {
	        // NOTE: 1 DOM access here
	        root.removeEventListener('resize', this.state.updateBound);
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.removeEventListener('scroll', this.state.updateBound);
	        }
	        this.state.updateBound = null;
	    };

	    /**
	     * Computed the boundaries limits and return them
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	     * @param {Number} padding - Boundaries padding
	     * @param {Element} boundariesElement - Element used to define the boundaries
	     * @returns {Object} Coordinates of the boundaries
	     */
	    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
	        // NOTE: 1 DOM access here
	        var boundaries = {};
	        var width, height;
	        if (boundariesElement === 'window') {
	            var body = root.document.body,
	                html = root.document.documentElement;

	            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

	            boundaries = {
	                top: 0,
	                right: width,
	                bottom: height,
	                left: 0
	            };
	        } else if (boundariesElement === 'viewport') {
	            var offsetParent = getOffsetParent(this._popper);
	            var scrollParent = getScrollParent(this._popper);
	            var offsetParentRect = getOffsetRect(offsetParent);

	            // if the popper is fixed we don't have to substract scrolling from the boundaries
	            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

	            boundaries = {
	                top: 0 - (offsetParentRect.top - scrollTop),
	                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	                left: 0 - (offsetParentRect.left - scrollLeft)
	            };
	        } else {
	            if (getOffsetParent(this._popper) === boundariesElement) {
	                boundaries = {
	                    top: 0,
	                    left: 0,
	                    right: boundariesElement.clientWidth,
	                    bottom: boundariesElement.clientHeight
	                };
	            } else {
	                boundaries = getOffsetRect(boundariesElement);
	            }
	        }
	        boundaries.left += padding;
	        boundaries.right -= padding;
	        boundaries.top = boundaries.top + padding;
	        boundaries.bottom = boundaries.bottom - padding;
	        return boundaries;
	    };

	    /**
	     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	     * @method
	     * @memberof Popper
	     * @access public
	     * @param {Object} data
	     * @param {Array} modifiers
	     * @param {Function} ends
	     */
	    Popper.prototype.runModifiers = function (data, modifiers, ends) {
	        var modifiersToRun = modifiers.slice();
	        if (ends !== undefined) {
	            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	        }

	        modifiersToRun.forEach(function (modifier) {
	            if (isFunction(modifier)) {
	                data = modifier.call(this, data);
	            }
	        }.bind(this));

	        return data;
	    };

	    /**
	     * Helper used to know if the given modifier depends from another one.
	     * @method
	     * @memberof Popper
	     * @returns {Boolean}
	     */

	    Popper.prototype.isModifierRequired = function (requesting, requested) {
	        var index = getArrayKeyIndex(this._options.modifiers, requesting);
	        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
	            return modifier === requested;
	        }).length;
	    };

	    //
	    // Modifiers
	    //

	    /**
	     * Modifiers list
	     * @namespace Popper.modifiers
	     * @memberof Popper
	     * @type {Object}
	     */
	    Popper.prototype.modifiers = {};

	    /**
	     * Apply the computed styles to the popper element
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The same data object
	     */
	    Popper.prototype.modifiers.applyStyle = function (data) {
	        // apply the final offsets to the popper
	        // NOTE: 1 DOM access here
	        var styles = {
	            position: data.offsets.popper.position
	        };

	        // round top and left to avoid blurry text
	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);

	        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
	        // we automatically use the supported prefixed version if needed
	        var prefixedProperty;
	        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	        }
	        // othwerise, we use the standard `left` and `top` properties
	        else {
	                styles.left = left;
	                styles.top = top;
	            }

	        // any property present in `data.styles` will be applied to the popper,
	        // in this way we can make the 3rd party modifiers add custom styles to it
	        // Be aware, modifiers could override the properties defined in the previous
	        // lines of this modifier!
	        (0, _assign2.default)(styles, data.styles);

	        setStyle(this._popper, styles);

	        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
	        // NOTE: 1 DOM access here
	        this._popper.setAttribute('x-placement', data.placement);

	        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
	        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
	            setStyle(data.arrowElement, data.offsets.arrow);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to shift the popper on the start or end of its reference element side
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.shift = function (data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftVariation = placement.split('-')[1];

	        // if shift shiftVariation is specified, run the modifier
	        if (shiftVariation) {
	            var reference = data.offsets.reference;
	            var popper = getPopperClientRect(data.offsets.popper);

	            var shiftOffsets = {
	                y: {
	                    start: { top: reference.top },
	                    end: { top: reference.top + reference.height - popper.height }
	                },
	                x: {
	                    start: { left: reference.left },
	                    end: { left: reference.left + reference.width - popper.width }
	                }
	            };

	            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	            data.offsets.popper = (0, _assign2.default)(popper, shiftOffsets[axis][shiftVariation]);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to make sure the popper does not overflows from it's boundaries
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.preventOverflow = function (data) {
	        var order = this._options.preventOverflowOrder;
	        var popper = getPopperClientRect(data.offsets.popper);

	        var check = {
	            left: function left() {
	                var left = popper.left;
	                if (popper.left < data.boundaries.left) {
	                    left = Math.max(popper.left, data.boundaries.left);
	                }
	                return { left: left };
	            },
	            right: function right() {
	                var left = popper.left;
	                if (popper.right > data.boundaries.right) {
	                    left = Math.min(popper.left, data.boundaries.right - popper.width);
	                }
	                return { left: left };
	            },
	            top: function top() {
	                var top = popper.top;
	                if (popper.top < data.boundaries.top) {
	                    top = Math.max(popper.top, data.boundaries.top);
	                }
	                return { top: top };
	            },
	            bottom: function bottom() {
	                var top = popper.top;
	                if (popper.bottom > data.boundaries.bottom) {
	                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	                }
	                return { top: top };
	            }
	        };

	        order.forEach(function (direction) {
	            data.offsets.popper = (0, _assign2.default)(popper, check[direction]());
	        });

	        return data;
	    };

	    /**
	     * Modifier used to make sure the popper is always near its reference
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.keepTogether = function (data) {
	        var popper = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var f = Math.floor;

	        if (popper.right < f(reference.left)) {
	            data.offsets.popper.left = f(reference.left) - popper.width;
	        }
	        if (popper.left > f(reference.right)) {
	            data.offsets.popper.left = f(reference.right);
	        }
	        if (popper.bottom < f(reference.top)) {
	            data.offsets.popper.top = f(reference.top) - popper.height;
	        }
	        if (popper.top > f(reference.bottom)) {
	            data.offsets.popper.top = f(reference.bottom);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	     * Requires the `preventOverflow` modifier before it in order to work.
	     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.flip = function (data) {
	        // check if preventOverflow is in the list of modifiers before the flip modifier.
	        // otherwise flip would not work as expected.
	        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	            return data;
	        }

	        if (data.flipped && data.placement === data._originalPlacement) {
	            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	            return data;
	        }

	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';

	        var flipOrder = [];
	        if (this._options.flipBehavior === 'flip') {
	            flipOrder = [placement, placementOpposite];
	        } else {
	            flipOrder = this._options.flipBehavior;
	        }

	        flipOrder.forEach(function (step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return;
	            }

	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);

	            var popperOffsets = getPopperClientRect(data.offsets.popper);

	            // this boolean is used to distinguish right and bottom from top and left
	            // they need different computations to get flipped
	            var a = ['right', 'bottom'].indexOf(placement) !== -1;

	            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
	            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
	                // we'll use this boolean to detect any flip loop
	                data.flipped = true;
	                data.placement = flipOrder[index + 1];
	                if (variation) {
	                    data.placement += '-' + variation;
	                }
	                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

	                data = this.runModifiers(data, this._options.modifiers, this._flip);
	            }
	        }.bind(this));
	        return data;
	    };

	    /**
	     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	     * The offsets will shift the popper on the side of its reference element.
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.offset = function (data) {
	        var offset = this._options.offset;
	        var popper = data.offsets.popper;

	        if (data.placement.indexOf('left') !== -1) {
	            popper.top -= offset;
	        } else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offset;
	        } else if (data.placement.indexOf('top') !== -1) {
	            popper.left -= offset;
	        } else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offset;
	        }
	        return data;
	    };

	    /**
	     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
	     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.arrow = function (data) {
	        var arrow = this._options.arrowElement;

	        // if the arrowElement is a string, suppose it's a CSS selector
	        if (typeof arrow === 'string') {
	            arrow = this._popper.querySelector(arrow);
	        }

	        // if arrow element is not found, don't run the modifier
	        if (!arrow) {
	            return data;
	        }

	        // the arrow element must be child of its popper
	        if (!this._popper.contains(arrow)) {
	            console.warn('WARNING: `arrowElement` must be child of its popper element!');
	            return data;
	        }

	        // arrow depends on keepTogether in order to work
	        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	            return data;
	        }

	        var arrowStyle = {};
	        var placement = data.placement.split('-')[0];
	        var popper = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	        var len = isVertical ? 'height' : 'width';
	        var side = isVertical ? 'top' : 'left';
	        var altSide = isVertical ? 'left' : 'top';
	        var opSide = isVertical ? 'bottom' : 'right';
	        var arrowSize = getOuterSizes(arrow)[len];

	        //
	        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	        //

	        // top/left side
	        if (reference[opSide] - arrowSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	        }
	        // bottom/right side
	        if (reference[side] + arrowSize > popper[opSide]) {
	            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
	        }

	        // compute center of the popper
	        var center = reference[side] + reference[len] / 2 - arrowSize / 2;

	        var sideValue = center - popper[side];

	        // prevent arrow from being placed not contiguously to its popper
	        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	        arrowStyle[side] = sideValue;
	        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

	        data.offsets.arrow = arrowStyle;
	        data.arrowElement = arrow;

	        return data;
	    };

	    //
	    // Helpers
	    //

	    /**
	     * Get the outer sizes of the given element (offset size + margins)
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Object} object containing width and height properties
	     */
	    function getOuterSizes(element) {
	        // NOTE: 1 DOM access here
	        var _display = element.style.display,
	            _visibility = element.style.visibility;
	        element.style.display = 'block';element.style.visibility = 'hidden';
	        var calcWidthToForceRepaint = element.offsetWidth;

	        // original method
	        var styles = root.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

	        // reset element styles
	        element.style.display = _display;element.style.visibility = _visibility;
	        return result;
	    }

	    /**
	     * Get the opposite placement of the given one/
	     * @function
	     * @ignore
	     * @argument {String} placement
	     * @returns {String} flipped placement
	     */
	    function getOppositePlacement(placement) {
	        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function (matched) {
	            return hash[matched];
	        });
	    }

	    /**
	     * Given the popper offsets, generate an output similar to getBoundingClientRect
	     * @function
	     * @ignore
	     * @argument {Object} popperOffsets
	     * @returns {Object} ClientRect like output
	     */
	    function getPopperClientRect(popperOffsets) {
	        var offsets = (0, _assign2.default)({}, popperOffsets);
	        offsets.right = offsets.left + offsets.width;
	        offsets.bottom = offsets.top + offsets.height;
	        return offsets;
	    }

	    /**
	     * Given an array and the key to find, returns its index
	     * @function
	     * @ignore
	     * @argument {Array} arr
	     * @argument keyToFind
	     * @returns index or null
	     */
	    function getArrayKeyIndex(arr, keyToFind) {
	        var i = 0,
	            key;
	        for (key in arr) {
	            if (arr[key] === keyToFind) {
	                return i;
	            }
	            i++;
	        }
	        return null;
	    }

	    /**
	     * Get CSS computed property of the given element
	     * @function
	     * @ignore
	     * @argument {Eement} element
	     * @argument {String} property
	     */
	    function getStyleComputedProperty(element, property) {
	        // NOTE: 1 DOM access here
	        var css = root.getComputedStyle(element, null);
	        return css[property];
	    }

	    /**
	     * Returns the offset parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getOffsetParent(element) {
	        // NOTE: 1 DOM access here
	        var offsetParent = element.offsetParent;
	        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	    }

	    /**
	     * Returns the scrolling parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getScrollParent(element) {
	        if (element === root.document) {
	            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
	            // greater than 0 and return the proper element
	            if (root.document.body.scrollTop) {
	                return root.document.body;
	            } else {
	                return root.document.documentElement;
	            }
	        }

	        // Firefox want us to check `-x` and `-y` variations as well
	        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1) {
	            return element;
	        }
	        return element.parentNode ? getScrollParent(element.parentNode) : element;
	    }

	    /**
	     * Check if the given element is fixed or is inside a fixed parent
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @argument {Element} customContainer
	     * @returns {Boolean} answer to "isFixed?"
	     */
	    function isFixed(element) {
	        if (element === root.document.body) {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return element.parentNode ? isFixed(element.parentNode) : element;
	    }

	    /**
	     * Set the style to the given popper
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to apply the style to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setStyle(element, styles) {
	        function is_numeric(n) {
	            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	        }
	        (0, _keys2.default)(styles).forEach(function (prop) {
	            var unit = '';
	            // add unit if the value is numeric and is one of the following
	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	                unit = 'px';
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }

	    /**
	     * Check if the given variable is a function
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to check
	     * @returns {Boolean} answer to: is a function?
	     */
	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }

	    /**
	     * Get the position of the given element, relative to its offset parent
	     * @function
	     * @ignore
	     * @param {Element} element
	     * @return {Object} position - Coordinates of the element and its `scrollTop`
	     */
	    function getOffsetRect(element) {
	        var elementRect = {
	            width: element.offsetWidth,
	            height: element.offsetHeight,
	            left: element.offsetLeft,
	            top: element.offsetTop
	        };

	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;

	        // position
	        return elementRect;
	    }

	    /**
	     * Get bounding client rect of given element
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @return {Object} client rect
	     */
	    function getBoundingClientRect(element) {
	        var rect = element.getBoundingClientRect();
	        return {
	            left: rect.left,
	            top: rect.top,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rect.top
	        };
	    }

	    /**
	     * Given an element and one of its parents, return the offset
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @param {HTMLElement} parent
	     * @return {Object} rect
	     */
	    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);

	        if (fixed) {
	            var scrollParent = getScrollParent(parent);
	            parentRect.top += scrollParent.scrollTop;
	            parentRect.bottom += scrollParent.scrollTop;
	            parentRect.left += scrollParent.scrollLeft;
	            parentRect.right += scrollParent.scrollLeft;
	        }

	        var rect = {
	            top: elementRect.top - parentRect.top,
	            left: elementRect.left - parentRect.left,
	            bottom: elementRect.top - parentRect.top + elementRect.height,
	            right: elementRect.left - parentRect.left + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };
	        return rect;
	    }

	    /**
	     * Get the prefixed supported property name
	     * @function
	     * @ignore
	     * @argument {String} property (camelCase)
	     * @returns {String} prefixed property (camelCase)
	     */
	    function getSupportedPropertyName(property) {
	        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	        for (var i = 0; i < prefixes.length; i++) {
	            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	            if (typeof root.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }

	    /**
	     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
	     * objects to a target object. It will return the target object.
	     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
	     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	     * @function
	     * @ignore
	     */
	    if (!_assign2.default) {
	        Object.defineProperty(Object, 'assign', {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: function value(target) {
	                if (target === undefined || target === null) {
	                    throw new TypeError('Cannot convert first argument to object');
	                }

	                var to = Object(target);
	                for (var i = 1; i < arguments.length; i++) {
	                    var nextSource = arguments[i];
	                    if (nextSource === undefined || nextSource === null) {
	                        continue;
	                    }
	                    nextSource = Object(nextSource);

	                    var keysArray = (0, _keys2.default)(nextSource);
	                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                        var nextKey = keysArray[nextIndex];
	                        var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
	                        if (desc !== undefined && desc.enumerable) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	                return to;
	            }
	        });
	    }

	    return Popper;
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(135);
	var $Object = __webpack_require__(10).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(27)
	  , $getOwnPropertyDescriptor = __webpack_require__(136).f;

	__webpack_require__(44)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(39)
	  , createDesc     = __webpack_require__(22)
	  , toIObject      = __webpack_require__(27)
	  , toPrimitive    = __webpack_require__(21)
	  , has            = __webpack_require__(26)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(139);
	module.exports = __webpack_require__(10).Object.assign;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(140)});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(24)
	  , gOPS     = __webpack_require__(141)
	  , pIE      = __webpack_require__(39)
	  , toObject = __webpack_require__(43)
	  , IObject  = __webpack_require__(28)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(19)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 141 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(143);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(163);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(145);
	__webpack_require__(158);
	module.exports = __webpack_require__(162).f('iterator');

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(146)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(147)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(33)
	  , defined   = __webpack_require__(30);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(148)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(149)
	  , hide           = __webpack_require__(13)
	  , has            = __webpack_require__(26)
	  , Iterators      = __webpack_require__(150)
	  , $iterCreate    = __webpack_require__(151)
	  , setToStringTag = __webpack_require__(155)
	  , getPrototypeOf = __webpack_require__(157)
	  , ITERATOR       = __webpack_require__(156)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(152)
	  , descriptor     = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(155)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(156)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(15)
	  , dPs         = __webpack_require__(153)
	  , enumBugKeys = __webpack_require__(38)
	  , IE_PROTO    = __webpack_require__(35)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(154).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(14)
	  , anObject = __webpack_require__(15)
	  , getKeys  = __webpack_require__(24);

	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(14).f
	  , has = __webpack_require__(26)
	  , TAG = __webpack_require__(156)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(36)('wks')
	  , uid        = __webpack_require__(37)
	  , Symbol     = __webpack_require__(9).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(26)
	  , toObject    = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(35)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(159);
	var global        = __webpack_require__(9)
	  , hide          = __webpack_require__(13)
	  , Iterators     = __webpack_require__(150)
	  , TO_STRING_TAG = __webpack_require__(156)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(160)
	  , step             = __webpack_require__(161)
	  , Iterators        = __webpack_require__(150)
	  , toIObject        = __webpack_require__(27);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(147)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(156);

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(165);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	module.exports = __webpack_require__(10).Symbol;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(9)
	  , has            = __webpack_require__(26)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(149)
	  , META           = __webpack_require__(166).KEY
	  , $fails         = __webpack_require__(19)
	  , shared         = __webpack_require__(36)
	  , setToStringTag = __webpack_require__(155)
	  , uid            = __webpack_require__(37)
	  , wks            = __webpack_require__(156)
	  , wksExt         = __webpack_require__(162)
	  , wksDefine      = __webpack_require__(167)
	  , keyOf          = __webpack_require__(168)
	  , enumKeys       = __webpack_require__(169)
	  , isArray        = __webpack_require__(170)
	  , anObject       = __webpack_require__(15)
	  , toIObject      = __webpack_require__(27)
	  , toPrimitive    = __webpack_require__(21)
	  , createDesc     = __webpack_require__(22)
	  , _create        = __webpack_require__(152)
	  , gOPNExt        = __webpack_require__(171)
	  , $GOPD          = __webpack_require__(136)
	  , $DP            = __webpack_require__(14)
	  , $keys          = __webpack_require__(24)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(172).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(39).f  = $propertyIsEnumerable;
	  __webpack_require__(141).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(148)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(37)('meta')
	  , isObject = __webpack_require__(16)
	  , has      = __webpack_require__(26)
	  , setDesc  = __webpack_require__(14).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(19)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(9)
	  , core           = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(148)
	  , wksExt         = __webpack_require__(162)
	  , defineProperty = __webpack_require__(14).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(24)
	  , toIObject = __webpack_require__(27);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(24)
	  , gOPS    = __webpack_require__(141)
	  , pIE     = __webpack_require__(39);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(29);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(27)
	  , gOPN      = __webpack_require__(172).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(25)
	  , hiddenKeys = __webpack_require__(38).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(167)('asyncIterator');

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(167)('observable');

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 字符串首字母大写
	 * @param str 字符串
	 * @return {string} 首字母大写的字符串
	 */
	var firstUpperCase = function firstUpperCase(str) {
	  return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
	    return $1.toUpperCase() + $2.toLowerCase();
	  });
	};

	exports.default = {
	  firstUpperCase: firstUpperCase
	};

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:reference cid=\"KsToolTip\" style=\"display: inline-block\"\n      @mouseenter=\"handleShowPopper\"\n      @mouseleave=\"handleClosePopper\"\n>\n  <div style=\"display: inline-block\">\n      <slot></slot>\n  </div>\n\n  <div transition=\"KsTooltipTransition\" class=\"KsToolTip\"\n       v-el:popper v-show=\"!disabled && showPopper\">\n    <div v-text=\"content\"></div>\n  </div>\n</div>\n";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pagegroup = exports.page = undefined;

	var _page = __webpack_require__(179);

	var _page2 = _interopRequireDefault(_page);

	var _pagegroup = __webpack_require__(182);

	var _pagegroup2 = _interopRequireDefault(_pagegroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.page = _page2.default;
	exports.pagegroup = _pagegroup2.default;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(180)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/pager/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(181)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7b2e1686/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 180 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//
	//     <ul v-show="total" class="KsPage" cid="KsPage" @click="click_page_mian($event)">
	//         <li :class="{'disabled':page_current == 1}">&lt;</li>
	//         <li v-for="i in pages_array"
	//             track-by="$index"
	//             :class="{'active':page_current == i}" v-text="i"></li>
	//         <li :class="{'disabled':page_current == total_count}">&gt;</li>
	//     </ul>
	//
	// </template>
	// <script type="text/javascript">
	/**
	 * <li class="frist">&lt;</li>
	 * className不合理 ，目的表达不可点击状态 ，'disabled' 相关比较合理
	 */

	exports.default = {
	    props: {
	        // 总条数
	        total: { type: Number, default: 0 },
	        // 展示分页个数
	        pages: { type: Number, default: 7 },
	        // 当前选中的页数
	        page_current: { type: Number, default: 1 },
	        // 每页展示条数
	        page_size: { type: Number, default: 10 }
	    },
	    data: function data() {

	        return {
	            pages_array: [],
	            pages_count: this.pages
	        };
	    },


	    methods: {
	        init: function init() {
	            if (!this.total) return;
	            if (this.pages % 2 == 0) {
	                this.pages = this.pages - 1;
	                console.error('分页中的参数 pages 请传入奇数 , 自动转为：' + this.pages);
	            }
	            this.total_count = this.get_total_count(this.total, this.page_size);
	            this.pages_array = this.get_page_array(1, this.pages, this.total_count);
	        },

	        // 总页数
	        get_total_count: function get_total_count(total, page_size) {
	            var mod = total % page_size;
	            return (total - mod) / page_size + (mod && 1);
	        },


	        // 最大页数
	        get_cur_count: function get_cur_count(cur, total) {
	            return cur > total ? total : cur;
	        },

	        // 纯净 当前数组
	        get_pure_array: function get_pure_array(page_cur, pages, total_count) {
	            var arr = [],
	                len,
	                cur_show_max;
	            if (pages > total_count) {
	                pages = total_count;
	                cur_show_max = total_count;
	                len = total_count - 1;
	            } else {
	                len = pages - 1;
	                var cur_show_max = page_cur + len / 2;
	                page_cur <= len / 2 && (cur_show_max = pages);
	                cur_show_max > total_count && (cur_show_max = total_count);
	            }

	            for (var i = len; i >= 0; i--) {
	                arr.push(cur_show_max - i);
	            }
	            return arr;
	        },

	        // 折叠，添加省略号
	        has_fold: function has_fold(max, arr) {
	            var last = arr.length - 1;

	            arr = [].concat(arr);
	            if (arr[0] > 1) {
	                arr[0] = 1;
	                arr[1] = '···';
	            }
	            if (arr[last] < max) {
	                arr[last] = max;
	                arr[last - 1] = '···';
	            }
	            return arr;
	        },

	        // 点击分页主体
	        click_page_mian: function click_page_mian(event) {

	            var value = event.target.innerHTML.trim();

	            switch (true) {
	                // left
	                case '&lt;' === value:
	                    --this.page_current;
	                    this.page_current < 1 && (this.page_current = 1);
	                    break;
	                // right
	                case '&gt;' === value:
	                    ++this.page_current;
	                    this.page_current = this.get_cur_count(this.page_current, this.total_count);
	                    break;
	                case '···' === value:
	                    break;
	                case !isNaN(value):
	                    this.page_current = +value;
	                    break;
	            }
	        },
	        get_page_array: function get_page_array(page_cur, pages, total_count) {
	            var arr;
	            arr = this.get_pure_array(page_cur, pages, total_count);
	            arr = this.has_fold(total_count, arr);
	            return arr;
	        }
	    },
	    watch: {
	        'page_size': function page_size() {
	            this.page_current = 1;
	        },
	        'total+page_size+pages': function totalPage_sizePages() {
	            this.init();
	        },
	        'page_current': function page_current(val) {
	            this.$emit('current_change', val);
	            this.pages_array = this.get_page_array(val, this.pages, this.total_count);
	        }
	    },
	    created: function created() {
	        this.init();
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../../../sass/components/paging';
	//     @import '../../../sass/components/input';
	// </style>

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "\n\n<ul v-show=\"total\" class=\"KsPage\" cid=\"KsPage\" @click=\"click_page_mian($event)\">\n    <li :class=\"{'disabled':page_current == 1}\">&lt;</li>\n    <li v-for=\"i in pages_array\"\n        track-by=\"$index\"\n        :class=\"{'active':page_current == i}\" v-text=\"i\"></li>\n    <li :class=\"{'disabled':page_current == total_count}\">&gt;</li>\n</ul>\n\n";

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!./../../../../node_modules/vue-loader/lib/style-rewriter.js!scss!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagegroup.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	__vue_script__ = __webpack_require__(183)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/pager/pagegroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(184)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-08ba3269/pagegroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _page = __webpack_require__(179);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        'page': _page2.default
	    },
	    props: {
	        // 总条数
	        total: { type: Number, default: 0 },
	        // 展示分页个数
	        pages: { type: Number, default: 7 },
	        // 当前选中的页数
	        page_current: { type: Number, default: 1 },
	        // 每页展示条数
	        page_size: { type: Number, default: 10 },
	        // 每页可能展示条数
	        page_sizes: { type: Array, default: [10, 20, 100] }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {
	        init: function init() {
	            this.page_size = this.page_sizes[0];
	        },
	        current_change: function current_change(val) {
	            this.$emit('size_change', val);
	        }
	    },
	    created: function created() {
	        this.init();
	    },

	    watch: {
	        page_size: function page_size(val) {
	            this.$emit('size_change', val);
	        }
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../../../sass/components/paging';
	// </style>
	// <template>
	//     <div class="KsPageGroup" cid="KsPageGroup">
	//         <div class="_statistical">共<span>{{total}}</span>条</div>
	//         <div class="ks-col">
	//             每页
	//             <select class="input" v-model="page_size">
	//                 <option 
	//                     v-for="i in page_sizes" 
	//                     :value="i">{{i}}</option>
	//             </select>
	//             条
	//         </div>
	//         <page 
	//             class="ks-col-auto"
	//             :page_current="page_current" 
	//             :pages="pages"
	//             :total="total"
	//             :page_size="page_size"
	//             v-on:current_change="current_change"></page>    
	//     </div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsPageGroup\" cid=\"KsPageGroup\">\n    <div class=\"_statistical\">共<span>{{total}}</span>条</div>\n    <div class=\"ks-col\">\n        每页\n        <select class=\"input\" v-model=\"page_size\">\n            <option \n                v-for=\"i in page_sizes\" \n                :value=\"i\">{{i}}</option>\n        </select>\n        条\n    </div>\n    <page \n        class=\"ks-col-auto\"\n        :page_current=\"page_current\" \n        :pages=\"pages\"\n        :total=\"total\"\n        :page_size=\"page_size\"\n        v-on:current_change=\"current_change\"></page>    \n</div>\n";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _clickOutside = __webpack_require__(186);

	var _clickOutside2 = _interopRequireDefault(_clickOutside);

	var _scrollInside = __webpack_require__(187);

	var _scrollInside2 = _interopRequireDefault(_scrollInside);

	var _scrollBoundValue = __webpack_require__(188);

	var _scrollBoundValue2 = _interopRequireDefault(_scrollBoundValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  scrollBoundValue: _scrollBoundValue2.default,
	  scrollInside: _scrollInside2.default,
	  clickOutside: _clickOutside2.default
	}; /**
	    * @description 包含了一些通用的指令.
	    * @author pkeros.
	    * @date 2016/11/11.
	    */

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(129);

	var clickOutsideContext = '@@clickOutsideContext'; /**
	                                                    * @description 点击元素外面才会触发的事件.
	                                                    * @author pkeros.
	                                                    * @date 2016/11/11.
	                                                    * @example
	                                                    * ```vue
	                                                    * <div v-ks-click-outside="handleClose">
	                                                    * ```
	                                                    */

	exports.default = {
	  bind: function bind() {
	    var me = this;

	    var documentHandler = function documentHandler(e) {
	      var handler = me.vm[me[clickOutsideContext].methodName];

	      if (handler && !me.el.contains(e.target)) {
	        handler();
	      }
	    };

	    me[clickOutsideContext] = {
	      documentHandler: documentHandler,
	      methodName: me.expression
	    };
	    _util.DomUtil.on(document, 'click', documentHandler);
	  },
	  update: function update() {
	    this[clickOutsideContext].methodName = this.expression;
	  },
	  unbind: function unbind() {
	    _util.DomUtil.off(document, 'click', this[clickOutsideContext].documentHandler);
	  },
	  install: function install(Vue) {
	    Vue.directive('KsClickOutside', {
	      bind: this.bind,
	      unbind: this.unbind
	    });
	  }
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(129);

	var scrollInsideContext = '@@scrollInsideContext'; /**
	                                                    * @description 在当前元素中使用鼠标滚轮触发的事件.
	                                                    * @summary
	                                                    *  指令调用 handler 函数会携带一个参数, `1` 是向上滚动, `-1` 是向下滚动
	                                                    * @author pkeros.
	                                                    * @date 2016/11/15.
	                                                    * @example
	                                                    *  ```vue
	                                                    *  <div v-ks-scroll-inside="handler">
	                                                    *  ```
	                                                    */

	exports.default = {
	  bind: function bind() {
	    var me = this;

	    var handler = function handler(e) {
	      var handler = me.vm[me[scrollInsideContext].methodName];
	      var type = e.type;

	      if (type == 'DOMMouseScroll' || type == 'mousewheel') {
	        e.delta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
	      }
	      if (handler) {
	        handler(e.delta);
	      }
	    };

	    me[scrollInsideContext] = {
	      handler: handler,
	      methodName: me.expression,
	      eventType: document.mozHidden !== undefined ? 'DOMMouseScroll' : 'mousewheel'
	    };
	    _util.DomUtil.on(this.el, me[scrollInsideContext].eventType, handler);
	  },
	  update: function update() {
	    this[scrollInsideContext].methodName = this.expression;
	  },
	  unbind: function unbind() {
	    _util.DomUtil.off(this.el, this[scrollInsideContext].eventType, this[scrollInsideContext].handler);
	  },
	  install: function install(Vue) {
	    Vue.directive('KsScrollInside', {
	      bind: this.bind,
	      unbind: this.unbind
	    });
	  }
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(129);

	var scrollInsideContext = '@@scrollInsideContext'; /**
	                                                    * @description 在某个元素上滚动时在一个限制范围内计算一个值.
	                                                    * @summary
	                                                    *  给定边界 max: 200, min: 100, 选项 step: 10. 鼠标滚轮滚动
	                                                    *  方向向上为减, 方向向下为增加, 步进为 10. 会产生一个值范围在 200 ~ 100.
	                                                    * @author pkeros.
	                                                    * @date 2016/11/15.
	                                                    * ```vue
	                                                    * <div v-ks-scroll-bound-value:max:min:step="handleClose">
	                                                    * ```
	                                                    */

	exports.default = {
	  bind: function bind() {
	    var me = this;
	    var options = { initValue: 0, max: 0, min: 0, step: 0 };
	    var args = me.arg.split(':');
	    var value = 0;

	    options.initValue = Number(args[0]) || 0;
	    options.max = Number(args[1]) || 0;
	    options.min = Number(args[2]) || 0;
	    options.step = Number(args[3]) || 0;
	    value = options.initValue;

	    var handler = function handler(e) {
	      var handler = me.vm[me[scrollInsideContext].methodName];
	      var type = e.type;

	      if (type == 'DOMMouseScroll' || type == 'mousewheel') {
	        e.delta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
	      }

	      // 计算值
	      if (e.delta > 0) {
	        if (value > options.min) {
	          value -= options.step;
	        }
	      } else {
	        if (value < options.max) {
	          value += options.step;
	        }
	      }

	      if (handler) {
	        var result = handler(value, e.delta, options);

	        value = result ? result : value;
	      }
	    };

	    me[scrollInsideContext] = {
	      handler: handler,
	      methodName: me.expression,
	      eventType: document.mozHidden !== undefined ? 'DOMMouseScroll' : 'mousewheel'
	    };
	    _util.DomUtil.on(this.el, me[scrollInsideContext].eventType, handler);
	  },
	  update: function update() {
	    this[scrollInsideContext].methodName = this.expression;
	    console.log(this);
	  },
	  unbind: function unbind() {
	    _util.DomUtil.off(this.el, this[scrollInsideContext].eventType, this[scrollInsideContext].handler);
	  },
	  install: function install(Vue) {
	    Vue.directive('KsScrollBoundValue', {
	      bind: this.bind,
	      unbind: this.unbind
	    });
	  }
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (Vue, router) {
	    router.map({

	        '/': {
	            router_type: 'root',
	            name: 'root',
	            component: function component(resolve) {
	                __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(190)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	            },
	            subRoutes: {

	                // validation
	                '/validation': {
	                    name: 'validation',
	                    title: 'validation',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(193)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 会员主页
	                '/home': {
	                    name: 'home',
	                    title: '主页',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(196)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 布局
	                '/layout': {
	                    name: 'layout',
	                    title: '布局',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(199)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 按钮
	                '/button': {
	                    name: 'button',
	                    title: '按钮',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(205)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 图标按钮
	                '/icon-button': {
	                    name: 'icon-button',
	                    title: '图标按钮',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(208)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // tab导航（边框）
	                '/tab-bor': {
	                    name: 'tab-bor',
	                    title: 'tab导航',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(8, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(212)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // tab导航（背景）
	                '/tab-bg': {
	                    name: 'tab-bg',
	                    title: 'tab导航',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(9, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(215)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // table（隔行添加背景色）
	                '/table-striped': {
	                    name: 'table-striped',
	                    title: 'table',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(10, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(218)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 分页
	                '/paging': {
	                    name: 'paging',
	                    title: 'paging',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(11, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(220)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 提示框
	                '/toast': {
	                    name: 'toast',
	                    title: '提示框',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(12, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(223)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 弹框
	                // 内容弹框
	                '/dialog-content': {
	                    name: 'dialog-content',
	                    title: '内容弹框',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(13, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(225)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 图标弹框
	                '/dialog-icon': {
	                    name: 'dialog-icon',
	                    title: '内容弹框',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(14, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(228)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 日期
	                '/date': {
	                    name: 'date',
	                    title: '日期',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(15, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(231)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 单选
	                '/radio': {
	                    name: 'radio',
	                    title: '单选',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(16, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(234)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 多选
	                '/checkbox': {
	                    name: 'checkbox',
	                    title: '多选',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(17, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(237)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 开关
	                '/switch': {
	                    name: 'switch',
	                    title: '开关',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(18, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(240)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 步骤
	                '/step': {
	                    name: 'step',
	                    title: '步骤',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(19, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(243)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 下拉
	                '/select': {
	                    name: 'select',
	                    title: '下拉',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(20, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(245)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 搜索框
	                '/search': {
	                    name: 'search',
	                    title: '搜索框',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(21, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(247)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 时间
	                '/time': {
	                    name: 'time',
	                    title: '时间',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(22, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(249)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 文字提示
	                '/tooltip': {
	                    name: 'tooltip',
	                    title: '文字提示',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(23, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(251)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 弹出框
	                '/popover': {
	                    name: 'popover',
	                    title: '弹出框',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(24, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(254)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 弹出框-输入
	                '/popover-enter': {
	                    name: 'popover-enter',
	                    title: '弹出框-输入',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(25, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(256)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 表单排版
	                '/form-layout': {
	                    name: 'form-layout',
	                    title: '表单排版',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(26, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(258)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 加载图标
	                '/icon-loading': {
	                    name: 'icon-loading',
	                    title: '加载图标',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(27, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(260)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                },

	                // 编辑图片
	                // '/img-edit':{
	                //     name:'img-edit',
	                //     title:'编辑图片',
	                //     component: function(resolve){
	                //         require(['./views/img-edit/img-edit.vue'], (res)=> {
	                //             resolve(res)
	                //         })
	                //     }
	                // },

	                // 省市区三级联动
	                '/city-select': {
	                    name: 'city-select',
	                    title: '省市区三级联动',
	                    component: function component(resolve) {
	                        __webpack_require__.e/* require */(28, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(262)]; (function (res) {
	                            resolve(res);
	                        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                    }
	                }

	            }
	        }

	    });

	    router.beforeEach(function (transition) {
	        if (transition.to.name == 'root') {
	            router.go({ name: 'home' });
	        }
	        transition.next();
	    });

	    router.afterEach(function (transition) {
	        setTimeout(function () {

	            Array.prototype.slice.call(document.querySelectorAll('pre code')).forEach(function (val) {
	                if (val.className === 'html') {
	                    // console.log(val.innerHTML)
	                    val.innerHTML = val.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	                }
	                hljs.highlightBlock(val);
	            });
	        });
	    });
	};

/***/ },
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * vue-validator v2.1.7
	 * (c) 2016 kazuya kawaguchi
	 * Released under the MIT License.
	 */
	'use strict';

	var babelHelpers = {};
	babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	babelHelpers.classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	babelHelpers.createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	babelHelpers.inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	babelHelpers.possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	babelHelpers;
	/**
	 * Utilties
	 */

	// export default for holding the Vue reference
	var exports$1 = {};
	/**
	 * warn
	 *
	 * @param {String} msg
	 * @param {Error} [err]
	 *
	 */

	function warn(msg, err) {
	  if (window.console) {
	    console.warn('[vue-validator] ' + msg);
	    if (err) {
	      console.warn(err.stack);
	    }
	  }
	}

	/**
	 * empty
	 *
	 * @param {Array|Object} target
	 * @return {Boolean}
	 */

	function empty(target) {
	  if (target === null || target === undefined) {
	    return true;
	  }

	  if (Array.isArray(target)) {
	    if (target.length > 0) {
	      return false;
	    }
	    if (target.length === 0) {
	      return true;
	    }
	  } else if (exports$1.Vue.util.isPlainObject(target)) {
	    for (var key in target) {
	      if (exports$1.Vue.util.hasOwn(target, key)) {
	        return false;
	      }
	    }
	  }

	  return true;
	}

	/**
	 * each
	 *
	 * @param {Array|Object} target
	 * @param {Function} iterator
	 * @param {Object} [context]
	 */

	function each(target, iterator, context) {
	  if (Array.isArray(target)) {
	    for (var i = 0; i < target.length; i++) {
	      iterator.call(context || target[i], target[i], i);
	    }
	  } else if (exports$1.Vue.util.isPlainObject(target)) {
	    var hasOwn = exports$1.Vue.util.hasOwn;
	    for (var key in target) {
	      if (hasOwn(target, key)) {
	        iterator.call(context || target[key], target[key], key);
	      }
	    }
	  }
	}

	/**
	 * pull
	 *
	 * @param {Array} arr
	 * @param {Object} item
	 * @return {Object|null}
	 */

	function pull(arr, item) {
	  var index = exports$1.Vue.util.indexOf(arr, item);
	  return ~index ? arr.splice(index, 1) : null;
	}

	/**
	 * trigger
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */

	function trigger(el, event, args) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(event, true, false);

	  if (args) {
	    for (var prop in args) {
	      e[prop] = args[prop];
	    }
	  }

	  // Due to Firefox bug, events fired on disabled
	  // non-attached form controls can throw errors
	  try {
	    el.dispatchEvent(e);
	  } catch (e) {}
	}

	/**
	 * Forgiving check for a promise
	 *
	 * @param {Object} p
	 * @return {Boolean}
	 */

	function isPromise(p) {
	  return p && typeof p.then === 'function';
	}

	/**
	 * Togging classes
	 *
	 * @param {Element} el
	 * @param {String} key
	 * @param {Function} fn
	 */

	function toggleClasses(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }

	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	/**
	 * Fundamental validate functions
	 */

	/**
	 * required
	 *
	 * This function validate whether the value has been filled out.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 */

	function required(val) {
	  if (Array.isArray(val)) {
	    if (val.length !== 0) {
	      var valid = true;
	      for (var i = 0, l = val.length; i < l; i++) {
	        valid = required(val[i]);
	        if (!valid) {
	          break;
	        }
	      }
	      return valid;
	    } else {
	      return false;
	    }
	  } else if (typeof val === 'number' || typeof val === 'function') {
	    return true;
	  } else if (typeof val === 'boolean') {
	    return val;
	  } else if (typeof val === 'string') {
	    return val.length > 0;
	  } else if (val !== null && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object') {
	    return Object.keys(val).length > 0;
	  } else if (val === null || val === undefined) {
	    return false;
	  }
	}

	/**
	 * pattern
	 *
	 * This function validate whether the value matches the regex pattern
	 *
	 * @param val
	 * @param {String} pat
	 * @return {Boolean}
	 */

	function pattern(val, pat) {
	  if (typeof pat !== 'string') {
	    return false;
	  }

	  var match = pat.match(new RegExp('^/(.*?)/([gimy]*)$'));
	  if (!match) {
	    return false;
	  }

	  return new RegExp(match[1], match[2]).test(val);
	}

	/**
	 * minlength
	 *
	 * This function validate whether the minimum length.
	 *
	 * @param {String|Array} val
	 * @param {String|Number} min
	 * @return {Boolean}
	 */

	function minlength(val, min) {
	  if (typeof val === 'string') {
	    return isInteger(min, 10) && val.length >= parseInt(min, 10);
	  } else if (Array.isArray(val)) {
	    return val.length >= parseInt(min, 10);
	  } else {
	    return false;
	  }
	}

	/**
	 * maxlength
	 *
	 * This function validate whether the maximum length.
	 *
	 * @param {String|Array} val
	 * @param {String|Number} max
	 * @return {Boolean}
	 */

	function maxlength(val, max) {
	  if (typeof val === 'string') {
	    return isInteger(max, 10) && val.length <= parseInt(max, 10);
	  } else if (Array.isArray(val)) {
	    return val.length <= parseInt(max, 10);
	  } else {
	    return false;
	  }
	}

	/**
	 * min
	 *
	 * This function validate whether the minimum value of the numberable value.
	 *
	 * @param {*} val
	 * @param {*} arg minimum
	 * @return {Boolean}
	 */

	function min(val, arg) {
	  return !isNaN(+val) && !isNaN(+arg) && +val >= +arg;
	}

	/**
	 * max
	 *
	 * This function validate whether the maximum value of the numberable value.
	 *
	 * @param {*} val
	 * @param {*} arg maximum
	 * @return {Boolean}
	 */

	function max(val, arg) {
	  return !isNaN(+val) && !isNaN(+arg) && +val <= +arg;
	}

	/**
	 * isInteger
	 *
	 * This function check whether the value of the string is integer.
	 *
	 * @param {String} val
	 * @return {Boolean}
	 * @private
	 */

	function isInteger(val) {
	  return (/^(-?[1-9]\d*|0)$/.test(val)
	  );
	}

	var validators = Object.freeze({
	  required: required,
	  pattern: pattern,
	  minlength: minlength,
	  maxlength: maxlength,
	  min: min,
	  max: max
	});

	function Asset (Vue) {
	  var extend = Vue.util.extend;

	  // set global validators asset
	  var assets = Object.create(null);
	  extend(assets, validators);
	  Vue.options.validators = assets;

	  // set option merge strategy
	  var strats = Vue.config.optionMergeStrategies;
	  if (strats) {
	    strats.validators = function (parent, child) {
	      if (!child) {
	        return parent;
	      }
	      if (!parent) {
	        return child;
	      }
	      var ret = Object.create(null);
	      extend(ret, parent);
	      for (var key in child) {
	        ret[key] = child[key];
	      }
	      return ret;
	    };
	  }

	  /**
	   * Register or retrieve a global validator definition.
	   *
	   * @param {String} id
	   * @param {Function} definition
	   */

	  Vue.validator = function (id, definition) {
	    if (!definition) {
	      return Vue.options['validators'][id];
	    } else {
	      Vue.options['validators'][id] = definition;
	    }
	  };
	}

	function Override (Vue) {
	  // override _init
	  var init = Vue.prototype._init;
	  Vue.prototype._init = function (options) {
	    if (!this._validatorMaps) {
	      this._validatorMaps = Object.create(null);
	    }
	    init.call(this, options);
	  };

	  // override _destroy
	  var destroy = Vue.prototype._destroy;
	  Vue.prototype._destroy = function () {
	    destroy.apply(this, arguments);
	    this._validatorMaps = null;
	  };
	}

	var VALIDATE_UPDATE = '__vue-validator-validate-update__';
	var PRIORITY_VALIDATE = 4096;
	var PRIORITY_VALIDATE_CLASS = 32;
	var REGEX_FILTER = /[^|]\|[^|]/;
	var REGEX_VALIDATE_DIRECTIVE = /^v-validate(?:$|:(.*)$)/;
	var REGEX_EVENT = /^v-on:|^@/;

	var classId = 0; // ID for validation class


	function ValidateClass (Vue) {
	  var vIf = Vue.directive('if');
	  var FragmentFactory = Vue.FragmentFactory;
	  var _Vue$util = Vue.util;
	  var toArray = _Vue$util.toArray;
	  var replace = _Vue$util.replace;
	  var createAnchor = _Vue$util.createAnchor;

	  /**
	   * `v-validate-class` directive
	   */

	  Vue.directive('validate-class', {
	    terminal: true,
	    priority: vIf.priority + PRIORITY_VALIDATE_CLASS,

	    bind: function bind() {
	      var _this = this;

	      var id = String(classId++);
	      this.setClassIds(this.el, id);

	      this.vm.$on(VALIDATE_UPDATE, this.cb = function (classIds, validation, results) {
	        if (classIds.indexOf(id) > -1) {
	          validation.updateClasses(results, _this.frag.node);
	        }
	      });

	      this.setupFragment();
	    },
	    unbind: function unbind() {
	      this.vm.$off(VALIDATE_UPDATE, this.cb);
	      this.teardownFragment();
	    },
	    setClassIds: function setClassIds(el, id) {
	      var childNodes = toArray(el.childNodes);
	      for (var i = 0, l = childNodes.length; i < l; i++) {
	        var element = childNodes[i];
	        if (element.nodeType === 1) {
	          var hasAttrs = element.hasAttributes();
	          var attrs = hasAttrs && toArray(element.attributes);
	          for (var k = 0, _l = attrs.length; k < _l; k++) {
	            var attr = attrs[k];
	            if (attr.name.match(REGEX_VALIDATE_DIRECTIVE)) {
	              var existingId = element.getAttribute(VALIDATE_UPDATE);
	              var value = existingId ? existingId + ',' + id : id;
	              element.setAttribute(VALIDATE_UPDATE, value);
	            }
	          }
	        }

	        if (element.hasChildNodes()) {
	          this.setClassIds(element, id);
	        }
	      }
	    },
	    setupFragment: function setupFragment() {
	      this.anchor = createAnchor('v-validate-class');
	      replace(this.el, this.anchor);

	      this.factory = new FragmentFactory(this.vm, this.el);
	      this.frag = this.factory.create(this._host, this._scope, this._frag);
	      this.frag.before(this.anchor);
	    },
	    teardownFragment: function teardownFragment() {
	      if (this.frag) {
	        this.frag.remove();
	        this.frag = null;
	        this.factory = null;
	      }

	      replace(this.anchor, this.el);
	      this.anchor = null;
	    }
	  });
	}

	function Validate (Vue) {
	  var FragmentFactory = Vue.FragmentFactory;
	  var parseDirective = Vue.parsers.directive.parseDirective;
	  var _Vue$util = Vue.util;
	  var inBrowser = _Vue$util.inBrowser;
	  var bind = _Vue$util.bind;
	  var on = _Vue$util.on;
	  var off = _Vue$util.off;
	  var createAnchor = _Vue$util.createAnchor;
	  var replace = _Vue$util.replace;
	  var camelize = _Vue$util.camelize;
	  var isPlainObject = _Vue$util.isPlainObject;

	  // Test for IE10/11 textarea placeholder clone bug

	  function checkTextareaCloneBug() {
	    if (inBrowser) {
	      var t = document.createElement('textarea');
	      t.placeholder = 't';
	      return t.cloneNode(true).value === 't';
	    } else {
	      return false;
	    }
	  }
	  var hasTextareaCloneBug = checkTextareaCloneBug();

	  /**
	   * `v-validate` directive
	   */

	  Vue.directive('validate', {
	    deep: true,
	    terminal: true,
	    priority: PRIORITY_VALIDATE,
	    params: ['group', 'field', 'detect-blur', 'detect-change', 'initial', 'classes'],

	    paramWatchers: {
	      detectBlur: function detectBlur(val, old) {
	        if (this._invalid) {
	          return;
	        }
	        this.validation.detectBlur = this.isDetectBlur(val);
	        this.validator.validate(this.field);
	      },
	      detectChange: function detectChange(val, old) {
	        if (this._invalid) {
	          return;
	        }
	        this.validation.detectChange = this.isDetectChange(val);
	        this.validator.validate(this.field);
	      }
	    },

	    bind: function bind() {
	      var el = this.el;

	      if (process.env.NODE_ENV !== 'production' && el.__vue__) {
	        warn('v-validate="' + this.expression + '" cannot be used on an instance root element.');
	        this._invalid = true;
	        return;
	      }

	      if (process.env.NODE_ENV !== 'production' && (el.hasAttribute('v-if') || el.hasAttribute('v-for'))) {
	        warn('v-validate cannot be used `v-if` or `v-for` build-in terminal directive ' + 'on an element. these is wrapped with `<template>` or other tags: ' + '(e.g. <validator name="validator">' + '<template v-if="hidden">' + '<input type="text" v-validate:field1="[\'required\']">' + '</template>' + '</validator>).');
	        this._invalid = true;
	        return;
	      }

	      if (process.env.NODE_ENV !== 'production' && !(this.arg || this.params.field)) {
	        warn('you need specify field name for v-validate directive.');
	        this._invalid = true;
	        return;
	      }

	      var validatorName = this.vm.$options._validator;
	      if (process.env.NODE_ENV !== 'production' && !validatorName) {
	        warn('you need to wrap the elements to be validated in a <validator> element: ' + '(e.g. <validator name="validator">' + '<input type="text" v-validate:field1="[\'required\']">' + '</validator>).');
	        this._invalid = true;
	        return;
	      }

	      var raw = el.getAttribute('v-model');

	      var _parseModelRaw = this.parseModelRaw(raw);

	      var model = _parseModelRaw.model;
	      var filters = _parseModelRaw.filters;

	      this.model = model;

	      this.setupFragment();
	      this.setupValidate(validatorName, model, filters);
	      this.listen();
	    },
	    update: function update(value, old) {
	      if (!value || this._invalid) {
	        return;
	      }

	      if (isPlainObject(value) || old && isPlainObject(old)) {
	        this.handleObject(value, old, this.params.initial);
	      } else if (Array.isArray(value) || old && Array.isArray(old)) {
	        this.handleArray(value, old, this.params.initial);
	      }

	      var options = { field: this.field };
	      if (this.frag) {
	        options.el = this.frag.node;
	      }
	      this.validator.validate(options);
	    },
	    unbind: function unbind() {
	      if (this._invalid) {
	        return;
	      }

	      this.unlisten();
	      this.teardownValidate();
	      this.teardownFragment();

	      this.model = null;
	    },
	    parseModelRaw: function parseModelRaw(raw) {
	      if (REGEX_FILTER.test(raw)) {
	        var parsed = parseDirective(raw);
	        return { model: parsed.expression, filters: parsed.filters };
	      } else {
	        return { model: raw };
	      }
	    },
	    setupValidate: function setupValidate(name, model, filters) {
	      var params = this.params;
	      var validator = this.validator = this.vm._validatorMaps[name];

	      this.field = camelize(this.arg ? this.arg : params.field);

	      this.validation = validator.manageValidation(this.field, model, this.vm, this.getElementFrom(this.frag), this._scope, filters, params.initial, this.isDetectBlur(params.detectBlur), this.isDetectChange(params.detectChange));

	      isPlainObject(params.classes) && this.validation.setValidationClasses(params.classes);

	      params.group && validator.addGroupValidation(params.group, this.field);
	    },
	    listen: function listen() {
	      var model = this.model;
	      var validation = this.validation;
	      var el = this.getElementFrom(this.frag);

	      this.onBlur = bind(validation.listener, validation);
	      on(el, 'blur', this.onBlur);
	      if ((el.type === 'radio' || el.tagName === 'SELECT') && !model) {
	        this.onChange = bind(validation.listener, validation);
	        on(el, 'change', this.onChange);
	      } else if (el.type === 'checkbox') {
	        if (!model) {
	          this.onChange = bind(validation.listener, validation);
	          on(el, 'change', this.onChange);
	        } else {
	          this.onClick = bind(validation.listener, validation);
	          on(el, 'click', this.onClick);
	        }
	      } else {
	        if (!model) {
	          this.onInput = bind(validation.listener, validation);
	          on(el, 'input', this.onInput);
	        }
	      }
	    },
	    unlisten: function unlisten() {
	      var el = this.getElementFrom(this.frag);

	      if (this.onInput) {
	        off(el, 'input', this.onInput);
	        this.onInput = null;
	      }

	      if (this.onClick) {
	        off(el, 'click', this.onClick);
	        this.onClick = null;
	      }

	      if (this.onChange) {
	        off(el, 'change', this.onChange);
	        this.onChange = null;
	      }

	      if (this.onBlur) {
	        off(el, 'blur', this.onBlur);
	        this.onBlur = null;
	      }
	    },
	    teardownValidate: function teardownValidate() {
	      if (this.validator && this.validation) {
	        var el = this.getElementFrom(this.frag);

	        this.params.group && this.validator.removeGroupValidation(this.params.group, this.field);

	        this.validator.unmanageValidation(this.field, el);

	        this.validator = null;
	        this.validation = null;
	        this.field = null;
	      }
	    },
	    setupFragment: function setupFragment() {
	      this.anchor = createAnchor('v-validate');
	      replace(this.el, this.anchor);

	      this.factory = new FragmentFactory(this.vm, this.shimNode(this.el));
	      this.frag = this.factory.create(this._host, this._scope, this._frag);
	      this.frag.before(this.anchor);
	    },
	    teardownFragment: function teardownFragment() {
	      if (this.frag) {
	        this.frag.remove();
	        this.frag = null;
	        this.factory = null;
	      }

	      replace(this.anchor, this.el);
	      this.anchor = null;
	    },
	    handleArray: function handleArray(value, old, initial) {
	      var _this = this;

	      old && this.validation.resetValidation();

	      each(value, function (val) {
	        _this.validation.setValidation(val, undefined, undefined, initial);
	      });
	    },
	    handleObject: function handleObject(value, old, initial) {
	      var _this2 = this;

	      old && this.validation.resetValidation();

	      each(value, function (val, key) {
	        if (isPlainObject(val)) {
	          if ('rule' in val) {
	            var msg = 'message' in val ? val.message : null;
	            var init = 'initial' in val ? val.initial : null;
	            _this2.validation.setValidation(key, val.rule, msg, init || initial);
	          }
	        } else {
	          _this2.validation.setValidation(key, val, undefined, initial);
	        }
	      });
	    },
	    isDetectBlur: function isDetectBlur(detectBlur) {
	      return detectBlur === undefined || detectBlur === 'on' || detectBlur === true;
	    },
	    isDetectChange: function isDetectChange(detectChange) {
	      return detectChange === undefined || detectChange === 'on' || detectChange === true;
	    },
	    isInitialNoopValidation: function isInitialNoopValidation(initial) {
	      return initial === 'off' || initial === false;
	    },
	    shimNode: function shimNode(node) {
	      var ret = node;
	      if (hasTextareaCloneBug) {
	        if (node.tagName === 'TEXTAREA') {
	          ret = node.cloneNode(true);
	          ret.value = node.value;
	          var i = ret.childNodes.length;
	          while (i--) {
	            ret.removeChild(ret.childNodes[i]);
	          }
	        }
	      }
	      return ret;
	    },
	    getElementFrom: function getElementFrom(frag) {
	      return frag.single ? frag.node : frag.node.nextSibling;
	    }
	  });
	}

	/**
	 * BaseValidation class
	 */

	var BaseValidation = function () {
	  function BaseValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, BaseValidation);

	    this.field = field;
	    this.touched = false;
	    this.dirty = false;
	    this.modified = false;

	    this._modified = false;
	    this._model = model;
	    this._filters = filters;
	    this._validator = validator;
	    this._vm = vm;
	    this._el = el;
	    this._forScope = scope;
	    this._init = this._getValue(el);
	    this._validators = {};
	    this._detectBlur = detectBlur;
	    this._detectChange = detectChange;
	    this._classes = {};
	  }

	  BaseValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this = this;

	    var scope = this._getScope();
	    var model = this._model;

	    this._initial = initial;

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      this._classIds = classIds.split(',');
	    }

	    if (model) {
	      el.value = this._evalModel(model, this._filters);
	      this._unwatch = scope.$watch(model, function (val, old) {
	        if (val !== old) {
	          if (_this.guardValidate(el, 'input')) {
	            return;
	          }

	          _this.handleValidate(el, { noopable: _this._initial });
	          if (_this._initial) {
	            _this._initial = null;
	          }
	        }
	      }, { deep: true });
	    }
	  };

	  BaseValidation.prototype.unmanageElement = function unmanageElement(el) {
	    this._unwatch && this._unwatch();
	  };

	  BaseValidation.prototype.resetValidation = function resetValidation() {
	    var _this2 = this;

	    var keys = Object.keys(this._validators);
	    each(keys, function (key, index) {
	      _this2._validators[key] = null;
	      delete _this2._validators[key];
	    });
	  };

	  BaseValidation.prototype.resetValidationNoopable = function resetValidationNoopable() {
	    each(this._validators, function (descriptor, key) {
	      if (descriptor.initial && !descriptor._isNoopable) {
	        descriptor._isNoopable = true;
	      }
	    });
	  };

	  BaseValidation.prototype.setValidation = function setValidation(name, arg, msg, initial) {
	    var validator = this._validators[name];
	    if (!validator) {
	      validator = this._validators[name] = {};
	      validator.name = name;
	    }

	    validator.arg = arg;
	    if (msg) {
	      validator.msg = msg;
	    }

	    if (initial) {
	      validator.initial = initial;
	      validator._isNoopable = true;
	    }
	  };

	  BaseValidation.prototype.setValidationClasses = function setValidationClasses(classes) {
	    var _this3 = this;

	    each(classes, function (value, key) {
	      _this3._classes[key] = value;
	    });
	  };

	  BaseValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    touched && this.willUpdateTouched(this._el, 'blur');
	    this.willUpdateDirty(this._el);
	    this.willUpdateModified(this._el);
	  };

	  BaseValidation.prototype.willUpdateTouched = function willUpdateTouched(el, type) {
	    if (type && type === 'blur') {
	      this.touched = true;
	      this._fireEvent(el, 'touched');
	    }
	  };

	  BaseValidation.prototype.willUpdateDirty = function willUpdateDirty(el) {
	    if (!this.dirty && this._checkModified(el)) {
	      this.dirty = true;
	      this._fireEvent(el, 'dirty');
	    }
	  };

	  BaseValidation.prototype.willUpdateModified = function willUpdateModified(el) {
	    this.modified = this._checkModified(el);
	    if (this._modified !== this.modified) {
	      this._fireEvent(el, 'modified', { modified: this.modified });
	      this._modified = this.modified;
	    }
	  };

	  BaseValidation.prototype.listener = function listener(e) {
	    if (this.guardValidate(e.target, e.type)) {
	      return;
	    }

	    this.handleValidate(e.target, { type: e.type });
	  };

	  BaseValidation.prototype.handleValidate = function handleValidate(el) {
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref$type = _ref.type;
	    var type = _ref$type === undefined ? null : _ref$type;
	    var _ref$noopable = _ref.noopable;
	    var noopable = _ref$noopable === undefined ? false : _ref$noopable;

	    this.willUpdateTouched(el, type);
	    this.willUpdateDirty(el);
	    this.willUpdateModified(el);

	    this._validator.validate({ field: this.field, el: el, noopable: noopable });
	  };

	  BaseValidation.prototype.validate = function validate(cb) {
	    var _this4 = this;

	    var noopable = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var el = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var _ = exports$1.Vue.util;

	    var results = {};
	    var errors = [];
	    var valid = true;

	    this._runValidators(function (descriptor, name, done) {
	      var asset = _this4._resolveValidator(name);
	      var validator = null;
	      var msg = null;

	      if (_.isPlainObject(asset)) {
	        if (asset.check && typeof asset.check === 'function') {
	          validator = asset.check;
	        }
	        if (asset.message) {
	          msg = asset.message;
	        }
	      } else if (typeof asset === 'function') {
	        validator = asset;
	      }

	      if (descriptor.msg) {
	        msg = descriptor.msg;
	      }

	      if (noopable) {
	        results[name] = false;
	        return done();
	      }

	      if (descriptor._isNoopable) {
	        results[name] = false;
	        descriptor._isNoopable = null;
	        return done();
	      }

	      if (validator) {
	        var value = _this4._getValue(_this4._el);
	        _this4._invokeValidator(_this4._vm, validator, value, descriptor.arg, function (ret, err) {
	          if (!ret) {
	            valid = false;
	            if (err) {
	              // async error message
	              errors.push({ validator: name, message: err });
	              results[name] = err;
	            } else if (msg) {
	              var error = { validator: name };
	              error.message = typeof msg === 'function' ? msg.call(_this4._vm, _this4.field, descriptor.arg) : msg;
	              errors.push(error);
	              results[name] = error.message;
	            } else {
	              results[name] = !ret;
	            }
	          } else {
	            results[name] = !ret;
	          }

	          done();
	        });
	      } else {
	        done();
	      }
	    }, function () {
	      // finished
	      _this4._fireEvent(_this4._el, valid ? 'valid' : 'invalid');

	      var props = {
	        valid: valid,
	        invalid: !valid,
	        touched: _this4.touched,
	        untouched: !_this4.touched,
	        dirty: _this4.dirty,
	        pristine: !_this4.dirty,
	        modified: _this4.modified
	      };
	      if (!empty(errors)) {
	        props.errors = errors;
	      }
	      _.extend(results, props);

	      _this4.willUpdateClasses(results, el);

	      cb(results);
	    });
	  };

	  BaseValidation.prototype.resetFlags = function resetFlags() {
	    this.touched = false;
	    this.dirty = false;
	    this.modified = false;
	    this._modified = false;
	  };

	  BaseValidation.prototype.reset = function reset() {
	    this.resetValidationNoopable();
	    this.resetFlags();
	    this._init = this._getValue(this._el);
	  };

	  BaseValidation.prototype.willUpdateClasses = function willUpdateClasses(results) {
	    var _this5 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (this._checkClassIds(el)) {
	      (function () {
	        var classIds = _this5._getClassIds(el);
	        _this5.vm.$nextTick(function () {
	          _this5.vm.$emit(VALIDATE_UPDATE, classIds, _this5, results);
	        });
	      })();
	    } else {
	      this.updateClasses(results);
	    }
	  };

	  BaseValidation.prototype.updateClasses = function updateClasses(results) {
	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    this._updateClasses(el || this._el, results);
	  };

	  BaseValidation.prototype.guardValidate = function guardValidate(el, type) {
	    if (type && type === 'blur' && !this.detectBlur) {
	      return true;
	    }

	    if (type && type === 'input' && !this.detectChange) {
	      return true;
	    }

	    if (type && type === 'change' && !this.detectChange) {
	      return true;
	    }

	    if (type && type === 'click' && !this.detectChange) {
	      return true;
	    }

	    return false;
	  };

	  BaseValidation.prototype._getValue = function _getValue(el) {
	    return el.value;
	  };

	  BaseValidation.prototype._getScope = function _getScope() {
	    return this._forScope || this._vm;
	  };

	  BaseValidation.prototype._getClassIds = function _getClassIds(el) {
	    return this._classIds;
	  };

	  BaseValidation.prototype._checkModified = function _checkModified(target) {
	    return this._init !== this._getValue(target);
	  };

	  BaseValidation.prototype._checkClassIds = function _checkClassIds(el) {
	    return this._getClassIds(el);
	  };

	  BaseValidation.prototype._fireEvent = function _fireEvent(el, type, args) {
	    trigger(el, type, args);
	  };

	  BaseValidation.prototype._evalModel = function _evalModel(model, filters) {
	    var scope = this._getScope();

	    var val = null;
	    if (filters) {
	      val = scope.$get(model);
	      return filters ? this._applyFilters(val, null, filters) : val;
	    } else {
	      val = scope.$get(model);
	      return val === undefined || val === null ? '' : val;
	    }
	  };

	  BaseValidation.prototype._updateClasses = function _updateClasses(el, results) {
	    this._toggleValid(el, results.valid);
	    this._toggleTouched(el, results.touched);
	    this._togglePristine(el, results.pristine);
	    this._toggleModfied(el, results.modified);
	  };

	  BaseValidation.prototype._toggleValid = function _toggleValid(el, valid) {
	    var _util$Vue$util = exports$1.Vue.util;
	    var addClass = _util$Vue$util.addClass;
	    var removeClass = _util$Vue$util.removeClass;

	    var validClass = this._classes.valid || 'valid';
	    var invalidClass = this._classes.invalid || 'invalid';

	    if (valid) {
	      toggleClasses(el, validClass, addClass);
	      toggleClasses(el, invalidClass, removeClass);
	    } else {
	      toggleClasses(el, validClass, removeClass);
	      toggleClasses(el, invalidClass, addClass);
	    }
	  };

	  BaseValidation.prototype._toggleTouched = function _toggleTouched(el, touched) {
	    var _util$Vue$util2 = exports$1.Vue.util;
	    var addClass = _util$Vue$util2.addClass;
	    var removeClass = _util$Vue$util2.removeClass;

	    var touchedClass = this._classes.touched || 'touched';
	    var untouchedClass = this._classes.untouched || 'untouched';

	    if (touched) {
	      toggleClasses(el, touchedClass, addClass);
	      toggleClasses(el, untouchedClass, removeClass);
	    } else {
	      toggleClasses(el, touchedClass, removeClass);
	      toggleClasses(el, untouchedClass, addClass);
	    }
	  };

	  BaseValidation.prototype._togglePristine = function _togglePristine(el, pristine) {
	    var _util$Vue$util3 = exports$1.Vue.util;
	    var addClass = _util$Vue$util3.addClass;
	    var removeClass = _util$Vue$util3.removeClass;

	    var pristineClass = this._classes.pristine || 'pristine';
	    var dirtyClass = this._classes.dirty || 'dirty';

	    if (pristine) {
	      toggleClasses(el, pristineClass, addClass);
	      toggleClasses(el, dirtyClass, removeClass);
	    } else {
	      toggleClasses(el, pristineClass, removeClass);
	      toggleClasses(el, dirtyClass, addClass);
	    }
	  };

	  BaseValidation.prototype._toggleModfied = function _toggleModfied(el, modified) {
	    var _util$Vue$util4 = exports$1.Vue.util;
	    var addClass = _util$Vue$util4.addClass;
	    var removeClass = _util$Vue$util4.removeClass;

	    var modifiedClass = this._classes.modified || 'modified';

	    if (modified) {
	      toggleClasses(el, modifiedClass, addClass);
	    } else {
	      toggleClasses(el, modifiedClass, removeClass);
	    }
	  };

	  BaseValidation.prototype._applyFilters = function _applyFilters(value, oldValue, filters, write) {
	    var resolveAsset = exports$1.Vue.util.resolveAsset;
	    var scope = this._getScope();

	    var filter = void 0,
	        fn = void 0,
	        args = void 0,
	        arg = void 0,
	        offset = void 0,
	        i = void 0,
	        l = void 0,
	        j = void 0,
	        k = void 0;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this._vm.$options, 'filters', filter.name);
	      if (!fn) {
	        continue;
	      }

	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') {
	        continue;
	      }

	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? scope.$get(arg.value) : arg.value;
	        }
	      }

	      value = fn.apply(this._vm, args);
	    }

	    return value;
	  };

	  BaseValidation.prototype._runValidators = function _runValidators(fn, cb) {
	    var validators = this._validators;
	    var length = Object.keys(validators).length;

	    var count = 0;
	    each(validators, function (descriptor, name) {
	      fn(descriptor, name, function () {
	        ++count;
	        count >= length && cb();
	      });
	    });
	  };

	  BaseValidation.prototype._invokeValidator = function _invokeValidator(vm, validator, val, arg, cb) {
	    var future = validator.call(this, val, arg);
	    if (typeof future === 'function') {
	      // function 
	      future(function () {
	        // resolve
	        cb(true);
	      }, function (msg) {
	        // reject
	        cb(false, msg);
	      });
	    } else if (isPromise(future)) {
	      // promise
	      future.then(function () {
	        // resolve
	        cb(true);
	      }, function (msg) {
	        // reject
	        cb(false, msg);
	      }).catch(function (err) {
	        cb(false, err.message);
	      });
	    } else {
	      // sync
	      cb(future);
	    }
	  };

	  BaseValidation.prototype._resolveValidator = function _resolveValidator(name) {
	    var resolveAsset = exports$1.Vue.util.resolveAsset;
	    return resolveAsset(this._vm.$options, 'validators', name);
	  };

	  babelHelpers.createClass(BaseValidation, [{
	    key: 'vm',
	    get: function get() {
	      return this._vm;
	    }
	  }, {
	    key: 'el',
	    get: function get() {
	      return this._el;
	    }
	  }, {
	    key: 'detectChange',
	    get: function get() {
	      return this._detectChange;
	    },
	    set: function set(val) {
	      this._detectChange = val;
	    }
	  }, {
	    key: 'detectBlur',
	    get: function get() {
	      return this._detectBlur;
	    },
	    set: function set(val) {
	      this._detectBlur = val;
	    }
	  }]);
	  return BaseValidation;
	}();

	/**
	 * CheckboxValidation class
	 */

	var CheckboxValidation = function (_BaseValidation) {
	  babelHelpers.inherits(CheckboxValidation, _BaseValidation);

	  function CheckboxValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, CheckboxValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._inits = [];
	    return _this;
	  }

	  CheckboxValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var item = this._addItem(el, initial);

	    var model = item.model = this._model;
	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      if (Array.isArray(value)) {
	        this._setChecked(value, item.el);
	        item.unwatch = scope.$watch(model, function (val, old) {
	          if (val !== old) {
	            if (_this2.guardValidate(item.el, 'change')) {
	              return;
	            }

	            _this2.handleValidate(item.el, { noopable: item.initial });
	            if (item.initial) {
	              item.initial = null;
	            }
	          }
	        });
	      } else {
	        el.checked = value || false;
	        this._init = el.checked;
	        item.init = el.checked;
	        item.value = el.value;
	        item.unwatch = scope.$watch(model, function (val, old) {
	          if (val !== old) {
	            if (_this2.guardValidate(el, 'change')) {
	              return;
	            }

	            _this2.handleValidate(el, { noopable: item.initial });
	            if (item.initial) {
	              item.initial = null;
	            }
	          }
	        });
	      }
	    } else {
	      var options = { field: this.field, noopable: initial };
	      if (this._checkClassIds(el)) {
	        options.el = el;
	      }
	      this._validator.validate(options);
	    }
	  };

	  CheckboxValidation.prototype.unmanageElement = function unmanageElement(el) {
	    var found = -1;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        found = index;
	        if (item.unwatch && item.model) {
	          item.unwatch();
	          item.unwatch = null;
	          item.model = null;
	        }
	      }
	    });
	    if (found === -1) {
	      return;
	    }

	    this._inits.splice(found, 1);
	    this._validator.validate({ field: this.field });
	  };

	  CheckboxValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var _this3 = this;

	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    each(this._inits, function (item, index) {
	      touched && _this3.willUpdateTouched(item.el, 'blur');
	      _this3.willUpdateDirty(item.el);
	      _this3.willUpdateModified(item.el);
	    });
	  };

	  CheckboxValidation.prototype.reset = function reset() {
	    this.resetValidationNoopable();
	    this.resetFlags();
	    each(this._inits, function (item, index) {
	      item.init = item.el.checked;
	      item.value = item.el.value;
	    });
	  };

	  CheckboxValidation.prototype.updateClasses = function updateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (el) {
	      // for another element
	      this._updateClasses(el, results);
	    } else {
	      each(this._inits, function (item, index) {
	        _this4._updateClasses(item.el, results);
	      });
	    }
	  };

	  CheckboxValidation.prototype._addItem = function _addItem(el, initial) {
	    var item = {
	      el: el,
	      init: el.checked,
	      value: el.value,
	      initial: initial
	    };

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      item.classIds = classIds.split(',');
	    }

	    this._inits.push(item);
	    return item;
	  };

	  CheckboxValidation.prototype._setChecked = function _setChecked(values, el) {
	    for (var i = 0, l = values.length; i < l; i++) {
	      var value = values[i];
	      if (!el.disabled && el.value === value && !el.checked) {
	        el.checked = true;
	      }
	    }
	  };

	  CheckboxValidation.prototype._getValue = function _getValue(el) {
	    var _this5 = this;

	    if (!this._inits || this._inits.length === 0) {
	      return el.checked;
	    } else {
	      var _ret = function () {
	        var vals = [];
	        each(_this5._inits, function (item, index) {
	          item.el.checked && vals.push(item.el.value);
	        });
	        return {
	          v: vals
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  CheckboxValidation.prototype._getClassIds = function _getClassIds(el) {
	    var classIds = void 0;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        classIds = item.classIds;
	      }
	    });
	    return classIds;
	  };

	  CheckboxValidation.prototype._checkModified = function _checkModified(target) {
	    var _this6 = this;

	    if (this._inits.length === 0) {
	      return this._init !== target.checked;
	    } else {
	      var _ret2 = function () {
	        var modified = false;
	        each(_this6._inits, function (item, index) {
	          if (!modified) {
	            modified = item.init !== item.el.checked;
	          }
	        });
	        return {
	          v: modified
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };

	  return CheckboxValidation;
	}(BaseValidation);

	/**
	 * RadioValidation class
	 */

	var RadioValidation = function (_BaseValidation) {
	  babelHelpers.inherits(RadioValidation, _BaseValidation);

	  function RadioValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, RadioValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._inits = [];
	    return _this;
	  }

	  RadioValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var item = this._addItem(el, initial);

	    var model = item.model = this._model;
	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      this._setChecked(value, el, item);
	      item.unwatch = scope.$watch(model, function (val, old) {
	        if (val !== old) {
	          if (_this2.guardValidate(item.el, 'change')) {
	            return;
	          }

	          _this2.handleValidate(el, { noopable: item.initial });
	          if (item.initial) {
	            item.initial = null;
	          }
	        }
	      });
	    } else {
	      var options = { field: this.field, noopable: initial };
	      if (this._checkClassIds(el)) {
	        options.el = el;
	      }
	      this._validator.validate(options);
	    }
	  };

	  RadioValidation.prototype.unmanageElement = function unmanageElement(el) {
	    var found = -1;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        found = index;
	      }
	    });
	    if (found === -1) {
	      return;
	    }

	    this._inits.splice(found, 1);
	    this._validator.validate({ field: this.field });
	  };

	  RadioValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var _this3 = this;

	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    each(this._inits, function (item, index) {
	      touched && _this3.willUpdateTouched(item.el, 'blur');
	      _this3.willUpdateDirty(item.el);
	      _this3.willUpdateModified(item.el);
	    });
	  };

	  RadioValidation.prototype.reset = function reset() {
	    this.resetValidationNoopable();
	    this.resetFlags();
	    each(this._inits, function (item, index) {
	      item.init = item.el.checked;
	      item.value = item.el.value;
	    });
	  };

	  RadioValidation.prototype.updateClasses = function updateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (el) {
	      // for another element
	      this._updateClasses(el, results);
	    } else {
	      each(this._inits, function (item, index) {
	        _this4._updateClasses(item.el, results);
	      });
	    }
	  };

	  RadioValidation.prototype._addItem = function _addItem(el, initial) {
	    var item = {
	      el: el,
	      init: el.checked,
	      value: el.value,
	      initial: initial
	    };

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      item.classIds = classIds.split(',');
	    }

	    this._inits.push(item);
	    return item;
	  };

	  RadioValidation.prototype._setChecked = function _setChecked(value, el, item) {
	    if (el.value === value) {
	      el.checked = true;
	      this._init = el.checked;
	      item.init = el.checked;
	      item.value = value;
	    }
	  };

	  RadioValidation.prototype._getValue = function _getValue(el) {
	    var _this5 = this;

	    if (!this._inits || this._inits.length === 0) {
	      return el.checked;
	    } else {
	      var _ret = function () {
	        var vals = [];
	        each(_this5._inits, function (item, index) {
	          item.el.checked && vals.push(item.el.value);
	        });
	        return {
	          v: vals
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  RadioValidation.prototype._getClassIds = function _getClassIds(el) {
	    var classIds = void 0;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        classIds = item.classIds;
	      }
	    });
	    return classIds;
	  };

	  RadioValidation.prototype._checkModified = function _checkModified(target) {
	    var _this6 = this;

	    if (this._inits.length === 0) {
	      return this._init !== target.checked;
	    } else {
	      var _ret2 = function () {
	        var modified = false;
	        each(_this6._inits, function (item, index) {
	          if (!modified) {
	            modified = item.init !== item.el.checked;
	          }
	        });
	        return {
	          v: modified
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };

	  return RadioValidation;
	}(BaseValidation);

	/**
	 * SelectValidation class
	 */

	var SelectValidation = function (_BaseValidation) {
	  babelHelpers.inherits(SelectValidation, _BaseValidation);

	  function SelectValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, SelectValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._multiple = _this._el.hasAttribute('multiple');
	    return _this;
	  }

	  SelectValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var model = this._model;

	    this._initial = initial;

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      this._classIds = classIds.split(',');
	    }

	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      var values = !Array.isArray(value) ? [value] : value;
	      this._setOption(values, el);
	      this._unwatch = scope.$watch(model, function (val, old) {
	        var values1 = !Array.isArray(val) ? [val] : val;
	        var values2 = !Array.isArray(old) ? [old] : old;
	        if (values1.slice().sort().toString() !== values2.slice().sort().toString()) {
	          if (_this2.guardValidate(el, 'change')) {
	            return;
	          }

	          _this2.handleValidate(el, { noopable: _this2._initial });
	          if (_this2._initial) {
	            _this2._initial = null;
	          }
	        }
	      });
	    }
	  };

	  SelectValidation.prototype.unmanageElement = function unmanageElement(el) {
	    this._unwatch && this._unwatch();
	  };

	  SelectValidation.prototype._getValue = function _getValue(el) {
	    var ret = [];

	    for (var i = 0, l = el.options.length; i < l; i++) {
	      var option = el.options[i];
	      if (!option.disabled && option.selected) {
	        ret.push(option.value);
	      }
	    }

	    return ret;
	  };

	  SelectValidation.prototype._setOption = function _setOption(values, el) {
	    for (var i = 0, l = values.length; i < l; i++) {
	      var value = values[i];
	      for (var j = 0, m = el.options.length; j < m; j++) {
	        var option = el.options[j];
	        if (!option.disabled && option.value === value && (!option.hasAttribute('selected') || !option.selected)) {
	          option.selected = true;
	        }
	      }
	    }
	  };

	  SelectValidation.prototype._checkModified = function _checkModified(target) {
	    var values = this._getValue(target).slice().sort();
	    if (this._init.length !== values.length) {
	      return true;
	    } else {
	      var inits = this._init.slice().sort();
	      return inits.toString() !== values.toString();
	    }
	  };

	  return SelectValidation;
	}(BaseValidation);

	/**
	 * Validator class
	 */

	var Validator$1 = function () {
	  function Validator(name, dir, groups, classes) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Validator);

	    this.name = name;

	    this._scope = {};
	    this._dir = dir;
	    this._validations = {};
	    this._checkboxValidations = {};
	    this._radioValidations = {};
	    this._groups = groups;
	    this._groupValidations = {};
	    this._events = {};
	    this._modified = false;
	    this._classes = classes;

	    each(groups, function (group) {
	      _this._groupValidations[group] = [];
	    });
	  }

	  Validator.prototype.enableReactive = function enableReactive() {
	    var vm = this._dir.vm;

	    // define the validation scope
	    exports$1.Vue.util.defineReactive(vm, this.name, this._scope);
	    vm._validatorMaps[this.name] = this;

	    // define the validation resetting meta method to vue instance
	    this._defineResetValidation();

	    // define the validate manually meta method to vue instance
	    this._defineValidate();

	    // define manually the validation errors
	    this._defineSetValidationErrors();
	  };

	  Validator.prototype.disableReactive = function disableReactive() {
	    var vm = this._dir.vm;
	    vm.$setValidationErrors = null;
	    delete vm['$setValidationErrors'];
	    vm.$validate = null;
	    delete vm['$validate'];
	    vm.$resetValidation = null;
	    delete vm['$resetValidation'];
	    vm._validatorMaps[this.name] = null;
	    delete vm._validatorMaps[this.name];
	    vm[this.name] = null;
	    delete vm[this.name];
	  };

	  Validator.prototype.registerEvents = function registerEvents() {
	    var isSimplePath = exports$1.Vue.parsers.expression.isSimplePath;

	    var attrs = this._dir.el.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var event = attrs[i].name;
	      if (REGEX_EVENT.test(event)) {
	        var value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        event = event.replace(REGEX_EVENT, '');
	        this._events[this._getEventName(event)] = this._dir.vm.$eval(value, true);
	      }
	    }
	  };

	  Validator.prototype.unregisterEvents = function unregisterEvents() {
	    var _this2 = this;

	    each(this._events, function (handler, event) {
	      _this2._events[event] = null;
	      delete _this2._events[event];
	    });
	  };

	  Validator.prototype.manageValidation = function manageValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = null;

	    if (el.tagName === 'SELECT') {
	      validation = this._manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else if (el.type === 'checkbox') {
	      validation = this._manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else if (el.type === 'radio') {
	      validation = this._manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else {
	      validation = this._manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    }

	    validation.setValidationClasses(this._classes);

	    return validation;
	  };

	  Validator.prototype.unmanageValidation = function unmanageValidation(field, el) {
	    if (el.type === 'checkbox') {
	      this._unmanageCheckboxValidation(field, el);
	    } else if (el.type === 'radio') {
	      this._unmanageRadioValidation(field, el);
	    } else if (el.tagName === 'SELECT') {
	      this._unmanageSelectValidation(field, el);
	    } else {
	      this._unmanageBaseValidation(field, el);
	    }
	  };

	  Validator.prototype.addGroupValidation = function addGroupValidation(group, field) {
	    var indexOf = exports$1.Vue.util.indexOf;

	    var validation = this._getValidationFrom(field);
	    var validations = this._groupValidations[group];

	    validations && !~indexOf(validations, validation) && validations.push(validation);
	  };

	  Validator.prototype.removeGroupValidation = function removeGroupValidation(group, field) {
	    var validation = this._getValidationFrom(field);
	    var validations = this._groupValidations[group];

	    validations && pull(validations, validation);
	  };

	  Validator.prototype.validate = function validate() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$el = _ref.el;
	    var el = _ref$el === undefined ? null : _ref$el;
	    var _ref$field = _ref.field;
	    var field = _ref$field === undefined ? null : _ref$field;
	    var _ref$touched = _ref.touched;
	    var touched = _ref$touched === undefined ? false : _ref$touched;
	    var _ref$noopable = _ref.noopable;
	    var noopable = _ref$noopable === undefined ? false : _ref$noopable;
	    var _ref$cb = _ref.cb;
	    var cb = _ref$cb === undefined ? null : _ref$cb;

	    if (!field) {
	      // all
	      each(this.validations, function (validation, key) {
	        validation.willUpdateFlags(touched);
	      });
	      this._validates(cb);
	    } else {
	      // each field
	      this._validate(field, touched, noopable, el, cb);
	    }
	  };

	  Validator.prototype.setupScope = function setupScope() {
	    var _this3 = this;

	    this._defineProperties(function () {
	      return _this3.validations;
	    }, function () {
	      return _this3._scope;
	    });

	    each(this._groups, function (name) {
	      var validations = _this3._groupValidations[name];
	      var group = {};
	      exports$1.Vue.set(_this3._scope, name, group);
	      _this3._defineProperties(function () {
	        return validations;
	      }, function () {
	        return group;
	      });
	    });
	  };

	  Validator.prototype.waitFor = function waitFor(cb) {
	    var method = '$activateValidator';
	    var vm = this._dir.vm;

	    vm[method] = function () {
	      cb();
	      vm[method] = null;
	    };
	  };

	  Validator.prototype._defineResetValidation = function _defineResetValidation() {
	    var _this4 = this;

	    this._dir.vm.$resetValidation = function (cb) {
	      _this4._resetValidation(cb);
	    };
	  };

	  Validator.prototype._defineValidate = function _defineValidate() {
	    var _this5 = this;

	    this._dir.vm.$validate = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var field = null;
	      var touched = false;
	      var cb = null;

	      each(args, function (arg, index) {
	        if (typeof arg === 'string') {
	          field = arg;
	        } else if (typeof arg === 'boolean') {
	          touched = arg;
	        } else if (typeof arg === 'function') {
	          cb = arg;
	        }
	      });

	      _this5.validate({ field: field, touched: touched, cb: cb });
	    };
	  };

	  Validator.prototype._defineSetValidationErrors = function _defineSetValidationErrors() {
	    var _this6 = this;

	    this._dir.vm.$setValidationErrors = function (errors) {
	      _this6._setValidationErrors(errors);
	    };
	  };

	  Validator.prototype._validate = function _validate(field) {
	    var touched = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var noopable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    var _this7 = this;

	    var el = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	    var cb = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

	    var scope = this._scope;

	    var validation = this._getValidationFrom(field);
	    if (validation) {
	      validation.willUpdateFlags(touched);
	      validation.validate(function (results) {
	        exports$1.Vue.set(scope, field, results);
	        _this7._fireEvents();
	        cb && cb();
	      }, noopable, el);
	    }
	  };

	  Validator.prototype._validates = function _validates(cb) {
	    var _this8 = this;

	    var scope = this._scope;

	    this._runValidates(function (validation, key, done) {
	      validation.validate(function (results) {
	        exports$1.Vue.set(scope, key, results);
	        done();
	      });
	    }, function () {
	      // finished
	      _this8._fireEvents();
	      cb && cb();
	    });
	  };

	  Validator.prototype._getValidationFrom = function _getValidationFrom(field) {
	    return this._validations[field] || this._checkboxValidations[field] && this._checkboxValidations[field].validation || this._radioValidations[field] && this._radioValidations[field].validation;
	  };

	  Validator.prototype._resetValidation = function _resetValidation(cb) {
	    each(this.validations, function (validation, key) {
	      validation.reset();
	    });
	    this._validates(cb);
	  };

	  Validator.prototype._setValidationErrors = function _setValidationErrors(errors) {
	    var _this9 = this;

	    var extend = exports$1.Vue.util.extend;

	    // make tempolaly errors

	    var temp = {};
	    each(errors, function (error, index) {
	      if (!temp[error.field]) {
	        temp[error.field] = [];
	      }
	      temp[error.field].push(error);
	    });

	    // set errors
	    each(temp, function (values, field) {
	      var results = _this9._scope[field];
	      var newResults = {};

	      each(values, function (error) {
	        if (error.validator) {
	          results[error.validator] = error.message;
	        }
	      });

	      results.valid = false;
	      results.invalid = true;
	      results.errors = values;
	      extend(newResults, results);

	      var validation = _this9._getValidationFrom(field);
	      validation.willUpdateClasses(newResults, validation.el);

	      exports$1.Vue.set(_this9._scope, field, newResults);
	    });
	  };

	  Validator.prototype._manageBaseValidation = function _manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = this._validations[field] = new BaseValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	    validation.manageElement(el, initial);
	    return validation;
	  };

	  Validator.prototype._unmanageBaseValidation = function _unmanageBaseValidation(field, el) {
	    var validation = this._validations[field];
	    if (validation) {
	      validation.unmanageElement(el);
	      exports$1.Vue.delete(this._scope, field);
	      this._validations[field] = null;
	      delete this._validations[field];
	    }
	  };

	  Validator.prototype._manageCheckboxValidation = function _manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validationSet = this._checkboxValidations[field];
	    if (!validationSet) {
	      var validation = new CheckboxValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	      validationSet = { validation: validation, elements: 0 };
	      this._checkboxValidations[field] = validationSet;
	    }

	    validationSet.elements++;
	    validationSet.validation.manageElement(el, initial);
	    return validationSet.validation;
	  };

	  Validator.prototype._unmanageCheckboxValidation = function _unmanageCheckboxValidation(field, el) {
	    var validationSet = this._checkboxValidations[field];
	    if (validationSet) {
	      validationSet.elements--;
	      validationSet.validation.unmanageElement(el);
	      if (validationSet.elements === 0) {
	        exports$1.Vue.delete(this._scope, field);
	        this._checkboxValidations[field] = null;
	        delete this._checkboxValidations[field];
	      }
	    }
	  };

	  Validator.prototype._manageRadioValidation = function _manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validationSet = this._radioValidations[field];
	    if (!validationSet) {
	      var validation = new RadioValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	      validationSet = { validation: validation, elements: 0 };
	      this._radioValidations[field] = validationSet;
	    }

	    validationSet.elements++;
	    validationSet.validation.manageElement(el, initial);
	    return validationSet.validation;
	  };

	  Validator.prototype._unmanageRadioValidation = function _unmanageRadioValidation(field, el) {
	    var validationSet = this._radioValidations[field];
	    if (validationSet) {
	      validationSet.elements--;
	      validationSet.validation.unmanageElement(el);
	      if (validationSet.elements === 0) {
	        exports$1.Vue.delete(this._scope, field);
	        this._radioValidations[field] = null;
	        delete this._radioValidations[field];
	      }
	    }
	  };

	  Validator.prototype._manageSelectValidation = function _manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = this._validations[field] = new SelectValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	    validation.manageElement(el, initial);
	    return validation;
	  };

	  Validator.prototype._unmanageSelectValidation = function _unmanageSelectValidation(field, el) {
	    var validation = this._validations[field];
	    if (validation) {
	      validation.unmanageElement(el);
	      exports$1.Vue.delete(this._scope, field);
	      this._validations[field] = null;
	      delete this._validations[field];
	    }
	  };

	  Validator.prototype._fireEvent = function _fireEvent(type) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    var handler = this._events[this._getEventName(type)];
	    handler && this._dir.vm.$nextTick(function () {
	      handler.apply(null, args);
	    });
	  };

	  Validator.prototype._fireEvents = function _fireEvents() {
	    var scope = this._scope;

	    scope.touched && this._fireEvent('touched');
	    scope.dirty && this._fireEvent('dirty');

	    if (this._modified !== scope.modified) {
	      this._fireEvent('modified', scope.modified);
	      this._modified = scope.modified;
	    }

	    var valid = scope.valid;
	    this._fireEvent(valid ? 'valid' : 'invalid');
	  };

	  Validator.prototype._getEventName = function _getEventName(type) {
	    return this.name + ':' + type;
	  };

	  Validator.prototype._defineProperties = function _defineProperties(validationsGetter, targetGetter) {
	    var _this10 = this;

	    var bind = exports$1.Vue.util.bind;

	    each({
	      valid: { fn: this._defineValid, arg: validationsGetter },
	      invalid: { fn: this._defineInvalid, arg: targetGetter },
	      touched: { fn: this._defineTouched, arg: validationsGetter },
	      untouched: { fn: this._defineUntouched, arg: targetGetter },
	      modified: { fn: this._defineModified, arg: validationsGetter },
	      dirty: { fn: this._defineDirty, arg: validationsGetter },
	      pristine: { fn: this._definePristine, arg: targetGetter },
	      errors: { fn: this._defineErrors, arg: validationsGetter }
	    }, function (descriptor, name) {
	      Object.defineProperty(targetGetter(), name, {
	        enumerable: true,
	        configurable: true,
	        get: function get() {
	          return bind(descriptor.fn, _this10)(descriptor.arg);
	        }
	      });
	    });
	  };

	  Validator.prototype._runValidates = function _runValidates(fn, cb) {
	    var length = Object.keys(this.validations).length;

	    var count = 0;
	    each(this.validations, function (validation, key) {
	      fn(validation, key, function () {
	        ++count;
	        count >= length && cb();
	      });
	    });
	  };

	  Validator.prototype._walkValidations = function _walkValidations(validations, property, condition) {
	    var _this11 = this;

	    var hasOwn = exports$1.Vue.util.hasOwn;
	    var ret = condition;

	    each(validations, function (validation, key) {
	      if (ret === !condition) {
	        return;
	      }
	      if (hasOwn(_this11._scope, validation.field)) {
	        var target = _this11._scope[validation.field];
	        if (target && target[property] === !condition) {
	          ret = !condition;
	        }
	      }
	    });

	    return ret;
	  };

	  Validator.prototype._defineValid = function _defineValid(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'valid', true);
	  };

	  Validator.prototype._defineInvalid = function _defineInvalid(scopeGetter) {
	    return !scopeGetter().valid;
	  };

	  Validator.prototype._defineTouched = function _defineTouched(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'touched', false);
	  };

	  Validator.prototype._defineUntouched = function _defineUntouched(scopeGetter) {
	    return !scopeGetter().touched;
	  };

	  Validator.prototype._defineModified = function _defineModified(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'modified', false);
	  };

	  Validator.prototype._defineDirty = function _defineDirty(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'dirty', false);
	  };

	  Validator.prototype._definePristine = function _definePristine(scopeGetter) {
	    return !scopeGetter().dirty;
	  };

	  Validator.prototype._defineErrors = function _defineErrors(validationsGetter) {
	    var _this12 = this;

	    var hasOwn = exports$1.Vue.util.hasOwn;
	    var isPlainObject = exports$1.Vue.util.isPlainObject;
	    var errors = [];

	    each(validationsGetter(), function (validation, key) {
	      if (hasOwn(_this12._scope, validation.field)) {
	        var target = _this12._scope[validation.field];
	        if (target && !empty(target.errors)) {
	          each(target.errors, function (err, index) {
	            var error = { field: validation.field };
	            if (isPlainObject(err)) {
	              if (err.validator) {
	                error.validator = err.validator;
	              }
	              error.message = err.message;
	            } else if (typeof err === 'string') {
	              error.message = err;
	            }
	            errors.push(error);
	          });
	        }
	      }
	    });

	    return empty(errors) ? undefined : errors.sort(function (a, b) {
	      return a.field < b.field ? -1 : 1;
	    });
	  };

	  babelHelpers.createClass(Validator, [{
	    key: 'validations',
	    get: function get() {
	      var extend = exports$1.Vue.util.extend;

	      var ret = {};
	      extend(ret, this._validations);

	      each(this._checkboxValidations, function (dataset, key) {
	        ret[key] = dataset.validation;
	      });

	      each(this._radioValidations, function (dataset, key) {
	        ret[key] = dataset.validation;
	      });

	      return ret;
	    }
	  }]);
	  return Validator;
	}();

	function Validator (Vue) {
	  var FragmentFactory = Vue.FragmentFactory;
	  var vIf = Vue.directive('if');
	  var _Vue$util = Vue.util;
	  var isArray = _Vue$util.isArray;
	  var isPlainObject = _Vue$util.isPlainObject;
	  var createAnchor = _Vue$util.createAnchor;
	  var replace = _Vue$util.replace;
	  var extend = _Vue$util.extend;
	  var camelize = _Vue$util.camelize;

	  /**
	   * `validator` element directive
	   */

	  Vue.elementDirective('validator', {
	    params: ['name', 'groups', 'lazy', 'classes'],

	    bind: function bind() {
	      var params = this.params;

	      if (process.env.NODE_ENV !== 'production' && !params.name) {
	        warn('validator element requires a \'name\' attribute: ' + '(e.g. <validator name="validator1">...</validator>)');
	        return;
	      }

	      this.validatorName = '$' + camelize(params.name);
	      if (!this.vm._validatorMaps) {
	        throw new Error('Invalid validator management error');
	      }

	      var classes = {};
	      if (isPlainObject(this.params.classes)) {
	        classes = this.params.classes;
	      }

	      this.setupValidator(classes);
	      this.setupFragment(params.lazy);
	    },
	    unbind: function unbind() {
	      this.teardownFragment();
	      this.teardownValidator();
	    },
	    getGroups: function getGroups() {
	      var params = this.params;
	      var groups = [];

	      if (params.groups) {
	        if (isArray(params.groups)) {
	          groups = params.groups;
	        } else if (!isPlainObject(params.groups) && typeof params.groups === 'string') {
	          groups.push(params.groups);
	        }
	      }

	      return groups;
	    },
	    setupValidator: function setupValidator(classes) {
	      var validator = this.validator = new Validator$1(this.validatorName, this, this.getGroups(), classes);
	      validator.enableReactive();
	      validator.setupScope();
	      validator.registerEvents();
	    },
	    teardownValidator: function teardownValidator() {
	      this.validator.unregisterEvents();
	      this.validator.disableReactive();

	      if (this.validatorName) {
	        this.validatorName = null;
	        this.validator = null;
	      }
	    },
	    setupFragment: function setupFragment(lazy) {
	      var _this = this;

	      var vm = this.vm;

	      this.validator.waitFor(function () {
	        _this.anchor = createAnchor('vue-validator');
	        replace(_this.el, _this.anchor);
	        extend(vm.$options, { _validator: _this.validatorName });
	        _this.factory = new FragmentFactory(vm, _this.el.innerHTML);
	        vIf.insert.call(_this);
	      });

	      !lazy && vm.$activateValidator();
	    },
	    teardownFragment: function teardownFragment() {
	      vIf.unbind.call(this);
	    }
	  });
	}

	function ValidatorError (Vue) {
	  /**
	   * ValidatorError component
	   */

	  var error = {
	    name: 'validator-error',

	    props: {
	      field: {
	        type: String,
	        required: true
	      },
	      validator: {
	        type: String
	      },
	      message: {
	        type: String,
	        required: true
	      },
	      partial: {
	        type: String,
	        default: 'validator-error-default'
	      }
	    },

	    template: '<div><partial :name="partial"></partial></div>',

	    partials: {}
	  };

	  // only use ValidatorError component
	  error.partials['validator-error-default'] = '<p>{{field}}: {{message}}</p>';

	  return error;
	}

	function Errors (Vue) {
	  var _ = Vue.util;
	  var error = ValidatorError(Vue); // import ValidatorError component

	  /**
	   * ValidatorErrors component
	   */

	  var errors = {
	    name: 'validator-errors',

	    props: {
	      validation: {
	        type: Object,
	        required: true
	      },
	      group: {
	        type: String,
	        default: null
	      },
	      field: {
	        type: String,
	        default: null
	      },
	      component: {
	        type: String,
	        default: 'validator-error'
	      }
	    },

	    computed: {
	      errors: function errors() {
	        var _this = this;

	        if (this.group !== null) {
	          return this.validation[this.group].errors;
	        } else if (this.field !== null) {
	          var target = this.validation[this.field];
	          if (!target.errors) {
	            return;
	          }

	          return target.errors.map(function (error) {
	            var err = { field: _this.field };
	            if (_.isPlainObject(error)) {
	              if (error.validator) {
	                err.validator = error.validator;
	              }
	              err.message = error.message;
	            } else if (typeof error === 'string') {
	              err.message = error;
	            }
	            return err;
	          });
	        } else {
	          return this.validation.errors;
	        }
	      }
	    },

	    template: '<template v-for="error in errors">' + '<component :is="component" :partial="partial" :field="error.field" :validator="error.validator" :message="error.message">' + '</component>' + '</template>',

	    components: {}
	  };

	  // define 'partial' prop
	  errors.props['partial'] = error.props['partial'];

	  // only use ValidatorErrors component
	  errors.components[error.name] = error;

	  // install ValidatorErrors component
	  Vue.component(errors.name, errors);

	  return errors;
	}

	/**
	 * plugin
	 *
	 * @param {Function} Vue
	 * @param {Object} options
	 */

	function plugin(Vue) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (plugin.installed) {
	    warn('already installed.');
	    return;
	  }

	  exports$1.Vue = Vue;
	  Asset(Vue);
	  Errors(Vue);

	  Override(Vue);
	  Validator(Vue);
	  ValidateClass(Vue);
	  Validate(Vue);
	}

	plugin.version = '2.1.7';

	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(plugin);
	}

	module.exports = plugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(267);
	__webpack_require__(271);
	__webpack_require__(274);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(280);
	__webpack_require__(282);
	__webpack_require__(284);
	__webpack_require__(286);
	__webpack_require__(288);
	__webpack_require__(290);
	__webpack_require__(292);
	__webpack_require__(294);
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(300);
	__webpack_require__(302);
	__webpack_require__(304);
	// console.log(hljs)

	hljs.initHighlightingOnLoad();

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _keys = __webpack_require__(40);

	var _keys2 = _interopRequireDefault(_keys);

	var _create = __webpack_require__(268);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(142);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*! highlight.js v9.7.0 | BSD3 License | git.io/hljslicense */!function (e) {
	    var n = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) && window || "object" == (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) && self;
	    n.hljs = e({});
	}(function (e) {
	    function n(e) {
	        return e.replace(/[&<>]/gm, function (e) {
	            return I[e];
	        });
	    }

	    function t(e) {
	        return e.nodeName.toLowerCase();
	    }

	    function r(e, n) {
	        var t = e && e.exec(n);
	        return t && 0 === t.index;
	    }

	    function a(e) {
	        return k.test(e);
	    }

	    function i(e) {
	        var n,
	            t,
	            r,
	            i,
	            o = e.className + " ";
	        if (o += e.parentNode ? e.parentNode.className : "", t = B.exec(o)) return R(t[1]) ? t[1] : "no-highlight";
	        for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++) {
	            if (i = o[n], a(i) || R(i)) return i;
	        }
	    }

	    function o(e, n) {
	        var t,
	            r = {};
	        for (t in e) {
	            r[t] = e[t];
	        }if (n) for (t in n) {
	            r[t] = n[t];
	        }return r;
	    }

	    function u(e) {
	        var n = [];
	        return function r(e, a) {
	            for (var i = e.firstChild; i; i = i.nextSibling) {
	                3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
	                    event: "start",
	                    offset: a,
	                    node: i
	                }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
	                    event: "stop",
	                    offset: a,
	                    node: i
	                }));
	            }return a;
	        }(e, 0), n;
	    }

	    function c(e, r, a) {
	        function i() {
	            return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r;
	        }

	        function o(e) {
	            function r(e) {
	                return " " + e.nodeName + '="' + n(e.value) + '"';
	            }
	            l += "<" + t(e) + w.map.call(e.attributes, r).join("") + ">";
	        }

	        function u(e) {
	            l += "</" + t(e) + ">";
	        }

	        function c(e) {
	            ("start" === e.event ? o : u)(e.node);
	        }
	        for (var s = 0, l = "", f = []; e.length || r.length;) {
	            var g = i();
	            if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g === e) {
	                f.reverse().forEach(u);
	                do {
	                    c(g.splice(0, 1)[0]), g = i();
	                } while (g === e && g.length && g[0].offset === s);
	                f.reverse().forEach(o);
	            } else "start" === g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0]);
	        }
	        return l + n(a.substr(s));
	    }

	    function s(e) {
	        function n(e) {
	            return e && e.source || e;
	        }

	        function t(t, r) {
	            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""));
	        }

	        function r(a, i) {
	            if (!a.compiled) {
	                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
	                    var u = {},
	                        c = function c(n, t) {
	                        e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
	                            var t = e.split("|");
	                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1];
	                        });
	                    };
	                    "string" == typeof a.k ? c("keyword", a.k) : E(a.k).forEach(function (e) {
	                        c(e, a.k[e]);
	                    }), a.k = u;
	                }
	                a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []);
	                var s = [];
	                a.c.forEach(function (e) {
	                    e.v ? e.v.forEach(function (n) {
	                        s.push(o(e, n));
	                    }) : s.push("self" === e ? a : e);
	                }), a.c = s, a.c.forEach(function (e) {
	                    r(e, a);
	                }), a.starts && r(a.starts, i);
	                var l = a.c.map(function (e) {
	                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
	                }).concat([a.tE, a.i]).map(n).filter(Boolean);
	                a.t = l.length ? t(l.join("|"), !0) : {
	                    exec: function exec() {
	                        return null;
	                    }
	                };
	            }
	        }
	        r(e);
	    }

	    function l(e, t, a, i) {
	        function o(e, n) {
	            var t, a;
	            for (t = 0, a = n.c.length; a > t; t++) {
	                if (r(n.c[t].bR, e)) return n.c[t];
	            }
	        }

	        function u(e, n) {
	            if (r(e.eR, n)) {
	                for (; e.endsParent && e.parent;) {
	                    e = e.parent;
	                }return e;
	            }
	            return e.eW ? u(e.parent, n) : void 0;
	        }

	        function c(e, n) {
	            return !a && r(n.iR, e);
	        }

	        function g(e, n) {
	            var t = N.cI ? n[0].toLowerCase() : n[0];
	            return e.k.hasOwnProperty(t) && e.k[t];
	        }

	        function h(e, n, t, r) {
	            var a = r ? "" : y.classPrefix,
	                i = '<span class="' + a,
	                o = t ? "" : C;
	            return i += e + '">', i + n + o;
	        }

	        function p() {
	            var e, t, r, a;
	            if (!E.k) return n(B);
	            for (a = "", t = 0, E.lR.lastIndex = 0, r = E.lR.exec(B); r;) {
	                a += n(B.substr(t, r.index - t)), e = g(E, r), e ? (M += e[1], a += h(e[0], n(r[0]))) : a += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(B);
	            }return a + n(B.substr(t));
	        }

	        function d() {
	            var e = "string" == typeof E.sL;
	            if (e && !x[E.sL]) return n(B);
	            var t = e ? l(E.sL, B, !0, L[E.sL]) : f(B, E.sL.length ? E.sL : void 0);
	            return E.r > 0 && (M += t.r), e && (L[E.sL] = t.top), h(t.language, t.value, !1, !0);
	        }

	        function b() {
	            k += null != E.sL ? d() : p(), B = "";
	        }

	        function v(e) {
	            k += e.cN ? h(e.cN, "", !0) : "", E = (0, _create2.default)(e, {
	                parent: {
	                    value: E
	                }
	            });
	        }

	        function m(e, n) {
	            if (B += e, null == n) return b(), 0;
	            var t = o(n, E);
	            if (t) return t.skip ? B += n : (t.eB && (B += n), b(), t.rB || t.eB || (B = n)), v(t, n), t.rB ? 0 : n.length;
	            var r = u(E, n);
	            if (r) {
	                var a = E;
	                a.skip ? B += n : (a.rE || a.eE || (B += n), b(), a.eE && (B = n));
	                do {
	                    E.cN && (k += C), E.skip || (M += E.r), E = E.parent;
	                } while (E !== r.parent);
	                return r.starts && v(r.starts, ""), a.rE ? 0 : n.length;
	            }
	            if (c(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');
	            return B += n, n.length || 1;
	        }
	        var N = R(e);
	        if (!N) throw new Error('Unknown language: "' + e + '"');
	        s(N);
	        var w,
	            E = i || N,
	            L = {},
	            k = "";
	        for (w = E; w !== N; w = w.parent) {
	            w.cN && (k = h(w.cN, "", !0) + k);
	        }var B = "",
	            M = 0;
	        try {
	            for (var I, j, O = 0;;) {
	                if (E.t.lastIndex = O, I = E.t.exec(t), !I) break;
	                j = m(t.substr(O, I.index - O), I[0]), O = I.index + j;
	            }
	            for (m(t.substr(O)), w = E; w.parent; w = w.parent) {
	                w.cN && (k += C);
	            }return {
	                r: M,
	                value: k,
	                language: e,
	                top: E
	            };
	        } catch (T) {
	            if (T.message && -1 !== T.message.indexOf("Illegal")) return {
	                r: 0,
	                value: n(t)
	            };
	            throw T;
	        }
	    }

	    function f(e, t) {
	        t = t || y.languages || E(x);
	        var r = {
	            r: 0,
	            value: n(e)
	        },
	            a = r;
	        return t.filter(R).forEach(function (n) {
	            var t = l(n, e, !1);
	            t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t);
	        }), a.language && (r.second_best = a), r;
	    }

	    function g(e) {
	        return y.tabReplace || y.useBR ? e.replace(M, function (e, n) {
	            return y.useBR && "\n" === e ? "<br>" : y.tabReplace ? n.replace(/\t/g, y.tabReplace) : void 0;
	        }) : e;
	    }

	    function h(e, n, t) {
	        var r = n ? L[n] : t,
	            a = [e.trim()];
	        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim();
	    }

	    function p(e) {
	        var n,
	            t,
	            r,
	            o,
	            s,
	            p = i(e);
	        a(p) || (y.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, s = n.textContent, r = p ? l(p, s, !0) : f(s), t = u(n), t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = c(t, u(o), s)), r.value = g(r.value), e.innerHTML = r.value, e.className = h(e.className, p, r.language), e.result = {
	            language: r.language,
	            re: r.r
	        }, r.second_best && (e.second_best = {
	            language: r.second_best.language,
	            re: r.second_best.r
	        }));
	    }

	    function d(e) {
	        y = o(y, e);
	    }

	    function b() {
	        if (!b.called) {
	            b.called = !0;
	            var e = document.querySelectorAll("pre code");
	            w.forEach.call(e, p);
	        }
	    }

	    function v() {
	        addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1);
	    }

	    function m(n, t) {
	        var r = x[n] = t(e);
	        r.aliases && r.aliases.forEach(function (e) {
	            L[e] = n;
	        });
	    }

	    function N() {
	        return E(x);
	    }

	    function R(e) {
	        return e = (e || "").toLowerCase(), x[e] || x[L[e]];
	    }
	    var w = [],
	        E = _keys2.default,
	        x = {},
	        L = {},
	        k = /^(no-?highlight|plain|text)$/i,
	        B = /\blang(?:uage)?-([\w-]+)\b/i,
	        M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
	        C = "</span>",
	        y = {
	        classPrefix: "hljs-",
	        tabReplace: null,
	        useBR: !1,
	        languages: void 0
	    },
	        I = {
	        "&": "&amp;",
	        "<": "&lt;",
	        ">": "&gt;"
	    };
	    return e.highlight = l, e.highlightAuto = f, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = R, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
	        b: "\\\\[\\s\\S]",
	        r: 0
	    }, e.ASM = {
	        cN: "string",
	        b: "'",
	        e: "'",
	        i: "\\n",
	        c: [e.BE]
	    }, e.QSM = {
	        cN: "string",
	        b: '"',
	        e: '"',
	        i: "\\n",
	        c: [e.BE]
	    }, e.PWM = {
	        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	    }, e.C = function (n, t, r) {
	        var a = e.inherit({
	            cN: "comment",
	            b: n,
	            e: t,
	            c: []
	        }, r || {});
	        return a.c.push(e.PWM), a.c.push({
	            cN: "doctag",
	            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
	            r: 0
	        }), a;
	    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
	        cN: "number",
	        b: e.NR,
	        r: 0
	    }, e.CNM = {
	        cN: "number",
	        b: e.CNR,
	        r: 0
	    }, e.BNM = {
	        cN: "number",
	        b: e.BNR,
	        r: 0
	    }, e.CSSNM = {
	        cN: "number",
	        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
	        r: 0
	    }, e.RM = {
	        cN: "regexp",
	        b: /\//,
	        e: /\/[gimuy]*/,
	        i: /\n/,
	        c: [e.BE, {
	            b: /\[/,
	            e: /\]/,
	            r: 0,
	            c: [e.BE]
	        }]
	    }, e.TM = {
	        cN: "title",
	        b: e.IR,
	        r: 0
	    }, e.UTM = {
	        cN: "title",
	        b: e.UIR,
	        r: 0
	    }, e.METHOD_GUARD = {
	        b: "\\.\\s*" + e.UIR,
	        r: 0
	    }, e;
	});
	hljs.registerLanguage("coffeescript", function (e) {
	    var c = {
	        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
	        literal: "true false null undefined yes no on off",
	        built_in: "npm require console print module global window document"
	    },
	        n = "[A-Za-z$_][0-9A-Za-z$_]*",
	        r = {
	        cN: "subst",
	        b: /#\{/,
	        e: /}/,
	        k: c
	    },
	        s = [e.BNM, e.inherit(e.CNM, {
	        starts: {
	            e: "(\\s*/)?",
	            r: 0
	        }
	    }), {
	        cN: "string",
	        v: [{
	            b: /'''/,
	            e: /'''/,
	            c: [e.BE]
	        }, {
	            b: /'/,
	            e: /'/,
	            c: [e.BE]
	        }, {
	            b: /"""/,
	            e: /"""/,
	            c: [e.BE, r]
	        }, {
	            b: /"/,
	            e: /"/,
	            c: [e.BE, r]
	        }]
	    }, {
	        cN: "regexp",
	        v: [{
	            b: "///",
	            e: "///",
	            c: [r, e.HCM]
	        }, {
	            b: "//[gim]*",
	            r: 0
	        }, {
	            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }]
	    }, {
	        b: "@" + n
	    }, {
	        b: "`",
	        e: "`",
	        eB: !0,
	        eE: !0,
	        sL: "javascript"
	    }];
	    r.c = s;
	    var i = e.inherit(e.TM, {
	        b: n
	    }),
	        t = "(\\(.*\\))?\\s*\\B[-=]>",
	        o = {
	        cN: "params",
	        b: "\\([^\\(]",
	        rB: !0,
	        c: [{
	            b: /\(/,
	            e: /\)/,
	            k: c,
	            c: ["self"].concat(s)
	        }]
	    };
	    return {
	        aliases: ["coffee", "cson", "iced"],
	        k: c,
	        i: /\/\*/,
	        c: s.concat([e.C("###", "###"), e.HCM, {
	            cN: "function",
	            b: "^\\s*" + n + "\\s*=\\s*" + t,
	            e: "[-=]>",
	            rB: !0,
	            c: [i, o]
	        }, {
	            b: /[:\(,=]\s*/,
	            r: 0,
	            c: [{
	                cN: "function",
	                b: t,
	                e: "[-=]>",
	                rB: !0,
	                c: [o]
	            }]
	        }, {
	            cN: "class",
	            bK: "class",
	            e: "$",
	            i: /[:="\[\]]/,
	            c: [{
	                bK: "extends",
	                eW: !0,
	                i: /[:="\[\]]/,
	                c: [i]
	            }, i]
	        }, {
	            b: n + ":",
	            e: ":",
	            rB: !0,
	            rE: !0,
	            r: 0
	        }])
	    };
	});
	hljs.registerLanguage("http", function (e) {
	    var t = "HTTP/[0-9\\.]+";
	    return {
	        aliases: ["https"],
	        i: "\\S",
	        c: [{
	            b: "^" + t,
	            e: "$",
	            c: [{
	                cN: "number",
	                b: "\\b\\d{3}\\b"
	            }]
	        }, {
	            b: "^[A-Z]+ (.*?) " + t + "$",
	            rB: !0,
	            e: "$",
	            c: [{
	                cN: "string",
	                b: " ",
	                e: " ",
	                eB: !0,
	                eE: !0
	            }, {
	                b: t
	            }, {
	                cN: "keyword",
	                b: "[A-Z]+"
	            }]
	        }, {
	            cN: "attribute",
	            b: "^\\w",
	            e: ": ",
	            eE: !0,
	            i: "\\n|\\s|=",
	            starts: {
	                e: "$",
	                r: 0
	            }
	        }, {
	            b: "\\n\\n",
	            starts: {
	                sL: [],
	                eW: !0
	            }
	        }]
	    };
	});
	hljs.registerLanguage("json", function (e) {
	    var i = {
	        literal: "true false null"
	    },
	        n = [e.QSM, e.CNM],
	        r = {
	        e: ",",
	        eW: !0,
	        eE: !0,
	        c: n,
	        k: i
	    },
	        t = {
	        b: "{",
	        e: "}",
	        c: [{
	            cN: "attr",
	            b: /"/,
	            e: /"/,
	            c: [e.BE],
	            i: "\\n"
	        }, e.inherit(r, {
	            b: /:/
	        })],
	        i: "\\S"
	    },
	        c = {
	        b: "\\[",
	        e: "\\]",
	        c: [e.inherit(r)],
	        i: "\\S"
	    };
	    return n.splice(n.length, 0, t, c), {
	        c: n,
	        k: i,
	        i: "\\S"
	    };
	});
	hljs.registerLanguage("javascript", function (e) {
	    var r = "[A-Za-z$_][0-9A-Za-z$_]*",
	        t = {
	        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
	        literal: "true false null undefined NaN Infinity",
	        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
	    },
	        a = {
	        cN: "number",
	        v: [{
	            b: "\\b(0[bB][01]+)"
	        }, {
	            b: "\\b(0[oO][0-7]+)"
	        }, {
	            b: e.CNR
	        }],
	        r: 0
	    },
	        n = {
	        cN: "subst",
	        b: "\\$\\{",
	        e: "\\}",
	        k: t,
	        c: []
	    },
	        c = {
	        cN: "string",
	        b: "`",
	        e: "`",
	        c: [e.BE, n]
	    };
	    n.c = [e.ASM, e.QSM, c, a, e.RM];
	    var s = n.c.concat([e.CBCM, e.CLCM]);
	    return {
	        aliases: ["js", "jsx"],
	        k: t,
	        c: [{
	            cN: "meta",
	            r: 10,
	            b: /^\s*['"]use (strict|asm)['"]/
	        }, {
	            cN: "meta",
	            b: /^#!/,
	            e: /$/
	        }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, {
	            b: /[{,]\s*/,
	            r: 0,
	            c: [{
	                b: r + "\\s*:",
	                rB: !0,
	                r: 0,
	                c: [{
	                    cN: "attr",
	                    b: r,
	                    r: 0
	                }]
	            }]
	        }, {
	            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
	            k: "return throw case",
	            c: [e.CLCM, e.CBCM, e.RM, {
	                cN: "function",
	                b: "(\\(.*?\\)|" + r + ")\\s*=>",
	                rB: !0,
	                e: "\\s*=>",
	                c: [{
	                    cN: "params",
	                    v: [{
	                        b: r
	                    }, {
	                        b: /\(\s*\)/
	                    }, {
	                        b: /\(/,
	                        e: /\)/,
	                        eB: !0,
	                        eE: !0,
	                        k: t,
	                        c: s
	                    }]
	                }]
	            }, {
	                b: /</,
	                e: /(\/\w+|\w+\/)>/,
	                sL: "xml",
	                c: [{
	                    b: /<\w+\s*\/>/,
	                    skip: !0
	                }, {
	                    b: /<\w+/,
	                    e: /(\/\w+|\w+\/)>/,
	                    skip: !0,
	                    c: [{
	                        b: /<\w+\s*\/>/,
	                        skip: !0
	                    }, "self"]
	                }]
	            }],
	            r: 0
	        }, {
	            cN: "function",
	            bK: "function",
	            e: /\{/,
	            eE: !0,
	            c: [e.inherit(e.TM, {
	                b: r
	            }), {
	                cN: "params",
	                b: /\(/,
	                e: /\)/,
	                eB: !0,
	                eE: !0,
	                c: s
	            }],
	            i: /\[|%/
	        }, {
	            b: /\$[(.]/
	        }, e.METHOD_GUARD, {
	            cN: "class",
	            bK: "class",
	            e: /[{;=]/,
	            eE: !0,
	            i: /[:"\[\]]/,
	            c: [{
	                bK: "extends"
	            }, e.UTM]
	        }, {
	            bK: "constructor",
	            e: /\{/,
	            eE: !0
	        }],
	        i: /#(?!!)/
	    };
	});
	hljs.registerLanguage("cpp", function (t) {
	    var e = {
	        cN: "keyword",
	        b: "\\b[a-z\\d_]*_t\\b"
	    },
	        r = {
	        cN: "string",
	        v: [{
	            b: '(u8?|U)?L?"',
	            e: '"',
	            i: "\\n",
	            c: [t.BE]
	        }, {
	            b: '(u8?|U)?R"',
	            e: '"',
	            c: [t.BE]
	        }, {
	            b: "'\\\\?.",
	            e: "'",
	            i: "."
	        }]
	    },
	        s = {
	        cN: "number",
	        v: [{
	            b: "\\b(0b[01']+)"
	        }, {
	            b: "\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
	        }, {
	            b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
	        }],
	        r: 0
	    },
	        i = {
	        cN: "meta",
	        b: /#\s*[a-z]+\b/,
	        e: /$/,
	        k: {
	            "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
	        },
	        c: [{
	            b: /\\\n/,
	            r: 0
	        }, t.inherit(r, {
	            cN: "meta-string"
	        }), {
	            cN: "meta-string",
	            b: "<",
	            e: ">",
	            i: "\\n"
	        }, t.CLCM, t.CBCM]
	    },
	        a = t.IR + "\\s*\\(",
	        c = {
	        keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return",
	        built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
	        literal: "true false nullptr NULL"
	    },
	        n = [e, t.CLCM, t.CBCM, s, r];
	    return {
	        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
	        k: c,
	        i: "</",
	        c: n.concat([i, {
	            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
	            e: ">",
	            k: c,
	            c: ["self", e]
	        }, {
	            b: t.IR + "::",
	            k: c
	        }, {
	            v: [{
	                b: /=/,
	                e: /;/
	            }, {
	                b: /\(/,
	                e: /\)/
	            }, {
	                bK: "new throw return else",
	                e: /;/
	            }],
	            k: c,
	            c: n.concat([{
	                b: /\(/,
	                e: /\)/,
	                k: c,
	                c: n.concat(["self"]),
	                r: 0
	            }]),
	            r: 0
	        }, {
	            cN: "function",
	            b: "(" + t.IR + "[\\*&\\s]+)+" + a,
	            rB: !0,
	            e: /[{;=]/,
	            eE: !0,
	            k: c,
	            i: /[^\w\s\*&]/,
	            c: [{
	                b: a,
	                rB: !0,
	                c: [t.TM],
	                r: 0
	            }, {
	                cN: "params",
	                b: /\(/,
	                e: /\)/,
	                k: c,
	                r: 0,
	                c: [t.CLCM, t.CBCM, r, s, e]
	            }, t.CLCM, t.CBCM, i]
	        }]),
	        exports: {
	            preprocessor: i,
	            strings: r,
	            k: c
	        }
	    };
	});
	hljs.registerLanguage("nginx", function (e) {
	    var r = {
	        cN: "variable",
	        v: [{
	            b: /\$\d+/
	        }, {
	            b: /\$\{/,
	            e: /}/
	        }, {
	            b: "[\\$\\@]" + e.UIR
	        }]
	    },
	        b = {
	        eW: !0,
	        l: "[a-z/_]+",
	        k: {
	            literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
	        },
	        r: 0,
	        i: "=>",
	        c: [e.HCM, {
	            cN: "string",
	            c: [e.BE, r],
	            v: [{
	                b: /"/,
	                e: /"/
	            }, {
	                b: /'/,
	                e: /'/
	            }]
	        }, {
	            b: "([a-z]+):/",
	            e: "\\s",
	            eW: !0,
	            eE: !0,
	            c: [r]
	        }, {
	            cN: "regexp",
	            c: [e.BE, r],
	            v: [{
	                b: "\\s\\^",
	                e: "\\s|{|;",
	                rE: !0
	            }, {
	                b: "~\\*?\\s+",
	                e: "\\s|{|;",
	                rE: !0
	            }, {
	                b: "\\*(\\.[a-z\\-]+)+"
	            }, {
	                b: "([a-z\\-]+\\.)+\\*"
	            }]
	        }, {
	            cN: "number",
	            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
	        }, {
	            cN: "number",
	            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
	            r: 0
	        }, r]
	    };
	    return {
	        aliases: ["nginxconf"],
	        c: [e.HCM, {
	            b: e.UIR + "\\s+{",
	            rB: !0,
	            e: "{",
	            c: [{
	                cN: "section",
	                b: e.UIR
	            }],
	            r: 0
	        }, {
	            b: e.UIR + "\\s",
	            e: ";|{",
	            rB: !0,
	            c: [{
	                cN: "attribute",
	                b: e.UIR,
	                starts: b
	            }],
	            r: 0
	        }],
	        i: "[^\\s\\}]"
	    };
	});
	hljs.registerLanguage("less", function (e) {
	    var r = "[\\w-]+",
	        t = "(" + r + "|@{" + r + "})",
	        a = [],
	        c = [],
	        s = function s(e) {
	        return {
	            cN: "string",
	            b: "~?" + e + ".*?" + e
	        };
	    },
	        b = function b(e, r, t) {
	        return {
	            cN: e,
	            b: r,
	            r: t
	        };
	    },
	        n = {
	        b: "\\(",
	        e: "\\)",
	        c: c,
	        r: 0
	    };
	    c.push(e.CLCM, e.CBCM, s("'"), s('"'), e.CSSNM, {
	        b: "(url|data-uri)\\(",
	        starts: {
	            cN: "string",
	            e: "[\\)\\n]",
	            eE: !0
	        }
	    }, b("number", "#[0-9A-Fa-f]+\\b"), n, b("variable", "@@?" + r, 10), b("variable", "@{" + r + "}"), b("built_in", "~?`[^`]*?`"), {
	        cN: "attribute",
	        b: r + "\\s*:",
	        e: ":",
	        rB: !0,
	        eE: !0
	    }, {
	        cN: "meta",
	        b: "!important"
	    });
	    var i = c.concat({
	        b: "{",
	        e: "}",
	        c: a
	    }),
	        o = {
	        bK: "when",
	        eW: !0,
	        c: [{
	            bK: "and not"
	        }].concat(c)
	    },
	        u = {
	        b: t + "\\s*:",
	        rB: !0,
	        e: "[;}]",
	        r: 0,
	        c: [{
	            cN: "attribute",
	            b: t,
	            e: ":",
	            eE: !0,
	            starts: {
	                eW: !0,
	                i: "[<=$]",
	                r: 0,
	                c: c
	            }
	        }]
	    },
	        l = {
	        cN: "keyword",
	        b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
	        starts: {
	            e: "[;{}]",
	            rE: !0,
	            c: c,
	            r: 0
	        }
	    },
	        C = {
	        cN: "variable",
	        v: [{
	            b: "@" + r + "\\s*:",
	            r: 15
	        }, {
	            b: "@" + r
	        }],
	        starts: {
	            e: "[;}]",
	            rE: !0,
	            c: i
	        }
	    },
	        p = {
	        v: [{
	            b: "[\\.#:&\\[>]",
	            e: "[;{}]"
	        }, {
	            b: t,
	            e: "{"
	        }],
	        rB: !0,
	        rE: !0,
	        i: "[<='$\"]",
	        r: 0,
	        c: [e.CLCM, e.CBCM, o, b("keyword", "all\\b"), b("variable", "@{" + r + "}"), b("selector-tag", t + "%?", 0), b("selector-id", "#" + t), b("selector-class", "\\." + t, 0), b("selector-tag", "&", 0), {
	            cN: "selector-attr",
	            b: "\\[",
	            e: "\\]"
	        }, {
	            cN: "selector-pseudo",
	            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
	        }, {
	            b: "\\(",
	            e: "\\)",
	            c: i
	        }, {
	            b: "!important"
	        }]
	    };
	    return a.push(e.CLCM, e.CBCM, l, C, u, p), {
	        cI: !0,
	        i: "[=>'/<($\"]",
	        c: a
	    };
	});
	hljs.registerLanguage("ruby", function (e) {
	    var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
	        r = {
	        keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
	        literal: "true false nil"
	    },
	        c = {
	        cN: "doctag",
	        b: "@[A-Za-z]+"
	    },
	        a = {
	        b: "#<",
	        e: ">"
	    },
	        s = [e.C("#", "$", {
	        c: [c]
	    }), e.C("^\\=begin", "^\\=end", {
	        c: [c],
	        r: 10
	    }), e.C("^__END__", "\\n$")],
	        n = {
	        cN: "subst",
	        b: "#\\{",
	        e: "}",
	        k: r
	    },
	        t = {
	        cN: "string",
	        c: [e.BE, n],
	        v: [{
	            b: /'/,
	            e: /'/
	        }, {
	            b: /"/,
	            e: /"/
	        }, {
	            b: /`/,
	            e: /`/
	        }, {
	            b: "%[qQwWx]?\\(",
	            e: "\\)"
	        }, {
	            b: "%[qQwWx]?\\[",
	            e: "\\]"
	        }, {
	            b: "%[qQwWx]?{",
	            e: "}"
	        }, {
	            b: "%[qQwWx]?<",
	            e: ">"
	        }, {
	            b: "%[qQwWx]?/",
	            e: "/"
	        }, {
	            b: "%[qQwWx]?%",
	            e: "%"
	        }, {
	            b: "%[qQwWx]?-",
	            e: "-"
	        }, {
	            b: "%[qQwWx]?\\|",
	            e: "\\|"
	        }, {
	            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
	        }, {
	            b: /<<(-?)\w+$/,
	            e: /^\s*\w+$/
	        }]
	    },
	        i = {
	        cN: "params",
	        b: "\\(",
	        e: "\\)",
	        endsParent: !0,
	        k: r
	    },
	        d = [t, a, {
	        cN: "class",
	        bK: "class module",
	        e: "$|;",
	        i: /=/,
	        c: [e.inherit(e.TM, {
	            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
	        }), {
	            b: "<\\s*",
	            c: [{
	                b: "(" + e.IR + "::)?" + e.IR
	            }]
	        }].concat(s)
	    }, {
	        cN: "function",
	        bK: "def",
	        e: "$|;",
	        c: [e.inherit(e.TM, {
	            b: b
	        }), i].concat(s)
	    }, {
	        b: e.IR + "::"
	    }, {
	        cN: "symbol",
	        b: e.UIR + "(\\!|\\?)?:",
	        r: 0
	    }, {
	        cN: "symbol",
	        b: ":(?!\\s)",
	        c: [t, {
	            b: b
	        }],
	        r: 0
	    }, {
	        cN: "number",
	        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
	        r: 0
	    }, {
	        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
	    }, {
	        cN: "params",
	        b: /\|/,
	        e: /\|/,
	        k: r
	    }, {
	        b: "(" + e.RSR + ")\\s*",
	        c: [a, {
	            cN: "regexp",
	            c: [e.BE, n],
	            i: /\n/,
	            v: [{
	                b: "/",
	                e: "/[a-z]*"
	            }, {
	                b: "%r{",
	                e: "}[a-z]*"
	            }, {
	                b: "%r\\(",
	                e: "\\)[a-z]*"
	            }, {
	                b: "%r!",
	                e: "![a-z]*"
	            }, {
	                b: "%r\\[",
	                e: "\\][a-z]*"
	            }]
	        }].concat(s),
	        r: 0
	    }].concat(s);
	    n.c = d, i.c = d;
	    var l = "[>?]>",
	        o = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
	        w = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
	        u = [{
	        b: /^\s*=>/,
	        starts: {
	            e: "$",
	            c: d
	        }
	    }, {
	        cN: "meta",
	        b: "^(" + l + "|" + o + "|" + w + ")",
	        starts: {
	            e: "$",
	            c: d
	        }
	    }];
	    return {
	        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
	        k: r,
	        i: /\/\*/,
	        c: s.concat(u).concat(d)
	    };
	});
	hljs.registerLanguage("sql", function (e) {
	    var t = e.C("--", "$");
	    return {
	        cI: !0,
	        i: /[<>{}*#]/,
	        c: [{
	            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
	            e: /;/,
	            eW: !0,
	            l: /[\w\.]+/,
	            k: {
	                keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
	                literal: "true false null",
	                built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
	            },
	            c: [{
	                cN: "string",
	                b: "'",
	                e: "'",
	                c: [e.BE, {
	                    b: "''"
	                }]
	            }, {
	                cN: "string",
	                b: '"',
	                e: '"',
	                c: [e.BE, {
	                    b: '""'
	                }]
	            }, {
	                cN: "string",
	                b: "`",
	                e: "`",
	                c: [e.BE]
	            }, e.CNM, e.CBCM, t]
	        }, e.CBCM, t]
	    };
	});
	hljs.registerLanguage("xml", function (s) {

	    var e = "[A-Za-z0-9\\._:-]+",
	        t = {
	        eW: !0,
	        i: /</,
	        r: 0,
	        c: [{
	            cN: "attr",
	            b: e,
	            r: 0
	        }, {
	            b: /=\s*/,
	            r: 0,
	            c: [{
	                cN: "string",
	                endsParent: !0,
	                v: [{
	                    b: /"/,
	                    e: /"/
	                }, {
	                    b: /'/,
	                    e: /'/
	                }, {
	                    b: /[^\s"'=<>`]+/
	                }]
	            }]
	        }]
	    };
	    return {
	        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
	        cI: !0,
	        c: [{
	            cN: "meta",
	            b: "<!DOCTYPE",
	            e: ">",
	            r: 10,
	            c: [{
	                b: "\\[",
	                e: "\\]"
	            }]
	        }, s.C("<!--", "-->", {
	            r: 10
	        }), {
	            b: "<\\!\\[CDATA\\[",
	            e: "\\]\\]>",
	            r: 10
	        }, {
	            b: /<\?(php)?/,
	            e: /\?>/,
	            sL: "php",
	            c: [{
	                b: "/\\*",
	                e: "\\*/",
	                skip: !0
	            }]
	        }, {
	            cN: "tag",
	            b: "<style(?=\\s|>|$)",
	            e: ">",
	            k: {
	                name: "style"
	            },
	            c: [t],
	            starts: {
	                e: "</style>",
	                rE: !0,
	                sL: ["css", "xml"]
	            }
	        }, {
	            cN: "tag",
	            b: "<script(?=\\s|>|$)",
	            e: ">",
	            k: {
	                name: "script"
	            },
	            c: [t],
	            starts: {
	                e: "</script>",
	                rE: !0,
	                sL: ["actionscript", "javascript", "handlebars", "xml"]
	            }
	        }, {
	            cN: "meta",
	            v: [{
	                b: /<\?xml/,
	                e: /\?>/,
	                r: 10
	            }, {
	                b: /<\?\w+/,
	                e: /\?>/
	            }]
	        }, {
	            cN: "tag",
	            b: "</?",
	            e: "/?>",
	            c: [{
	                cN: "name",
	                b: /[^\/><\s]+/,
	                r: 0
	            }, t]
	        }]
	    };
	});
	hljs.registerLanguage("markdown", function (e) {
	    return {
	        aliases: ["md", "mkdown", "mkd"],
	        c: [{
	            cN: "section",
	            v: [{
	                b: "^#{1,6}",
	                e: "$"
	            }, {
	                b: "^.+?\\n[=-]{2,}$"
	            }]
	        }, {
	            b: "<",
	            e: ">",
	            sL: "xml",
	            r: 0
	        }, {
	            cN: "bullet",
	            b: "^([*+-]|(\\d+\\.))\\s+"
	        }, {
	            cN: "strong",
	            b: "[*_]{2}.+?[*_]{2}"
	        }, {
	            cN: "emphasis",
	            v: [{
	                b: "\\*.+?\\*"
	            }, {
	                b: "_.+?_",
	                r: 0
	            }]
	        }, {
	            cN: "quote",
	            b: "^>\\s+",
	            e: "$"
	        }, {
	            cN: "code",
	            v: [{
	                b: "^```w*s*$",
	                e: "^```s*$"
	            }, {
	                b: "`.+?`"
	            }, {
	                b: "^( {4}|    )",
	                e: "$",
	                r: 0
	            }]
	        }, {
	            b: "^[-\\*]{3,}",
	            e: "$"
	        }, {
	            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
	            rB: !0,
	            c: [{
	                cN: "string",
	                b: "\\[",
	                e: "\\]",
	                eB: !0,
	                rE: !0,
	                r: 0
	            }, {
	                cN: "link",
	                b: "\\]\\(",
	                e: "\\)",
	                eB: !0,
	                eE: !0
	            }, {
	                cN: "symbol",
	                b: "\\]\\[",
	                e: "\\]",
	                eB: !0,
	                eE: !0
	            }],
	            r: 10
	        }, {
	            b: /^\[[^\n]+\]:/,
	            rB: !0,
	            c: [{
	                cN: "symbol",
	                b: /\[/,
	                e: /\]/,
	                eB: !0,
	                eE: !0
	            }, {
	                cN: "link",
	                b: /:\s*/,
	                e: /$/,
	                eB: !0
	            }]
	        }]
	    };
	});
	hljs.registerLanguage("css", function (e) {
	    var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
	        t = {
	        b: /[A-Z\_\.\-]+\s*:/,
	        rB: !0,
	        e: ";",
	        eW: !0,
	        c: [{
	            cN: "attribute",
	            b: /\S/,
	            e: ":",
	            eE: !0,
	            starts: {
	                eW: !0,
	                eE: !0,
	                c: [{
	                    b: /[\w-]+\(/,
	                    rB: !0,
	                    c: [{
	                        cN: "built_in",
	                        b: /[\w-]+/
	                    }, {
	                        b: /\(/,
	                        e: /\)/,
	                        c: [e.ASM, e.QSM]
	                    }]
	                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
	                    cN: "number",
	                    b: "#[0-9A-Fa-f]+"
	                }, {
	                    cN: "meta",
	                    b: "!important"
	                }]
	            }
	        }]
	    };
	    return {
	        cI: !0,
	        i: /[=\/|'\$]/,
	        c: [e.CBCM, {
	            cN: "selector-id",
	            b: /#[A-Za-z0-9_-]+/
	        }, {
	            cN: "selector-class",
	            b: /\.[A-Za-z0-9_-]+/
	        }, {
	            cN: "selector-attr",
	            b: /\[/,
	            e: /\]/,
	            i: "$"
	        }, {
	            cN: "selector-pseudo",
	            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
	        }, {
	            b: "@(font-face|page)",
	            l: "[a-z-]+",
	            k: "font-face page"
	        }, {
	            b: "@",
	            e: "[{;]",
	            i: /:/,
	            c: [{
	                cN: "keyword",
	                b: /\w+/
	            }, {
	                b: /\s/,
	                eW: !0,
	                eE: !0,
	                r: 0,
	                c: [e.ASM, e.QSM, e.CSSNM]
	            }]
	        }, {
	            cN: "selector-tag",
	            b: c,
	            r: 0
	        }, {
	            b: "{",
	            e: "}",
	            i: /\S/,
	            c: [e.CBCM, t]
	        }]
	    };
	});
	hljs.registerLanguage("bash", function (e) {
	    var t = {
	        cN: "variable",
	        v: [{
	            b: /\$[\w\d#@][\w\d_]*/
	        }, {
	            b: /\$\{(.*?)}/
	        }]
	    },
	        s = {
	        cN: "string",
	        b: /"/,
	        e: /"/,
	        c: [e.BE, t, {
	            cN: "variable",
	            b: /\$\(/,
	            e: /\)/,
	            c: [e.BE]
	        }]
	    },
	        a = {
	        cN: "string",
	        b: /'/,
	        e: /'/
	    };
	    return {
	        aliases: ["sh", "zsh"],
	        l: /-?[a-z\._]+/,
	        k: {
	            keyword: "if then else elif fi for while in do done case esac function",
	            literal: "true false",
	            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
	            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
	        },
	        c: [{
	            cN: "meta",
	            b: /^#![^\n]+sh\s*$/,
	            r: 10
	        }, {
	            cN: "function",
	            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
	            rB: !0,
	            c: [e.inherit(e.TM, {
	                b: /\w[\w\d_]*/
	            })],
	            r: 0
	        }, e.HCM, s, a, t]
	    };
	});
	hljs.registerLanguage("scss", function (e) {
	    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
	        i = {
	        cN: "variable",
	        b: "(\\$" + t + ")\\b"
	    },
	        r = {
	        cN: "number",
	        b: "#[0-9A-Fa-f]+"
	    };
	    ({
	        cN: "attribute",
	        b: "[A-Z\\_\\.\\-]+",
	        e: ":",
	        eE: !0,
	        i: "[^\\s]",
	        starts: {
	            eW: !0,
	            eE: !0,
	            c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
	                cN: "meta",
	                b: "!important"
	            }]
	        }
	    });
	    return {
	        cI: !0,
	        i: "[=/|']",
	        c: [e.CLCM, e.CBCM, {
	            cN: "selector-id",
	            b: "\\#[A-Za-z0-9_-]+",
	            r: 0
	        }, {
	            cN: "selector-class",
	            b: "\\.[A-Za-z0-9_-]+",
	            r: 0
	        }, {
	            cN: "selector-attr",
	            b: "\\[",
	            e: "\\]",
	            i: "$"
	        }, {
	            cN: "selector-tag",
	            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
	            r: 0
	        }, {
	            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
	        }, {
	            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
	        }, i, {
	            cN: "attribute",
	            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
	            i: "[^\\s]"
	        }, {
	            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
	        }, {
	            b: ":",
	            e: ";",
	            c: [i, r, e.CSSNM, e.QSM, e.ASM, {
	                cN: "meta",
	                b: "!important"
	            }]
	        }, {
	            b: "@",
	            e: "[{;]",
	            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
	            c: [i, e.QSM, e.ASM, r, e.CSSNM, {
	                b: "\\s[A-Za-z0-9_.-]+",
	                r: 0
	            }]
	        }]
	    };
	});
	hljs.registerLanguage("cs", function (e) {
	    var i = {
	        keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
	        literal: "null false true"
	    },
	        r = {
	        cN: "string",
	        b: '@"',
	        e: '"',
	        c: [{
	            b: '""'
	        }]
	    },
	        t = e.inherit(r, {
	        i: /\n/
	    }),
	        a = {
	        cN: "subst",
	        b: "{",
	        e: "}",
	        k: i
	    },
	        n = e.inherit(a, {
	        i: /\n/
	    }),
	        c = {
	        cN: "string",
	        b: /\$"/,
	        e: '"',
	        i: /\n/,
	        c: [{
	            b: "{{"
	        }, {
	            b: "}}"
	        }, e.BE, n]
	    },
	        s = {
	        cN: "string",
	        b: /\$@"/,
	        e: '"',
	        c: [{
	            b: "{{"
	        }, {
	            b: "}}"
	        }, {
	            b: '""'
	        }, a]
	    },
	        o = e.inherit(s, {
	        i: /\n/,
	        c: [{
	            b: "{{"
	        }, {
	            b: "}}"
	        }, {
	            b: '""'
	        }, n]
	    });
	    a.c = [s, c, r, e.ASM, e.QSM, e.CNM, e.CBCM], n.c = [o, c, t, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
	        i: /\n/
	    })];
	    var l = {
	        v: [s, c, r, e.ASM, e.QSM]
	    },
	        b = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
	    return {
	        aliases: ["csharp"],
	        k: i,
	        i: /::/,
	        c: [e.C("///", "$", {
	            rB: !0,
	            c: [{
	                cN: "doctag",
	                v: [{
	                    b: "///",
	                    r: 0
	                }, {
	                    b: "<!--|-->"
	                }, {
	                    b: "</?",
	                    e: ">"
	                }]
	            }]
	        }), e.CLCM, e.CBCM, {
	            cN: "meta",
	            b: "#",
	            e: "$",
	            k: {
	                "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
	            }
	        }, l, e.CNM, {
	            bK: "class interface",
	            e: /[{;=]/,
	            i: /[^\s:]/,
	            c: [e.TM, e.CLCM, e.CBCM]
	        }, {
	            bK: "namespace",
	            e: /[{;=]/,
	            i: /[^\s:]/,
	            c: [e.inherit(e.TM, {
	                b: "[a-zA-Z](\\.?\\w)*"
	            }), e.CLCM, e.CBCM]
	        }, {
	            bK: "new return throw await",
	            r: 0
	        }, {
	            cN: "function",
	            b: "(" + b + "\\s+)+" + e.IR + "\\s*\\(",
	            rB: !0,
	            e: /[{;=]/,
	            eE: !0,
	            k: i,
	            c: [{
	                b: e.IR + "\\s*\\(",
	                rB: !0,
	                c: [e.TM],
	                r: 0
	            }, {
	                cN: "params",
	                b: /\(/,
	                e: /\)/,
	                eB: !0,
	                eE: !0,
	                k: i,
	                r: 0,
	                c: [l, e.CNM, e.CBCM]
	            }, e.CLCM, e.CBCM]
	        }]
	    };
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(269), __esModule: true };

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(270);
	var $Object = __webpack_require__(10).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(152)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(272);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./default.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./default.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nOriginal highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #F0F0F0;\n}\n\n\n/* Base color: saturation 0; */\n\n.hljs,\n.hljs-subst {\n  color: #444;\n}\n\n.hljs-comment {\n  color: #888888;\n}\n\n.hljs-keyword,\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-meta-keyword,\n.hljs-doctag,\n.hljs-name {\n  font-weight: bold;\n}\n\n\n/* User color: hue: 0 */\n\n.hljs-type,\n.hljs-string,\n.hljs-number,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion {\n  color: #880000;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #880000;\n  font-weight: bold;\n}\n\n.hljs-regexp,\n.hljs-symbol,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #BC6060;\n}\n\n\n/* Language color: hue: 90; */\n\n.hljs-literal {\n  color: #78A960;\n}\n\n.hljs-built_in,\n.hljs-bullet,\n.hljs-code,\n.hljs-addition {\n  color: #397300;\n}\n\n\n/* Meta color: hue: 200 */\n\n.hljs-meta {\n  color: #1f7199;\n}\n\n.hljs-meta-string {\n  color: #4d99bf;\n}\n\n\n/* Misc effects */\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(275);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./solarized-dark.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./solarized-dark.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nOrginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #002b36;\n  color: #839496;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #586e75;\n}\n\n/* Solarized Green */\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #859900;\n}\n\n/* Solarized Cyan */\n.hljs-number,\n.hljs-string,\n.hljs-meta .hljs-meta-string,\n.hljs-literal,\n.hljs-doctag,\n.hljs-regexp {\n  color: #2aa198;\n}\n\n/* Solarized Blue */\n.hljs-title,\n.hljs-section,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #268bd2;\n}\n\n/* Solarized Yellow */\n.hljs-attribute,\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-class .hljs-title,\n.hljs-type {\n  color: #b58900;\n}\n\n/* Solarized Orange */\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-link {\n  color: #cb4b16;\n}\n\n/* Solarized Red */\n.hljs-built_in,\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #073642;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(277);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./solarized-light.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./solarized-light.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nOrginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #fdf6e3;\n  color: #657b83;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #93a1a1;\n}\n\n/* Solarized Green */\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #859900;\n}\n\n/* Solarized Cyan */\n.hljs-number,\n.hljs-string,\n.hljs-meta .hljs-meta-string,\n.hljs-literal,\n.hljs-doctag,\n.hljs-regexp {\n  color: #2aa198;\n}\n\n/* Solarized Blue */\n.hljs-title,\n.hljs-section,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #268bd2;\n}\n\n/* Solarized Yellow */\n.hljs-attribute,\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-class .hljs-title,\n.hljs-type {\n  color: #b58900;\n}\n\n/* Solarized Orange */\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-link {\n  color: #cb4b16;\n}\n\n/* Solarized Red */\n.hljs-built_in,\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #eee8d5;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(279);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./github.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./github.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(281);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./railscasts.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./railscasts.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nRailscasts-like style (c) Visoft, Inc. (Damien White)\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #232323;\n  color: #e6e1dc;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #bc9458;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #c26230;\n}\n\n.hljs-string,\n.hljs-number,\n.hljs-regexp,\n.hljs-variable,\n.hljs-template-variable {\n  color: #a5c261;\n}\n\n.hljs-subst {\n  color: #519f50;\n}\n\n.hljs-tag,\n.hljs-name {\n  color: #e8bf6a;\n}\n\n.hljs-type {\n  color: #da4939;\n}\n\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-attr,\n.hljs-link {\n  color: #6d9cbe;\n}\n\n.hljs-params {\n  color: #d0d0ff;\n}\n\n.hljs-attribute {\n  color: #cda869;\n}\n\n.hljs-meta {\n  color: #9b859d;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #ffc66d;\n}\n\n.hljs-addition {\n  background-color: #144212;\n  color: #e6e1dc;\n  display: inline-block;\n  width: 100%;\n}\n\n.hljs-deletion {\n  background-color: #600;\n  color: #e6e1dc;\n  display: inline-block;\n  width: 100%;\n}\n\n.hljs-selector-class {\n  color: #9b703f;\n}\n\n.hljs-selector-id {\n  color: #8b98ab;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

	// exports


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(283);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./monokai-sublime.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./monokai-sublime.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nMonokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #23241f;\n}\n\n.hljs,\n.hljs-tag,\n.hljs-subst {\n  color: #f8f8f2;\n}\n\n.hljs-strong,\n.hljs-emphasis {\n  color: #a8a8a2;\n}\n\n.hljs-bullet,\n.hljs-quote,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-link {\n  color: #ae81ff;\n}\n\n.hljs-code,\n.hljs-title,\n.hljs-section,\n.hljs-selector-class {\n  color: #a6e22e;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-name,\n.hljs-attr {\n  color: #f92672;\n}\n\n.hljs-symbol,\n.hljs-attribute {\n  color: #66d9ef;\n}\n\n.hljs-params,\n.hljs-class .hljs-title {\n  color: #f8f8f2;\n}\n\n.hljs-string,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-id,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-variable {\n  color: #e6db74;\n}\n\n.hljs-comment,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e;\n}\n", ""]);

	// exports


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(285);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./mono-blue.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./mono-blue.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n  Five-color theme from a single blue hue.\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #eaeef3;\n}\n\n.hljs {\n  color: #00193a;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-doctag,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-comment {\n  color: #738191;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-literal,\n.hljs-type,\n.hljs-addition,\n.hljs-tag,\n.hljs-quote,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #0048ab;\n}\n\n.hljs-meta,\n.hljs-subst,\n.hljs-symbol,\n.hljs-regexp,\n.hljs-attribute,\n.hljs-deletion,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-bullet {\n  color: #4c81c9;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n", ""]);

	// exports


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./tomorrow.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./tomorrow.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n  color: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n  color: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #8959a8;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: white;\n  color: #4d4d4c;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(289);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./color-brewer.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./color-brewer.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nColorbrewer theme\nOriginal: https://github.com/mbostock/colorbrewer-theme (c) Mike Bostock <mike@ocks.org>\nPorted by Fabrício Tavares de Oliveira\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #fff;\n}\n\n.hljs,\n.hljs-subst {\n  color: #000;\n}\n\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #756bb1;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #636363;\n}\n\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #31a354;\n}\n\n.hljs-deletion,\n.hljs-variable {\n  color: #88f;\n}\n\n\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #3182bd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-attribute {\n  color: #e6550d;\n}\n", ""]);

	// exports


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(291);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./zenburn.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./zenburn.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nZenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>\nbased on dark.css by Ivan Sagalaev\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #3f3f3f;\n  color: #dcdcdc;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-tag {\n  color: #e3ceab;\n}\n\n.hljs-template-tag {\n  color: #dcdcdc;\n}\n\n.hljs-number {\n  color: #8cd0d3;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-attribute {\n  color: #efdcbc;\n}\n\n.hljs-literal {\n  color: #efefaf;\n}\n\n.hljs-subst {\n  color: #8f8f8f;\n}\n\n.hljs-title,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-section,\n.hljs-type {\n  color: #efef8f;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link {\n  color: #dca3a3;\n}\n\n.hljs-deletion,\n.hljs-string,\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #cc9393;\n}\n\n.hljs-addition,\n.hljs-comment,\n.hljs-quote,\n.hljs-meta {\n  color: #7f9f7f;\n}\n\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(293);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./agate.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./agate.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Agate by Taufik Nurrohman <https://github.com/tovic>\n * ----------------------------------------------------\n *\n * #ade5fc\n * #a2fca2\n * #c6b4f0\n * #d36363\n * #fcc28c\n * #fc9b9b\n * #ffa\n * #fff\n * #333\n * #62c8f3\n * #888\n *\n */\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #333;\n  color: white;\n}\n\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-code,\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-tag {\n  color: #62c8f3;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #ade5fc;\n}\n\n.hljs-string,\n.hljs-bullet {\n  color: #a2fca2;\n}\n\n.hljs-type,\n.hljs-title,\n.hljs-section,\n.hljs-attribute,\n.hljs-quote,\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #ffa;\n}\n\n.hljs-number,\n.hljs-symbol,\n.hljs-bullet {\n  color: #d36363;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal {\n  color: #fcc28c;\n}\n\n.hljs-comment,\n.hljs-deletion,\n.hljs-code {\n  color: #888;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #c6b4f0;\n}\n\n.hljs-meta {\n  color: #fc9b9b;\n}\n\n.hljs-deletion {\n  background-color: #fc9b9b;\n  color: #333;\n}\n\n.hljs-addition {\n  background-color: #a2fca2;\n  color: #333;\n}\n\n.hljs a {\n  color: inherit;\n}\n\n.hljs a:focus,\n.hljs a:hover {\n  color: inherit;\n  text-decoration: underline;\n}\n", ""]);

	// exports


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(295);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./androidstudio.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./androidstudio.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\nDate: 24 Fev 2015\nAuthor: Pedro Oliveira <kanytu@gmail . com>\n*/\n\n.hljs {\n  color: #a9b7c6;\n  background: #282b2e;\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-symbol,\n.hljs-bullet {\n  color: #6897BB;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-deletion {\n  color: #cc7832;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link {\n  color: #629755;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #808080;\n}\n\n.hljs-meta {\n  color: #bbb529;\n}\n\n.hljs-string,\n.hljs-attribute,\n.hljs-addition {\n  color: #6A8759;\n}\n\n.hljs-section,\n.hljs-title,\n.hljs-type {\n  color: #ffc66d;\n}\n\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #e8bf6a;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(297);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./dracula.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./dracula.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nDracula Theme v1.2.0\n\nhttps://github.com/zenorocha/dracula-theme\n\nCopyright 2015, All rights reserved\n\nCode licensed under the MIT license\nhttp://zenorocha.mit-license.org\n\n@author Éverton Ribeiro <nuxlli@gmail.com>\n@author Zeno Rocha <hi@zenorocha.com>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #282a36;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-section,\n.hljs-link {\n  color: #8be9fd;\n}\n\n.hljs-function .hljs-keyword {\n  color: #ff79c6;\n}\n\n.hljs,\n.hljs-subst {\n  color: #f8f8f2;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-name,\n.hljs-type,\n.hljs-attribute,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #f1fa8c;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #6272a4;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-title,\n.hljs-section,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n", ""]);

	// exports


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(299);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./rainbow.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./rainbow.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nStyle with support for rainbow parens\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #474949;\n  color: #d1d9e1;\n}\n\n\n.hljs-comment,\n.hljs-quote {\n  color: #969896;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-type,\n.hljs-addition {\n  color: #cc99cc;\n}\n\n.hljs-number,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #f99157;\n}\n\n.hljs-string,\n.hljs-doctag,\n.hljs-regexp {\n  color: #8abeb7;\n}\n\n.hljs-title,\n.hljs-name,\n.hljs-section,\n.hljs-built_in {\n  color: #b5bd68;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-selector-id,\n.hljs-class .hljs-title {\n   color: #ffcc66;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-link {\n  color: #f99157;\n}\n\n.hljs-deletion {\n  color: #dc322f;\n}\n\n.hljs-formula {\n  background: #eee8d5;\n}\n\n.hljs-attr,\n.hljs-attribute {\n  color: #81a2be;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n", ""]);

	// exports


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./vs.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./vs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nVisual Studio-like style based on original C# coloring by Jason Diamond <jason@diamond.name>\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: white;\n  color: black;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-variable {\n  color: #008000;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-built_in,\n.hljs-name,\n.hljs-tag {\n  color: #00f;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-section,\n.hljs-attribute,\n.hljs-literal,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-type,\n.hljs-addition {\n  color: #a31515;\n}\n\n.hljs-deletion,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-meta {\n  color: #2b91af;\n}\n\n.hljs-doctag {\n  color: #808080;\n}\n\n.hljs-attr {\n  color: #f00;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link {\n  color: #00b0e8;\n}\n\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

	// exports


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(303);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./atom-one-dark.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./atom-one-dark.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

	// exports


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(305);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(273)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./atom-one-light.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./atom-one-light.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(202)();
	// imports


	// module
	exports.push([module.id, "/*\n\nAtom One Light by Daniel Gamage\nOriginal One Light Syntax theme from https://github.com/atom/one-light-syntax\n\nbase:    #fafafa\nmono-1:  #383a42\nmono-2:  #686b77\nmono-3:  #a0a1a7\nhue-1:   #0184bb\nhue-2:   #4078f2\nhue-3:   #a626a4\nhue-4:   #50a14f\nhue-5:   #e45649\nhue-5-2: #c91243\nhue-6:   #986801\nhue-6-2: #c18401\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #383a42;\n  background: #fafafa;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #a0a1a7;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #a626a4;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e45649;\n}\n\n.hljs-literal {\n  color: #0184bb;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #50a14f;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #c18401;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #986801;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #4078f2;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);