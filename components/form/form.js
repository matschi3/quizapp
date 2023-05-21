//import { questionSets } from "../../utils/quiz-card-data.js";
import { pushNewQuestionByFormIntoQuestionSets } from "../../utils/pushNewQuestionByFormIntoQuestionSets.js";

const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionByForm = {
    question: data.formQuestion,
    answer: data.formAnswer,
    tag: ["created", data.formTag],
    isBookmarked: false,
  };
  console.log(newQuestionByForm); //loggs correct
  /*   console.log(typeof newQuestionByForm);
  console.log(typeof newQuestionByForm.question);
  console.log(typeof newQuestionByForm.answer);
  console.log(typeof newQuestionByForm.tag);
  console.log(typeof newQuestionByForm.isBookmarked);
  console.log("--- --- ---");
  console.log(Array.isArray(questionSets)); */

  pushNewQuestionByFormIntoQuestionSets(newQuestionByForm);
  console.log(questionSets);

  event.target.reset(); // reset inputs
  form.formQuestion.focus(); // focus after submit zu question input
  //return questionSets;
});

//export { questionSetsAndNewQuestionByForm };
//export { newQuestionByForm };
//export { questionSets };
