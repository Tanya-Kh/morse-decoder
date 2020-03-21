const MORSE_TABLE = {
	'.-':     'a',
	'-...':   'b',
	'-.-.':   'c',
	'-..':    'd',
	'.':      'e',
	'..-.':   'f',
	'--.':    'g',
	'....':   'h',
	'..':     'i',
	'.---':   'j',
	'-.-':    'k',
	'.-..':   'l',
	'--':     'm',
	'-.':     'n',
	'---':    'o',
	'.--.':   'p',
	'--.-':   'q',
	'.-.':    'r',
	'...':    's',
	'-':      't',
	'..-':    'u',
	'...-':   'v',
	'.--':    'w',
	'-..-':   'x',
	'-.--':   'y',
	'--..':   'z',
	'.----':  '1',
	'..---':  '2',
	'...--':  '3',
	'....-':  '4',
	'.....':  '5',
	'-....':  '6',
	'--...':  '7',
	'---..':  '8',
	'----.':  '9',
	'-----':  '0',
};

function decode(expr) {
	var arrayExpr = expr.split("**********");
	var wordsArray = [];

	arrayExpr.forEach((el) => {
		el = el.match(/.{1,10}/g);
		var lettersArray = [];
		el.forEach((e) => {
			e = e.replace(/0/g, " ").trimLeft().replace(/ /g, "0").replace(/10/g, ".").replace(/11/g, "-");
			e = MORSE_TABLE[e];
			lettersArray.push(e);
		});
		wordsArray.push(lettersArray.join(""));
	});
	return wordsArray.join(" ");
}

module.exports = {
	decode
}




