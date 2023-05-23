import { InitialQuestionSets } from "./utils/initialQuizCardData.js";
import { renderQuizCards } from "./utils/renderQuizCards.js";

// state
export let questionSets = [];

const questionSetsJSON = localStorage.getItem("questionSets");
if (questionSetsJSON) {
  questionSets = JSON.parse(questionSetsJSON);
} else {
  questionSets = InitialQuestionSets.map((quizCardObject) => quizCardObject);
}

renderQuizCards();
