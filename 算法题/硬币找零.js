const coins = [1, 2, 5, 10]
const amount = 18;

function minCount(coins, amount) {
  coins.sort((a, b) => a - b)
  console.log(coins);
}

minCount(coins, amount);
