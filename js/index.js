const body = document.body;
const darkmode = document.querySelector('[data-js="darkmode"]');

darkmode.addEventListener("input", () => {
  if (darkmode === "1") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
