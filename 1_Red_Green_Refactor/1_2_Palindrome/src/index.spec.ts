import Palindrome from "./index"

describe('palindrome checker', () => {
    let palindrome: Palindrome;
    beforeEach(() => {
        palindrome = new Palindrome();
    })
    it.each(["mom","wow"])("should return true when passing valid word", (word: string) => {
        expect(palindrome.isPalindrome(word)).toBeTruthy();
    })
    it("should return false whe passing 'bill'", () => {
        expect(palindrome.isPalindrome("bill")).toBeFalsy();
    })
    it("should return false when passing Momx", () => {
        expect(palindrome.isPalindrome("Momx")).toBeFalsy();
    })
    it("should return true when passing 'Was It A Rat I Saw'", () => {
         expect(palindrome.isPalindrome("Was It A Rat I Saw")).toBeTruthy();
    })
})