var BajaPatPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: null, // This page doesn't have a checkbox. DV already visible
			additionalTrackingFields: {
				"fechaBaja": $("#fechaBaja")
			},
			dvGenerator: new DVPatentes(),
			utils: utils
		});
	})();

	return { };
};