let givenNumbers = [];
while (true) {
  let num = parseFloat(prompt("Enter a number:"));
  if (givenNumbers.includes(num)) {
    alert("Number has already been given! Stopping.");
    break;
  }
  givenNumbers.push(num);
}
givenNumbers.sort((a, b) => a - b);
console.log("All given numbers in ascending order:");
console.log(givenNumbers);
