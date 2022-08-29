const isValid = s => {
   // stack simulated with array to store opening brackets and know when closing bracket is found
    const stack = [];
    const pairMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in pairMap) {
        stack.push(char);
        } else {
        if (stack.length === 0) {
            return false;
        }
        const last = stack.pop();
        if (pairMap[last] !== char) {
            return false;
        }
        }
    }
    return stack.length === 0;
    }
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map) {
        stack.push(char);
        } else {
        if (stack.length === 0) {
            return false;
        }
        const last = stack.pop();
        if (map[last] !== char) {
            return false;
        }
        }
    }
    return stack.length === 0;

};

module.exports = isValid;
