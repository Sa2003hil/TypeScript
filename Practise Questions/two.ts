const names:string[] = ["Alice", "Bob", "Eve","Mallory","Trent","Carol"];

const results:string[] = names.filter((curVal:string)=>curVal.length>4)

console.log(results);