
<p align="center"><big>
Add a value to an object using a namespace
</big></p>


## Install

```sh
npm i -D nsset
```

## Usage

```js

console.log("----CREATED LIB TESTING nsset----");
var nsset = require('nsset');

var txt = "hello world";
var target = "HOME.FOOTER.MYNOTES";


var o2 = new Object();
 
o2.whatever = "something";
nsset.set(target,o2,txt);
console.log("Object created :" );
console.log(o2);

```

## License

MIT © [Guillaume Isabelle](http://github.com/guillaumeisabelle)


