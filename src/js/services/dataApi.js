import { addcartItem } from "../components/header/headerCart";
import { createCardItemComponent } from "../components/shopping/cardItem";
import { updateCounters } from "./counter";
import { cardDataprovider, sourceDataprovider } from "./data";

const localStorageDataKey = "wildberries";

const url = "https://fakestoreapi.com/products";
const getOptions = { method: "GET" };
const getRequest = new Request(url, getOptions);

export const initStore = () => {
  const storageData = localStorage.getItem(localStorageDataKey);
  const data = JSON.parse(storageData) || [];

  if (data.length) {
    data.forEach((item) => {
      cardDataprovider.add(item);
    });
    cardDataprovider.read().forEach((elem) => addcartItem(elem));
  }
};

export const saveInStorage = () => {
  const data = cardDataprovider.read();

  if (!data.length) {
    localStorage.setItem(localStorageDataKey, "[]");
    return;
  }

  localStorage.setItem(localStorageDataKey, JSON.stringify(data));
};

export function loadCards(cardDataList) {
  cardDataList.forEach((data) => {
    createCardItemComponent(data);
  });
}

export function getFromAPI() {
  fetch(getRequest)
    .then((response) => response.json())
    .then((data) => {
      // data.map((elem) => {
      //   const isInCart = cardDataprovider.getElement(elem.id) != null;
      //   return { ...elem, disabled: isInCart };
      // });
      data.forEach((item) => sourceDataprovider.add(item));
      loadCards(sourceDataprovider.read());
      updateCounters();
    });
}
