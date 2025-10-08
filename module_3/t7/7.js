// Select the trigger paragraph and target image
const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

// Change image on mouseover
trigger.addEventListener("mouseover", function() {
  target.src = "picB.jpg";
});

// Change image back on mouseout
trigger.addEventListener("mouseout", function() {
  target.src = "picA.jpg";
});
