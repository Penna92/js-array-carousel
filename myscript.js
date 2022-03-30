// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// 1. costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// 2. scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

for(let i=0; i<items.length; i++){
    let divItem = document.createElement("div");
    document.getElementById("left-container").prepend(divItem);
    divItem.classList.add("item");
    let img = document.createElement("img");
    img.setAttribute("src", items[i]);
    let itemText = document.createElement("div");
    itemText.setAttribute("class", "item-container-left-text")
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

let currentIndex = 0;
const listaImmagini = document.getElementsByClassName("item");
const next = document.querySelector(".next");
next.addEventListener("click", function () {
  listaImmagini[currentIndex].classList.remove("active");
  currentIndex += 1;
  listaImmagini[currentIndex].classList.add("active");
});
