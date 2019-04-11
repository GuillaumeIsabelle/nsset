
console.log("----CREATED LIB TESTING nsset----");
var nsset = require('../nsset');

var txt = "hello world";
var target = "HOME.FOOTER.MYNOTES";


var o2 = new Object();
 
o2.whatever = "something";
nsset.set(target,o2,txt);
console.log("Object created :" );
console.log(o2);
