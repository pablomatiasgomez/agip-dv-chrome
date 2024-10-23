/**
 * Handler for /ConsultaPub/
 * "Anuncios Publicitarios" uses the same DV as "Patentes"
 * @return {Promise<*>}
 */
let ConsultaPubPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return CommonDVPage({
			$id: $("#fldAnuncio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: $("#chkDigitoVerificador"),
			dvGenerator: new DVPatentes(),
			utils: utils,
		});
	});
};
