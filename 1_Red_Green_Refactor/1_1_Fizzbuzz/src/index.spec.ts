import { FizzBuzz } from './fizzbuzz';
describe("fizzbuzz", () => {
it('should return "Fizz" when passing multiple of 3', () => {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.calculate(3)).toBe("Fizz")
})

});
