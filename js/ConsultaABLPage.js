var ConsultaABLPage = function() {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldPartida"),
			$dv: $("#fldDv"),
			$chkUseDv: $("#chkPartida2Dv"),
			dvGenerator: new DVABL()
		})
	})();


	return { };
};