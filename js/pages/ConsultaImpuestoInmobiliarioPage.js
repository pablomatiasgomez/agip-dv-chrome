/**
 * Handler for /impInmobiliario/
 * This page doesn't have a checkbox, it already asks for a dv so we don't need to provide a chkUseDv here.
 * @return {Promise<*>}
 */
let ConsultaImpuestoInmobiliarioPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return CommonDVPage({
			$id: $("#partida"),
			$dv: $("#dv"),
			$btnAction: $("#botonConsultar"),
			$chkUseDv: null,
			additionalTrackingFields: {
				"year": $("#anio")
			},
			dvGenerator: new DVABL(),
			utils: utils,
		});
	});
};
