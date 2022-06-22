import { createEl } from "./helpers";

const createMenu = function () {
  const contentMenu = createEl("div", null, "content--menu");

  const h2 = createEl("h2", "Our Delicacies", "menu--title");
  contentMenu.appendChild(h2);

  contentMenu.appendChild(createMenus("Pizzas"));
  contentMenu.appendChild(createMenus("Drinks"));

  return contentMenu;
};

const createMenus = function (category) {
  const menus = createEl("div", null, "menus");

  const h3 = createEl("h3", category, "menus--title");
  menus.appendChild(h3);

  const menusContainer = createEl("div", null, "menus--container");
  menus.appendChild(menusContainer);

  if (category === "Pizzas") {
    menusContainer.appendChild(
      createMenuItem(
        "./img/pepperoni.jpg",
        "Pepperoni",
        "Pepperoni Pizza",
        "$11.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem(
        "./img/meatlover.jpg",
        "Meatlovers",
        "Meat Lovers Pizza",
        "$13.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem(
        "./img/mozzarella.jpg",
        "Mozzarella",
        "Mozzarella Pizza",
        "$11.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem(
        "./img/vegetable.jpg",
        "Vegetable",
        "Vegetable Pizza",
        "$12.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem(
        "./img/mushroom.jpg",
        "Mushroom",
        "Mushroom Pizza",
        "$12.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem(
        "./img/supreme.jpg",
        "Super Supreme",
        "Super Supreme",
        "$15.99"
      )
    );
  } else {
    menusContainer.appendChild(
      createMenuItem(
        "./img/milkshake.jpg",
        "Strawberry Milkshake",
        "Strawberry Milkshake",
        "$4.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem(
        "./img/lychee.jpg",
        "Ice Lychee Tea",
        "Ice Lychee Tea",
        "$4.99"
      )
    );
    menusContainer.appendChild(
      createMenuItem("./img/coke.jpg", "Coke", "Coca-Cola", "$3.99")
    );
    menusContainer.appendChild(
      createMenuItem("./img/water.jpg", "Water", "Mineral Water", "$1.99")
    );
  }

  return menus;
};

const createMenuItem = function (imgsrc, imgalt, title, price) {
  const item = createEl("div", null, "menu");

  const img = createEl("img", null, null);
  img.src = imgsrc;
  img.alt = imgalt;
  item.appendChild(img);

  const h3 = createEl("h3", title, null);
  item.appendChild(h3);

  const p = createEl("p", price, null);
  item.appendChild(p);

  return item;
};

const loadMenu = function () {
  const content = document.querySelector(".content");
  content.textContent = "";
  content.appendChild(createMenu());
};

export default loadMenu;
