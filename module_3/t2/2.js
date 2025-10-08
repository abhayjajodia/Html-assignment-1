// Select the element with id="target"
const target = document.getElementById("target");

// Create and append list items
const firstItem = document.createElement("li");
firstItem.textContent = "First item";
target.appendChild(firstItem);

const secondItem = document.createElement("li");
secondItem.textContent = "Second item";
target.appendChild(secondItem);

const thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";
target.appendChild(thirdItem);
