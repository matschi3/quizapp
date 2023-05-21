import { questionSets } from "../../utils/quiz-card-data.js";
import { newQuestionByForm } from "../components/form/form.js";

function pushNewQuestionByFormIntoQuestionSets(newFormDataSet) {
  console.log(questionSets);
  console.log(newQuestionByForm);
  questionSets.push(newQuestionByForm);
  //const questionSetsAndNew = questionSets;
  return questionSets;
}

export { pushNewQuestionByFormIntoQuestionSets };
