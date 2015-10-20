'use strict';
module.exports = function(grunt) {
	grunt.initConfig({});
	require('load-grunt-tasks')(grunt);
	require('./grunt/jshint')(grunt);
	require('./grunt/clean')(grunt);
	require('./grunt/jade')(grunt);
	require('./grunt/copy')(grunt);
	require('./grunt/sass')(grunt);
	require('./grunt/uglify')(grunt);
	require('./grunt/connect')(grunt);
	require('./grunt/open')(grunt);
	require('./grunt/watch')(grunt);
	require('./grunt/reload')(grunt);
	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', function() {
		grunt.task.run(['clean', 'jshint', 'uglify', 'jade', 'sass', 'copy', 'connect', 'open', 'watch']);
	});
	grunt.registerTask('build', function() {
		grunt.task.run(['clean', 'jshint', 'uglify', 'jade', 'sass', 'copy']);
	});
	grunt.registerTask('rebuild', function() {
		grunt.task.run(['clean', 'uglify', 'jade', 'sass', 'copy']);
	});
};