'use strict';

const ResultFunction = (variable, value) => variable.innerText = value;

/*----------------------Завдання 1----------------------*/

const cubeValue = document.getElementById('cubeValue');
const cubeResult = document.getElementById('cubeResult');

const cubeNumbers = cubeValue => Math.pow(cubeValue, 3);

const checkCubeValue = /\d/;

cubeValue.addEventListener('input', () => {
    if (checkCubeValue.test(cubeValue.value) === false) {
        ResultFunction(cubeResult, 'Помилка! Введіть коректне число');
    } else if (checkCubeValue.test(cubeValue.value) === true) {
        ResultFunction(cubeResult, `Куб числа ${cubeValue.value} = ${cubeResult.innerText = cubeNumbers(cubeValue.value)}`);
    }
});


/*----------------------Завдання 2----------------------*/

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const thirdNumber = document.getElementById('thirdNumber');
const threeNumberResult = document.getElementById('threeNumberResult');
const threeNumberButton = document.getElementById('threeNumberButton');

const threeNumberAddDiv = (first, second, third) => {
    if (first === '' || second === '' || third === '') {
        ResultFunction(threeNumberResult, 'Помилка! Введіть коректні числа');
    } else {
        ResultFunction(threeNumberResult, `Результат: ${(parseFloat(first) + parseFloat(second)) / parseFloat(third)}`);
    }
}

threeNumberButton.addEventListener('click', function () {
    threeNumberAddDiv(firstNumber.value, secondNumber.value, thirdNumber.value);
});

/*----------------------Завдання 3----------------------*/

const dayNumberValue = document.getElementById('dayNumberValue');
const dayNumberButton = document.getElementById('dayNumberButton');
const dayStringResult = document.getElementById('dayStringResult');

const dayNumberToString = number => {
    switch (parseInt(number)) {
        case 1:
            ResultFunction(dayStringResult, 'понеділок');
            break;
        case 2:
            ResultFunction(dayStringResult, 'вівторок');
            break;
        case 3:
            ResultFunction(dayStringResult, 'середа');
            break;
        case 4:
            ResultFunction(dayStringResult, 'четвер');
            break;
        case 5:
            ResultFunction(dayStringResult, 'п\'ятниця');
            break;
        case 6:
            ResultFunction(dayStringResult, 'субота');
            break;
        case 7:
            ResultFunction(dayStringResult, 'неділя');
            break;
        default:
            ResultFunction(dayStringResult, 'Помилка! Введіть коректне число');
            break;

    }
}

dayNumberButton.addEventListener('click', function () {
    dayNumberToString(dayNumberValue.value);
});

/*----------------------Завдання 4----------------------*/

const factorialValue = document.getElementById('factorialValue');
const factorialButton = document.getElementById('factorialButton');
const factorialResult = document.getElementById('factorialResult');

const factorial = value => {
    if (value > 0) {
        return value * factorial(value - 1);
    } else {
        return 1;
    }
}

factorialButton.addEventListener('click', function () {
    if (parseInt(factorialValue.value) < 0 || factorialValue.value === '') {
        ResultFunction(factorialResult, 'Помилка! Введіть коректне число');
    } else {
        ResultFunction(factorialResult, `Результат: ${factorial(parseInt(factorialValue.value))}`);
    }

});

/*----------------------Завдання 5----------------------*/

const time = document.getElementById('timeConverter');
const timeConverterButton = document.getElementById('timeConverterButton');
const timeConverterResult = document.getElementById('timeConverterResult');

const timeConverter = time => {

    let [hours, minute, seconds] = time.split(':');

    (seconds === undefined) ? seconds = 0: seconds;

    return ((parseInt(hours * 3600)) + parseInt(minute * 60) + parseInt(seconds));
}

timeConverterButton.addEventListener('click', function () {
    ResultFunction(timeConverterResult, `Результат: ${timeConverter(time.value)}c.`);
});

/*----------------------Завдання 6----------------------*/

const second = document.getElementById('secondConverter');
const secondConverterButton = document.getElementById('secondConverterButton');
const secondConverterResult = document.getElementById('secondConverterResult');

const checkTime = i => {
    return (i < 10) ? '0' + i : i;
}

const secondConverter = second => {
    let hours = Math.floor(second / 60 / 60);
    let minute = Math.floor(second / 60) - (hours * 60);
    let seconds = second % 60;

    if (hours <= 23 && minute <= 59 && seconds <= 59) {
        return [checkTime(hours), checkTime(minute), checkTime(seconds)].join(':');
    } else {
        return 'Більше одного дня!';
    }

}

secondConverterButton.addEventListener('click', function () {
    if (parseInt(second.value) < 0 || second.value === '') {
        ResultFunction(secondConverterResult, 'Помилка! Введіть коректне число');
    } else {
        ResultFunction(secondConverterResult, `Результат: ${secondConverter(parseInt(second.value))}`);
    }
});