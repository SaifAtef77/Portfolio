const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
}

themeToggle.addEventListener("click", () => {
  setTheme(!document.documentElement.classList.contains("dark"));
});

// Mobile menu
document.getElementById("mobile-btn").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("mobile-btn").querySelector("i");
  menu.classList.toggle("hidden");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Project search
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll("#projects-container > div");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase().trim();
  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();
    card.style.display =
      title.includes(term) || desc.includes(term) ? "" : "none";
  });
});

// Back to top
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("hidden", window.scrollY < 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simple form validation
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const valid = true;

  if (name === "" || email === "" || message === "") {
    alert("Please Fill The Form.");
    valid = false;
  } else if (name.length < 3 || name.length > 15) {
    alert("Name must be 3–15 characters.");
    valid = false;
  } else if (
    !email.includes("@") ||
    !email.includes(".") ||
    email.indexOf("@") === 0 ||
    email.lastIndexOf(".") < email.indexOf("@") ||
    email.endsWith(".") ||
    email.includes(" ")
  ) {
    alert("Please enter a correct email.");
    valid = false;
  } else if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    valid = false;
  }
  if (valid) {
    alert("Form submitted successfully!");
    e.target.reset();
  }
  return valid;
});
