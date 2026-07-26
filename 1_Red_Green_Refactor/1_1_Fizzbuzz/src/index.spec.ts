import { FizzBuzz } from './fizzbuzz';
describe("fizzbuzz", () => {
    let fizzbuzz: FizzBuzz
    beforeEach(() => {
        fizzbuzz = new FizzBuzz();
    })
it('should return "Fizz" when passing multiple of 3', () => {
    expect(fizzbuzz.calculate(3)).toBe("Fizz")
})
it('should return "Buzz" when passing multiple of 5', () => {
    expect(fizzbuzz.calculate(5)).toBe("Buzz")

})
it('should return "FizzBuzz" when passing multiple of 15', () => {
    expect(fizzbuzz.calculate(15)).toBe("FizzBuzz")

})
it('should return "Fizz" when passing multiple of 9', () => {
    expect(fizzbuzz.calculate(15)).toBe("Fizz")

})

});
