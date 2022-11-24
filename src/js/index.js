import { createCardItemComponent } from "./components/createCard/cardItem";

import { createAppComponent } from "./app";

// let itemProperty = {
//   id: "x",
//   imageUrl: "http://loremflickr.com/640/480/cats",
//   inBasket: false,
//   discount: 10,
//   priceValue: 1000,
//   name: "x",
//   alt: "x",
// };

const url = "https://637e6ac15b1cc8d6f92d8fb8.mockapi.io/card";
const getOptions = { method: "GET" };

const getRequest = new Request(url, getOptions);
let source = [];

fetch(getRequest)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => source.push(data));
    loadCards(source);
  });

function loadCards(cardDataList) {
  cardDataList.forEach((data) => {
    const item = createCardItemComponent(data);
    root.append(item);
  });
}

const appComponent = createAppComponent();

// root.append(createCardItemComponent(itemProperty));

// const image = document.createElement("img");
// image.src = new URL("../assets/icons/basket.svg", import.meta.url);
// // root.append(image);

// let path = document.querySelector("path");
// path.removeAttribute("fill");
// console.log(path);
