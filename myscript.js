// CREAZIONE ARRAY

const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

// CREAZIONE ELEMENTI DEL DOM

for (let i = 0; i < items.length; i++) {
  let divItem = document.createElement("div");
  document.getElementById("left-container").prepend(divItem);
  divItem.classList.add("item");
  let img = document.createElement("img");
  img.setAttribute("src", items[i]);
  let itemText = document.createElement("div");
  itemText.setAttribute("class", "item-container-left-text");
  let titleText = document.createElement("div");
  titleText.setAttribute("class", "title-text");
  let country = document.createElement("h4");
  country.append(title[i]);
  let subtitleText = document.createElement("div");
  subtitleText.setAttribute("class", "subtitle-text");
  let subtitle = document.createElement("h6");
  subtitleText.append(subtitle);
  subtitle.append(text[i]);
  itemText.append(titleText, subtitleText);
  titleText.append(country);
  divItem.append(img, itemText);
}

// SITUAZIONE DI PARTENZA

let currentIndex = 0;

const listaImmagini = document.getElementsByClassName("item");
const listaMiniature = document.getElementsByClassName("right-image");

if (currentIndex == 0) {
  listaImmagini[currentIndex].classList.add("active");
  listaMiniature[currentIndex].classList.add("right-image-active");
}

// FUNZIONE FRECCIA IN SU

const next = document.querySelector(".next");
next.addEventListener("click", function () {
  listaImmagini[currentIndex].classList.remove("active");
  listaMiniature[currentIndex].classList.remove("right-image-active");
  currentIndex += 1;
  if (currentIndex > 4) {
    currentIndex = 0;
  }
  listaImmagini[currentIndex].classList.add("active");
  listaMiniature[currentIndex].classList.add("right-image-active");
});

// FUNZIONE FRECCIA IN GIU'

const prev = document.querySelector(".prev");
prev.addEventListener("click", myFunction);
function myFunction() {
  listaImmagini[currentIndex].classList.remove("active");
  listaMiniature[currentIndex].classList.remove("right-image-active");
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = 4;
  }
  listaImmagini[currentIndex].classList.add("active");
  listaMiniature[currentIndex].classList.add("right-image-active");
}
