'use strict';
module.exports = function(grunt) {
	grunt.config.set('copy', {
		index: {
			cwd: 'src/',
			src: 'index.html',
			dest: 'dist/',
			expand: true
		},
		requirejs: {
			cwd: 'bower_components/requirejs',
			src: 'require.js',
			dest: 'dist/lib/',
			expand: true
		},
		requirejs_text: {
			cwd: 'bower_components/text',
			src: 'text.js',
			dest: 'dist/lib/',
			expand: true
		},
		backbone: {
			cwd: 'bower_components/backbone',
			src: 'backbone-min.js',
			dest: 'dist/lib/',
			expand: true
		},
		lodash: {
			cwd: 'bower_components/lodash',
			src: 'lodash.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		underscore: {
			cwd: 'bower_components/underscore',
			src: 'underscore-min.js',
			dest: 'dist/lib/',
			expand: true
		},
		jquery: {
			cwd: 'bower_components/jquery/dist',
			src: 'jquery.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		bootstrap: {
			cwd: 'bower_components/bootstrap/dist/js',
			src: 'bootstrap.min.js',
			dest: 'dist/lib/',
			expand: true
		},
		bootstrap_css: {
			cwd: 'bower_components/bootstrap/dist/css',
			src: 'bootstrap.min.css',
			dest: 'dist/lib/',
			expand: true
		},
		scripts: {
			cwd: 'src/scripts/',
			src: '**/*.js',
			dest: 'dist/js/',
			expand: true
		},
		templates: {
			cwd: 'src/templates/html',
			src: '*.html',
			dest: 'dist/templates/',
			expand: true
		},
		styles: {
			cwd: 'src/styles/css',
			src: '*.css',
			dest: 'dist/css/',
			expand: true
		},
		images: {
			cwd: 'src/images',
			src: ['*.jpg', '*.png', '*.gif', '*.svg'],
			dest: 'dist/images/',
			expand: true
		},
		data: {
			cwd: 'src/data',
			src: ['*.*'],
			dest: 'dist/data/',
			expand: true
		}
	});
};