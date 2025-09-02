(function () {
	window.EmbraceWebSdk.initSDK({
		appID: 'v9bby',
		appVersion: chrome.runtime.getManifest().version,
	});

	let apiConnector = new ApiConnector();
	let utils = new Utils(apiConnector);

	// Paths that do not end with a slash are invalid (AGIP page loads but incorrectly, e.g. captcha or fields do not appear)
	const PAGE_HANDLERS = {
		"/BajaPat/": () => BajaPatPage(utils),
		"/ConsultaPat/": () => ConsultaPatPage(utils),
		"/ConsultaABL/": () => ConsultaABLPage(utils),
		"/impInmobiliario/": () => ConsultaImpuestoInmobiliarioPage(utils),
		"/vir/": () => ConsultaVIRPage(utils),
		"/ConsultaPub/": () => ConsultaPubPage(utils),
	};

	let handler = PAGE_HANDLERS[window.location.pathname];

	handler && handler().catch(e => {
		window.EmbraceWebSdk.log.logException(e, {handled:true, attributes: {page: window.location.pathname}});
		console.error("Error when handling page " + window.location.href, e);
		return apiConnector.logMessage("Handle page " + window.location.pathname, true, utils.stringifyError(e));
	});

})();
