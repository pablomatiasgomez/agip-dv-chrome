(function() {
	var ACTION_BY_PATH = {
		"/BajaPat": (utils) => {
			BajaPatPage(utils);
		},
		"/ConsultaPat": (utils) => {
			ConsultaPatPage(utils);
		},
		"/ConsultaABL": (utils) => {
			ConsultaABLPage(utils);
		},
		"/impInmobiliario": (utils) => {
			ConsultaImpuestoInmobiliarioPage(utils);
		},
		"/ConsultaPub": (utils) => {
			ConsultaPubPage(utils);
		},
	};

	var utils = new Utils();
	var isKnownPage = false;

	Object.keys(ACTION_BY_PATH).forEach(path => {
		if (!isKnownPage && location.pathname.toLowerCase().indexOf(path.toLowerCase()) !== -1) {
			isKnownPage = true;
			ACTION_BY_PATH[path](utils);
		}
	});

	if (isKnownPage && utils.shouldShowRecommendAlert()) {
		utils.showRecommendAlert();
	}

})();
