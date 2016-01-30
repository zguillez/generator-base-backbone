'use strict';
module.exports = function(grunt) {
	grunt.config.set('clean', {
		dist: {
			src: ["dist/*"]
		},
		folders: {
			src: []
		},
		files: {
			src: []
		}
	});
};