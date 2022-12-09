const prompt = require('prompt-sync')({sigint: true});
var maximum = start();
var trycout = 0;

var numberToGuess = Math.floor(Math.random() * maximum) + 1;
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
    let guess = prompt(`Guess a number from 1 to ${maximum}: `);
    guess = Number(guess);// Convert the string input to a number

    if (guess === numberToGuess) {
        console.log(`Congrats, you got it!(You got the answer in ${trycout + 1} try)`);
        var conti = prompt(`Do you want to continue?(y/n): `);
        if (conti.startsWith(`Y`) || conti.startsWith(`y`)) {
            var maximum = start();

            trycout = 0;
            numberToGuess = Math.floor(Math.random() * maximum) + 1;
            foundCorrectNumber = false;
        } else if (conti.startsWith(`N`) || conti.startsWith(`n`)) {
            foundCorrectNumber = true;
        } else {
            foundCorrectNumber = true;
        }
        //console.log('To exit press Ctrl+c');
        //foundCorrectNumber = true;
    } else {
        trycout = trycout + 1;
        if (guess > numberToGuess) {
            Hint = `Lower`
        } else if (guess < numberToGuess) {
            Hint = `Higher`
        }
        console.log(`Sorry, guess again!(Hint:The number is ${Hint})`);
    }
}
function start() {
    const max = prompt(`Input maximum number to guess: `);
    return max;
}