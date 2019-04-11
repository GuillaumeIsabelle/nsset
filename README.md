
<p align="center"><big>
Add a value to an object using a namespace
</big></p>


## Install

```sh
npm i -D nsset
```

## Usage

```js
import nsset from "nsset"

var txt = "hello world";
var target = "HOME.FOOTER.MYNOTES";   
var obj = new Object();

var refObject = 
nsset.set(target,o,txt); //note the obj is the target object
```

## License

MIT © [Guillaume Isabelle](http://github.com/guillaumeisabelle)


