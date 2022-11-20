import { discount, discount2 } from "./utils/tools";
import { createImageComponent } from "./createElements/index";
let itemProperty = {
  id: "x",
  imageURL: "https://www.onliner.by",
  inBasket: false,
  discount: discount,
};
console.log(discount);
console.log(discount2);

const root = document.querySelector(".root");

const image = createImageComponent({
  src: "http://loremflickr.com/640/480/cats",
  alt: "foto",
  className: "image",
});

root.append(image);
