const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  // const formQuestion = event.target.elements.formQuestion.value;
  // const formAnswer = event.target.elements.formAnswer.value;
  // const formTag = event.target.elements.formTag.value;

  console.log(data.formQuestion);
  console.log(data.formAnswer);
  console.log(data.formTag);
});
