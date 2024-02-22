// storing memory value
var memoryValue = 0; 
// flag to track angle unit (true => degrees, false => radians)
var angleInDegrees = true; 

// logarithm function
function calculateLog() {
    var input = parseFloat(document.getElementById("logExp").value);
    var base = parseFloat(document.getElementById("logBase").value);
    
    if (!isNaN(input) && input > 0 && !isNaN(base) && base > 0 && base !== 1) {
        document.form1.answer.value = Math.log(input) / Math.log(base);
    } else {
        document.form1.answer.value = "Error: Invalid input";
    }
}

// trig functions
function toggleAngleUnit() {
    angleInDegrees = !angleInDegrees; 
    var angleUnitText = document.getElementById("angleUnitText");
    angleUnitText.textContent = angleInDegrees ? " (Deg) " : " (Rad) ";
}

function calculateTan() {
    var input = parseFloat(document.form1.answer.value);
    // convert to radian then applying formula 
    if (angleInDegrees) {
        input = input * Math.PI / 180;
    }
    document.form1.answer.value = Math.tan(input);
}

function calculateCot() {
    var input = parseFloat(document.form1.answer.value);
    if (angleInDegrees) {
        input = input * Math.PI / 180;
    }
    document.form1.answer.value = 1 / Math.tan(input);
}

function calculateCosec() {
    var input = parseFloat(document.form1.answer.value);
    if (angleInDegrees) {
        input = input * Math.PI / 180;
    }
    document.form1.answer.value = 1 / Math.sin(input);
}
function calculateSec() {
    var input = parseFloat(document.form1.answer.value);
    if (angleInDegrees) {
        input = input * Math.PI / 180;
    }
    document.form1.answer.value = 1 / Math.cos(input);
}

function calculateSin() {
    var input = parseFloat(document.form1.answer.value);
    if (angleInDegrees) {
        input = input * Math.PI / 180;
    }
    document.form1.answer.value = Math.sin(input);
}

function calculateCos() {
    var input = parseFloat(document.form1.answer.value);
    if (angleInDegrees) {
        input = input * Math.PI / 180;
    }
    document.form1.answer.value = Math.cos(input);
}


function appendToAnswer(value) {
    document.form1.answer.value += value;
}

// error handling
function calculateResult() {
    var expression = document.form1.answer.value;
    try {
        var result = eval(expression);
        // invalid result
        if (isNaN(result) || !isFinite(result)) {
            document.form1.answer.value = "Error";
        } else {
            document.form1.answer.value = result;
        }
    } catch (error) {
        document.form1.answer.value = "Error";
    }
}

// clear input
function clearInput() {
    document.form1.answer.value = "";
    memoryValue = 0;
}

// memory functions
function memoryStore() {
    memoryValue = parseFloat(document.form1.answer.value); 
}

function memoryRecall() {
    document.form1.answer.value = memoryValue; 
}

function memoryAdd() {
    var currentValue = parseFloat(document.form1.answer.value);
    memoryValue += currentValue; 
}

function memorySubtract() {
    var currentValue = parseFloat(document.form1.answer.value);
    memoryValue -= currentValue; 
}

function clearMemory() {
    memoryValue = 0;
}

// stats functions
function calculateMean() {
    var input = document.form1.answer.value;
    // Convert input string to array of numbers
    var numbers = input.split(',').map(Number); 
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.form1.answer.value = sum / numbers.length;
}

function calculateMedian() {
    var input = document.form1.answer.value;
    var numbers = input.split(',').map(Number); 
    var sortedNumbers = numbers.slice().sort(function(a, b) { return a - b; });
    var mid = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        document.form1.answer.value = (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
    } else {
        document.form1.answer.value = sortedNumbers[mid];
    }
}

function calculateMode() {
    var input = document.form1.answer.value;
    var numbers = input.split(',').map(Number); 
    var modeMap = {};
    var maxCount = 0;
    var modes = [];
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        modeMap[num] = (modeMap[num] || 0) + 1;
        if (modeMap[num] > maxCount) {
            maxCount = modeMap[num];
            modes = [num];
        } else if (modeMap[num] === maxCount) {
            modes.push(num);
        }
    }
    document.form1.answer.value = modes;
}

function calculateStandardDeviation() {
    var input = document.form1.answer.value;
    var numbers = input.split(',').map(Number); 
    
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var mean = sum / numbers.length; 
    
    var sumOfSquaredDifferences = 0;
    for (var i = 0; i < numbers.length; i++) {
        sumOfSquaredDifferences += Math.pow(numbers[i] - mean, 2);
    }
    var variance = sumOfSquaredDifferences / numbers.length;
    document.form1.answer.value = Math.sqrt(variance);
}