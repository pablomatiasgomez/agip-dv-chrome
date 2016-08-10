var CommonDVPage = function(options) {
	if (!options.$id.length) return;
	if (!options.$dv.length) return;
	if (!options.$chkUseDv.length) return;
	if (!options.dvGenerator) return;

	var bindEvents = function() {
		options.$id.on("keyup", function() {
			var dv = options.dvGenerator.getDV(options.$id.val());
			if (!isNaN(dv)) {
				options.$dv.val(dv);
			}
		});
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

