'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		jquery: '../lib/jquery',
		underscore: '../lib/lodash',
		backbone: '../lib/backbone',
		bootstrap: '../lib/bootstrap'
	}
});
require(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
	require(['bootstrap'], function(Bootstrap) {
		require(['router'], function(Router) {
			Router.initialize();
		});
	});
});