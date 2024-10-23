/**
 * Handler for /BajaPat/
 * This page doesn't have a checkbox, it already asks for a dv so we don't need to provide a chkUseDv here.
 * @return {Promise<*>}
 */
let BajaPatPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		return CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: null,
			additionalTrackingFields: {
				"fechaBaja": $("#fechaBaja")
			},
			dvGenerator: new DVPatentes(),
			utils: utils,
		});
	});
};
