/// <reference path="bundle/main.d.ts" />
/// <reference path="typings/main.d.ts" />

import compose = require('koa-compose')
import Promise = require('any-promise')
import assert = require('assert')

compose<any>([
  function (ctx, next) {
    assert.equal(ctx, false)
    return next()
  },
  function (ctx, next) {
    assert.equal(ctx, false)
    return next()
  }
])(false, () => true)
  .then(function (result) {
    console.log(result)
})