let startYear = parseInt(prompt("Enter start year:"));
let endYear = parseInt(prompt("Enter end year:"));
let list = "<ul>";
for (let y = startYear; y <= endYear; y++) {
  if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    list += "<li>" + y + "</li>";
  }
}
list += "</ul>";
let resultDiv = document.getElementById("result");
if (resultDiv) {
  resultDiv.innerHTML = list;
}