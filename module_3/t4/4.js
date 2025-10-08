// Array of student objects
const students = [
  { value: '2345768', name: 'John' },
  { value: '2134657', name: 'Paul' },
  { value: '5423679', name: 'Jones' }
];

// Select the element with id="target"
const target = document.getElementById("target");

// Loop through the array and create <option> elements
for (let i = 0; i < students.length; i++) {
  const option = document.createElement("option");
  option.value = students[i].value;
  option.textContent = students[i].name;
  target.appendChild(option);
}
