
import PasswordValidator from "./index"
describe('password validator', () => {

  test('should return false when passing invalid Password', () => {

    const resultObject = PasswordValidator.validate("mom")
    // assert
    expect(resultObject.result).toBeFalsy();
    expect(resultObject.errors![0].message).toContain("5 - 15");

  })
})


