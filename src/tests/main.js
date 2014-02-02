'use strict';

requirejs.config({
  baseUrl: '/base',
  paths: {
    jquery: 'lib/jquery',
    jquerymobile: 'lib/jquerymobile'
  },
  shim: {
    jquerymobile: ['jquery']
  },
  deps: ['tests/sampleTest'],
  callback: window.__karma__.start
});