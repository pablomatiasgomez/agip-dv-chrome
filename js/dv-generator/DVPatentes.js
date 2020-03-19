let DVPatentes = function () {
	let numberByLetter = {
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

	let getDV = function (patente) {
		patente = patente.toUpperCase().replace(" ", "").replace("-", "");

		let numbers = patente;
		Object.keys(numberByLetter).forEach(letter => {
			numbers = numbers.replace(new RegExp(letter, 'g'), numberByLetter[letter]);
		});

		let num1 = 0;
		let num2 = 0;

		for (let i = 0; i < numbers.length; i++) {
			if (i % 2 === 0) {
				num1 += parseInt(numbers.charAt(i));
			} else {
				num2 += parseInt(numbers.charAt(i));
			}
		}

		num1 = reduceNumber(num1);
		num2 = reduceNumber(num2);

		return num1.toString() + num2.toString();
	};

	/**
	 * Given a number with many digits, sums all of them, recursively until the number has only 1 digit.
	 */
	let reduceNumber = function (n) {
		while (!isNaN(n) && n.toString().length > 1) {
			n = n.toString().split("").map(num => parseInt(num)).reduce((a, b) => a + b, 0);
		}
		return n;
	};

	return {
		getDV: getDV
	};
};
