'use strict';
define(['backbone'], function(Backbone) {
	var DataCollection = Backbone.Collection.extend({
		url: 'data/data.json',
		initialize: function() {},
		parse: function(response) {
			return response;
		}
	});
	return new DataCollection();
});