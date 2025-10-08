let candidateCount = parseInt(prompt("Enter number of candidates:"));
let candidates = [];
for (let i = 0; i < candidateCount; i++) {
  let name = prompt("Name for candidate " + (i + 1) + ":");
  candidates.push({ name: name, votes: 0 });
}

let voterCount = parseInt(prompt("Enter number of voters:"));
for (let i = 0; i < voterCount; i++) {
  let vote = prompt("Voter " + (i + 1) + ", who do you vote for?");
  let found = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
  if (found) {
    found.votes++;
  }
}

candidates.sort((a, b) => b.votes - a.votes);
console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
console.log("results:");
for (let c of candidates) {
  console.log(c.name + ": " + c.votes + " votes");
}
