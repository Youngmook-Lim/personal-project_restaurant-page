import { createEl } from "./helpers";

const createContacts = function () {
  const contentContacts = createEl("div", null, "content--contacts");

  const h2 = createEl(
    "h2",
    "We are never far from you. \nWe're serious.",
    "contacts--title"
  );
  contentContacts.appendChild(h2);

  const contactsContainer = createEl("div", null, "contacts--container");
  contentContacts.appendChild(contactsContainer);

  const phone = createEl("p", "📞 010-1234-5678", null);
  contactsContainer.appendChild(phone);

  const address = createEl("p", "🏠 Where you are, there we are. Look below ⬇");
  contactsContainer.appendChild(address);

  const mapDiv = createEl("div", null, null);
  mapDiv.setAttribute("id", "map");
  contactsContainer.appendChild(mapDiv);

  return contentContacts;
};

const getPosition = function () {
  navigator.geolocation.getCurrentPosition(loadMap, () => alert("error"));
};

const loadMap = function (pos) {
  const { latitude } = pos.coords;
  const { longitude } = pos.coords;
  const coords = [latitude, longitude];

  const map = L.map("map").setView(coords, 16);

  L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);

  const marker = L.marker(coords).addTo(map);

  marker
    .bindPopup(
      L.popup({
        maxWidth: 130,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "marker",
        closeButton: false,
      })
    )
    .setPopupContent("HELLO THERE")
    .openPopup();
};

const loadContacts = function () {
  const content = document.querySelector(".content");
  content.textContent = "";
  content.appendChild(createContacts());
  getPosition();
};

export default loadContacts;
