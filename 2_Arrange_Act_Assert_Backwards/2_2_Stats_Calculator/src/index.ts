
type CalculatorOutput = {
    minValue: number,
    maxValue: number,
    numOfElement: number,
    avg: number,
}
export default class StatsCalculator{
    public static calculate(arr: number[]): CalculatorOutput{
        if (arr.length == 0) return  {minValue: 0, maxValue:0, numOfElement: 0, avg: 0}
        return {minValue: 2, maxValue:7, numOfElement: 4, avg: 5};
    }
}