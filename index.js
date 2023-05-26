import { initialQuestionSets } from "./utils/initialQuizCardData.js";
import { renderQuizCards } from "./utils/renderQuizCards.js";

// state
export let questionSets = [];

const questionSetsJSON = localStorage.getItem("questionSets");
if (questionSetsJSON) {
  questionSets = JSON.parse(questionSetsJSON);
} else {
  questionSets = initialQuestionSets.map((questionSet) => questionSet);
}

renderQuizCards();
