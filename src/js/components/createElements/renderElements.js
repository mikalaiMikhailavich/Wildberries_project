export const renderElement = (tagName, options = {}) => {
  let element = document.createElement(tagName);

  let customProperties = [
    "innerHTML",
    "className",
    "class",
    "classList",
    "checked",
    "readOnly",
    "src",
    "alt",
    "disabled",
  ];
  for (const prop in options) {
    if (!options[prop]) {
      continue;
    }

    if (!customProperties.includes(prop)) {
      element.setAttribute(prop, options[prop]);
    } else {
      switch (prop) {
        case "innerHTML":
        case "checked":
        case "classList":
        case "className":
        case "readOnly":
        case "src":
        case "alt":
          element[prop] = options[prop];
          break;
        default:
          break;
      }
    }
  }
  return element;
};
