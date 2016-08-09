var ConsultaPatPage = function() {

	var dvPatentes = new DVPatentes();

	var bindEvents = function() {
		var $patente = $("#fldDominio");
		var $dv = $("#fldDigitoVerificador");

		$patente.on("keyup", function() {
			var dv = dvPatentes.getDV($patente.val());
			if (!isNaN(dv)) {
				$dv.val(dv);
			}
		});
	};

	var checkCheckbox = function() {
		var $chk = $("#chkDigitoVerificador");
		if (!$chk.prop("checked")) {
			$chk.click();
		}
	};

	// Init
	(function() {
		checkCheckbox();
		bindEvents();
	})();


	return { };
};