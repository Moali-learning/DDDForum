
describe("fizzbuzz", () => {
it('should return string when we pass a number', () => {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.calculate(1)).toEqual(expect.any(String))
})

});
