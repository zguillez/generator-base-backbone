'use strict';
module.exports = function(grunt) {
	grunt.config.set('uglify', {
		dist: {
			options: {
				mangle: true,
				preserveComments: 'no',
				sourceMap: false
			},
			cwd: 'src/scripts',
			dest: 'dist/js',
			src: '*.js',
			ext: '.js',
			expand: true
		}
	});
};