// Select the form
const form = document.querySelector("form");

// Add submit event listener
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop default form submission

  // Select input fields using attribute selectors
  const firstName = document.querySelector("input[name='firstname']").value;
  const lastName = document.querySelector("input[name='lastname']").value;

  // Display result in the <p> element
  const target = document.getElementById("target");
  target.textContent = "Your name is " + firstName + " " + lastName;
});
