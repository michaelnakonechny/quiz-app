const card = document.querySelector("[data-js=question-card]");
const button = document.querySelector("[data-js=button-click]");
const answer = document.querySelector("[data-js=answer]");

button.addEventListener("click", (event) => {
  answer.classList.toggle("hidden");
  if (button.textContent === "Show Answer") {
    button.textContent = "Hide Answer";
  } else {
    button.textContent = "Show Answer";
  }
});

// navbartoggles

const bookmarksButton = document.querySelector("[data-js=bookmarksbutton]");
const profileButton = document.querySelector("[data-js=profilebutton]");

const bookmarksPage = document.querySelector("[data-js=bookmarkspage]");
const profilePage = document.querySelector("[data-js=profilepage]");

bookmarksButton.addEventListener("click", (event) => {
  bookmarksPage.classList.toggle("hidden");
});
