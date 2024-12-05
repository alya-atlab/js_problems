function maxProfit(prices) {
  let count = 0;
  let profit = [];

  for (let i of prices) {
    let minPrice = i;
    let maxPrice = Math.max(...prices.slice(count));
    profit.push(maxPrice - minPrice);
    count += 1;
  }

  return Math.max(...profit);
}

console.log(maxProfit([2, 2, 3, 1, 4, 2, 4, 6, 1, 4]));
