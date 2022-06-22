export const createText = function (type, text) {
  const textContent = document.createElement(type);
  textContent.innerText = text;
  // textContent.classList.add(className);
  return textContent;
};
