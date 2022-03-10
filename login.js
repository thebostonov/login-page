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
  // if (langToggle.classList.contains("lang-open")) {
  //   langToggle.classList.remove("lang-open");
  // } else {
  //   langToggle.classList.add("lang-open");
  // }
});

const langMainDesc = document.querySelector(".lang-select-desc");
const langBtns = document.querySelectorAll(".lang-btn");
const langLinks = document.querySelectorAll(".lang-btn-link");
const langDesc = document.querySelectorAll(".lang-btn-desc");
langLinks.forEach(function (langLink) {
  langLink.addEventListener("click", function (e) {
    const id = e.currentTarget.dataset.id;
    if (id == "uz") {
      langMainDesc.innerHTML = "O'zbek";
      userphone.setAttribute("placeholder", "Telfon");
      userpass.setAttribute("placeholder", "Parol");
      remember.textContent = "Meni eslabqol";
      enterbtn.textContent = "Kirish";
      langToggle.classList.add("lang-open");
    } else if (id == "ru") {
      langMainDesc.innerHTML = "Russian";
      userphone.setAttribute("placeholder", "Телефон");
      userpass.setAttribute("placeholder", "Пароль");
      remember.textContent = "Запомни меня";
      enterbtn.textContent = "Войти";
      langToggle.classList.add("lang-open");
    } else if (id == "en") {
      langMainDesc.innerHTML = "English";
      userphone.setAttribute("placeholder", "Phone");
      userpass.setAttribute("placeholder", "Password");
      remember.textContent = "Remember me";
      enterbtn.textContent = "Enter";
      langToggle.classList.add("lang-open");
    }
  });
});
