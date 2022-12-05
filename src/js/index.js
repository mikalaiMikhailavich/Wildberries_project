import { sourceDataprovider, cardDataprovider } from "../js/services/data";
import { createAppComponent } from "./app";
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
      // data.map((elem) => {
      //   const isInCart = cardDataprovider.getElement(elem.id) != null;
      //   return { ...elem, disabled: isInCart };
      // });
      data.forEach((item) => sourceDataprovider.add(item));
      loadCards(sourceDataprovider.read());
      updateCounters();
    });
}

getFromAPI();

createAppComponent();
