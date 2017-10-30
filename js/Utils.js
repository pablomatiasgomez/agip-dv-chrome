var Utils = function() {

	var RECOMMEND_ALERT_SHOWN_LS_KEY = "agipdv.recommendAlertAlreadyShown";

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
		return JSON.parse(localStorage.getItem(RECOMMEND_ALERT_SHOWN_LS_KEY)) === true;
	};

	var showRecommendAlert = function() {
		localStorage.setItem(RECOMMEND_ALERT_SHOWN_LS_KEY, JSON.stringify(true));
		if (confirm('Hola!\n\nEspero que disfrutes la extensión que autocompleta el digito verificador!\n\n¿Te gustaría dejarme una recomendación en el store?')) {
			window.open('https://chrome.google.com/webstore/detail/agip-digito-verificador/mcbihanjokabdgcbickiihbcehjbefkp/reviews', '_blank');
			postData(location.href, "recommendAlertOpen=true");
		} else {
			postData(location.href, "recommendAlertOpen=false");
		}
	};

	return {
		trackGetCodePatente: trackGetCodePatente,

		recommendAlertAlreadyShown: recommendAlertAlreadyShown,
		showRecommendAlert: showRecommendAlert
	};
};
