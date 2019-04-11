/* eslint-disable prefer-const */
/* eslint-disable one-var */
/**
 * does the job and recurse until it reached the target object
 * @param {*} ns namespace target
 * @param {*} obj Target object
 * @param {*} val value to assign
 * @return {Object} Reference of created object
 */
function initializeNS(ns, obj2, val) {
  let obj = obj2;
  let global = (function () { return this; }()), // reference to the global object
    levels = ns.split('.'),
    first = levels.shift();

  obj = obj || global; // if no object argument supplied declare a global property

  obj[first] = obj[first] || {}; // initialize the "level"
  if (levels.length) { // recursion condition
    initializeNS(levels.join('.'), obj[first], val);
  } else obj[first] = val;

  return obj[first]; // return a reference to the top level object
}

/**
* Add Object/value to another using a namespace as target
* @param {*} ns namespace target
* @param {*} obj Target object
* @param {*} val value to assign
* @return {Object} Reference of created object
*/
modules.exports = function (ns, obj, val) {
  return initializeNS(ns, obj, val);
}
