import { questionSets } from "../index.js";

export function toggleBookmark(id) {
  questionSets = questionSets.map((questionSet) => {
    if (questionSet.id === id) {
      return { ...questionSet, isBookmarked: !questionSet.isBookmarked };
    }
    return questionSet;
  });
  localStorage.setItem("questionSets", JSON.stringify(questionSets));
}
