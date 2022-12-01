import svgcart from "bundle-text:../../../assets/icons/cart.svg";
import { renderElement } from "../createElements/index";
import { createButtonElement } from "../createElements/index";
import { createContainerComponent } from "../createElements";

//cart-header
const buttonClearItemsCart = createButtonElement({
  className: "button cart__clear-button",
  value: "Очистить корзину",
});

const cartTitle = renderElement("h3", {
  className: "cart__title",
  innerHTML: "Корзина",
});

const cartHeader = createContainerComponent({
  className: "cart__header",
  children: [cartTitle, buttonClearItemsCart],
});

// Footer
const totalPriceText = renderElement("h4", {
  className: "cart__item-price-text",
  innerHTML: "Итого:",
});
const totalPrice = renderElement("h4", {
  className: "cart__item-total-price",
  innerHTML: "x",
});
const cartFooter = createContainerComponent({
  className: "cart__footer",
  children: [totalPriceText, totalPrice],
});

export const cartItemContainer = createContainerComponent({
  className: "cart__item-container",
});

const cartContainer = createContainerComponent({
  className: "cart__container",
  children: [cartHeader, cartItemContainer, cartFooter],
});

// иконка корзины
const cartIcon = document.createElement("div");
cartIcon.innerHTML = svgcart;
cartIcon.className = "cart__icon";

// котнейнер иконки
const cartIconInner = createContainerComponent({
  className: "cart__icon-container",
  children: [cartIcon],
});
//

export const cart = createContainerComponent({
  className: "cart header__cart",
  children: [cartIconInner, cartContainer],
});

// cartIcon.style.stroke = "red";
// cartIcon.style.background = "blue";
// cartIcon.style.background = "blue";
// cartIcon.setAttribute("fill", "orange");

export function addcartItem(data) {
  const { title, price } = data;

  const elem = renderElement("div", { className: "cart__item" });

  const itemTitle = renderElement("h4", {
    innerHTML: title,
    className: "cart__item-title",
  });

  const itemPrice = renderElement("h4", { innerHTML: price });

  const cartCountDecrease = createButtonElement({
    className: "cart__button-decrease",
    value: "-",
  });

  const cartCount = renderElement("div", {
    className: "cart__count",
    innerHTML: "0",
  });

  const cartCountIncrease = createButtonElement({
    className: "cart__button-increase",
    value: "+",
  });

  const cartCountContainer = createContainerComponent({
    className: "cart__count",
    children: [cartCountDecrease, cartCount, cartCountIncrease],
  });

  const itemDelete = createButtonElement({
    className: "cart__button-delete",
    value: "x",
  });

  elem.append(itemTitle, itemPrice, cartCountContainer, itemDelete);
  cartItemContainer.append(elem);
  return elem;
}
