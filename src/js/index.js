import { discount, discount2 } from "./utils/tools";
import { createImageComponent } from "./components/createElements/index";
import { createCardItemComponent } from "./components/createCard/cardItem";
import { createInputComponent } from "./components/createElements/input";
let itemProperty = {
  id: "x",
  imageUrl: "http://loremflickr.com/640/480/cats",
  inBasket: false,
  discount: 10,
  priceValue: 1000,
  name: "x",
  alt: "x",
};
let source = [
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
  itemProperty,
];
console.log(discount);
console.log(discount2);

const root = document.querySelector(".root");

function loadTodos(cardDataList) {
  cardDataList.forEach((data) => {
    const item = createCardItemComponent(data);
    root.append(item);
  });
}
loadTodos(source);
// root.append(createCardItemComponent(itemProperty));
const input = createInputComponent({ placeholder: "ewwadas" });

root.append(input);
