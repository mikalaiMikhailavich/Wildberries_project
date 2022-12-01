import { createDataProvider } from "../js/services/data";
import { createCardItemComponent } from "./components/shopping/cardItem";
import { createAppComponent } from "./app";
import { addcartItem, cartItemContainer } from "./components/header/headerCart";
import { filterCards } from "./components/header/searchForm";
import { shoppingContainer } from "./components/shopping/shopping";

const url = "https://fakestoreapi.com/products";
const getOptions = { method: "GET" };
const getRequest = new Request(url, getOptions);

const sourceDataprovider = createDataProvider();
const cardDataprovider = createDataProvider();

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
  if (target.classList.contains("button__to-card")) {
    const item = sourceDataprovider.getElement(id);
    if (!item) {
      return;
    }
    cartItemContainer.innerHTML = null;
    cardDataprovider.add(item);
    const cardResults = cardDataprovider.read();
    const count = cardResults.map((value, index) => ({
      ...value,
      count: cardResults.filter((cr) => cr.id == value.id).length,
    }));
    console.log(count);
    count.forEach((elem) => {
      addcartItem(elem);
    });
  }
});

document.body.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("cart__clear-button")) {
    cardDataprovider.clear();
    cartItemContainer.innerHTML = null;
  }
});

function searchTodoCards(searchQuery) {
  let searchResults = sourceDataprovider
    .read()
    .filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  shoppingContainer.innerHTML = null;
  searchResults.forEach((card) => createCardItemComponent(card));
}
filterCards.addEventListener("keyup", () => searchTodoCards(filterCards.value));

function sameId(array) {
  const countItems = {};
  for (const item of array) {
    console.log(item);
    countItems[item.id] = countItems[item.id] ? countItems[item.id] + 1 : 1;
  }
  console.log(countItems);

  console.log(Object.keys(countItems));
  const result = Object.keys(countItems).filter(
    (item) => countItems[item] >= 1
  );
  console.log(result);
}

sameId([{ id: 2 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 4 }, { id: 4 }]);
