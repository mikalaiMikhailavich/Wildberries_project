import { createContainerComponent } from "../createElements";
import { headerLogoContainer } from "./headerLogo";
import { filterCards } from "../searchForm";
import { basketIcon } from "./headerBasket";
import { dropDown } from "./dropdownBasket";

const headerContainer = createContainerComponent({
  className: "container header__container",
  children: [headerLogoContainer, filterCards, basketIcon, dropDown],
});

export const header = createContainerComponent({
  id: "header",
  className: "header",
  children: [headerContainer],
});

basketIcon.addEventListener("mouseover", () =>
  dropDown.classList.add("displayOn")
);

basketIcon.addEventListener("mouseout", () =>
  dropDown.classList.remove("displayOn")
);
