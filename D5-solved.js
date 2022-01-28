
/* EXERCISE 1
Write a function called "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
function area(l1, l2) {
  return l1 * l2;
}
const areaOfRectangle = area(200, 45);
console.log(areaOfRectangle);

/* EXERCISE 2
Write a function "crazySum" which receives two integers as parameters. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(value1, value2) {
  if (value1 === value2) {
    return (value1 + value2) * 3;
  } 
  else {
    return value1 + value2;
  }
}
console.log(crazySum(44, 6));

/* EXERCISE 3
Write a function called "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = (number) =>
number > 19 ? Math.abs(number - 19) * 3 : Math.abs(number - 19);
console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accepts an integer parameter n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = (n) => ((n > 20 && n <= 100) || n === 400 ? true : false);
console.log(boundary(450));

/* EXERCISE 5
Write a function "strivify" which accepts a string as a parameter
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = (string) => (string.firstWordIs("Strive") ? string : string + "Strive");
console.log(strivify("Strivers"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number as a paramater and checks if it is a multiple of 3 or a multiple of 7.
HINT: Modulus Operator
*/

const check3and7 = (n) =>
n >= 0 && (n % 3 === 0 || n % 7 === 0) ? true : false;
console.log(check3and7(35));

