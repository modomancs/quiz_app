// for darkmode again so i dont break index.js code
const body = document.body;
const isDark = localStorage.getItem("darkmode") === "1";
if (isDark) {
  body.classList.add("dark");
}

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

const form = document.querySelector('[data-js="questionForm"]');
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const tagInput = document.querySelector('[data-js="tagInput"]');
const questionCount = document.querySelector('[data-js="questionCount"]');
const answerCount = document.querySelector('[data-js="answerCount"]');
const container = document.querySelector('[data-js="questionsContainer"]');
// next line is for the character counter!!!!Look for this again!!!!
questionInput.addEventListener("input", () => {
  const remaining = 150 - questionInput.value.length;
  questionCount.textContent = `${remaining} characters left`;
});
answerInput.addEventListener("input", () => {
  const remaining = 150 - answerInput.value.length;
  answerCount.textContent = `${remaining} characters left`;
});

let addedCount = 0;
// (e) can be used the same as (event). Short version. and trim removes spaces.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  const tag = tagInput.value.trim();

  if (!question || !answer) return;

  addedCount++;

  const numberNames = ["one", "two", "three", "four", "five"];
  const cardName = numberNames[(addedCount - 1) % numberNames.length]; // cycles after five

  const card = document.createElement("div");

  card.classList.add(`card_${cardName}`, "card");
  card.setAttribute("data-js", "card");
  // idk if this is right
  card.innerHTML = `
  <p class="category">${tag || "General"}</p>
  <h2 class="question_title">${question}</h2>
  <button class="button-show-answer" data-js="answerButton">! Show answer !</button>
  <p class="answer">${answer}</p>
  <button class="bookmark${addedCount} bookmark">
    <img src="images/bookmark.png" alt="bookmark" width="50" />
  </button>
`;

  container.appendChild(card);

  // resetting the form
  form.reset();
  questionCount.textContent = "150 characters left";
  answerCount.textContent = "150 characters left";

  // hiding answer so it works only when you click show answer
  const answerEl = card.querySelector(".answer");
  answerEl.style.display = "none";

  // toggling visibility on new question from user
  const showBtn = card.querySelector('[data-js="answerButton"]');
  showBtn.addEventListener("click", () => {
    answerEl.style.display =
      answerEl.style.display === "none" ? "block" : "none";
  });

  // apply dark mode immediately if dark mode is active
  if (body.classList.contains("dark")) {
    card.classList.add("dark");
  }
});
