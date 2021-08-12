/**
 * Helper to track when the user submits the form in any page.
 * This tracks the id with the dv and other fields that can be provided
 * @return {Promise<void>}
 */
let TrackingHelper = function (options) {
	if (!options.$id.length) throw new Error("$id required");
	if (!options.$dv.length) throw new Error("$dv required");
	if (!options.$btnAction) throw new Error("$btnAction required");
	if (!options.additionalTrackingFields) options.additionalTrackingFields = {};
	if (!options.utils) throw new Error("utils required");

	let bindEvents = function () {
		options.$btnAction.on("click", function () {
			let additionalTrackingFields = {};
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
	return Promise.resolve().then(() => {
		bindEvents();
	});
};

