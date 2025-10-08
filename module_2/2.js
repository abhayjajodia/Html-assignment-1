let participantsCount = parseInt(prompt("Enter number of participants:"));
let participants = [];
for (let i = 0; i < participantsCount; i++) {
  participants.push(prompt("Enter name for participant " + (i + 1) + ":"));
}
participants.sort();
let list = "<ol>";
for (let name of participants) {
  list += "<li>" + name + "</li>";
}
list += "</ol>";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = list;
}