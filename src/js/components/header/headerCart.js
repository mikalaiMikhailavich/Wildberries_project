import svgcart from "bundle-text:../../../assets/icons/cart.svg";
import { renderElement } from "../createElements/index";
import { createButtonElement } from "../createElements/index";
import { createContainerComponent } from "../createElements";
import { cardDataprovider, sourceDataprovider } from "../../services/data";
import { shoppingContainer } from "../shopping/shopping";
import { loadCards } from "../../services/dataApi";
import { updateCounters } from "../../services/counter";

//cart-header
export const buttonClearItemsCart = createButtonElement({
  className: "button cart__clear-button",
  value: "Очистить корзину",
  onClick: () => {
    cardDataprovider.clear();
    cartItemContainer.innerHTML = null;
    const buttonToBasket = document.querySelectorAll(".button__to-cart");
    buttonToBasket.forEach((elem) => (elem.disabled = false));
    sourceDataprovider.read().forEach((item) => (item.disabled = false));
    updateCounters();
  },
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

export const totalPrice = renderElement("h4", {
  className: "cart__item-total-price",
  innerHTML: "0",
});

const cartFooter = createContainerComponent({
  className: "cart__footer",
  children: [totalPriceText, totalPrice],
});

export const cartItemContainer = createContainerComponent({
  className: "cart__item-container",
});

export const cartContainer = createContainerComponent({
  className: "cart__container",
  children: [cartHeader, cartItemContainer, cartFooter],
});

// иконка корзины
const cartIcon = document.createElement("div");
cartIcon.innerHTML = svgcart;
cartIcon.className = "cart__icon";

export const headerCounter = renderElement("div", {
  className: "cart__icon-counter",
  innerHTML: `${cardDataprovider.updateMainCounter()}`,
});

// котнейнер иконки
const cartIconInner = createContainerComponent({
  className: "cart__icon-container",
  children: [cartIcon, headerCounter],
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
  const {
    title,
    price,
    id,
    // count,
    rating: { rate },
  } = data;

  const elem = renderElement("div", { className: "cart__item" });
  elem.dataset.id = id;

  const itemTitle = renderElement("h4", {
    innerHTML: title,
    className: "cart__item-title",
  });

  const itemPrice = renderElement("h4", {
    innerHTML: `${Math.trunc(price - price * rate * 0.01)}`,
  });
  console.log();
  const cartCountDecrease = createButtonElement({
    className: "cart__button-decrease",
    value: "-",
    onClick: () => {
      const item = cardDataprovider.getElement(id);
      console.log(item);
    },
  });

  const cartCount = renderElement("div", {
    className: "cart__count",
    // innerHTML: ,
  });
  let count = cardDataprovider.read().filter((elem) => (elem.id = id)).length;
  console.log(count);
  const cartCountIncrease = createButtonElement({
    className: "cart__button-increase",
    value: "+",
    onClick: () => {
      const item = cardDataprovider.getElement(id);
      console.log(item);
      // cardDataprovider.add(item);
      // updateCounters();
    },
  });

  const cartCountContainer = createContainerComponent({
    className: "cart__count",
    children: [cartCountDecrease, cartCount, cartCountIncrease],
  });

  const itemDelete = createButtonElement({
    className: "cart__button-delete",
    value: "x",
    onClick: () => {
      const item = cardDataprovider.getElement(id);
      const index = cardDataprovider.read().indexOf(item);
      cardDataprovider.delete(index);
      sourceDataprovider.getElement(id).disabled = false;

      const buttonTobasket = document.querySelector(`[data-name="${id}"]`);
      if (buttonTobasket) {
        buttonTobasket.disabled = false;
      }
      cartItemContainer.innerHTML = null;
      cardDataprovider.read().forEach((elem) => {
        addcartItem(elem);
      });
      updateCounters();
    },
  });

  elem.append(itemTitle, itemPrice, cartCountContainer, itemDelete);
  cartItemContainer.append(elem);
  return elem;
}

cartIconInner.addEventListener("click", () =>
  cartContainer.classList.toggle("hide")
);
