'use strict';
module.exports = function(grunt) {
	grunt.config.set('jshint', {
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		},
		test: ['Gruntfile.js', 'src/scripts/*.js']
	});
};