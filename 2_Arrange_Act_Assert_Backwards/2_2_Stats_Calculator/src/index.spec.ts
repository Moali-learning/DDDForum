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

    it("should know that [] returns the correct object with all fields equals to zero", ()=> {
        // Arrange
        let input: number[] = []
        //Act
        let output = StatsCalculator.calculate(input);
        //Assert
        expect(output.minValue).toEqual(0);
        expect(output.maxValue).toEqual(0);
        expect(output.numOfElement).toEqual(0);
        expect(output.avg).toEqual(0);
    })

    it('should know that [2, 4, 21, -8, 53, 40] returns {  "minValue": -8,"maxValue": 53,"numOfElement": 6,"avg": 18.666666666667}', ()=> {
        // Arrange
        let input: number[] = [2, 4, 21, -8, 53, 40]
        //Act
        let output = StatsCalculator.calculate(input);
        //Assert
        expect(output.minValue).toEqual(-8);
        expect(output.maxValue).toEqual(53);
        expect(output.numOfElement).toEqual(6);
        expect(output.avg).toEqual(18.666666666666668);
    })

})