import Palindrome from "./index"

describe('palindrome checker', () => {
    let palindrome: Palindrome;
    beforeEach(() => {
        palindrome = new Palindrome();
    })
    it.each(["mom","wow", "MoM", "xMomx"])("should return true when passing valid word", (word: string) => {
        expect(palindrome.isPalindrome(word)).toBeTruthy();
    })
    it.each(["bill", "Momx"])("should return false whe passing invalid words", (word: string) => {
        expect(palindrome.isPalindrome(word)).toBeFalsy();
    })
    it.each(["Was It A Rat I Saw","Never Odd or Even", "1Never Odd or Even1"])("should return true when passing a valid sentence", (sentence: string) => {
         expect(palindrome.isPalindrome(sentence)).toBeTruthy();
    })
    it("should returns false when passing an invalid sentence", () => {
        expect("Never Odd or Even1").toBeFalsy();
    })

})