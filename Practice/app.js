//convert functions to arrow functions
//function example
function sum(a, b) {
  return a + b;
}

//re written as arrow function
//remove function keyword
//remove the return keyword, and curly braces

let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

//re written as arrow functions
let isPositive2 = (number) => number >= 0;
//single parameter functions can remove the parenthesis around the parameter

function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

//still have to have

document.addEventListener("click", function () {
  console.log("Click");
});

document.addEventListener("click", () => console.log("Click"));

//Notes regarding THIS and scope

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person("Nick");
person.printNameArrow();
person.printNameFunction();
//This will only print "Nick", and the reason is scope.  Arrow functions

//non arrow functions define "this" where the function is CALLED, so it it out of scope and will print blank , since the name function is called on line 57 it is blank, because this is undefined outside of the scope since its a NON arrow function
//when you use an arrow function this is NOT redefined `
