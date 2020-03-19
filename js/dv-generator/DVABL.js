let DVABL = function () {
	let multipliers = [
		7,
		2,
		3,
		4,
		5,
		6,
		7
	];

	let getDV = function (partida) {
		partida = partida.toString().toUpperCase().replace(" ", "").replace("-", "");
		if (partida.length === 6) partida = "0" + partida;
		if (partida.length !== 7) return NaN;

		let sum = 0;
		for (let i = 0; i < 7; i++) {
			sum += (parseInt(partida[i]) * multipliers[i]);
		}

		let dv = sum % 11;

		let dvStr;
		if (dv === 10) {
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
