import {
  renderElement,
  createButtonElement,
  createImageComponent,
  createCheckboxComponent,
  createContainerComponent,
  createTextboxComponent,
} from "../createElements/index";

export const createCardItemComponent = (data) => {
  const { id, name, inBasket, imageUrl, alt, discount, priceValue } = data;
  const card = createContainerComponent({
    id,
    className: inBasket ? "card card__inBasket" : "card",
  });

  const image = createImageComponent({
    src: imageUrl,
    alt: alt,
    className: "image card__image",
  });

  const buttonOpenCard = createButtonElement({
    className: "button button__modal",
    value: "Быстрый просмотр",
  });

  const discountValue = renderElement("div", {
    innerHTML: `${discount} % `,
    className: "card__discount",
  });

  const buttonToBasket = createButtonElement({
    className: inBasket ? "button button__inBasket" : "button",
    value: inBasket ? "В корзине" : "Добавить в корзину",
  });

  const discountValueAndButtonToBasketContainer = createContainerComponent({
    className: "card__discount-and-button-container",
    children: [discountValue, buttonToBasket],
  });

  const priceDiscount = renderElement("div", {
    innerHTML: `${(priceValue - priceValue * discount * 0, 01)}`,
    className: "card__price",
  });

  const price = renderElement("div", {
    innerHTML: priceValue,
    className: "card__price card__price_crossed-out",
  });

  const priceDiscountAndPriceContainer = createContainerComponent({
    className: "card__price-and-price-discount-container",
    children: [priceDiscount, price],
  });

  const cardName = renderElement("div", {
    innerHTML: name,
  });

  card.append(
    image,
    buttonOpenCard,
    discountValueAndButtonToBasketContainer,
    priceDiscountAndPriceContainer,
    cardName
  );
  console.log(card);
  return card;
};
