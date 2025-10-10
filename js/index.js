const body = document.body;
const darkmode = document.querySelector('[data-js="darkmode"]');
const cards = document.querySelectorAll('[data-js="card"]');

function toggleDarkmode(enable) {
  cards.forEach((card) => {
    card.classList.toggle("dark", enable);
  });
}

const isDark = localStorage.getItem("darkmode") === "1";
body.classList.toggle("dark", isDark);
darkmode.value = isDark ? "1" : "0";
toggleDarkmode(isDark);

darkmode.addEventListener("input", () => {
  const enable = darkmode.value === "1";
  body.classList.toggle("dark", enable);
  toggleDarkmode(enable);
  localStorage.setItem("darkmode", enable ? "1" : "0");
});
