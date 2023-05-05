const question = document.querySelector('[data-js="qcard__question"]'); //get question
const answer = document.querySelector('[data-js="qcard__answer"]'); //get answer
// question
const button = document.querySelector('[data-js="qcard__buttonAnswer"]'); //get button

button.addEventListener("click", () => {
  //click button
  question.classList.toggle("qcard__hideMe"); //toggle hideMe question
  answer.classList.toggle("qcard__hideMe"); //toggle hideMe answer
});

// bookmark
const bookmark = document.querySelector('[data-js="button_bookmark"]'); //get bokmark button

bookmark.addEventListener("click", () => {
  //click bookmark
  bookmark.classList.toggle("qcard__bookmarked"); //toggle bookmark-color
  bookmark.classList.toggle("qcard__bookmark");
});
