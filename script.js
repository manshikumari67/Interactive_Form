const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

// Error display in form
function showError(input, message) {
  let error = input.parentElement.querySelector(".error-message");
  if (!error) {
    error = document.createElement("small");
    error.classList.add("error-message");
    input.parentElement.appendChild(error);
  }
  error.style.display = "block";
  error.textContent = message;
  input.style.borderColor = "red";

  // ⚠️ Extra alert for invalid input
  alert("⚠️ " + message);
}

function showSuccess(input) {
  let error = input.parentElement.querySelector(".error-message");
  if (error) error.style.display = "none";
  input.style.borderColor = "green";
}

function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function validatePhone() {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(phoneInput.value.trim())) {
    showError(phoneInput, "Enter a valid phone (10 digits only)");
    return false;
  }
  showSuccess(phoneInput);
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

// Real-time validation
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validatePhone);
passwordInput.addEventListener("blur", validatePassword);

// On form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid =
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword();

  if (isValid) {
    alert("🎉 Form submitted successfully!");
    form.reset();

    // reset border colors
    [nameInput, emailInput, phoneInput, passwordInput].forEach(input => {
      input.style.borderColor = "#ccc";
    });
  } else {
    alert("❌ Please correct the highlighted errors before submitting.");
  }
});
