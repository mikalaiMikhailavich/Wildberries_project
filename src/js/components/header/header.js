import { createContainerComponent } from "../createElements";
import { headerLogoContainer } from "./headerLogo";
import { filterCards } from "../searchForm";
import { cart } from "./headerCart";

const headerContainer = createContainerComponent({
  className: "container header__container",
  children: [headerLogoContainer, filterCards, cart],
});

export const header = createContainerComponent({
  id: "header",
  className: "header",
  children: [headerContainer],
});
