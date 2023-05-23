import { pushNewQuestionByFormIntoQuestionSets } from "../../utils/quiz-card-data.js";

const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", pushNewQuestionByFormIntoQuestionSets);
