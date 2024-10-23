/**
 * Handler for /ConsultaPat/
 *
 * @return {Promise<*>}
 */
let ConsultaPatPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: $("#chkDigitoVerificador"),
			dvGenerator: new DVPatentes(),
			utils: utils,
		});
	});
};
