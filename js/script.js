// Single Line Comment

/*
Multi-line
comment 
*/

console.log("My name is Adam");
console.log("My favorite food is pizza");

// External (already used in internal, can't be decalred twice!)
/* let pageElement = document.getElementById('my-id');
pageElement.innerHTML = "Hello Everyone!"; */

function getConfirmation(param) {
    var response=confirm(param);
    var disp = `response ${response? 'OK':'Cancel'}  was clicked!`;
    console.log(disp);
}

// Solution for Daily-Challenge Day 2
let myString = "Supercalifragilisticexpialidocious";
let anyNumber = 15;
let anyBigInt = 5287528379513984145783528397n;
console.log("myString.length = ", myString.length);

console.log('anyNumber = ', anyNumber, `this is a ${typeof(anyNumber)}`);
console.log('anyBigInt = ', anyBigInt, `this is a ${typeof(anyanyBigInt)}`);
console.log(`anyBigInt =  ${anyBigInt} this is a ${typeof(anyBigInt)}`);