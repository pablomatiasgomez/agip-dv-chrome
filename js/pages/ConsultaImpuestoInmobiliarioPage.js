var ConsultaImpuestoInmobiliarioPage = function(utils) {

	// Init
	(function() {
		new CommonDVPage({
			$id: $("#partida"),
			$dv: $("#dv"),
			$btnAction: $("#botonConsultar"),
			additionalTrackingFields: {
				"year": $("#anio")
			},
			$chkUseDv: null, // This page doesn't have a checkbox. DV already visible
			dvGenerator: new DVABL(),
			utils: utils
		});
	})();

	return { };
};