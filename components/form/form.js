//import { questionSets } from "../../utils/quiz-card-data.js";
import { pushNewQuestionByFormIntoQuestionSets } from "../../utils/pushNewQuestionByFormIntoQuestionSets.js";
import { questionSets } from "../../utils/quiz-card-data.js";

const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
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

  /* questionSets =  */ pushNewQuestionByFormIntoQuestionSets(
    newQuestionByForm
  );
  console.log("after function inside eventSubmit:");
  console.log(questionSets);

  event.target.reset(); // reset inputs
  form.formQuestion.focus(); // focus after submit zu question input
  return questionSets;
});

//export { newQuestionByForm };
export { pushNewQuestionByFormIntoQuestionSets };
