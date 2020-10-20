#!/usr/bin/env node
'use strict'

const { oxipngSync } = require('./app')

try {
    oxipngSync(process.argv.slice(2))
}
catch (err) {
    if (typeof err.pid === 'number' && typeof err.status === 'number') {
        process.exit(err.status)
    }

    throw err
}
