'use strict';
module.exports = function (grunt) {
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
			files: ['src/styles/*.scss', 'src/styles/*.sass', 'src/styles/*.css'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true,
			}
		},
		templates: {
			files: ['src/templates/*.jade', 'src/templates/html/*.html'],
			tasks: ['rebuild', 'reload']
		}
	});
};
