/**
 * Handler for /ConsultaPat/
 *
 * @return {Promise<*>}
 */
let ConsultaPatPage = function (utils) {

	// Init
	return Promise.resolve().then(() => {
		// AGIP now hides and disables the DV checkbox; restore it before clicking it.
		let $chkUseDv = $("#chkDigitoVerificador");
		$chkUseDv.prop("disabled", false).closest(".checkbox").show();

		return CommonDVPage({
			$id: $("#fldDominio"),
			$dv: $("#fldDigitoVerificador"),
			$btnAction: $("#btnConsultar"),
			$chkUseDv: $chkUseDv,
			dvGenerator: new DVPatentes(),
			utils: utils,
		});
	});
};
