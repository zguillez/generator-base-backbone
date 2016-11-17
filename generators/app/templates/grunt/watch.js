'use strict';
module.exports = function(grunt) {
	grunt.config.set('watch', {
		html: {
			files: ['src/*.html'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true,
			}
		},
		js: {
			files: ['src/scripts/*.js', 'src/scripts/**/*.js'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true,
			}
		},
		css: {
			files: ['src/styles/*.less', 'src/styles/*.css'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true,
			}
		},
		templates: {
			files: ['src/templates/*.pug', 'src/templates/html/*.html'],
			tasks: ['rebuild', 'reload']
		}
	});
};