
type CalculatorOutput = {
    minValue: number,
    maxValue: number,
    numOfElement: number,
    avg: number,
}
export default class StatsCalculator{
    public static calculate(arr: number[]): CalculatorOutput{
        if (arr.length == 0) return  {minValue: 0, maxValue:0, numOfElement: 0, avg: 0}
        let minValue = arr[0]
        let maxValue = arr[0]
        let sum = 0
        for (let  num of arr){
            if (num < minValue){
                minValue = num
            }
            if (num > maxValue){
                maxValue = num
            }
            sum += num
        }
        console.log(sum)
        const avg = sum / arr.length
        return {minValue: minValue, maxValue: maxValue, numOfElement: arr.length, avg: avg};
    }
}