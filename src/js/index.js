import { sourceDataprovider, cardDataprovider } from "../js/services/data";
import { createCardItemComponent } from "./components/shopping/cardItem";
import { createAppComponent } from "./app";
import {
  addcartItem,
  buttonClearItemsCart,
  cartItemContainer,
  headerCounter,
  totalPrice,
} from "./components/header/headerCart";
import { shoppingContainer } from "./components/shopping/shopping";
import { initStore, loadCards, saveInStorage } from "./services/dataApi";
import { updateCounters } from "./services/counter";

const url = "https://fakestoreapi.com/products";
const getOptions = { method: "GET" };
const getRequest = new Request(url, getOptions);

window.addEventListener("beforeunload", () => saveInStorage());

initStore();

function getFromAPI() {
  fetch(getRequest)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => sourceDataprovider.add(item));
      loadCards(sourceDataprovider.read());
      updateCounters();
    });
}

getFromAPI();

// document.body.addEventListener("click", (e) => {
//   const target = e.target;
//   const card = target.closest(".card");
//   const id = card?.id;

//   if (target.classList.contains("button__to-cart")) {
//     const item = sourceDataprovider.getElement(id);
//     item.disabled = true;
//     cardDataprovider.add(item);
//     console.log(cardDataprovider.read());
//     // console.log(sourceDataprovider.read());
//     // const cardResults = cardDataprovider.read();
//     // const count = cardResults.map((value) => ({
//     //   ...value,
//     //   count: cardResults.filter((cr) => cr.id == value.id).length,
//     //   disabledButton: (target.disabled = true),
//     // }));
//     cartItemContainer.innerHTML = null;
//     cardDataprovider.read().forEach((elem) => {
//       addcartItem(elem);
//     });

//     shoppingContainer.innerHTML = null;

//     loadCards(sourceDataprovider.read());
//     updateCounters();
//   }
// });

buttonClearItemsCart.addEventListener("click", () => {
  cardDataprovider.clear();
  cartItemContainer.innerHTML = null;
  shoppingContainer.innerHTML = null;
  sourceDataprovider.read().forEach((item) => (item.disabled = false));
  loadCards(sourceDataprovider.read());
  updateCounters();
});

//delete
cartItemContainer.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.closest(".cart__item");
  const id = card.dataset.id;
  console.log(id);
  if (e.target.classList.contains("cart__button-delete")) {
    const item = cardDataprovider.getElement(id);
    const index = cardDataprovider.read().indexOf(item);
    cardDataprovider.delete(index);
    console.log(cardDataprovider.read());
    const card = sourceDataprovider.getElement(id);
    console.log(card);
    card.disabled = false;
  }
  cartItemContainer.innerHTML = null;
  shoppingContainer.innerHTML = null;

  cardDataprovider.read().forEach((elem) => {
    addcartItem(elem);
  });
  loadCards(sourceDataprovider.read());
  updateCounters();
});

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
