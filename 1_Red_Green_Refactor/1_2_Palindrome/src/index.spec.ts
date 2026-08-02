import Palindrome from "./index"

describe('palindrome checker', () => {
    it("should return true when passing 'mom'", () => {
        const palindrome = new Palindrome();
        expect(palindrome.isPalindrome("mom")).toBeTruthy();
    })
})