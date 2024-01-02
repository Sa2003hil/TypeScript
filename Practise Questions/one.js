var CalcAverage = [90, 92, 94, 96, 98];
function calAver(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
var averageResult = calAver(CalcAverage);
console.log(averageResult);
