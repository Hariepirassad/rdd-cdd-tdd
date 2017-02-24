'use strict';
var assert = require('assert');

const chai = require('chai');
chai.should();

const weather = require('../index.js');

/**
 * Represents a simple test.
 *
 */
describe('Weather', function() => {
	it('should get the weather', function() => {
		assert.notEqual(undefined, weather);
	});
});
