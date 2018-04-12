var DVABL = function() {
	var multipliers = [
		7,
		2,
		3,
		4,
		5,
		6,
		7
	];

	var getDV = function(partida) {
		var i;

		partida = partida.toString().toUpperCase().replace(" ", "").replace("-", "");
		if (partida.length != 7) return NaN;

		var sum = 0;
		for (i = 0; i < 7; i++) {
			sum += (parseInt(partida[i]) * multipliers[i]);
		}

		var dv = sum % 11;

		var dvStr;
		if (dv == 10) {
			dvStr = "01";
		} else if (dv < 10) {
			dvStr = "0" + dv.toString();
		} else {
			dvStr = dv.toString();
		}

		return dvStr;
	};

	return {
		getDV: getDV
	};
};
