import { createContainerComponent } from "../createElements";

export const shoppingContainer = createContainerComponent({
  className: "container shopping__container",
});
export const modal = createContainerComponent({
  className: "modal",
});
export const shopping = createContainerComponent({
  tagName: "section",
  id: "shopping",
  className: "shopping",
  children: [shoppingContainer, modal],
});
