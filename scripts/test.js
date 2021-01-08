'use strict';

// Define environment
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Script will crash on unhandled rejections instead of silently ignoring them
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read
require('../config/env');

const jest = require('jest');
const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}


jest.run(argv);
