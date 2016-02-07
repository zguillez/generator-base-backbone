'use strict';
define(['backbone', 'jquery', 'underscore', 'text!../../templates/header.html'], function(Backbone, $, _, HeaderTemplate) {
	var HeaderView = Backbone.View.extend({
		el: $('#header'),
		template: _.template(HeaderTemplate),
		render: function() {
			this.$el.append(this.template());
		}
	});
	return new HeaderView();
});