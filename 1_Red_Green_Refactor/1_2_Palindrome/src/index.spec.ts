import Palindrome from "./index"

describe('palindrome checker', () => {
    it.each(["mom","wow"])("should return true when passing valid word", (word: string) => {
        const palindrome = new Palindrome();
        expect(palindrome.isPalindrome(word)).toBeTruthy();
    })
    it("should return false whe passing 'bill'", () => {
        const palindrome = new Palindrome();
        expect(palindrome.isPalindrome("bill")).toBeFalsy();
    })
    it("shold return false when passing Momx", () => {
        const palindrome = new Palindrome();
        expect(palindrome.isPalindrome("Momx")).toBeFalsy();
    })
})