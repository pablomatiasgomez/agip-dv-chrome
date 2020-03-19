let Utils = function (apiConnector) {

	const EXTENSION_TIMES_USED_STORAGE_KEY = "AgipDv.TimesUsed";
	const DONATE_ALERT_SHOWN_STORAGE_KEY = "AgipDv.DonateAlertShown";
	const MIN_TIMES_USED_TO_SHOW_DONATE_ALERT = 10;

	let incrementAndGetTimesUsed = function () {
		let timesUsed = JSON.parse(localStorage.getItem(EXTENSION_TIMES_USED_STORAGE_KEY)) || 0;
		timesUsed++;
		localStorage.setItem(EXTENSION_TIMES_USED_STORAGE_KEY, JSON.stringify(timesUsed));
		return timesUsed;
	};

	let donateAlertAlreadyShown = function () {
		return JSON.parse(localStorage.getItem(DONATE_ALERT_SHOWN_STORAGE_KEY)) === true;
	};

	let setDonateAlertShown = function () {
		localStorage.setItem(DONATE_ALERT_SHOWN_STORAGE_KEY, JSON.stringify(true));
	};

	/**
	 * An alert will be shown only if:
	 * - the times this method was called is more than {@link MIN_TIMES_USED_TO_SHOW_DONATE_ALERT}
	 * - the alert was not shown before.
	 */
	let showDonateAlert = function () {
		let timesUsed = incrementAndGetTimesUsed();
		if (timesUsed < MIN_TIMES_USED_TO_SHOW_DONATE_ALERT || donateAlertAlreadyShown()) return;

		setDonateAlertShown();
		apiConnector.logMessage("donateAlertShown", false, JSON.stringify({url: window.location.href}));
		if (confirm(`Hola!\n\nEspero que disfrutes la extensión que autocompleta el digito verificador!\n\n¿Te gustaría dejarme una donación? No hay minimo!`)) {
			window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7Z8VU5GP8BLY2&source=url', '_blank');
			return apiConnector.logMessage("donateAlertExit", false, JSON.stringify({opened: true}));
		} else {
			return apiConnector.logMessage("donateAlertExit", false, JSON.stringify({opened: false}));
		}
	};

	let trackGeneratedDv = function (key, dv, additionalData) {
		let data = key + "-" + dv;
		if (additionalData) {
			data += " - " + additionalData;
		}
		return apiConnector.logMessage("trackGeneratedDv", false, data);
	};

	let stringifyError = function (error) {
		if (error instanceof Error) return error.toString() + "\n" + error.stack;
		if (typeof error === 'object') return JSON.stringify(error);
		return error;
	};

	return {
		showDonateAlert: showDonateAlert,
		trackGeneratedDv: trackGeneratedDv,
		stringifyError: stringifyError,
	};
};
