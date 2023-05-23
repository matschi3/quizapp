export function toggleAnswer() {
  newQuestion.classlist.toggle("quiz-card__answerButton--hidden");
  newAnswer.classList.toggle("quiz-card__answerButton--hidden");
}
