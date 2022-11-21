import { renderElement } from "./renderElements";
const createElement = (className, value, placeholder) =>
  renderElement("input", {
    type: "text",
    className,
    value,
    placeholder,
  });

export const createInputComponent = (props = {}) => {
  const { className, value, placeholder, onChange } = props;

  const element = createElement(className, value, placeholder);
  if (onChange && typeof onChange === "function") {
    element.addEventListener("keyup", onChange);
  }

  return element;
};
