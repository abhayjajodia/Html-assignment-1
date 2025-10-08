
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
let list = "<ul>";
let result;
do {
  result = rollDice();
  list += "<li>" + result + "</li>";
} while (result !== 6);
list += "</ul>";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = list;
}
