import { analyzeText } from "./utils.js";

export const history = [];

export function addSnapshot(text) {
  const analysis = analyzeText(text);

  analysis.label = "Snapshot " + (history.length + 1);

  history.push(analysis);
}

export function getHistory() {
  return history;
}