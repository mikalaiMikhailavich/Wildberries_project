import svgcart from "bundle-text:../../../assets/icons/cart.svg";
import { renderElement } from "../createElements/index";
import { createButtonElement } from "../createElements/index";
import { createContainerComponent } from "../createElements";

const cartItemContainer = createContainerComponent({
  className: "header__cart-item-container",
});

//
//cart-header
const buttonClearItemscart = createButtonElement({
  className: "button header__dropdown-button",
  value: "Очистить корзину",
});

const cartTitle = renderElement("h3", {
  className: "header__cart-title",
  innerHTML: "Корзина",
});

const cartHeader = createContainerComponent({
  className: "header__cart-header",
  children: [cartTitle, buttonClearItemscart],
});

const totalPriceText = renderElement("h4", {
  className: "cart-item-price-text",
  innerHTML: "Итого:",
});
const totalPrice = renderElement("h4", {
  className: "cart-item-total-price",
  innerHTML: "x",
});
const cartFooter = createContainerComponent({
  className: "header__cart-footer",
  children: [totalPriceText, totalPrice],
});

const cartContainer = createContainerComponent({
  className: "header__cart-container",
  children: [cartHeader, cartItemContainer, cartFooter],
});
//

// const cartInner = createContainerComponent({
//   className: "header__cart-content",
//   children: [cartContainer],
// });

//

// иконка корзины
const cartIcon = document.createElement("div");
cartIcon.innerHTML = svgcart;
cartIcon.className = "cart-icon";

// котнейнер иконки
const cartIconInner = createContainerComponent({
  className: "header__cart-icon",
  children: [cartIcon],
});
//

export const cart = createContainerComponent({
  className: "header__cart",
  children: [cartIconInner, cartContainer],
});

// cartIcon.style.stroke = "red";
// cartIcon.style.background = "blue";
// cartIcon.style.background = "blue";
// cartIcon.setAttribute("fill", "orange");

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
//   const elem = buttonClearItemscart;
//   if (e.target.classList.contains("button")) {
//     elem.value = "sadsa";
//   }
// });
addcartItem({
  title: "sdasa s d f a  s f  d a   f      s   d  a s",
  price: "$",
});
addcartItem({
  title: "sdasa s d f a  s f  d a   f      s   d  a s",
  price: "$",
});

export function addcartItem(data) {
  const { title, price } = data;
  const elem = renderElement("div", { className: "cart-item" });
  const itemTitle = renderElement("h4", {
    innerHTML: title,
    className: "cart-title",
  });

  const itemPrice = renderElement("h4", { innerHTML: price });
  elem.append(itemTitle, itemPrice);

  cartItemContainer.append(elem);
  // return element;
}
