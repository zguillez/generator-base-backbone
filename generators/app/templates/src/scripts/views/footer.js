define(['jquery', 'underscore', 'backbone', 'text!../../templates/footer.html'], function($, _, Backbone, FooterTemplate) {
	'use strict';
	var FooterView = Backbone.View.extend({
		el: $('#footer'),
		template: _.template(FooterTemplate),
		render: function() {
			this.$el.append(this.template());
		}
	});
	return new FooterView();
});