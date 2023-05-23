import { questionSets } from "../../utils/quiz-card-data.js";

function pushNewQuestionByFormIntoQuestionSets(event) {
  event.preventDefault();

  console.log("questionSets-beforePush:");
  console.log(questionSets);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionByForm = {
    question: data.formQuestion,
    answer: data.formAnswer,
    tag: ["created", data.formTag],
    isBookmarked: false,
  };
  console.log("newQuestionByForm:");
  console.log(newQuestionByForm); //loggs correct

  questionSets.push(newQuestionByForm);

  console.log("questionSets-afterPush:");
  console.log(questionSets); // check if pushed

  event.target.reset(); // reset inputs
  const form = document.querySelector('[data-js="form-newcard"]');
  form.formQuestion.focus(); // focus after submit zu question input
  return questionSets;
}

export { pushNewQuestionByFormIntoQuestionSets };
