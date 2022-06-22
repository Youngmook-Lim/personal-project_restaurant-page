export const createEl = function (type, text = null, className = null) {
  const textContent = document.createElement(type);
  if (text !== null) {
    textContent.innerText = text;
  }
  if (className !== null) {
    textContent.classList.add(className);
  }
  return textContent;
};
