'use strict';

module.exports = function(grunt) {
	grunt.initConfig({});
	require('load-grunt-tasks')(grunt);
	require('./grunt/jshint')(grunt);
	require('./grunt/clean')(grunt);
	require('./grunt/pug')(grunt);
	require('./grunt/copy')(grunt);
	require('./grunt/merge')(grunt);
	require('./grunt/<%= css %>')(grunt);
	require('./grunt/uglify')(grunt);
	require('./grunt/connect')(grunt);
	require('./grunt/open')(grunt);
	require('./grunt/watch')(grunt);
	require('./grunt/reload')(grunt);
	require('./grunt/clean-dist')(grunt);
	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', function() {
		grunt.task.run(['clean:dist', 'jshint', 'uglify', 'pug', '<%= css %>', 'copy', 'clean-dist', 'connect', 'open', 'watch']);
	});
	grunt.registerTask('build', function() {
		grunt.task.run(['clean:dist', 'jshint', 'uglify', 'pug', '<%= css %>', 'copy', 'clean-dist']);
	});
	grunt.registerTask('rebuild', function() {
		grunt.task.run(['clean:dist', 'uglify', 'pug', '<%= css %>', 'copy', 'clean-dist']);
	});
};

