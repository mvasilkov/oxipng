'use strict'

const assert = require('assert').strict
const { execFileSync } = require('child_process')
const { join } = require('path')

const binDir = {
    darwin: 'oxipng-3.0.1-x86_64-apple-darwin',
    linux: 'oxipng-3.0.1-x86_64-unknown-linux-musl',
    win32: 'oxipng-3.0.1-i686-pc-windows-msvc',
}

const binFile = {
    darwin: 'oxipng',
    linux: 'oxipng',
    win32: 'oxipng.exe',
}

function oxipngSync(args, options = {}) {
    assert(binDir[process.platform], `Missing binary for platform ${process.platform}`)

    const file = join(__dirname, 'bin', binDir[process.platform], binFile[process.platform])
    options = Object.assign({ stdio: 'inherit', windowsHide: true }, options)

    return execFileSync(file, args, options)
}

exports.oxipngSync = oxipngSync
