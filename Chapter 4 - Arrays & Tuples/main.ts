// three ways to declare array

const arr = [1,2,3,4,5]

const arr2:number[] = [1,2,3,4,5]

const arr3:Array<number> = [1,2,3,4,5]  // preferable way

const fruits:string[] = ["apple","mango","banana"]

// for loop : iterates over index
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// for of loop : iterates over values
for(let fruit of fruits){
    console.log(fruit);
}


// for each loop
fruits.forEach((fruit:string)=>console.log(fruit));

// Unions in Array

const arr4:Array<number|string> = [1,2,3,4,5,"hello"]

// Tuples

const t:[number,string] = [1,"hello"]