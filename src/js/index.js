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

// const input = createInputComponent({ placeholder: "ewwadas" });
const image = document.createElement("img");
image.src = new URL("../assets/icons/basket.svg", import.meta.url);
import svgBasket from "bundle-text:../assets/icons/basket.svg";
const svgi = document.createElement("div");
svgi.innerHTML = svgBasket;
svgi.style.stroke = "red";
svgi.style.background = "blue";
svgi.style.background = "blue";
svgi.setAttribute("fill", "orange");
root.append(svgi);
// root.append(image);

let path = document.querySelector("path");
path.removeAttribute("fill");
console.log(path);
