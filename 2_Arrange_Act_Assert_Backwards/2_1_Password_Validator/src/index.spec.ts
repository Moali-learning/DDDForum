
import PasswordValidator from "./index"
describe('password validator', () => {

  test('should return false when passing invalid Password', () => {

    const resultObject = PasswordValidator.validate("mom")
    // assert
    expect(resultObject.result).toBeFalsy();

  })
})


