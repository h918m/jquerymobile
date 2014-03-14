'use strict';

requirejs.config({
  baseUrl: '/base',
  paths: {
    jquery: 'lib/jquery',
    jquerymobile: 'lib/jquerymobile'
  },
  shim: {
    jquerymobile: ['jquery', 'tests/jqm-init']
  },
  deps: ['tests/sampleTest'],
  callback: window.__karma__.start
});
