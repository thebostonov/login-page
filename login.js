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

const inputPlaceholder = document.querySelector(".input-bottom");
const inputPlace = document.querySelector(".login-input");
const buttonDesc = document.querySelector(".login-button");
const langMainDesc = document.querySelector(".lang-select-desc");
const langBtns = document.querySelectorAll(".lang-btn");
const langLinks = document.querySelectorAll(".lang-btn-link");
const langDesc = document.querySelectorAll(".lang-btn-desc");
langLinks.forEach(function (langLink) {
  langLink.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id == "uz") {
      langMainDesc.innerHTML = "Uzbek";
      userphone.setAttribute("placeholder", "Telfon");
      userpass.setAttribute("placeholder", "Parol");
      remember.textContent = "Meni eslabqol";
      enterbtn.textContent = "Kirish";
    } else if (id == "ru") {
      langMainDesc.innerHTML = "Russian";
      userphone.setAttribute("placeholder", "Телефон");
      userpass.setAttribute("placeholder", "Пароль");
      remember.textContent = "Запомни меня";
      enterbtn.textContent = "Войти";
    } else if (id == "en") {
      langMainDesc.innerHTML = "English";
      userphone.setAttribute("placeholder", "Phone");
      userpass.setAttribute("placeholder", "Password");
      remember.textContent = "Remember me";
      enterbtn.textContent = "Enter";
    }
  });
});
