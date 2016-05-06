'use strict';
module.exports = function(grunt) {
	grunt.config.set('reload', {
		reload: {
			port: 9000,
			proxy: {
				host: 'localhost',
			}
		}
	});
};