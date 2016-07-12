define(function(require) {
	var $ = require('jquery'),
		page = $('script[data-main]').attr('data-page');

	if (!page) {
		return null;
	}

	return function() {
		require([page], function(page) {
			if (typeof page === 'function') {
				page();
			}
		});
	};
});
