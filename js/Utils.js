var Utils = function() {

	var TRACKING_URL = "http://www.pablomatiasgomez.com.ar/agipdv/track.php";

	var RECOMMEND_ALERT_SHOWN_STORAGE_KEY = "agipdv.recommendAlertAlreadyShown";
	var EXTENSION_TIMES_USED_STORAGE_KEY = "agipdv.timesUsed";
	var MIN_TIMES_USED_TO_SHOW_RECOMMEND_ALERT = 10;
	var timesUsed;

	var incrementAndGetTimesUsed = function() {
		var timesUsed = JSON.parse(localStorage.getItem(EXTENSION_TIMES_USED_STORAGE_KEY)) || 0;
		timesUsed++;
		localStorage.setItem(EXTENSION_TIMES_USED_STORAGE_KEY, JSON.stringify(timesUsed));
		console.log(timesUsed);
		return timesUsed;
	};
	timesUsed = incrementAndGetTimesUsed();

	var trackGeneratedDv = function(key, dv, additionalData) {
		var data = key + "-" + dv;
		if (additionalData) {
			data += " - " + additionalData;
		}
		postData(location.href, data);
	};

	var postData = function(url, data) {
		var getQueryStringKeyValue = function(key, value) {
			return key + "=" + encodeURIComponent(value) + "&";
		};
	
		var body = "";
		body += getQueryStringKeyValue("url", url);
		body += getQueryStringKeyValue("data", data);

		chrome.runtime.sendMessage({
			method: 'POST',
			action: 'xhttp',
			url: TRACKING_URL,
			data: body
		}, function(responseText) {	});
	};

	var recommendAlertAlreadyShown = function() {
		return JSON.parse(localStorage.getItem(RECOMMEND_ALERT_SHOWN_STORAGE_KEY)) === true;
	};

	var shouldShowRecommendAlert = function() {
		return timesUsed >= MIN_TIMES_USED_TO_SHOW_RECOMMEND_ALERT && !recommendAlertAlreadyShown();
	};

	var showRecommendAlert = function() {
		localStorage.setItem(RECOMMEND_ALERT_SHOWN_STORAGE_KEY, JSON.stringify(true));
		postData(location.href, "recommendAlertShown");
		if (confirm('Hola!\n\nEspero que disfrutes la extensión que autocompleta el digito verificador!\n\n¿Te gustaría dejarme una recomendación en el store?')) {
			window.open('https://chrome.google.com/webstore/detail/agip-digito-verificador/mcbihanjokabdgcbickiihbcehjbefkp/reviews', '_blank');
			postData(location.href, "recommendAlertOpen=true");
		} else {
			postData(location.href, "recommendAlertOpen=false");
		}
	};

	return {
		trackGeneratedDv: trackGeneratedDv,

		shouldShowRecommendAlert: shouldShowRecommendAlert,
		showRecommendAlert: showRecommendAlert
	};
};
