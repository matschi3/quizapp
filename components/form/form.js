import { pushNewQuestionByFormIntoQuestionSets } from "../../utils/pushNewQuestionByFormIntoQuestionSets.js";

const form = document.querySelector('[data-js="form-newcard"]');

form.addEventListener("submit", pushNewQuestionByFormIntoQuestionSets);
