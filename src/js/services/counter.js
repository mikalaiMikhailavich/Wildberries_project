import { headerCounter, totalPrice } from "../components/header/headerCart";
import { cardDataprovider } from "./data";

export function updateCounters() {
  headerCounter.innerHTML = cardDataprovider.updateMainCounter();
  totalPrice.innerHTML = `${Math.trunc(cardDataprovider.updateFullPrice())}$`;
}
