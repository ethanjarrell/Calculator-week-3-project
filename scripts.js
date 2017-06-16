var numbers, display, currentVal, operators, mainArray, i;
currentVal = '';
mainArray = [];

operators = document.getElementsByClassName('operator');
numbers = document.getElementsByClassName('number');
display = document.getElementById('display');
for (i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function(e) {
		currentVal += e.srcElement.value;
		display.textContent = display.textContent + e.srcElement.value;
	});
}
for (i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function(e) {
		mainArray.push(parseFloat(currentVal));
		currentVal = '';
		mainArray.push(e.srcElement.value);
		display.textContent = display.textContent + ' ' + e.srcElement.value + ' ';
	});
}
document.getElementById('clear').addEventListener('click', function(e) {
	currentVal = '';
	mainArray = [];
	display.textContent = '';
});
document.getElementById('equals').addEventListener('click', function(e) {
	var rVal;
	mainArray.push(parseFloat(currentVal));
	rVal = solve();
	display.textContent = rVal;
	mainArray = [];
	currentVal = rVal + '';
});
//==========Function that will solve the math problems=====================//
function solve() {
	var a = 2;
	var loopEnd = false;
	while (!loopEnd) {
		mainArray[a] = operate(mainArray[a - 2], mainArray[a], mainArray[a - 1])
		if (a + 1 >= mainArray.length) {
			loopEnd = true;
		} else {
			loopEnd = false;
		}
		a += 2;
	}
	return mainArray[mainArray.length - 1];
}
//==========Creating an Array to use in functions below======//
var clickedButtons = [];

function getValue(e) {
	var buttonValue = parseInt(e.target.textContent);
	clickedButtons.push(buttonValue);
}

function numberTrack() {
	var buttonValues = document.getElementsByClassName('button');
	for (i = 0; i < buttonValues.length; i++) {
		buttonValue[i].onclick = getValue;
	}
}

//======Operation Functions========//
function operate(n1, n2, operand) {
	if (operand === "*") {
		return n1 * n2;
	} else if (operand === "/") {
		return n1 / n2;
	} else if (operand === "+") {
		return n1 + n2;
	} else if (operand === "-") {
		return n1 - n2;
	}
}
