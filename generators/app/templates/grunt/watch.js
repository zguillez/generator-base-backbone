'use strict';
module.exports = function(grunt) {
	grunt.config.set('watch', {
		html: {
			files: ['src/*.html'],
			tasks: ['rebuild', 'reload']
		},
		js: {
			files: ['src/scripts/*.js', 'src/scripts/**/*.js'],
			tasks: ['rebuild', 'reload']
		},
		css: {
			files: ['src/styles/*.scss', 'src/styles/*.sass', 'src/styles/*.css'],
			tasks: ['rebuild', 'reload']
		},
		templates: {
			files: ['src/templates/*.jade', 'src/templates/html/*.html'],
			tasks: ['rebuild', 'reload']
		}
	});
};