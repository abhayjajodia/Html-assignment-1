
let message = "";
if (confirm("Should I calculate the square root?")) {
  let num = parseFloat(prompt("Enter a number:"));
  if (num < 0) {
    message = "The square root of a negative number is not defined.<br>";
  } else {
    message = "The square root of " + num + " is " + Math.sqrt(num) + ".<br>";
  }
} else {
  message = "The square root is not calculated.<br>";
}
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = message;
}
