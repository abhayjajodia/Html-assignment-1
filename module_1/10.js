let diceCount1 = parseInt(prompt("Enter number of dice:"));
let desiredSum = parseInt(prompt("Enter desired sum:"));
let simulations = 10000;
let successCount = 0;

for (let i = 0; i < simulations; i++) {
  let total = 0;
  for (let j = 0; j < diceCount1; j++) {
    total += Math.floor(Math.random() * 6) + 1;
  }
  if (total === desiredSum) {
    successCount++;
  }
}

let probability = (successCount / simulations) * 100;
let message =
  "Probability to get sum " + desiredSum +
  " with " + diceCount1 + " dice is " +
  probability.toFixed(2) + "%.";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = message;
}