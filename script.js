// Function to change the background color randomly
const button = document.getElementById("colorButton");

button.addEventListener("click", function () {
  const colors = ["#f2f7ff", "#ffcccb", "#d0f0c0", "#fef9c3", "#e0bbff", "#cce7ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
