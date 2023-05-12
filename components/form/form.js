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
  newBookmarkSvg.classList.add("qcard__bookmark");
  newQuestion.classList.add("qcard__question");
  newAnswer.classList.add("qcard__answer");
  newAnswerButton.classList.add("qcard__answerButton");
  newUlist.classList.add("qcard__taglist");
  newListitem.classList.add("qcard__taglist__tag");

  newQuestion.textContent = data.formQuestion;
  newAnswer.textContent = data.formAnswer;
  newAnswerButton.textContent = `Show Answer`;
});
