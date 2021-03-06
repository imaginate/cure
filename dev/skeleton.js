/** @preserve blank-line */

/**
 * -----------------------------------------------------------------------------
 * Cure.js (v0.0.5)
 * -----------------------------------------------------------------------------
 * @file Cure.js is a collection of JavaScript and DOM polyfills that help
 *   ensure that your web development is cross-browser compatible. At the moment
 *   they only include a small selection of polyfills needed to support
 *   [imaginate]{@link https://github.com/imaginate}'s other projects. The only
 *   native object's functionality that has been completely polyfilled is the
 *   [Console]{@link https://github.com/imaginate/cure/blob/master/dev/console.js}
 *   object.
 * @module Cure
 * @version 0.0.5
 * @author Adam Smith adamsmith@algorithmiv.com
 * @copyright 2015 Adam A Smith [github.com/imaginate]{@link https://github.com/imaginate}
 * @license The Apache License [algorithmiv.com/cure/license]{@link http://algorithmiv.com/cure/license}
 * @see [Contributing Guide]{@link https://github.com/imaginate/cure/blob/master/CONTRIBUTING.md}
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
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
// Export Cure
////////////////////////////////////////////////////////////////////////////////

;(function(/** Object */ root, /** function(Object, boolean) */ runCure) {

/* -----------------------------------------------------------------------------
 * Export Vitals (dev/export.js)
 * -------------------------------------------------------------------------- */
// insert-export

})(this, function(/** boolean */ hasWindow, undefined) {

  "use strict";

  /** @type {Object} */
  var root = this;

////////////////////////////////////////////////////////////////////////////////
// The Cure Module
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * Cure JSON (dev/parts/json.js)
 * --------------------------------------------------------------------------
 * Note: Uses 3rd Party Script - JSON3 v3.3.2 (bestiejs.github.io/json3)
 * -------------------------------------------------------------------------- */
// insert-json

/* -----------------------------------------------------------------------------
 * Cure AJAX (dev/parts/ajax.js)
 * -------------------------------------------------------------------------- */
// insert-ajax

/* -----------------------------------------------------------------------------
 * Cure Array (dev/parts/array.js)
 * -------------------------------------------------------------------------- */
// insert-array

/* -----------------------------------------------------------------------------
 * Cure Console (dev/parts/console.js)
 * -------------------------------------------------------------------------- */
// insert-console

/* -----------------------------------------------------------------------------
 * Cure Object (dev/parts/object.js)
 * -------------------------------------------------------------------------- */
// insert-object

});