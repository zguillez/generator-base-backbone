'use strict';
module.exports = function(grunt) {
	grunt.config.set('pug', {
		compile: {
			options: {
				client: false,
				pretty: false
			},
			files: [{
				cwd: "src/templates/",
				src: "*.pug",
				dest: "src/templates/html/",
				expand: true,
				ext: ".html"
			}]
		}
	});
};