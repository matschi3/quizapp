import { questionSets } from "../../utils/quiz-card-data.js";
//import { newQuestionByForm } from "../components/form/form.js";

function pushNewQuestionByFormIntoQuestionSets(newFormDataSet) {
  console.log("inside pushNewQuest:");
  console.log(questionSets);
  console.log("---/---/---");

  const questionSetsPlus = questionSets.push(newFormDataSet);
  questionSets = questionSetsPlus;
  console.log("inside/after pushNewQuest:");
  console.log(questionSets);
  console.log("---/---/---");
  return questionSets;
}

export { pushNewQuestionByFormIntoQuestionSets };
