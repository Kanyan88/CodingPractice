
//https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    i = 0, x = String(x);
    while (i < x.length / 2) {
        if (x.charAt(i) !== x.charAt(x.length - i - 1)) { return false; }
        i++;
    }
    return true;
}