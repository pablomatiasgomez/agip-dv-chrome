var ConsultaPatPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: $("#chkDigitoVerificador"),
			dvGenerator: new DVPatentes(),
			utils: utils
		});
	})();


	return { };
};