var DVPatentes = function() {
	var numberByLetter = {
		A: "14",
		B: "01",
		C: "00",
		D: "16",
		E: "05",
		F: "20",
		G: "19",
		H: "09",
		I: "24",
		J: "07",
		K: "21",
		L: "08",
		M: "04",
		N: "13",
		O: "25",
		P: "22",
		Q: "18",
		R: "10",
		S: "02",
		T: "06",
		U: "12",
		V: "23",
		W: "11",
		X: "03",
		Y: "15",
		Z: "17"
	};

	var getDV = function(patente) {
		var reduceNumber = function(n) {
			while (!isNaN(n) && n.toString().length > 1){
				n = n.toString().split("").reduce(function(a, b) { return parseInt(a) + parseInt(b); });
			}
			return n;
		};

		var i;

		patente = patente.toUpperCase().replace(" ", "").replace("-", "");

		var numeros = patente;
		Object.keys(numberByLetter).forEach(function(letter) {
			numeros = numeros.replace(new RegExp(letter, 'g'), numberByLetter[letter]);
		});

		var num1 = 0;
		var num2 = 0;

		for (i = 0; i < numeros.length; i++) {
			if (i % 2 == 0) {
				num1 += parseInt(numeros.charAt(i));
			} else {
				num2 += parseInt(numeros.charAt(i));
			}
		}

		num1 = reduceNumber(num1);
		num2 = reduceNumber(num2);

		return num1.toString() + num2.toString();
	};

	return {
		getDV: getDV
	};
};