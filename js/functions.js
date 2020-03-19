(function () {
	let apiConnector = new ApiConnector();
	let utils = new Utils(apiConnector);
	let handler = null;

	const PAGE_HANDLERS = {
		"/BajaPat": () => BajaPatPage(utils),
		"/ConsultaPat": () => ConsultaPatPage(utils),
		"/ConsultaABL": () => ConsultaABLPage(utils),
		"/impInmobiliario": () => ConsultaImpuestoInmobiliarioPage(utils),
		"/ConsultaPub": () => ConsultaPubPage(utils),
	};

	Object.entries(PAGE_HANDLERS).forEach(entry => {
		if (!handler && window.location.pathname.toLowerCase().startsWith(entry[0].toLowerCase())) {
			handler = entry[1];
		}
	});

	handler && handler().then(() => {
		return utils.showDonateAlert();
	}).catch(e => {
		console.error("Error when handling page " + window.location.href, e);
		return apiConnector.logMessage("Handle page " + window.location.pathname, true, utils.stringifyError(e));
	});

})();
