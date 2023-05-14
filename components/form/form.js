const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  // const formQuestion = event.target.elements.formQuestion.value;
  // const formAnswer = event.target.elements.formAnswer.value;
  // const formTag = event.target.elements.formTag.value;

  const newSection = document.createElement("section");
  const newBookmarkSvg = document.createElement("svg");
  const newQuestion = document.createElement("p");
  const newAnswer = document.createElement("p");
  const newAnswerButton = document.createElement("button");
  const newUlist = document.createElement("ul");
  const newListitem = document.createElement("li");

  newSection.classList.add("qcard");
  // newBookmarkSvg.classList.add("qcard__bookmark");
  newQuestion.classList.add("qcard__question");
  newQuestion.dataset.js = "qcard__question";
  newAnswer.classList.add("qcard__answer", "qcard__answerButton--hidden");
  newAnswer.dataset.js = "qcard__answer";
  newAnswerButton.classList.add("qcard__answerButton");
  newAnswerButton.dataset.js = "qcard__answerButton";
  newUlist.classList.add("qcard__taglist");
  newListitem.classList.add("qcard__taglist__tag");

  newSection.innerHTML = `
    <svg
      data-js="qcard__bookmark"
      class="qcard__bookmark"
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

  document.body.append(newSection);
  newSection.append(newBookmarkSvg);
  newSection.append(newQuestion);
  newSection.append(newAnswer);
  newSection.append(newAnswerButton);
  newSection.append(newUlist);
  newUlist.append(newListitem);

  // aus index.js
  // ANSWER BUTTON
  const question = document.querySelector('[data-js="qcard__question"]'); //get question
  const answer = document.querySelector('[data-js="qcard__answer"]'); //get answer
  const button = document.querySelector('[data-js="qcard__answerButton"]'); //get button

  button.addEventListener("click", () => {
    question.classList.toggle("qcard__answerButton--hidden"); //toggle hideMe question
    answer.classList.toggle("qcard__answerButton--hidden"); //toggle hideMe answer
  });
  // aus index.js
  // BOOKMARK
  const bookmark = document.querySelector('[data-js="qcard__bookmark"]'); //get bokmark button

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("qcard__bookmarked"); //toggle bookmark-color
    bookmark.classList.toggle("qcard__bookmark");
  });
});
