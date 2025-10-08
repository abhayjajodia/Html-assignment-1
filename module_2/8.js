function concat(arr) {
  let result = "";
  for (let str of arr) {
    result += str;
  }
  return result;
}
let band = ["Johnny", "DeeDee", "Joey", "Marky"];
let concatenated = concat(band);
document.write("Concatenated string: " + concatenated + "<br>");

// Question 9: even() function returning only even numbers
function even(arr) {
  let evens = [];
  for (let n of arr) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  return evens;
}
let arrNumbers = [2, 7, 4, 9, 10];
let evenNumbers = even(arrNumbers);
console.log("Original array:", arrNumbers);
console.log("Even numbers array:", evenNumbers);