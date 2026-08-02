export default class Palindrome {
    isPalindrome(str: string):boolean {
        const reverse = str.split("").reverse().join("");
        return str == reverse
    }
}