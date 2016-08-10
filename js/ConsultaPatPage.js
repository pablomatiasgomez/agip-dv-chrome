var ConsultaPatPage = function() {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$chkUseDv: $("#chkDigitoVerificador"),
			dvGenerator: new DVPatentes()
		})
	})();


	return { };
};