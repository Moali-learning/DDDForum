
import PasswordValidator from "./index"
describe('password validator', () => {

  it('should return false when passing "mom" ', () => {

    const resultObject = PasswordValidator.validate("mom")
    // assert
    expect(resultObject.result).toBeFalsy();
    expect(resultObject.errors![0].message).toContain("5 - 15");

  })
  it('should return true with valid password', () => {
    const resultObject = PasswordValidator.validate("Mom12345")
      expect(resultObject.result).toBeTruthy();
      expect(resultObject.errors).toBeNull();
  })
  it('should return false when passing "Mommommom"', () => {
    const resultObject = PasswordValidator.validate("Mommommom")
     expect(resultObject.result).toBeFalsy();
     expect(resultObject.errors?.[0].type).toEqual("Missing Digit")
  })
})



