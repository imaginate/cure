/** @preserve blank line */

/**
 * -----------------------------------------------------------------------------
 * Algorithm IV JavaScript Polyfills (v0.0.1)
 * -----------------------------------------------------------------------------
 * @file Algorithm IV's JavaScript polyfills help ensure that our projects are
 *   cross-browser compatible. At the moment they only include selected
 *   polyfills that are used in our code base. The only native functionality
 *   that is completely polyfilled is the
 *   [Console]{@link https://github.com/imaginate/algorithmIV-javascript-polyfills/blob/master/src/pre-compiled-parts/polyfills/console.js}.
 * @module aIVPolyfills
 * @version 0.0.1
 * @author Adam Smith ({@link adamsmith@youlum.com})
 * @copyright 2015 Adam A Smith ([github.com/imaginate]{@link https://github.com/imaginate})
 * @license The Apache License ([algorithmiv.com/docs/license]{@link http://algorithmiv.com/docs/license})
 * @desc More details about aIV's polyfills:
 * <ol>
 *   <li>annotations: 
 *       [See Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 *       and [See JSDoc3]{@link http://usejsdoc.org/}
 *   </li>
 *   <li>contributing: 
 *       [See our guideline]{@link https://github.com/imaginate/algorithmIV-javascript-polyfills/blob/master/CONTRIBUTING.md}
 *   </li>
 * </ol>
 */

/**
 * -----------------------------------------------------------------------------
 * Pre-Defined JSDoc Types
 * -----------------------------------------------------------------------------
 * @typedef {*} val
 * @typedef {Array<*>} vals
 * @typedef {Array<string>} strings
 * @typedef {Array<number>} numbers
 * @typedef {Array<Object>} objects
 * @typedef {Array<boolean>} booleans
 */

////////////////////////////////////////////////////////////////////////////////
// The JavaScript Polyfills
////////////////////////////////////////////////////////////////////////////////

;(function(window, document, undefined) {
  "use strict";

/* -----------------------------------------------------------------------------
 * The Console Polyfills (polyfills/console.js)
 * -------------------------------------------------------------------------- */

  /**
   * -----------------------------------------------------
   * Global Object (console)
   * -----------------------------------------------------
   * @desc A polyfill for the native object. For method details
   *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console}
   * @type {Object<string, function}
   */
  window.console = window.console || {};

  (function(console, emptyFunc) {

    // Note: The console method polyfills are completed alphabetically with the
    // exception of console.log and console.error

    if (!console.log) {
      /**
       * ---------------------------------------------
       * Public Method (console.log)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/log}
       * @param {...*} val
       */
      console.log = emptyFunc;
    }

    if (!console.error) {
      /**
       * ---------------------------------------------
       * Public Method (console.error)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error}
       * @param {...*} val
       */
      console.error = console.log;
    }

    if (!console.assert) {
      /**
       * ---------------------------------------------
       * Public Method (console.assert)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/console/assert}
       * @param {boolean} assertion
       * @param {...*} val
       */
      console.assert = function(assertion) {

        /** @type {!Array<*>} */
        var args;

        if (assertion) {
          return;
        }

        args = ( (arguments.length > 1) ?
          Array.prototype.slice.call(arguments, 1)
          : [ 'A console.assert call failed.' ]
        );

        return console.error.apply(this, args);
      };
    }

    if (!console.clear) {
      /**
       * ---------------------------------------------
       * Public Method (console.clear)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoleclear}
       * @type {function}
       */
      console.clear = emptyFunc;
    }

    if (!console.count) {
      /**
       * ---------------------------------------------
       * Public Method (console.count)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/count}
       * @param {string=} label
       */
      console.count = emptyFunc;
    }

    if (!console.debug) {
      /**
       * ---------------------------------------------
       * Public Method (console.debug)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoledebugobject-object}
       * @param {...*} val
       */
      console.debug = console.log;
    }

    if (!console.dir) {
      /**
       * ---------------------------------------------
       * Public Method (console.dir)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoledirobject}
       * @param {!(Object|function)} obj
       */
      console.dir = console.log;
    }

    if (!console.dirxml) {
      /**
       * ---------------------------------------------
       * Public Method (console.dirxml)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoledirxmlobject}
       * @param {!(Object|function)} obj
       */
      console.dirxml = console.log;
    }

    if (!console.exception) {
      /**
       * ---------------------------------------------
       * Public Method (console.exception)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error}
       * @param {...*} val
       */
      console.exception = console.error;
    }

    if (!console.group) {
      /**
       * ---------------------------------------------
       * Public Method (console.group)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consolegroupobject-object}
       * @param {...*} val
       */
      console.group = emptyFunc;
    }

    if (!console.groupCollapsed) {
      /**
       * ---------------------------------------------
       * Public Method (console.groupCollapsed)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consolegroupcollapsedobject-object}
       * @param {...*} val
       */
      console.groupCollapsed = console.group;
    }

    if (!console.groupEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.groupEnd)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd}
       * @type {function}
       */
      console.groupEnd = emptyFunc;
    }

    if (!console.info) {
      /**
       * ---------------------------------------------
       * Public Method (console.info)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/info}
       * @param {...*} val
       */
      console.info = console.log;
    }

    if (!console.markTimeline) {
      /**
       * ---------------------------------------------
       * Public Method (console.markTimeline)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Apple]{@link https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW8}
       * @param {string} label
       */
      console.markTimeline = ( (!console.timeStamp) ?
        emptyFunc : console.timeStamp
      );
    }

    if (!console.profile) {
      /**
       * ---------------------------------------------
       * Public Method (console.profile)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoleprofilelabel}
       * @param {string=} label
       */
      console.profile = emptyFunc;
    }

    if (!console.profileEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.profileEnd)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoleprofileend}
       * @type {function}
       */
      console.profileEnd = emptyFunc;
    }

    if (!console.table) {
      /**
       * ---------------------------------------------
       * Public Method (console.table)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/table}
       * @param {!(Object|Array)} data
       * @param {!Array=} columns
       */
      console.table = emptyFunc;
    }

    if (!console.time) {
      /**
       * ---------------------------------------------
       * Public Method (console.time)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/time}
       * @param {string} label
       */
      console.time = emptyFunc;
    }

    if (!console.timeEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.timeEnd)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd}
       * @param {string} label
       */
      console.timeEnd = emptyFunc;
    }

    if (!console.timeline) {
      /**
       * ---------------------------------------------
       * Public Method (console.timeline)
       * ---------------------------------------------
       * @desc A polyfill for the deprecated Chrome method.
       * @param {string} label
       */
      console.timeline = emptyFunc;
    }

    if (!console.timelineEnd) {
      /**
       * ---------------------------------------------
       * Public Method (console.timelineEnd)
       * ---------------------------------------------
       * @desc A polyfill for the deprecated Chrome method.
       * @param {string} label
       */
      console.timelineEnd = emptyFunc;
    }

    if (!console.timeStamp) {
      /**
       * ---------------------------------------------
       * Public Method (console.timeStamp)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoletimestamplabel}
       * @param {string=} label
       */
      console.timeStamp = console.markTimeline;
    }

    if (!console.trace) {
      /**
       * ---------------------------------------------
       * Public Method (console.trace)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see Chrome]{@link https://developer.chrome.com/devtools/docs/console-api#consoletraceobject}
       * @param {...*} val
       */
      console.trace = console.log;
    }

    if (!console.warn) {
      /**
       * ---------------------------------------------
       * Public Method (console.warn)
       * ---------------------------------------------
       * @desc A polyfill for the native method. For method details
       *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/API/Console/error}
       * @param {...*} val
       */
      console.warn = console.error;
    }

    // Convert console objects to functions if needed (IE8 & IE9)
    (function(funcSetupNeeded, bind, call, slice) {

      /** @type {number} */
      var i;
      /** @type {string} */
      var method;
      /** @type {!Array<string>} */
      var methodsIE8;
      /** @type {!Array<string>} */
      var methodsIE9;

      if (funcSetupNeeded) {

        methodsIE8 = [ 'assert', 'error', 'info', 'log', 'warn' ];
        methodsIE9 = [ 'clear', 'dir', 'profile', 'profileEnd' ];
        methodsIE9 = methodsIE8.concat(methodsIE9);

        if (bind) {
          i = methodsIE9.length;
          while (i--) {
            method = console[ methodsIE9[i] ];
            console[ methodsIE9[i] ] = bind.call(method, console);
          }
        }
        else {
          i = methodsIE8.length;
          while (i--) {
            method = console[ methodsIE8[i] ];
            call.call(method, console, slice.call(arguments));
          }
        }
      }
    })((typeof console.log === 'object'), Function.prototype.bind,
        Function.prototype.call, Array.prototype.slice);

  })(window.console, function() {});

/* -----------------------------------------------------------------------------
 * The Object Polyfills (polyfills/object.js)
 * -------------------------------------------------------------------------- */

  if (!Object.keys) {
    /**
     * ---------------------------------------------
     * Public Method (Object.keys)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
     * @param {!(Object|function)} obj
     * @return {strings}
     */
    Object.keys = (function fixMissingObjectKeys() {

      /** @type {Object} */
      var testObj;
      /** @type {boolean} */
      var enumBug;
      /** @type {strings} */
      var notEnum;

      testObj = { toString: null };
      enumBug = !( testObj.propertyIsEnumerable('toString') );
      notEnum = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ];

      return function keys(obj) {

        /** @type {string} */
        var errorMessage;
        /** @type {string} */
        var prop;
        /** @type {number} */
        var i;
        /** @type {vals} */
        var result;

        if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
          errorMessage = 'An Object.keys call received an invalid object parameter. ';
          errorMessage += 'Note: It only accepts non-null objects and functions.';
          throw new TypeError(errorMessage);
          return;
        }

        result = [];

        for (prop in obj) {
          if ( obj.hasOwnProperty(prop) ) {
            result.push(prop);
          }
        }

        if (enumBug) {
          i = notEnum.length;
          while (i--) {
            if ( obj.hasOwnProperty(notEnum[i]) ) {
              result.push(notEnum[i]);
            }
          }
        }

        return result;
      };
    })();
  }

  if (!Object.freeze) {
    /**
     * ---------------------------------------------
     * Public Method (Object.freeze)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze}
     * @param {!Object} obj
     * @return {!Object}
     */
    Object.freeze = function(obj) {

      /** @type {string} */
      var errorMessage;

      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        errorMessage = 'An Object.freeze call received an invalid object parameter. ';
        errorMessage += 'Note: It only accepts non-null objects and functions.';
        throw new TypeError(errorMessage);
        return;
      }

      return obj;
    };
  }

  // Fix Object.freeze function param bug
  try {
    Object.freeze(function testObjectFreezeForBug() {});
  }
  catch (e) {
    Object.freeze = (function fixObjectFreezeBug(orgObjectFreeze) {

      return function freeze(obj) {
        if (typeof obj === 'function') {
          return obj;
        }
        else {
          return orgObjectFreeze(obj);
        }
      };
    })(Object.freeze);
  }

  if (!Object.isFrozen) {
    /**
     * ---------------------------------------------
     * Public Method (Object.isFrozen)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen}
     * @param {!Object} obj
     * @return {boolean}
     */
    Object.isFrozen = function(obj) {

      /** @type {string} */
      var errorMessage;

      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        errorMessage = 'An Object.isFrozen call received an invalid object parameter. ';
        errorMessage += 'Note: It only accepts non-null objects and functions.';
        throw new TypeError(errorMessage);
        return;
      }

      return true;
    };
  }

/* -----------------------------------------------------------------------------
 * The Array Polyfills (polyfills/array.js)
 * -------------------------------------------------------------------------- */

  if (!Array.isArray) {
    /**
     * ---------------------------------------------
     * Public Method (Array.isArray)
     * ---------------------------------------------
     * @desc A polyfill for the native method. For method details
     *   [see MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray}
     * @param {*} val
     * @return {boolean}
     */
    Array.isArray = function(val) {
      return Object.prototype.toString.call(val) === '[object Array]';
    };
  }

})(window, document);