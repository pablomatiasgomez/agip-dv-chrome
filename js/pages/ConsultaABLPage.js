/**
 * Handler for /ConsultaABL/
 *
 * @return {Promise<*>}
 */
let ConsultaABLPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return CommonDVPage({
			$id: $("#fldPartida"),
			$dv: $("#fldDv"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: $("#chkPartida2Dv"),
			dvGenerator: new DVABL(),
			utils: utils,
		});
	});
};
