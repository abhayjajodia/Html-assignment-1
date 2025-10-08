let studentName = prompt("Enter your name for sorting hat:");
let randomNum = Math.floor(Math.random() * 4) + 1;
let house;
if (randomNum === 1) {
  house = "Gryffindor";
} else if (randomNum === 2) {
  house = "Slytherin";
} else if (randomNum === 3) {
  house = "Hufflepuff";
} else {
  house = "Ravenclaw";
}
let final = studentName + ", you are " + house + ".<br>";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = final;
}