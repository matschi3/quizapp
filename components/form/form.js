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
  const newQuestionP = document.createElement("p");
  const newAnswerP = document.createElement("p");
  const newAnswerButton = document.createElement("button");
  const newUlist = document.createElement("ul");
  const newListitem = document.createElement("li");

  newSection.classList.add("qcard");
  newBookmarkSvg.classList.add("qcard__bookmark");
  newQuestionP.classList.add("qcard__question");
  newAnswerP.classList.add("qcard__answer");
  newAnswerButton.classList.add("qcard__answerButton");
  newUlist.classList.add("qcard__taglist");
  newListitem.classList.add("qcard__taglist__tag");
});
