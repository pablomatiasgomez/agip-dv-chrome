var Utils = function() {

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

	return {
		trackGetCodePatente: trackGetCodePatente,
	};
};
