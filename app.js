'use strict'

module.exports = (condition, remodele, value) =>
  (
    fn => fn(fn, value)
  )(
    (fn, value, i = 0) =>
      condition(value, i) ? [value, i] : fn(fn, remodele(value), i+1)
  )