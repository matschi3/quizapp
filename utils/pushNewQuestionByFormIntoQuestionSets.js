import { questionSets } from "../../utils/quiz-card-data.js";

function pushNewQuestionByFormIntoQuestionSets(newFormDataSet) {
  console.log(
    `was steckt in imported questionSets fur function ${questionSets}`
  );
  questionSets.push(newQuestionByForm);
}

export { pushNewQuestionByFormIntoQuestionSets };
