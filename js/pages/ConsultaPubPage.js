var ConsultaPubPage = function(utils) {

	// Init
	(function() {
		new TrackingPage({
			$id: $("#fldAnuncio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			utils: utils
		});
	})();

	return { };
};