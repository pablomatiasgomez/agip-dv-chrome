(function() {
	var PATH_NAME_PATENTES = "/ConsultaPat";
	var PATH_NAME_ABL = "/ConsultaABL";

	if (location.pathname.match(PATH_NAME_PATENTES)) {
		ConsultaPatPage();
	} else if (location.pathname.match(PATH_NAME_ABL)) {
		ConsultaABLPage();
	}

})();