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
    onClick: () => {
      const item = sourceDataprovider.getElement(id);
      createModalCardItemComponent(item);
      // cartContainer.classList.add("hide");
      cartContainer.classList.remove("show");
    },
  });

  const discountValue = renderElement("div", {
    innerHTML: `-${rate} % `,
    className: "card__discount",
  });

  const buttonToBasket = createButtonElement({
    className: "button button__to-cart",
    value: "Добавить в корзину",
    onClick: () => {
      const card = sourceDataprovider.getElement(id);
      console.log(card);
      card.disabled = true;
      cardDataprovider.add(card);
      cartItemContainer.innerHTML = null;
      cardDataprovider.read().forEach((elem) => {
        addcartItem(elem);
      });
      buttonToBasket.disabled = true;

      updateCounters();
    },
  });
  buttonToBasket.dataset.name = id;

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
    image,
    alt,
    price,
    description,
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

  const cardName = renderElement("div", {
    className: "modal-card__name",
    innerHTML: title,
  });

  const close = createButtonElement({
    className: "modal-card__close",
    value: "x",
    onClick: () => {
      const modal = document.querySelector(".modal-card");
      modal.remove();
    },
  });

  const imageCardContainer = createContainerComponent({
    className: "modal-card__image-container",
    children: [imageCard, cardName, close],
  });

  card.append(imageCardContainer);
  modal.append(card);
  return card;
};
