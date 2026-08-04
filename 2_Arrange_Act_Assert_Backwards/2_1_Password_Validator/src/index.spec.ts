
import PasswordValidator from "./index"
describe('password validator', () => {

  it('should return false when passing "mom" ', () => {

    const resultObject = PasswordValidator.validate("mom")
    // assert
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
  it('should return false when passing "Mommommom"', () => {
    const resultObject = PasswordValidator.validate("Mommommom")
     expect(resultObject.result).toBeFalsy();
     expect(resultObject.errors?.[0].type).toEqual("Missing Digit")
  })
  it('should return false when passing "nocap2"', () => {
    const resultObject = PasswordValidator.validate("nocap2")
     expect(resultObject.result).toBeFalsy();
     expect(resultObject.errors?.[0].type).toEqual("Missing Capitalization");
  })
  it('should return false when passing more than 15 character password', () => {
    const resultObject = PasswordValidator.validate("This is more than 15 character");
    expect(resultObject.result).toBeFalsy();
    expect(resultObject.errors?.length).toEqual(1);
    expect(resultObject.errors?.[0].type).toEqual("Invalid Range")
  })
  it('should return false when passing "maxwell1_c"', () => {
     const resultObject = PasswordValidator.validate("maxwell1_c");
        expect(resultObject.result).toBeFalsy();
        expect(resultObject.errors?.length).toEqual(1);
        expect(resultObject.errors?.[0].type).toEqual("Missing Capitalization");
  })
  it('should return false when passing "maxwellTheBe"', () => {
     const resultObject = PasswordValidator.validate("maxwellTheBe");
        expect(resultObject.result).toBeFalsy();
        expect(resultObject.errors?.length).toEqual(1);
        expect(resultObject.errors?.[0].type).toEqual("Missing Digit");
  })
  it('should return false when passing "thePhysical1234567"', () => {
     const resultObject = PasswordValidator.validate("thePhysical1234567");
        expect(resultObject.result).toBeFalsy();
        expect(resultObject.errors?.length).toEqual(1);
        expect(resultObject.errors?.[0].type).toEqual("Invalid Range");
  })

})



