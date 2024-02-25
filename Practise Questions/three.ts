function runafter1sec(c:()=>void){
    setTimeout(cb,1000);
}

function cb(){
    console.log("Hello");
}