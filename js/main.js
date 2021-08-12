(function () {
	let apiConnector = new ApiConnector();
	let utils = new Utils(apiConnector);

	const PAGE_HANDLERS = {
		"/BajaPat": () => BajaPatPage(utils),
		"/ConsultaPat": () => ConsultaPatPage(utils),
		"/ConsultaABL": () => ConsultaABLPage(utils),
		"/impInmobiliario": () => ConsultaImpuestoInmobiliarioPage(utils),
		"/vir": () => ConsultaVIRPage(utils),
		"/ConsultaPub": () => ConsultaPubPage(utils),
	};

	let handler = Object.keys(PAGE_HANDLERS)
		.filter(key => window.location.pathname.toLowerCase().startsWith(key.toLowerCase()))
		.map(key => PAGE_HANDLERS[key])
		[0];

	handler && handler().catch(e => {
		console.error("Error when handling page " + window.location.href, e);
		return apiConnector.logMessage("Handle page " + window.location.pathname, true, utils.stringifyError(e));
	});

})();
