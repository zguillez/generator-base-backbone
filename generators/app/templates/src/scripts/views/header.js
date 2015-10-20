define(['jquery', 'underscore', 'backbone', 'text!../../templates/header.html'], function($, _, Backbone, HeaderTemplate) {
	'use strict';
	var HeaderView = Backbone.View.extend({
		el: $('#header'),
		template: _.template(HeaderTemplate),
		render: function() {
			this.$el.append(this.template());
		}
	});
	return new HeaderView();
});