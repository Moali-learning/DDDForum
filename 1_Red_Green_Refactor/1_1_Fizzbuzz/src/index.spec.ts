import { FizzBuzz } from './fizzbuzz';
describe("fizzbuzz", () => {
it('should return "fizz" when passing multiple of 3', () => {
    const fizzbuzz = new FizzBuzz();
    expect(typeof fizzbuzz.calculate(3)).toBe("Fizz")
})

});
