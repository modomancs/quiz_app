const body = document.body;
const darkmode = document.querySelector('[data-js="darkmode"]');
const darkElements = document.querySelectorAll('[data-js="dark"]');

//this is for darkmode. el is short for elements

function toggleDarkmode(enable) {
  darkElements.forEach((el) => {
    el.classList.toggle("dark", enable);
  });
}
//this saves darkmode in to other pages, so when you switch or refresh it stays.
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
// this is for show answer button to work
const answerButtons = document.querySelectorAll('[data-js="answerButton"]');

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
// this is for the bookmark interactivity. pretty much means when you click it, it looks which bookmark image is used and switches to the other one.
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
