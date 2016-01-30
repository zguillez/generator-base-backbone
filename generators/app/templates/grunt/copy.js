'use strict';
module.exports = function(grunt) {
	grunt.config.set('copy', {
		index: {
			cwd: 'src/',
			src: 'index.html',
			dest: 'dist/',
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
		},
		lodash_: {
			cwd: 'bower_components/lodash/dist',
			src: 'lodash.js',
			dest: 'dist/lib/',
			expand: true
		},
		bootstrap_: {
			cwd: 'bower_components/bootstrap/dist/css',
			src: 'bootstrap.min.css',
			dest: 'dist/lib/',
			expand: true
		}
	});
	var json, json2, lib, key, path;
	json = grunt.file.readJSON('bower.json');
	for (lib in json.dependencies) {
		if (grunt.file.exists('bower_components/' + lib + '/bower.json')) {
			json2 = grunt.file.readJSON('bower_components/' + lib + '/bower.json');
			for (key in json2) {
				if (key === 'main') {
					if (typeof json2[key] === 'object') {
						var paths = [];
						for (var item in json2[key]) {
							path = json2[key][item];
							path = path.replace('./', '');
							paths[item] = path;
							grunt.config.set('copy.' + lib + '.cwd', 'bower_components/' + lib);
							grunt.config.set('copy.' + lib + '.src', paths);
							grunt.config.set('copy.' + lib + '.dest', 'dist/lib/');
							grunt.config.set('copy.' + lib + '.expand', true);
						}
					} else {
						path = json2[key];
						path = path.replace('./', '');
						grunt.config.set('copy.' + lib + '.cwd', 'bower_components/' + lib);
						grunt.config.set('copy.' + lib + '.src', path);
						grunt.config.set('copy.' + lib + '.dest', 'dist/lib/');
						grunt.config.set('copy.' + lib + '.expand', true);
					}
				}
			}
		}
	}
};