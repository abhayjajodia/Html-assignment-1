// Select elements
const calcInput = document.getElementById("calculation");
const calcBtn = document.getElementById("start");
const resultPara = document.getElementById("result");

// Add click event listener to calculate button
calcBtn.addEventListener("click", function() {
  const input = calcInput.value.trim();
  let result;

  if (input.includes("+")) {
    const parts = input.split("+");
    const a = parseInt(parts[0]);
    const b = parseInt(parts[1]);
    result = a + b;
  } else if (input.includes("-")) {
    const parts = input.split("-");
    const a = parseInt(parts[0]);
    const b = parseInt(parts[1]);
    result = a - b;
  } else if (input.includes("*")) {
    const parts = input.split("*");
    const a = parseInt(parts[0]);
    const b = parseInt(parts[1]);
    result = a * b;
  } else if (input.includes("/")) {
    const parts = input.split("/");
    const a = parseInt(parts[0]);
    const b = parseInt(parts[1]);
    result = b !== 0 ? Math.floor(a / b) : "Cannot divide by zero";
  } else {
    result = "Invalid input";
  }

  resultPara.textContent = "Result: " + result;
});
