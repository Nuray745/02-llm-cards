import { analyzeText } from "./utils.js";
import { addSnapshot, getHistory } from "./history.js";

const textarea = document.querySelector('#inputText');

const statChars = document.querySelector('#stat-chars');
const statWords = document.querySelector('#stat-words');
const statTokens = document.querySelector('#stat-tokens');

const saveBtn = document.querySelector('#save-btn');
const historyList = document.querySelector('#history-list');

textarea.addEventListener('input', function() {

  const analysis = analyzeText(textarea.value);

  statChars.textContent =
    'Characters: ' + analysis.characters;

  statWords.textContent =
    'Words: ' + analysis.words;

  statTokens.textContent =
    'Estimated tokens: ' + analysis.tokens;
});

saveBtn.addEventListener('click', function() {

  addSnapshot(textarea.value);

  renderHistory();
});

function renderHistory() {

  historyList.innerHTML = '';

  const history = getHistory();

  history.forEach(function(entry) {

    const li = document.createElement('li');

    li.textContent =
      entry.label +
      ' ' +
      entry.tokens +
      ' tokens, ' +
      entry.words +
      ' words, ' +
      entry.characters +
      ' characters';

    historyList.appendChild(li);
  });
}