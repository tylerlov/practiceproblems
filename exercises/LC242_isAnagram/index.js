function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // object of letters in s
    const sCharCount = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        sCharCount[sChar] = sCharCount[sChar] ? sCharCount[sChar] + 1 : 1;
    }

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        if (!sCharCount[tChar]) {
            return false;
        }
        sCharCount[tChar]--;
    }
    return true;
}

module.exports = isAnagram;
