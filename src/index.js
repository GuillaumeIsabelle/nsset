  /**
  * Add Object/value to another using a namespace as target
  * 
  * @param {*} ns 
  * @param {*} obj 
  * @param {*} val 
 * @return {Object} Reference of created object
  */
 export default function (ns, obj, val) { 
  return initializeNS(ns,obj,val);
}

/**
 * does the job and recurse until it reached the target object
 * @param {*} ns 
 * @param {*} obj 
 * @param {*} val 
 * @return {Object} Reference of created object
 */
function initializeNS(ns, obj,val) {
  var global = (function () { return this;})(), // reference to the global object
      levels = ns.split('.'), first = levels.shift();
  obj = obj || global; //if no object argument supplied declare a global property
  obj[first] = obj[first] || {}; // initialize the "level"
  if (levels.length) { // recursion condition
    initializeNS(levels.join('.'), obj[first],val);
  }
  else obj[first] = val;
     
  return obj[first]; // return a reference to the top level object
}