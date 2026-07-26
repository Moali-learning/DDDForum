import { FizzBuzz } from './fizzbuzz';
describe("fizzbuzz", () => {
it('should return "Fizz" when passing multiple of 3', () => {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.calculate(3)).toBe("Fizz")
})
it('should return "Buzz" when passing multiple of 5', () => {
     const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.calculate(5)).toBe("Buzz")

})
it('should return "FizzBuzz" when passing multiple of 15', () => {
     const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.calculate(15)).toBe("FizzBuzz")

})

});
