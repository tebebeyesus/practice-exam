// Obtain the img element, and assign it to the image variable
let image = document.querySelector('#vacation-spot');
image.src ="https://upload.wikimedia.org/wikipedia/en/c/ca/Sunrise_over_Langano%2C_Ethiopia.jpg";

// Obtain the 'flip-button' button, and assign it to the flipButton variable
let flipButton = document.querySelector('#flip-button');
console.log(flipButton);
//DO NOT CHANGE THE FOLLOWING CODE
flipButton.addEventListener("click", function() {
  if(image.style.transform == "rotate(180deg)") {
    image.style.transform = "rotate(0deg)"
  }
  else {
    image.style.transform = "rotate(180deg)"
  }
})