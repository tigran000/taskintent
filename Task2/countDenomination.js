function countDenomination(amount) {
  const banknotes = [20000, 10000, 5000, 1000, 500, 100];
  let currencyCount = [];
  function countDenomination(banknote) {
    const count = Math.floor(amount / banknote);
    currencyCount.push({ banknote, count });
    amount = amount - count * banknote;
  }
  banknotes.map(countDenomination);

  return currencyCount;
}

export default countDenomination;
