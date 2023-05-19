const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // createElement
  const newSection = document.createElement("section");
  const newBookmarkSvg = document.createElement("svg");
  const newQuestion = document.createElement("p");
  const newAnswer = document.createElement("p");
  const newAnswerButton = document.createElement("button");
  const newUlist = document.createElement("ul");
  const newListitem = document.createElement("li");

  // add CSS.class + data-js
  newSection.classList.add("quiz-card");
  newSection.dataset.js = "quiz-card";
  // oder:   newSection.setAttribute("data-js", "quiz-card");

  newQuestion.classList.add("quiz-card__question");
  newQuestion.dataset.js = "quiz-card__question";

  newAnswer.classList.add(
    "quiz-card__answer",
    "quiz-card__answerButton--hidden"
  );
  newAnswer.dataset.js = "quiz-card__answer";

  newAnswerButton.classList.add("quiz-card__answerButton");
  newAnswerButton.dataset.js = "quiz-card__answerButton";

  newUlist.classList.add("quiz-card__taglist");
  newListitem.classList.add("quiz-card__taglist__tag");
  // data-js="quiz-card__bookmark" ist schon durch innerHTML

  // createdElements Content geben
  newSection.innerHTML = `
    <svg
      data-js="quiz-card__bookmark"
      class="quiz-card__bookmark"
      xml:space="preserve"
      version="1.0"
      viewBox="0 0 64 64"
      height="1em"
      width="1em"
    >
      <path
        fill="#394240"
        d="M52 63.999a3.998 3.998 0 0 1-2.828-1.172L32 45.655 14.828 62.827a3.995 3.995 0 0 1-4.359.867A3.996 3.996 0 0 1 8 59.999v-56c0-2.211 1.789-4 4-4h40c2.211 0 4 1.789 4 4v56a3.996 3.996 0 0 1-4 4zm-20-28c1.023 0 2.047.391 2.828 1.172L48 50.343V7.999H16v42.344l13.172-13.172A3.988 3.988 0 0 1 32 35.999z"
      />
      <path
        fill="#F76D57"
        d="M32 35.999c1.023 0 2.047.391 2.828 1.172L48 50.343V7.999H16v42.344l13.172-13.172A3.988 3.988 0 0 1 32 35.999z"
      />
    </svg>
  `;
  newQuestion.textContent = data.formQuestion;
  newAnswer.textContent = data.formAnswer;
  newAnswerButton.textContent = `Show Answer`;
  newListitem.textContent = data.formTag;

  // createdElements in index.html main einfügen
  const newCardHere = document.querySelector('[data-js="new-quiz-card--here"]');

  newSection.append(newBookmarkSvg);
  newSection.append(newQuestion);
  newSection.append(newAnswer);
  newSection.append(newAnswerButton);
  newSection.append(newUlist);
  newUlist.append(newListitem);

  newCardHere.appendChild(newSection);
  /*  // createdElements an body und weitere anhängen
  document.body.append(newSection);
  newSection.append(newBookmarkSvg);
  newSection.append(newQuestion);
  newSection.append(newAnswer);
  newSection.append(newAnswerButton);
  newSection.append(newUlist);
  newUlist.append(newListitem); */

  event.target.reset(); // reset inputs
  form.formQuestion.focus(); // focus after submit zu question input

  getCreatedQuizCards(); // call buttons function
});

function getCreatedQuizCards() {
  // new try - all cards on forms page
  const quizCards = document.querySelectorAll('[data-js="quiz-card"]'); //get full quiz-card // container of all

  quizCards.forEach((quizCard) => {
    // ANSWER BUTTON
    const question = quizCard.querySelector('[data-js="quiz-card__question"]'); //get question
    const answer = quizCard.querySelector('[data-js="quiz-card__answer"]'); //get answer
    const answerButton = quizCard.querySelector(
      '[data-js="quiz-card__answerButton"]'
    ); //get answerButton

    answerButton.addEventListener("click", () => {
      question.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe question
      answer.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe answer
    });

    // BOOKMARK
    const bookmark = quizCard.querySelector('[data-js="quiz-card__bookmark"]'); //get bokmark button

    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("quiz-card__bookmarked"); //toggle bookmark-color
      bookmark.classList.toggle("quiz-card__bookmark");
    });
  });
}
