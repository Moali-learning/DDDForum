import { FizzBuzz } from './fizzbuzz';
describe("fizzbuzz", () => {
it('should return string when we pass a number', () => {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.calculate(1)).toBe("Fizz")
})

});
