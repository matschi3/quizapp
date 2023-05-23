/* import { questionSets } from "../../utils/quiz-card-data.js";

function pushNewQuestionByFormIntoQuestionSets(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  let newQuestionByForm = {
    question: data.formQuestion,
    answer: data.formAnswer,
    tag: ["created", data.formTag],
    isBookmarked: false,
  };
  console.log("newQuestionByForm:");
  console.log(newQuestionByForm); //loggs correct

  questionSets.push(newQuestionByForm);

  event.target.reset(); // reset inputs
  const form = document.querySelector('[data-js="form-newcard"]');
  form.formQuestion.focus(); // focus after submit zu question input
}

export { pushNewQuestionByFormIntoQuestionSets }; */
