var CommonDVPage = function(options) {
	if (!options.$id.length) throw "$id required";
	if (!options.$dv.length) throw "$dv required";
	if (!options.$chkUseDv.length) throw "$chkUseDv required";
	if (!options.dvGenerator) throw "dvGenerator required";
	if (!options.utils) throw "utils required";

	var lastDv = null;

	var bindEvents = function() {
		var fn = function() {
			var dv = options.dvGenerator.getDV(options.$id.val());
			if (!isNaN(dv) && dv !== lastDv) {
				lastDv = dv;
				options.$dv.val(dv);
				options.utils.trackGetCodePatente(options.$id.val() + "-" + dv);
			}
		};
		options.$id.on("keyup", fn);
		options.$id.on("change", fn);
	};

	var checkCheckbox = function() {
		if (!options.$chkUseDv.prop("checked")) {
			options.$chkUseDv.click();
		}
	};

	// Init
	(function() {
		checkCheckbox();
		bindEvents();
	})();
};

