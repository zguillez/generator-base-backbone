'use strict';
require.config({
	paths: {
		routes: './routes',
		text: '../lib/text',
		jquery: '../lib/jquery',
		underscore: '../lib/lodash',
		backbone: '../lib/backbone',
		bootstrap: '../lib/bootstrap-native'
	}
});
require(['backbone', 'jquery', 'underscore'], function() {
	require(['bootstrap'], function() {
		require(['router'], function(Router) {
			Router.initialize();
		});
	});
});