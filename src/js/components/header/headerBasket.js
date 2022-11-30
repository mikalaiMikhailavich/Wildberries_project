import svgBasket from "bundle-text:../../../assets/icons/basket.svg";
import { renderElement } from "../createElements/index";
import { createButtonElement } from "../createElements/index";
import { createContainerComponent } from "../createElements";

export function addBasketItem(data) {
  const { title } = data;
  const itemTitle = renderElement("div", { innerHTML: title });
  console.log(itemTitle);
  const element = createContainerComponent({
    className: "",
    children: [itemTitle],
  });
  basketItemContainer.append(element);
  return element;
}

// addBasketItem()
const basketItemContainer = createContainerComponent({
  className: "header__basket-item-container",
});

//

const buttonClearItemsBasket = createButtonElement({
  className: "button header__dropdown-button",
  value: "Очистить корзину",
});

const basketTitle = renderElement("h3", {
  className: "dropdown-title",
  innerHTML: "Корзина",
});

const basketHeader = createContainerComponent({
  className: "header__basket-header",
  children: [basketTitle, buttonClearItemsBasket],
});

const basketContainer = createContainerComponent({
  className: "header__basket-container",
  children: [basketHeader, basketItemContainer],
});

const basketInner = createContainerComponent({
  className: "header__basket-content",
  children: [basketContainer],
});

//

//
const basketIcon = document.createElement("div");
basketIcon.innerHTML = svgBasket;
basketIcon.className = "icon";

const basketIconInner = createContainerComponent({
  className: "header__basket-icon",
  children: [basketIcon],
});
//

export const basket = createContainerComponent({
  className: "header__basket",
  children: [basketIconInner, basketInner],
});

// basketIcon.style.stroke = "red";
// basketIcon.style.background = "blue";
// basketIcon.style.background = "blue";
// basketIcon.setAttribute("fill", "orange");

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
//   const elem = buttonClearItemsBasket;
//   if (e.target.classList.contains("button")) {
//     elem.value = "sadsa";
//   }
// });
addBasketItem({ title: "sdasdaf" });
