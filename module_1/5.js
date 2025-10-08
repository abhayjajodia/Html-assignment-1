
let year = parseInt(prompt("Enter a year:"));
let message = "";
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  message = year + " is a leap year.<br>";
} else {
  message = year + " is not a leap year.<br>";
}
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = message;
}
