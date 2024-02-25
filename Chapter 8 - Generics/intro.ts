//  Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer

// type Input =  string | number;
// function getFirstElement(arr: string | number[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, 3 ]);

//  generics are used to create reusable components.

function identity<T> (arg:T[]):T{
    return arg[0];
}

interface User1{
    name :string;
}

const output1 = identity<User1>([{name:"sahil"}]); 
let output2 = identity<number>([1,3]);

console.log(output1);

