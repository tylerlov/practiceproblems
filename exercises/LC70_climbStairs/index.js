const climbStairs = n => {
    if (n <= 3) return n;

    let ways = [1, 2, 3];

    for (let i = 3; i < n; i++) {
        ways.push(ways[i - 1] + ways[i - 2]);
    }
    
    return ways.pop();
};

module.exports = climbStairs;
