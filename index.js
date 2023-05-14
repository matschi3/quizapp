// ANSWER BUTTON
const question = document.querySelector('[data-js="quiz-card__question"]'); //get question
const answer = document.querySelector('[data-js="quiz-card__answer"]'); //get answer
const button = document.querySelector('[data-js="quiz-card__answerButton"]'); //get button

button.addEventListener("click", () => {
  question.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe question
  answer.classList.toggle("quiz-card__answerButton--hidden"); //toggle hideMe answer
});

// BOOKMARK
const bookmark = document.querySelector('[data-js="quiz-card__bookmark"]'); //get bokmark button

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("quiz-card__bookmarked"); //toggle bookmark-color
  bookmark.classList.toggle("quiz-card__bookmark");
});

// new
// new try - all cards
/* const quiz-cards = document.querySelectorAll('[data-js="quiz-card"]');  //get full quiz-card

quiz-cards.forEach((quiz-card) => {
    const answerButton = quiz-card.querySelector('[data-js=""]');
    answerButton.classList.
}); */
