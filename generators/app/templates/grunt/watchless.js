'use strict';
module.exports = function(grunt) {
	grunt.config.set('watch', {
		html: {
			files: ['src/*.html'],
			tasks: ['copy:index', 'reload'],
			options: {
				livereload: true,
			}
		},
		js: {
			files: ['src/scripts/*.js', 'src/scripts/**/*.js'],
			tasks: ['jshint','copy:scripts','reload'],
			options: {
				livereload: true,
			}
		},
		css: {
			files: ['src/styles/*.less', 'src/styles/*.css'],
			tasks: ['less:dev','reload'],
			options: {
				livereload: true,
			}
		},
		templates: {
			files: ['src/templates/*.pug', 'src/templates/html/*.html'],
			tasks: ['pug', 'copy:templates', 'reload'],
      options: {
        livereload: true,
      }
		}
	});
};
