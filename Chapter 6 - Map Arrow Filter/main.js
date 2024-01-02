// Map & Filter method in array in typescript 
//^ Map method
//* The map method creates a new array with the results of calling a provided function on every element in the calling array.
// question 1: Double the values of an array using map method
var numbers = [1, 2, 3, 4, 5];
var result = numbers.map(function (curVal) { return curVal * 2; });
console.log(result);
// question 2: convet the values to string using map method
var numToString = numbers.map(function (curVal) { return curVal.toString(); });
console.log(numToString);
//^ Filter Method
//* The filter() method creates a new array with all elements that pass the test implemented by the provided function.
var evenNum = numbers.filter(function (curVal) { return curVal % 2 === 0; });
console.log(evenNum);
var numberGreaterThan3 = numbers.filter(function (curVal) { return curVal > 3; });
console.log(numberGreaterThan3);
