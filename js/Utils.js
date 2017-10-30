var Utils = function() {

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

	var trackGetCodePatente = function(patente) {
		postData(location.href, patente);
	};

	var postData = function(url, patente) {
		var getQueryStringKeyValue = function(key, value) {
			return key + "=" + encodeURIComponent(value) + "&";
		};
	
		var data = "";
		data += getQueryStringKeyValue("url", url);
		data += getQueryStringKeyValue("patente", patente);

		chrome.runtime.sendMessage({
			method: 'POST',
			action: 'xhttp',
			url: 'http://siga.web44.net/github/add.php',
			data: data
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
		trackGetCodePatente: trackGetCodePatente,

		shouldShowRecommendAlert: shouldShowRecommendAlert,
		showRecommendAlert: showRecommendAlert
	};
};
