export function createQuizCard(questionSets) {
  // section
  const newSection = document.createElement("section");
  newSection.classList.add("quiz-card");
  newSection.dataset.js = "quiz-card"; // or: newSection.setAttribute("data-js", "quiz-card");
  const cardContainer = document.querySelector('[data-js="card-container"]'); // document.body.appendChild(newSection);
  cardContainer.appendChild(newSection);

  // span bookmark
  const newSpan = document.createElement("span");
  newSpan.dataset.js = "quiz-card__bookmark";
  newSpan.addEventListener("click", onToggleBookmark); // onToggleBookmark????
  newSection.append(newSpan);

  // svg + paths
  newSpan.innerHTML = `
    <svg
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
  /* const newBookmarkSvg = document.createElement("svg"); */

  // question
  const newQuestion = document.createElement("p");
  newQuestion.classList.add("quiz-card__question");
  newQuestion.dataset.js = "quiz-card__question";
  newQuestion.textContent = questionSets.question;
  newSection.appendChild(newQuestion);

  // answer
  const newAnswer = document.createElement("p");
  newAnswer.classList.add(
    "quiz-card__answer",
    "quiz-card__answerButton--hidden"
  );
  newAnswer.dataset.js = "quiz-card__answer";
  newAnswer.textContent = questionSets.answer;
  newSection.appendChild(newAnswer);

  // answer button
  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("quiz-card__answerButton");
  newAnswerButton.dataset.js = "quiz-card__answerButton";
  newAnswerButton.textContent = `Show Answer`; // possible ternary operator here
  newAnswerButton.addEventListener("click", onToggleAnswer);
  newSection.appendChild(newAnswerButton);

  // taglist
  const newUlist = document.createElement("ul");
  newUlist.classList.add("quiz-card__taglist");
  newSection.appendChild(newUlist); // maybe here maybe below tags

  // tags
  questionSets.tag.forEach((tg) => {
    const newListitem = document.createElement("li");
    newListitem.classList.add("quiz-card__taglist__tag");
    newListitem.textContent = tg;
    newUlist.appendChild(newListitem);
  });
}
