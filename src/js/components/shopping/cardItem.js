import { loadCards } from "../../services/dataApi";
import { cardDataprovider, sourceDataprovider } from "../../services/data";
import {
  renderElement,
  createButtonElement,
  createImageComponent,
  createContainerComponent,
} from "../createElements/index";
import {
  addcartItem,
  cartContainer,
  cartItemContainer,
} from "../header/headerCart";
import { modal, shoppingContainer } from "./shopping";
import { updateCounters } from "../../services/counter";

export const createCardItemComponent = (data) => {
  const {
    id,
    title,
    inBasket,
    image,
    alt,
    price,
    disabled,
    rating: { rate },
  } = data;
  const card = createContainerComponent({
    id,
    className: inBasket ? "card card__inBasket" : "card",
  });

  const imageCard = createImageComponent({
    src: image,
    alt: alt,
    className: "image card__image",
  });

  const buttonOpenCard = createButtonElement({
    className: "button button__modal",
    value: "Быстрый просмотр",
  });

  const discountValue = renderElement("div", {
    innerHTML: `-${rate} % `,
    className: "card__discount",
  });

  const buttonToBasket = createButtonElement({
    className: "button button__to-cart",
    value: "Добавить в корзину",
    onClick: (e) => {
      const target = e.target;
      const card = target.closest(".card");
      const id = card?.id;

      if (target.classList.contains("button__to-cart")) {
        const card = sourceDataprovider.getElement(id);
        card.disabled = true;
        cardDataprovider.add(card);
        cartItemContainer.innerHTML = null;
        cardDataprovider.read().forEach((elem) => {
          addcartItem(elem);
        });
        shoppingContainer.innerHTML = null;
        loadCards(sourceDataprovider.read());
        updateCounters();
      }
    },
  });
  const inCart = cardDataprovider.getElement(id) != null;
  buttonToBasket.disabled = disabled || inCart;

  const discountValueAndButtonToBasketContainer = createContainerComponent({
    className: "card__discount-and-button-container",
    children: [discountValue, buttonToBasket],
  });

  const priceDiscount = renderElement("div", {
    innerHTML: `${Math.trunc(price - price * rate * 0.01)}$`,
    className: "card__price",
  });

  const priceElement = renderElement("div", {
    innerHTML: price,
    className: "card__price card__price_crossed-out",
  });

  const priceDiscountAndPriceContainer = createContainerComponent({
    className: "card__price-and-price-discount-container",
    children: [priceDiscount, priceElement],
  });

  const cardName = renderElement("div", {
    className: "card__title",
    innerHTML: title,
  });

  card.append(
    imageCard,
    buttonOpenCard,
    discountValueAndButtonToBasketContainer,
    priceDiscountAndPriceContainer,
    cardName
  );
  shoppingContainer.append(card);
  return card;
};

export const createModalCardItemComponent = (data) => {
  const {
    id,
    title,
    inBasket,
    image,
    alt,
    price,
    rating: { rate },
  } = data;
  const card = createContainerComponent({
    id,
    className: "modal-card",
  });

  const imageCard = createImageComponent({
    src: image,
    alt: alt,
    className: "image modal-card__image",
  });

  // const buttonOpenCard = createButtonElement({
  //   className: "button button__modal",
  //   value: "Быстрый просмотр",
  // });

  const discountValue = renderElement("div", {
    innerHTML: `${rate} % `,
    className: "card__discount",
  });

  const discountValueAndButtonToBasketContainer = createContainerComponent({
    className: "card__discount-and-button-container",
    children: [discountValue],
  });

  const priceDiscount = renderElement("div", {
    innerHTML: `${Math.trunc(price - price * rate * 0.01)}`,
    className: "card__price",
  });

  const priceElement = renderElement("div", {
    innerHTML: price,
    className: "card__price card__price_crossed-out",
  });

  const priceDiscountAndPriceContainer = createContainerComponent({
    className: "card__price-and-price-discount-container",
    children: [priceDiscount, priceElement],
  });

  const cardName = renderElement("div", {
    innerHTML: title,
  });

  const close = createButtonElement({
    className: "close-modal",
    value: "x",
  });

  card.append(
    imageCard,
    discountValueAndButtonToBasketContainer,
    priceDiscountAndPriceContainer,
    cardName,
    close
  );
  modal.append(card);
  return card;
};

document.body.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.closest(".card");
  const id = card?.id;
  if (target.classList.contains("button__modal")) {
    const item = sourceDataprovider.getElement(id);
    createModalCardItemComponent(item);
    cartContainer.classList.add("hide");
  }
});

document.body.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("close-modal")) {
    const mod = document.querySelector(".modal-card");
    console.log(mod);
    mod.remove();
  }
});
