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
const image = createImageComponent({});
image.src = "/exampleImage.jpg";
root.append(image);

const xmlns = "http://www.w3.org/2000/svg";
const boxWidth = 64;
const boxHeight = 64;

const svg = document.createElementNS(xmlns, "svg");
svg.setAttributeNS(
  null,
  "viewBox",
  "0 0 " + boxWidth / 2 + " " + boxHeight / 2
);
svg.setAttributeNS(null, "width", boxWidth);
svg.setAttributeNS(null, "height", boxHeight);

const circle = document.createElementNS(xmlns, "circle");
circle.setAttributeNS(null, "cx", "50%");
circle.setAttributeNS(null, "cy", "50%");
circle.setAttributeNS(null, "r", "15");
circle.setAttributeNS(null, "stroke-width", "1px");
circle.setAttributeNS(null, "stroke", "red");

svg.append(circle);

document.body.append(svg);
