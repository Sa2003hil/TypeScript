
interface User {
    firstName: string,
    lastName:string,
    email?:string,
    age:number
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
function greetUser(user:User){
    console.log("hello "+user.firstName);
}


function checkUser(user:User){
    if(isLegal(user)){
        greetUser(user);
    }
    else{
        console.log("you are not allowded !");
    }
}

let user1:User = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    age: 20
}

checkUser(user1)