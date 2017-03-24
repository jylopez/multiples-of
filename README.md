# multiples-of [![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/multiples-of)

> Returns all multiples of an array of numbers below a maximum number.

### Install
```
npm install multiples-of
```

### Usage

``` js
/*
Return an array of all the natural numbers below 10 that are multiples of 2 or 3.
*/

var multiplesOf = require('multiples-of');
console.log( multiplesOf([2, 3], 10) ) // [ 0, 2, 3, 4, 6, 8, 9 ]
```

### API

#### multiplesOf([array of integers], maximum integer)

### License
MIT
