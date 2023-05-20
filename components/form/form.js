import { questionSets } from "../../utils/quiz-card-data.js";

const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionByForm = {
    question: data.formQuestion,
    answer: data.formAnswer,
    tag: [data.formTag],
    isBookmarked: false,
  };
  console.log(newQuestionByForm); //loggs correct
  questionSets.push(newQuestionByForm);

  event.target.reset(); // reset inputs
  form.formQuestion.focus(); // focus after submit zu question input
});
