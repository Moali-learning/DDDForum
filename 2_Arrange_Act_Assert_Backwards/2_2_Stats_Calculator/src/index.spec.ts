import StatsCalculator from "./index"

describe('stats calculator', () => {

    it("should know that [2,5,6,7] returns the correct object", ()=> {
        // Arrange
        let input = [2,5,6,7]
        //Act
        let output = StatsCalculator.calculate(input);
        //Assert
        expect(output.minValue).toEqual(2);
        expect(output.maxValue).toEqual(7);
        expect(output.numOfElement).toEqual(4);
        expect(output.avg).toEqual(5);

    })

})