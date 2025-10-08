let dogs = [];
for (let i = 0; i < 6; i++) {
  dogs.push(prompt("Enter name of dog " + (i + 1) + ":"));
}
dogs.sort().reverse();
let list = "<ul>";
for (let dog of dogs) {
  list += "<li>" + dog + "</li>";
}
list += "</ul>";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = list;
}