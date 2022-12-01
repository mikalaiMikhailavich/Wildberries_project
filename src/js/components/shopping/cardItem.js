import {
  renderElement,
  createButtonElement,
  createImageComponent,
  createContainerComponent,
} from "../createElements/index";
import { shoppingContainer } from "./shopping";

export const createCardItemComponent = (data) => {
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
    innerHTML: `${rate} % `,
    className: "card__discount",
  });

  const buttonToBasket = createButtonElement({
    className: inBasket ? "button button__inBasket" : "button button__to-card",
    value: inBasket ? "В корзине" : "Добавить в корзину",
  });

  const discountValueAndButtonToBasketContainer = createContainerComponent({
    className: "card__discount-and-button-container",
    children: [discountValue, buttonToBasket],
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
