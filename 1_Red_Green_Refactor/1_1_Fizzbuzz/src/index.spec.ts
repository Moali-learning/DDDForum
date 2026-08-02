import { FizzBuzz } from './fizzbuzz';
describe("fizzbuzz", () => {
    let fizzbuzz: FizzBuzz
    beforeEach(() => {
        fizzbuzz = new FizzBuzz();
    })
it.each([3, 9,42])('should return "Fizz" when passing multiple of 3', (n) => {
    expect(fizzbuzz.calculate(n)).toBe("Fizz")
})
it('should return "Buzz" when passing multiple of 5', () => {
    expect(fizzbuzz.calculate(5)).toBe("Buzz")

})
it.each([15, 45])('should return "FizzBuzz" when passing multiple of both 3 and 5', (n) => {
    expect(fizzbuzz.calculate(n)).toBe("FizzBuzz")

})
it('should return input values when passing invalid multiple ', () => {
    expect(fizzbuzz.calculate(43)).toBe("43")

})
it.each([102,-12])('should return "" when passing out of bounds values', () => {
    expect(fizzbuzz.calculate(102)).toBe("")
})

});
