let ApiConnector = function () {

	const CLIENT = `CHROME@${chrome.runtime.getManifest().version}`;
	const BASE_API_URL = "https://www.pablomatiasgomez.com.ar/agipdv/v1";

	let logMessage = function (method, isError, message) {
		return postData(BASE_API_URL + "/log", {
			method: method,
			error: isError,
			message: message
		});
	};

	let postData = function (url, data) {
		return makeRequest({
			url: url,
			method: 'POST',
			headers: {
				"X-Client": CLIENT,
				"Content-type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(data)
		});
	};

	// ---

	let makeRequest = function (options) {
		return new Promise((resolve, reject) => {
			chrome.runtime.sendMessage(options, response => (response && response.errorStr) ? reject(new Error(response.errorStr)) : resolve(response));
		});
	};

	// Public
	return {
		logMessage: logMessage,
	};
};
