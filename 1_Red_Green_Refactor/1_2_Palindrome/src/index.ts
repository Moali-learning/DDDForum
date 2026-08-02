export default class Palindrome {
    isPalindrome(str: string):boolean {
        const reverse = str.split("").reverse().join("").trim().replace(/\s/g, "").toLowerCase();
        const original  = str.trim().replace(/\s/g, "").toLowerCase();
        return original == reverse;
    }
}