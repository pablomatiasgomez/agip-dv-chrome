var TrackingPage = function(options) {
	if (!options.$id.length) throw "$id required";
	if (!options.$dv.length) throw "$dv required";
	if (!options.$btnAction) throw "$btnAction required";
	if (!options.additionalTrackingFields) options.additionalTrackingFields = {};
	if (!options.utils) throw "utils required";

	var bindEvents = function() {
		options.$btnAction.on("click", function() {
			var additionalTrackingFields = {};
			Object.keys(options.additionalTrackingFields).forEach(additionalTrackingFieldKey => {
				if (options.additionalTrackingFields[additionalTrackingFieldKey].length) {
					additionalTrackingFields[additionalTrackingFieldKey] = options.additionalTrackingFields[additionalTrackingFieldKey].val();
				}
			});
			if (Object.keys(additionalTrackingFields).length) {
				options.utils.trackGeneratedDv(options.$id.val(), options.$dv.val(), JSON.stringify(additionalTrackingFields));
			} else {
				options.utils.trackGeneratedDv(options.$id.val(), options.$dv.val());
			}
		});
	};

	// Init
	(function() {
		bindEvents();
	})();
};

