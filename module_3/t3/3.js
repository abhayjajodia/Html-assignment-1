// Array of names
const names = ['John', 'Paul', 'Jones'];

// Select the element with id="target"
const target = document.getElementById("target");

// Loop through the array and create <li> elements
for (let i = 0; i < names.length; i++) {
  const li = document.createElement("li");
  li.textContent = names[i];
  target.appendChild(li);
}
