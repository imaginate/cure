
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
      }

      return true;
    };
  }
