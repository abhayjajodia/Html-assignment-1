let a = parseInt(prompt("Enter first integer:"));
let b = parseInt(prompt("Enter second integer:"));
let c = parseInt(prompt("Enter third integer:"));
let sum = a + b + c;
let product = a * b * c;
let average = sum / 3;

// Create or select a div to display results
let resultDiv = document.getElementById("result");
if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);
}
resultDiv.innerHTML =
    "Sum: " + sum + "<br>" +
    "Product: " + product + "<br>" +
    "Average: " + average + "<br>";