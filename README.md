<big><h1 align="center">nsset</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/nsset">
    <img src="https://img.shields.io/npm/v/nsset.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/jgwill/nsset">
    <img src="https://img.shields.io/coveralls/jgwill/nsset.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/jgwill/nsset">
    <img src="https://img.shields.io/travis/jgwill/nsset.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/nsset">
    <img src="http://img.shields.io/npm/dm/nsset.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/jgwill/nsset.svg">
    <img src="https://david-dm.org/jgwill/nsset.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/jgwill/nsset/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/nsset.svg?style=flat-square"
         alt="License">
  </a>
</p>

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
nsset(target,o,txt); //note the obj is the target object
```

## License

MIT © [Guillaume Isabelle](http://github.com/jgwill)

[npm-url]: https://npmjs.org/package/nsset
[npm-image]: https://img.shields.io/npm/v/nsset.svg?style=flat-square

[travis-url]: https://travis-ci.org/jgwill/nsset
[travis-image]: https://img.shields.io/travis/jgwill/nsset.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/jgwill/nsset
[coveralls-image]: https://img.shields.io/coveralls/jgwill/nsset.svg?style=flat-square

[depstat-url]: https://david-dm.org/jgwill/nsset
[depstat-image]: https://david-dm.org/jgwill/nsset.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/nsset.svg?style=flat-square
