console.log("JavaScript Functions Exercises \n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  
  let negativeCheck = 1;
//BONUS check if negative logic 
  if (count < 0) {
    negativeCheck = -1;
  }  
  
  for (let num = 1; num <= count * negativeCheck; num++) {
    if (num % 2 == 1) {
      console.log(num);
    }
  }
}

printOdds(-30);
printOdds(30);
printOdds(20);
printOdds(-100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = -1, name = "Guest ") {
  if (age < 0) {
    return null;
  }
  let aboveSixteen = name + " You can drive!";
  let belowSixteen = "Sorry, " + name +" but you need to wait until you're 16.";

  if (age < 16){
  console.log(belowSixteen);
  }
  else
  console.log(aboveSixteen);
}

checkAge(14);
checkAge(-11);
checkAge(16, "Nick");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const determinePosition = (x, y) => {
  switch (true) {
    case x > 0 && y > 0:
      // Quadrant 1
      return "Q1";
    case x < 0 && y > 0:
      // Quadrant 2
      return "Q2";
    case x < 0 && y < 0:
      // Quadrant 3
      return "Q3";
    case x > 0 && y < 0:
      // Quadrant 4
      return "Q4";
    case x == 0 && y != 0:
      // x axis
      return "x axis";
    case x != 0 && y == 0:
      // y axis
      return "y axis";
    default:
      return "origin";
  }
};

let position = determinePosition(7, 172);
console.log(position); 

const isValidTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
  let isValid = isValidTriangle(a, b, c); // return true of false

  if (isValid) {
    if (a == b && b == c) {
      // all sides the same
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      // two sides the same
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle`;
  }
};

console.log(determineTriangle(1, 1, 2)); 
console.log(determineTriangle(2, 2, 1)); 
console.log(determineTriangle(4, 4, 4)); 
console.log(determineTriangle(3, 5, 9)); 