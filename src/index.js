#!/usr/bin/env node

'use strict'

const spawn = require('cross-spawn')

const cwd = process.cwd()

const configFilePath = `${cwd}/node_modules/inv-lint/.eslintrc.json`
const outputFormatPath = `${cwd}/node_modules/eslint-formatter-pretty`
const filesPath = [`${cwd}/scripts`, `${cwd}/src`, `${cwd}/test`, '--ignore-path', `${cwd}/.gitignore`]

const eslintCommand = ['-c', configFilePath, '--cache', '-f', outputFormatPath, ...filesPath]
const fixCommand = ['-c', configFilePath, '--cache', '--fix', ...filesPath]

spawn.sync('eslint', eslintCommand, { stdio: 'inherit' })
spawn.sync('eslint', fixCommand, { stdio: 'inherit' })
