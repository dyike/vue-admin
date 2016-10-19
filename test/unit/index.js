// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
<<<<<<< HEAD
const testsContext = require.context('./specs', true, /\.spec$/)
=======
var testsContext = require.context('./specs', true, /\.spec$/)
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
<<<<<<< HEAD
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
=======
var srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
srcContext.keys().forEach(srcContext)
