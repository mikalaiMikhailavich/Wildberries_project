import { createCardItemComponent } from "./components/shopping/cardItem";

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

const url = "https://fakestoreapi.com/products";
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
  });
}

const appComponent = createAppComponent();
