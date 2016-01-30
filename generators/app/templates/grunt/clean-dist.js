'use strict';
module.exports = function(grunt) {
	grunt.registerTask('clean-dist', 'Clean dist folder', function() {
		var fs = require('fs');
		var path = require('path');

		function getDirectories(src) {
			return fs.readdirSync(src).filter(function(file) {
				return fs.statSync(path.join(src, file)).isDirectory();
			});
		}

		function getSubdirectories(path, arr) {
			var dirs = [];
			var subdirs = [];
			var i, ii, iii;
			for (i = 0; i < arr.length; i++) {
				dirs.push(path + '/' + arr[i]);
				subdirs = getDirectories(path + '/' + arr[i]);
				for (ii = 0; ii < subdirs.length; ii++) {
					dirs.push(path + '/' + arr[i] + '/' + subdirs[ii]);
				}
				var more = getSubdirectories(path + '/' + arr[i], subdirs);
				for (iii = 0; iii < more.length; iii++) {
					if (dirs.indexOf(more[iii]) === -1) {
						dirs.push(more[iii]);
					}
				}
			}
			return dirs;
		}
		var folders = getSubdirectories('dist/lib', getDirectories('dist/lib'));
		console.log(folders);
		grunt.config.set('merge-copy.main.options.directories', folders);
		grunt.config.set('clean.folders.src', folders);
		/* remove files */
		grunt.config.set('clean.files.src', ['dist/lib/bootstrap.less']);
		//
		grunt.task.run(['merge-copy', 'clean:folders', 'clean:files']);
	});
};