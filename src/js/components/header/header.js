import { createContainerComponent } from "../createElements";
import { headerLogoContainer } from "./headerLogo";
import { filterCards } from "../searchForm";
import { basketIcon } from "./headerBasket";
export const header = createContainerComponent({
  id: "header",
  className: "header",
  children: [headerLogoContainer, filterCards, basketIcon],
});
