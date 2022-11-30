import { createContainerComponent } from "../createElements";
import { headerLogoContainer } from "./headerLogo";
import { filterCards } from "../searchForm";
import { basket } from "./headerBasket";

const headerContainer = createContainerComponent({
  className: "container header__container",
  children: [headerLogoContainer, filterCards, basket],
});

export const header = createContainerComponent({
  id: "header",
  className: "header",
  children: [headerContainer],
});
