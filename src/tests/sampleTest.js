'use strict';

define(['jquery', 'jquerymobile'], function($, mobile) {
  module('sampleTest', {
    setup: function() {

    },
    teardown: function() {

    }
  });
  test('initial messages test', function() {
    var value = 'test';
    equal(value, 'test', 'expected value is "test"');
  });
});