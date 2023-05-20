// import { quizCardData } from "./utils/quiz-card-data.js";
import { questionSets } from "./utils/quiz-card-data.js";

// BUTTONS
const quizCards = document.querySelectorAll('[data-js="quiz-card"]'); //get full quiz-card // container of all

quizCards.forEach((quizCard) => {
  // ANSWER BUTTON
  const question = quizCard.querySelector('[data-js="quiz-card__question"]'); //get question
  const answer = quizCard.querySelector('[data-js="quiz-card__answer"]'); //get answer
  const answerButton = quizCard.querySelector(
    '[data-js="quiz-card__answerButton"]'
  ); //get answerButton

  answerButton.addEventListener("click", () => {
    question.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe question
    answer.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe answer
  });

  // BOOKMARK
  const bookmark = quizCard.querySelector('[data-js="quiz-card__bookmark"]'); //get bokmark button

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("quiz-card__bookmarked"); //toggle bookmark-color
    bookmark.classList.toggle("quiz-card__bookmark");
  });
});
