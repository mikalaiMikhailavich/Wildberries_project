import {
  renderElement,
  createButtonElement,
  createCheckboxComponent,
  createContainerComponent,
  createTextboxComponent,
} from "../createElements/index";

export const createCardItemComponent = (data) => {
  const { id, name, inBasket, src, discount, price } = data;

  const card = createContainerComponent({
    id,
    className: inBasket ? "card card__inBasket" : "card",
  });

  const image = createImageComponent({
    src: src,
    alt: alt,
    className: "image card__image",
  });

  const buttonOpenCard = createButtonElement({
    className: "button button__modal",
    value: "Быстрый просмотр",
  });

  card.append(image, buttonOpenCard, closeBtn, dateLabel);

  return card;
};
