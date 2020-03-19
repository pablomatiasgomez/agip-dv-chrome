let CommonDVPage = function (options) {
	if (!options.$id.length) throw "$id required";
	if (!options.$dv.length) throw "$dv required";
	if (!options.$btnAction) throw "$btnAction required";
	if (!options.additionalTrackingFields) options.additionalTrackingFields = {};
	if (!options.dvGenerator) throw "dvGenerator required";
	if (!options.utils) throw "utils required";

	let bindEvents = function () {
		let fn = function () {
			let dv = options.dvGenerator.getDV(options.$id.val());
			if (!isNaN(dv)) {
				options.$dv.val(dv);
			}
		};
		options.$id.on("keyup", fn);
		options.$id.on("change", fn);
	};

	let checkCheckbox = function () {
		// We can support cases in which the check is not present in the page.
		if (options.$chkUseDv && options.$chkUseDv.length && !options.$chkUseDv.prop("checked")) {
			options.$chkUseDv.click();
		}
	};

	// Init
	return Promise.resolve().then(() => {
		checkCheckbox();
		bindEvents();
	}).then(() => {
		return TrackingHelper({
			$id: options.$id,
			$dv: options.$dv,
			$btnAction: options.$btnAction,
			additionalTrackingFields: options.additionalTrackingFields,
			utils: options.utils
		});
	});
};

