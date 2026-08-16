import StatsCalculator from "./index"

describe('stats calculator', () => {

    it.each([
        [[2,5,6,7], 2, 7, 4,5],
        [[],0,0,0,0],
        [[2, 4, 21, -8, 53, 40], -8, 53, 6, 18.666666666666668]
    ])("should know that %o returns {minValue: %d, maxValue: %d, numOfElement: %d, avg: %d}",
        (input: number[], minValue: number, maxValue: number, numOfElement: number, avg: number)=> {
        //Act
        let output = StatsCalculator.calculate(input);
        //Assert
        expect(output.minValue).toEqual(minValue);
        expect(output.maxValue).toEqual(maxValue);
        expect(output.numOfElement).toEqual(numOfElement);
        expect(output.avg).toEqual(avg);
    })
})