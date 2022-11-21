import { renderElement } from "./renderElements";
const createElement = (className, value) =>
  renderElement("input", {
    type: "button",
    value,
    className,
  });

export const createButtonElement = (props = {}) => {
  const { className, value, onClick } = props;

  const element = createElement(className, value);
  if (onClick && typeof onClick === "function") {
    element.addEventListener("click", onClick);
  }

  return element;
};
