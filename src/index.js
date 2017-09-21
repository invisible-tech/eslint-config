'use strict'

module.exports = {
  extends: [
    './rules/invRules.js',
  ].map(require.resolve),
  rules: {},
}
