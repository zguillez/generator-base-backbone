'use strict';
module.exports = function(grunt) {
	grunt.config.set('less', {
		dev: {
			options: {
				style: 'nested'
			},
			files: [{
				cwd: 'src/styles/',
				dest: 'src/styles/css/',
				src: ['*.less', '*.css'],
				ext: '.css',
				expand: true
			}]
		}
	});
};