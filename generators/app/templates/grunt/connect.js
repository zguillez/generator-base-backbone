'use strict';
module.exports = function(grunt) {
	grunt.config.set('connect', {
		server: {
			options: {
				protocol: 'http',
				hostname: 'localhost',
				port: '9000',
				base: 'dist',
				open: '/index.html',
				keepalive: false
			}
		}
	});
};