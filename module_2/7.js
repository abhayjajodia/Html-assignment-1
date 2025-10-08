
function rollDiceSides(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
let sides = parseInt(prompt("Enter number of sides for the dice:"));
let list = "<ul>";
let outcome;
do {
  outcome = rollDiceSides(sides);
  list += "<li>" + outcome + "</li>";
} while (outcome !== sides);
list += "</ul>";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = list;
}