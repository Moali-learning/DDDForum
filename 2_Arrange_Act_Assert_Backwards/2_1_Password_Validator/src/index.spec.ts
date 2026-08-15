
import PasswordValidator from "./index"
describe('password validator', () => {

  it('should return false when passing "mom" ', () => {

    const resultObject = PasswordValidator.validate("mom")

    expect(resultObject.result).toBeFalsy();
    expect(resultObject.errors![0].message).toContain("5 - 15");
    expect(resultObject.errors![1].message).toContain("at least one digit");
    expect(resultObject.errors![2].message).toContain("at least one capital letter");

  })
  it('should return true with valid password', () => {
    const resultObject = PasswordValidator.validate("Mom12345")
      expect(resultObject.result).toBeTruthy();
      expect(resultObject.errors).toBeNull();
  })
  it.each(["Mommommom", "maxwellTheBe"])('should return false when missing a digit', (test: string) => {
    const resultObject = PasswordValidator.validate(test)
     expect(resultObject.result).toBeFalsy();
     expect(resultObject.errors?.length).toEqual(1);
     expect(resultObject.errors?.[0].type).toEqual("Missing Digit")
  })
  it.each(["nocap2", "maxwell1_c"])('should return false when missing capitalization', (test: string) => {
    const resultObject = PasswordValidator.validate(test)
     expect(resultObject.result).toBeFalsy();
     expect(resultObject.errors?.length).toEqual(1);
     expect(resultObject.errors?.[0].type).toEqual("Missing Capitalization");
  })
  it.each(["This is more than 15 character", "thePhysical1234567"])('should return false when passing more than 15 character password', (test: string) => {
    const resultObject = PasswordValidator.validate(test);
    expect(resultObject.result).toBeFalsy();
    expect(resultObject.errors?.length).toEqual(1);
    expect(resultObject.errors?.[0].type).toEqual("Invalid Range")
  })

})



