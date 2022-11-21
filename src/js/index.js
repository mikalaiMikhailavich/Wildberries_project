import { discount, discount2 } from "./utils/tools";
import { createImageComponent } from "./components/createElements/index";
let itemProperty = {
  id: "x",
  imageURL: "https://www.onliner.by",
  inBasket: false,
  discount: discount,
};
console.log(discount);
console.log(discount2);

const root = document.querySelector(".root");

root.append(image);
