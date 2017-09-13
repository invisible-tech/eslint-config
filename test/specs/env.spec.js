'use strict'

const avow = require('avow')
const { forEach } = require('lodash/fp')

const envVars = [
  'LOGGER_LEVEL',
  'NODE_ENV',
]

describe('envVars', () => {
  forEach(name => {
    it(name, () => {
      avow.notEqual(process.env[name], null, `${name} is not set`)
    })
  })(envVars)
})
