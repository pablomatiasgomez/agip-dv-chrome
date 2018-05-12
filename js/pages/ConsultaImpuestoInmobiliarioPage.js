var ConsultaImpuestoInmobiliarioPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#partida"),
			$dv: $("#dv"),
			$btnAction: $("#botonConsultar"),
			$chkUseDv: null, // This page doesn't have a checkbox. DV already visible
			additionalTrackingFields: {
				"year": $("#anio")
			},
			dvGenerator: new DVABL(),
			utils: utils
		});
	})();

	return { };
};