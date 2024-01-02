// Map & Filter method in array in typescript 

//^ Map method
//* The map method creates a new array with the results of calling a provided function on every element in the calling array.

// question 1: Double the values of an array using map method

const numbers:number[] = [1,2,3,4,5];

const result:number[] = numbers.map((curVal:number)=> curVal*2)
console.log(result);

// question 2: convet the values to string using map method

const numToString:string[] = numbers.map((curVal)=> curVal.toString())
console.log(numToString);


//^ Filter Method
//* The filter() method creates a new array with all elements that pass the test implemented by the provided function.


// question 1: filter the even numbers from the array
const evenNum:number[] = numbers.filter((curVal:number)=> curVal%2===0)
console.log(evenNum);

// question 2: filter the odd numbers from the array
const numberGreaterThan3:number[] = numbers.filter((curVal:number)=>curVal>3)
console.log(numberGreaterThan3);


