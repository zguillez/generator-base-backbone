'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
		dev: {
			options: {
				style: 'nested'
			},
			files: [{
				cwd: 'src/styles/',
				dest: 'src/styles/css/',
				src: ['*.scss', '*.sass'],
				ext: '.css',
				expand: true
			}]
		}
	});
};