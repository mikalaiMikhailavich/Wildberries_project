import { sourceDataprovider, cardDataprovider } from "../js/services/data";
import { createCardItemComponent } from "./components/shopping/cardItem";
import { createAppComponent } from "./app";
import {
  addcartItem,
  cartItemContainer,
  headerCounter,
  totalPrice,
} from "./components/header/headerCart";

const url = "https://fakestoreapi.com/products";
const getOptions = { method: "GET" };
const getRequest = new Request(url, getOptions);

// createAppComponent();

function getFromAPI() {
  fetch(getRequest)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => sourceDataprovider.add(item));
      loadCards(sourceDataprovider.read());
    });
}

function loadCards(cardDataList) {
  cardDataList.forEach((data) => {
    createCardItemComponent(data);
  });
}
getFromAPI();

document.body.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.closest(".card");
  const id = card?.id;

  if (target.classList.contains("button__to-cart")) {
    const item = sourceDataprovider.getElement(id);
    console.log(item);
    cartItemContainer.innerHTML = null;
    cardDataprovider.add(item);

    let a = document.querySelectorAll(".card");
    console.log(a);
    const cardResults = cardDataprovider.read();
    const count = cardResults.map((value) => ({
      ...value,
      count: cardResults.filter((cr) => cr.id == value.id).length,
    }));
    console.log(count);
    target.disabled = true;
    console.log(self);
    count.forEach((elem) => {
      addcartItem(elem);
    });

    headerCounter.innerHTML = cardDataprovider.updateMainCounter();
    fullPrice.innerHTML = Math.trunc(cardDataprovider.updateFullPrice());
  }
});

document.body.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("cart__clear-button")) {
    cardDataprovider.clear();
    cartItemContainer.innerHTML = null;
    headerCounter.innerHTML = cardDataprovider.updateMainCounter();

    totalPrice.innerHTML = cardDataprovider.updateFullPrice();
  }
});

let fullPrice = document.querySelector(".cart__item-total-price");

// function sameId(array) {
//   const countItems = {};
//   for (const item of array) {
//     console.log(item);
//     countItems[item.id] = countItems[item.id] ? countItems[item.id] + 1 : 1;
//   }
//   console.log(countItems);

//   console.log(Object.keys(countItems));
//   const result = Object.keys(countItems).filter(
//     (item) => countItems[item] >= 1
//   );
//   console.log(result);
// }

// sameId([{ id: 2 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 4 }, { id: 4 }]);
