const toggleBtn = document.getElementById("toggleBtn");
const toggle = document.getElementById("toggle");

// Check for saved theme preference or default to light theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  toggle.innerHTML = `<i class="fa-solid fa-moon text-xs text-gray-900"></i>`;
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  if (!document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggle.innerHTML = `<i class="fa-solid fa-moon text-xs text-gray-900"></i>`;
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "");
    toggle.innerHTML = `<i class="fa-solid fa-sun text-xs text-amber-500"></i>`;
  }
});

export { toggleBtn, toggle };
