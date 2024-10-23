/**
 * Handler for /ConsultaPub/
 * Unfortunately we don't know how this dv is generated so for now we are just tracking.
 * @return {Promise<*>}
 */
let ConsultaPubPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return TrackingHelper({
			$id: $("#fldAnuncio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			utils: utils,
		});
	});
};
