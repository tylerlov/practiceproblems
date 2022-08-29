var maxProfit = function(prices) {
    let profit = 0;
    let cheapest = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < cheapest) {
            cheapest = prices[i];
        } else if (prices[i] - cheapest > profit) {
            profit = prices[i] - cheapest;
        }
    }

    return profit;
};

module.exports = maxProfit;
