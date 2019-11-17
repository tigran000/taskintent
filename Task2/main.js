import readline from "readline";
import checkAmount from "./checkAmount";
import countDenomination from "./countDenomination";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`How much is your money? \n`, amount => {
  const checkedAmount = checkAmount(amount);
  if (checkedAmount.isValid) {
    const denominationTable = countDenomination(amount);
    console.table(denominationTable);
  } else {
    console.log(checkedAmount.message);
  }
  rl.close();
});
