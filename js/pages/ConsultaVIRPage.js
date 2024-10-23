/**
 * Handler for /vir which stands for "valor inmobiliario de referencia"
 * This page doesn't have a checkbox, it already asks for a dv so we don't need to provide a chkUseDv here.
 * @return {Promise<*>}
 */
let ConsultaVIRPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return CommonDVPage({
			$id: $("#numero_partida"),
			$dv: $("#dv"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: null,
			dvGenerator: new DVABL(),
			utils: utils,
		});
	});
};
