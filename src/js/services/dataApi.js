import { addcartItem } from "../components/header/headerCart";
import { createCardItemComponent } from "../components/shopping/cardItem";
import { cardDataprovider } from "./data";

const localStorageDataKey = "wildberries";

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
