const containsDuplicate = nums => {
    const visitedNums = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (visitedNums[num]) {
            return true;
        }
        visitedNums[num] = true;
    }

    return false;
};

module.exports = containsDuplicate;
