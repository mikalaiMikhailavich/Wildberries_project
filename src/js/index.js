import { createCardItemComponent } from "./components/shopping/cardItem";

import { createAppComponent } from "./app";
import { addcartItem, cartItemContainer } from "./components/header/headerCart";
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

export let cartArray = [];
let source = [];

export const dataProvider = {
  add: function (id) {
    // let todo = {
    //   id: Date.now(),
    //   isChecked: false,
    //   text: name,
    //   date: new Date().toLocaleString(),
    // };
    array = source.find((elem) => elem.id == id);
    cartArray.push(array);
  },
  clear: function () {
    cartArray = [];
  },
  read: function () {
    return [...arrayOfTodoTasks];
  },
  deleteLast: function () {
    arrayOfTodoTasks.pop();
  },
  delete: function (index) {
    arrayOfTodoTasks.splice(index, 1);
  },
  update: function (index, todo) {
    arrayOfTodoTasks[index] = todo;
  },
};

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

document.body.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.closest(".card");
  const id = card?.id;
  console.log(id);
  if (id && target.classList.contains("button")) {
    const clickId = source.find((elem) => elem.id == id);
    cartArray.push(clickId);
    console.log(cartArray);
    // console.log(array);
    cartItemContainer.innerHTML = null;

    cartArray.forEach((elem) => {
      addcartItem(elem);
    });
  }
});
createAppComponent();

function sameId(array) {
  const countItems = {};
  for (const item of array) {
    console.log(item);
    countItems[item.id] = countItems[item.id] ? countItems[item.id] + 1 : 1;
  }
  console.log(countItems);
  // обрабатываем ключи объекта, отфильтровываем все, что меньше 1
  const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
  console.log(result);
}

sameId([{ id: 2 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 2 }]);

// dataProvider.clear(cartArray);
// cartArray.forEach((elem) => {
//   addcartItem(elem);
// });
