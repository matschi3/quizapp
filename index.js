/* // ANSWER BUTTON
const question = document.querySelector('[data-js="quiz-card__question"]'); //get question
const answer = document.querySelector('[data-js="quiz-card__answer"]'); //get answer
const answerButton = document.querySelector(
  '[data-js="quiz-card__answerButton"]'
); //get button

answerButton.addEventListener("click", () => {
  question.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe question
  answer.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe answer
});

// BOOKMARK
const bookmark = document.querySelector('[data-js="quiz-card__bookmark"]'); //get bokmark button

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("quiz-card__bookmarked"); //toggle bookmark-color
  bookmark.classList.toggle("quiz-card__bookmark");
}); */

// new try - all cards
const quizCards = document.querySelectorAll('[data-js="quiz-card"]'); //get full quiz-card // container of all

quizCards.forEach((quizCard) => {
  // ANSWER BUTTON
  const answerButton = quizCard.querySelector(
    '[data-js="quiz-card__answerButton"]'
  );

  answerButton.addEventListener("click", () => {
    question.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe question
    answer.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe answer
  });

  // BOOKMARK
  const bookmark = quizCard.querySelector('[data-js="quiz-card__bookmark"]'); //get bokmark button
  const question = quizCard.querySelector('[data-js="quiz-card__question"]'); //get question
  const answer = quizCard.querySelector('[data-js="quiz-card__answer"]'); //get answer

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("quiz-card__bookmarked"); //toggle bookmark-color
    bookmark.classList.toggle("quiz-card__bookmark");
  });
});
