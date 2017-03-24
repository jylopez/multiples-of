var multiplesOf = require('../')

var test = require('tape')

test('multiples of 3 or 5 under 10', function (t) {
  t.plan(1)
  t.same(multiplesOf([2, 3], 10), [ 0, 2, 3, 4, 6, 8, 9 ])
})