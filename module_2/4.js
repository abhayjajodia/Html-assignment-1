let nums = [];
while (true) {
  let n = parseFloat(prompt("Enter a number (0 to stop):"));
  if (n === 0) break;
  nums.push(n);
}
nums.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
console.log(nums);