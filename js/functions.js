(function() {
	var PATH_NAME_BAJA_PATENTES = "/BajaPat";
	var PATH_NAME_PATENTES = "/ConsultaPat";
	var PATH_NAME_ABL = "/ConsultaABL";

	var utils = new Utils();
	var isKnownPage = true;

	if (location.pathname.match(PATH_NAME_BAJA_PATENTES)) {
		BajaPatPage(utils);
	} else if (location.pathname.match(PATH_NAME_PATENTES)) {
		ConsultaPatPage(utils);
	} else if (location.pathname.match(PATH_NAME_ABL)) {
		ConsultaABLPage(utils);
	} else {
		isKnownPage = false;
	}

	if (isKnownPage && utils.shouldShowRecommendAlert()) {
		utils.showRecommendAlert();
	}

})();
