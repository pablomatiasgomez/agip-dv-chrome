(function() {
	var PATH_NAME_PATENTES = "/ConsultaPat";
	var PATH_NAME_ABL = "/ConsultaABL";

	var utils = new Utils();

	if (location.pathname.match(PATH_NAME_PATENTES)) {
		ConsultaPatPage(utils);
	} else if (location.pathname.match(PATH_NAME_ABL)) {
		ConsultaABLPage(utils);
	}

})();