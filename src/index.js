"use strict";

import { createEl } from "./helpers";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContacts from "./contacts";

const createNav = function () {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const title = document.createElement("div");
  title.classList.add("title");
  nav.appendChild(title);

  title.appendChild(createEl("h1", "Mook's Restaurant"));

  return nav;
};

const createTabs = function () {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn", "tab__1", "tab__active");
  homeBtn.textContent = "HOME";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab__active")) return;
    loadHome();
    toggleActiveBtn(homeBtn);
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn", "tab__2");
  menuBtn.textContent = "MENU";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab__active")) return;
    loadMenu();
    toggleActiveBtn(menuBtn);
  });

  const contactsBtn = document.createElement("button");
  contactsBtn.classList.add("btn", "tab__2");
  contactsBtn.textContent = "CONTACTS";
  contactsBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab__active")) return;
    loadContacts();
    toggleActiveBtn(contactsBtn);
  });

  tabs.appendChild(homeBtn);
  tabs.appendChild(menuBtn);
  tabs.appendChild(contactsBtn);

  return tabs;
};

const createContent = function () {
  const content = document.createElement("div");
  content.classList.add("content");

  return content;
};

const createMain = function () {
  const main = document.createElement("main");
  main.classList.add("main");

  main.appendChild(createTabs());
  main.appendChild(createContent());

  return main;
};

const toggleActiveBtn = function (button) {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    if (btn != button) {
      btn.classList.remove("tab__active");
    }
    button.classList.add("tab__active");
  });
};

const init = function () {
  const content = document.getElementById("content");
  content.appendChild(createNav());
  content.appendChild(createMain());
  loadHome();
};

init();
