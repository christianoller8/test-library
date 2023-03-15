"use strict";
exports.__esModule = true;
var calculator_christian_1 = require("calculator-christian");
var calculator = new calculator_christian_1.Calculator();
// tslint:disable no-var-requires
var input = require('prompt-sync')();
var userOption;
var finished = false;
var number1;
var number2;
do {
    console.log("Welcome to calculator library, choose an opetarion!:");
    console.log("1. Add numbers");
    console.log("2. Subtract numbers");
    console.log("3. Multiply numbers");
    console.log("4. Divide numbers");
    console.log("0. Exit");
    userOption = input();
    switch (Number(userOption)) {
        case 1:
            // tslint:disable-next-line:no-console
            console.log("Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.add(Number(number1), Number(number2)));
            break;
        case 2:
            // tslint:disable-next-line:no-console
            console.log("Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.rest(Number(number1), Number(number2)));
            break;
        case 3:
            // tslint:disable-next-line:no-console
            console.log("Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.mult(Number(number1), Number(number2)));
            break;
        case 4:
            // tslint:disable-next-line:no-console
            console.log("Introduce two numbers");
            number1 = input();
            number2 = input();
            console.log('The result is: ', calculator.div(Number(number1), Number(number2)));
            break;
        case 0:
            // tslint:disable-next-line:no-console
            console.log("Bye!");
            finished = true;
            break;
        default:
            // tslint:disable-next-line:no-console
            console.log("...");
            finished = true;
            break;
    }
} while (!finished);
