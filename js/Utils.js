let Utils = function (apiConnector) {

	const EXTENSION_TIMES_USED_STORAGE_KEY = "AgipDv.TimesUsed";

	let incrementAndGetTimesUsed = function () {
		let timesUsed = JSON.parse(localStorage.getItem(EXTENSION_TIMES_USED_STORAGE_KEY)) || 0;
		timesUsed++;
		localStorage.setItem(EXTENSION_TIMES_USED_STORAGE_KEY, JSON.stringify(timesUsed));
		return timesUsed;
	};

	let trackGeneratedDv = function (key, dv, additionalData) {
		let timesUsed = incrementAndGetTimesUsed();

		window.EmbraceWebSdk.log.message("Generated DV", 'info', {
			attributes: {
				path: window.location.pathname,
				timesUsed: timesUsed,
				key: key,
				dv: dv,
				additionalData: additionalData
			}
		});

		let message = `[Path:${window.location.pathname}] [TimesUsed:${timesUsed}] [${key}-${dv}]`;
		if (additionalData) {
			message += " - " + additionalData;
		}
		return apiConnector.logMessage("trackGeneratedDv", false, message);
	};

	let stringifyError = function (error) {
		if (error instanceof Error) {
			// Stack can include the message in some errors, but not in all cases.
			let message = error.toString();
			if (error.stack.startsWith(message)) {
				return error.stack;
			} else {
				return message + "\n" + error.stack;
			}
		}
		if (typeof error === "object") {
			return JSON.stringify(error);
		}
		return error;
	};

	return {
		trackGeneratedDv: trackGeneratedDv,
		stringifyError: stringifyError,
	};
};
