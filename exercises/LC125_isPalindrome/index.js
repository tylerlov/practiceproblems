//Most efficient way is to think of this like a mirror.
//We can compare the first and last letter, and then move inward.
function isPalindrome(s) {
    //sanitize
    s = s.toLowerCase().replace(/[\W_]/g, '');

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

}

module.exports = isPalindrome;
