'use strict';
define(['jquery', 'underscore', 'backbone', 'text!../../templates/index.html', 'views/header', 'views/footer', 'collections/data'],
	function($, _, Backbone, IndexTemplate, HeaderView, FooterView, DataCollection) {
		var IndexView = Backbone.View.extend({
			el: $('.container'),
			header: $('#header'),
			template: _.template(IndexTemplate),
			data: {},
			events: {
				'click .logo': 'showAlert'
			},
			initialize: function() {
				this.dataCollection = DataCollection;
				this.headerView = HeaderView;
				this.footerView = FooterView;
			},
			render: function() {
				var scope = this;
				scope.data.libs = [];
				this.dataCollection.fetch({
					success: function(collection, response, options) {
						scope.dataCollection.each(function(lib) {
							scope.data.libs.push(lib.toJSON());
						});
						scope.$el.append(scope.template(scope.data));
						scope.headerView.$el = $('#header');
						scope.headerView.render();
						scope.footerView.$el = $('#footer');
						scope.footerView.render();
					},
					error: function() {
						console.log('Error loading json');
					}
				});
			},
			showAlert: function() {
				alert('Hell Yeah!');
			}
		});
		return IndexView;
	});