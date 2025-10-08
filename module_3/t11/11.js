// Select the dialog and its elements
const dialog = document.querySelector("dialog");
const dialogImg = dialog.querySelector("img");
const closeBtn = dialog.querySelector("span");

// Loop through all articles to add click functionality
const articles = document.querySelectorAll("article.card");

articles.forEach((article, index) => {
  const img = article.querySelector("img");

  // Open dialog on article image click
  img.addEventListener("click", function() {
    dialogImg.src = picArray[index].large_image; // set large image
    dialogImg.alt = picArray[index].title;
    dialog.showModal(); // open the dialog
  });
});

// Close dialog when clicking the span
closeBtn.addEventListener("click", function() {
  dialog.close();
});
