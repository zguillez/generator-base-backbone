'use strict';
define(['backbone', 'jquery', 'underscore', 'text!../../templates/footer.html'], function(Backbone, $, _, FooterTemplate) {
	var FooterView = Backbone.View.extend({
		el: $('#footer'),
		template: _.template(FooterTemplate),
		render: function() {
			this.$el.append(this.template());
		}
	});
	return new FooterView();
});