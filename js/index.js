const body = document.body;
const darkmode = document.querySelector('[data-js="darkmode"]');
const darkElements = document.querySelectorAll('[data-js="dark"]');

function toggleDarkmode(enable) {
  darkElements.forEach((el) => {
    el.classList.toggle("dark", enable);
  });
}

const isDark = localStorage.getItem("darkmode") === "1";
body.classList.toggle("dark", isDark);
toggleDarkmode(isDark);

if (darkmode) {
  darkmode.value = isDark ? "1" : "0";

  darkmode.addEventListener("input", () => {
    const enable = darkmode.value === "1";
    body.classList.toggle("dark", enable);
    toggleDarkmode(enable);
    localStorage.setItem("darkmode", enable ? "1" : "0");
  });
}

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

if (bookmarkButton) {
  bookmarkButton.addEventListener("click", () => {
    const img = bookmarkButton.querySelector("img");
    if (img.src.includes("bookmark.png")) {
      img.src = "images/bookmark filled.png";
    } else {
      img.src = "images/bookmark.png";
    }
  });
}
