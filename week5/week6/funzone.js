// =====================
// 🎨 PART 1: Event Handling
// =====================

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // toggle dark mode
});

// =====================
// 🎮 PART 2: Interactive Elements
// =====================

// ---- Counter Game ----
let count = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// ---- FAQ Section ----
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    // toggle display
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =====================
// 📂 Extra Feature 1: Dropdown Menu
// =====================
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedOption = document.getElementById("selectedOption");

// Toggle dropdown visibility
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Handle option click
dropdownMenu.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    selectedOption.textContent = "Selected: " + item.textContent;
    dropdownMenu.style.display = "none"; // close after selection
  });
});

// =====================
// 🗂️ Extra Feature 2: Tabbed Interface
// =====================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Show first tab by default
document.getElementById("tab1").style.display = "block";
tabButtons[0].classList.add("active");

// Add tab switching
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Hide all contents
    tabContents.forEach(c => c.style.display = "none");
    // Remove active class
    tabButtons.forEach(b => b.classList.remove("active"));
    // Show selected tab
    document.getElementById(btn.dataset.tab).style.display = "block";
    btn.classList.add("active");
  });
});

// =====================
// 📋 PART 3: Form Validation
// =====================
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form refresh

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("successMessage").textContent = "";

  let isValid = true;

  // ---- Name validation ----
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // ---- Email validation ----
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // ---- Password validation ----
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // ---- Success message ----
  if (isValid) {
    document.getElementById("successMessage").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
