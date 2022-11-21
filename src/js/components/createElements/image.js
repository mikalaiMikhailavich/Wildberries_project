import { renderElement } from "./renderElements";

const createElement = (src, alt, className) =>
  renderElement("img", {
    src,
    alt,
    className,
  });

export const createImageComponent = (props = {}) => {
  const { src, alt, className } = props;

  const element = createElement(src, alt, className);
  return element;
};
