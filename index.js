// ANSWER BUTTON
const question = document.querySelector('[data-js="qcard__question"]'); //get question
const answer = document.querySelector('[data-js="qcard__answer"]'); //get answer
const button = document.querySelector('[data-js="qcard__answerButton"]'); //get button

button.addEventListener("click", () => {
  question.classList.toggle("qcard__answerButton--hidden"); //toggle hideMe question
  answer.classList.toggle("qcard__answerButton--hidden"); //toggle hideMe answer
});

// BOOKMARK
const bookmark = document.querySelector('[data-js="qcard__bookmark"]'); //get bokmark button

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("qcard__bookmarked"); //toggle bookmark-color
  bookmark.classList.toggle("qcard__bookmark");
});

// new
// new try - all cards
/* const qcards = document.querySelectorAll('[data-js="qcard"]');  //get full qcard

qcards.forEach((qcard) => {
    const answerButton = qcard.querySelector('[data-js=""]');
    answerButton.classList.
}); */
