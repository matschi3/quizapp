const question = document.querySelector('[data-js="qcard__question"]'); //get question
const answer = document.querySelector('[data-js="qcard__answer"]'); //get answer
const button = document.querySelector('[data-js="qcard__buttonAnswer"]'); //get button

button.addEventListener("click", () => {
  //click button
  question.classList.toggle("qcard__hideMe"); //toggle hideMe question
  answer.classList.toggle("qcard__hideMe"); //toggle hideMe answer
});
