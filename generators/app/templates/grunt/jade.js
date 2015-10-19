'use strict';
module.exports = function(grunt) {
	grunt.config.set('jade', {
		compile: {
			options: {
				client: false,
				pretty: false
			},
			files: [{
				cwd: "src/templates/",
				src: "*.jade",
				dest: "src/templates/html/",
				expand: true,
				ext: ".html"
			}]
		}
	});
};