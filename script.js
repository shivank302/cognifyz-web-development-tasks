// Background color change button
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  const colors = ["#f8f9fa", "#e0f7fa", "#fce4ec", "#f3e5f5", "#fff3cd"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Form validation (Bootstrap-compatible)
const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  let valid = true;

  if (nameField.value.trim() === "") {
    document.getElementById("nameError").textContent = "Please enter your full name.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailField.value.trim())) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  if (messageField.value.trim().length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").textContent = "✅ Message sent successfully!";
    form.reset();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("colorButton");
  const body = document.body;

  if (button) {
    const colors = [
      "#f8f9fa", // light gray
      "#e3f2fd", // light blue
      "#fff3cd", // light yellow
      "#fce4ec", // pink
      "#e8f5e9", // mint
      "#ede7f6", // lavender
      "#ffe0b2"  // peach
    ];

    button.addEventListener("click", function () {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
    });
  } else {
    console.error("Button not found!");
  }
});

