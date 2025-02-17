function changeCalculator(change) {
  const changeCoins = [50, 25, 10, 5, 2, 1];
  const changeObj = {};
  let changeLeftOver = change;
  for (let i = 0; i < changeCoins.length; i++) {
    const coinAmount = Math.floor(changeLeftOver / changeCoins[i]);
    const remainder = changeLeftOver - coinAmount * changeCoins[i];
    console.log(remainder);
    changeLeftOver = remainder;
    if (coinAmount !== 0) {
      changeObj[changeCoins[i]] = coinAmount;
    }

    if (remainder === 0) {
      return changeObj;
    }
  }
}

console.log(changeCalculator(137));
