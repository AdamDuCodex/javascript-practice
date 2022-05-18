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

var bigword = "Supercalifragilisticexpialidocious";
console.log(bigword.length);

var myNumber = 15;
console.log(typeof myNumber, myNumber);

var myBigInt = 11234235252413412n;
console.log(typeof myBigInt, myBigInt);