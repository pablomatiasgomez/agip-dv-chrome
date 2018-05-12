var ConsultaABLPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#fldPartida"),
			$dv: $("#fldDv"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: $("#chkPartida2Dv"),
			dvGenerator: new DVABL(),
			utils: utils
		});
	})();

	return { };
};