const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formQuestion = event.target.elements.formQuestion.value;
  const formAnswer = event.target.elements.formAnswer.value;
  const formTag = event.target.elements.formTag.value;
  console.log(formQuestion);
  console.log(formAnswer);
  console.log(formTag);
});
