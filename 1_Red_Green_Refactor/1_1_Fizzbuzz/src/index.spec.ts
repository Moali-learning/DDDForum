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
it('should return "FizzBuzz" when passing multiple of both 3 and 5', () => {
    expect(fizzbuzz.calculate(15)).toBe("FizzBuzz")

})
it('should return "Fizz" when passing multiple of 3', () => {
    expect(fizzbuzz.calculate(9)).toBe("Fizz")

})
it('should return "43" when passing invalid multiple ', () => {
    expect(fizzbuzz.calculate(43)).toBe("43")

})
it('should return "Fizz" when passing multiple 3', () => {
    expect(fizzbuzz.calculate(42)).toBe("Fizz")

})
it('should return "FizzBuzzz" when passing multiple both 3 and 5 ', () => {
    expect(fizzbuzz.calculate(45)).toBe("FizzBuzz")
})
it('should return "" when passing invalid multiple ', () => {
    expect(fizzbuzz.calculate(102)).toBe("")
})

});
