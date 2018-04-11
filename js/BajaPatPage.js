var BajaPatPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$chkUseDv: null, // This page doesn't have a checkbox. DV already visible
			dvGenerator: new DVPatentes(),
			utils: utils
		})
	})();


	return { };
};