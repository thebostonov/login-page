const langToggle = document.querySelector(".lang-toggle");
const langSelect = document.querySelector(".lang-select");
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".darkmode-toggle");
// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
  // 1.add the class darkmode to the body
  document.body.classList.toggle("darkmode");
  // 2.update darkMode in the LocalStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1.add the class darkmode to the body
  document.body.classList.toggle("darkmode");
  // 2.update darkMode in the LocalStorage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

langSelect.addEventListener("click", function () {
  langToggle.classList.toggle("lang-open");
});
