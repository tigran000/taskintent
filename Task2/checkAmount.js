function checkAmount(amount) {
  const parsedAmount = Number(amount);
  if (!Number.isInteger(parsedAmount) || parsedAmount < 0) {
    return { isValid: false, message: "Amount must me a positive integer" };
  }
  if (parsedAmount % 100 !== 0) {
    return { isValid: false, message: "Amount must me a multiple of 100" };
  }

  return { isValid: true };
}

export default checkAmount;
