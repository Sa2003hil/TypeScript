const CalcAverage:Array<number> = [90,92,94,96,98] 

function calAver(arr:number[]){
    let sum:number=0;
    for(let i  =0;i<arr.length;i++){
        sum += arr[i];
    }

    return sum/arr.length;
}


const averageResult = calAver(CalcAverage);
console.log(averageResult);