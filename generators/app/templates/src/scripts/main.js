'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		jquery: '../lib/jquery.min',
		underscore: '../lib/lodash.min',
		backbone: '../lib/backbone-min',
		bootstrap: '../lib/bootstrap.min'
	}
});
require(['jquery', 'bootstrap']);
require(['router'], function(Router) {
	Router.initialize();
});