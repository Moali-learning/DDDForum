import Palindrome from "./index"

describe('palindrome checker', () => {
    it.each(["mom","wow"])("should return true when passing valid word", (word: string) => {
        const palindrome = new Palindrome();
        expect(palindrome.isPalindrome(word)).toBeTruthy();
    })
})