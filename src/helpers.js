export const createText = function (type, text) {
  const textContent = document.createElement(type);
  textContent.innerText = text;
  return textContent;
};
