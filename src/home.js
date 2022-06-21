const mainView = function () {
  const content = document.getElementById("content");

  const nav = document.createElement("nav");
  nav.classList.add("nav");
  content.appendChild(nav);

  const title = document.createElement("div");
  title.classList.add("title");
  nav.appendChild(title);

  const titleContent = document.createElement("h1");
  titleContent.textContent = "Mook's Restaurant";
  title.appendChild(titleContent);

  //////////

  const main = document.createElement("main");
  main.classList.add("main");
  content.appendChild(main);

  //////////

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  main.appendChild(tabs);

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn", "tab__1", "tab__active");
  homeBtn.textContent = "HOME";
  tabs.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn", "tab__2");
  menuBtn.textContent = "MENU";
  tabs.appendChild(menuBtn);

  const contactsBtn = document.createElement("button");
  contactsBtn.classList.add("btn", "tab__2");
  contactsBtn.textContent = "CONTACTS";
  tabs.appendChild(contactsBtn);

  //////////

  const contentHome = document.createElement("div");
  contentHome.classList.add("content", "content--home");
  main.appendChild(contentHome);

  //////////

  const homeImage = document.createElement("img");
  homeImage.src = "../src/img/home-img.jpg";
  homeImage.alt = "Dish served in restaurant";
  homeImage.classList.add("main-img");
  contentHome.appendChild(homeImage);

  const h2 = document.createElement("h2");
  h2.textContent = "Heaven on earth, we deliver it to you";
  contentHome.appendChild(h2);

  const description = document.createElement("p");
  description.innerText =
    "What is heaven, if not the glorious fireworks that explode on your tastebuds? \n \n We at Mook's restaurant believe that heaven on earth exists, and that we can deliver it to you through our dedication and love for cooking. \n \n Our world-renowned chefs and passionate staff are here to make your savory experience something that your heart and mind keep coming  back to, every day, whenever meal time comes.";
  contentHome.appendChild(description);
};

export default mainView;
