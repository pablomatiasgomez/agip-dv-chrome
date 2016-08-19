var ConsultaPatPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$chkUseDv: $("#chkDigitoVerificador"),
			dvGenerator: new DVPatentes(),
			utils: utils
		})
	})();


	return { };
};