interface Person{
    name:string,
    age:number,
    greet(phrase:string):void;
}

class Employee implements  Person {

    name:string;
    age: number;

    constructor(n:string,a:number){
        this.name= n;
        this.age = a;
    }

    greet (phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}


// Famous Interview Question what is the diffrence between interfaces and types ?
// Ans: One of the reason is interfaces can be implemented as classes but types cannot be.