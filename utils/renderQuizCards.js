import { createQuizCard } from "../components/quiz-card/quiz-card.js";
import { toggleBookmark } from "./toggleBookmark.js";

export function renderQuizCards() {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  cardContainer.innerHTML = "";

  questionSets.forEach((questionSet) => {
    const quizCard = createQuizCard(
      questionSet,
      () => {
        toggleBookmark(questionSet.id);
        renderQuizCards();
      },
      () => {
        toggleAnswer();
        renderQuizCards();
      }
    );
    cardContainer.append(quizCard);
  });
}
