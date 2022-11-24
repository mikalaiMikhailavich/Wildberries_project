import { createButtonElement, renderElement } from "../createElements";
import { createContainerComponent } from "../createElements/container";

// const

// const  priceItemInBasket =

const buttonClearItemsBasket = createButtonElement({
  className: "button header__dropdown-button",
  value: "Очистить корзину",
});

const basketTitle = renderElement("h3", {
  className: "dropdown-title",
  innerHTML: "Корзина",
});

const dropDownHeader = createContainerComponent({
  className: "header__dropdown-container",
  children: [basketTitle, buttonClearItemsBasket],
});

const dropDownContainer = createContainerComponent({
  className: "header__dropdown-container",
  children: [dropDownHeader],
});

export const dropDown = createContainerComponent({
  className: "header__dropdown",
  children: [dropDownContainer],
});

function createItemInBasket(props = {}) {
  const { id, inBasket, priceValue } = props;
}
