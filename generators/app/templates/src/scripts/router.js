'use strict';
define(['backbone', 'jquery', 'underscore', 'views/index'], function(Backbone, $, _, IndexView) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'indexAction',
			'*params': 'defaultAction'
		},
		indexAction: function() {
			var indexView = new IndexView();
			indexView.render();
		},
		defaultAction: function(params) {
			console.log('No route:', params);
		}
	});
	var initialize = function() {
		var router = new Router();
		Backbone.emulateHTTP = true;
		Backbone.history.start();
		$(document).on('click', 'a:not([data-bypass])', function(event) {
			var href = $(this).attr('href');
			var protocol = this.protocol + '//';
			if (href.slice(protocol.length) !== protocol) {
				event.preventDefault();
				router.navigate(href, true);
			}
		});
	};
	return {
		initialize: initialize
	};
});