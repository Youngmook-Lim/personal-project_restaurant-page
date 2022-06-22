import { createText } from "./helpers";

const createHome = function () {
  const contentHome = document.createElement("div");
  contentHome.classList.add("content--home");

  const homeImage = document.createElement("img");
  homeImage.src = "./img/home-img.jpg";
  homeImage.alt = "Dish served in restaurant";
  homeImage.classList.add("main-img");
  contentHome.appendChild(homeImage);

  contentHome.appendChild(
    createText("h2", "Heaven on earth, we deliver it to you")
  );

  contentHome.appendChild(
    createText(
      "p",
      "What is heaven, if not the glorious fireworks that explode on your tastebuds? \n \n We at Mook's restaurant believe that heaven on earth exists, and that we can deliver it to you through our dedication and love for cooking. \n \n Our world-renowned chefs and passionate staff are here to make your savory experience something that your heart and mind keep coming  back to, every day, whenever meal time comes."
    )
  );

  return contentHome;
};

const loadHome = function () {
  const content = document.querySelector(".content");
  content.textContent = "";
  content.appendChild(createHome());
};

export default loadHome;
