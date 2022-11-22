import { createContainerComponent } from "../createElements";
import { headerLogoContainer } from "./headerLogo";
import { filterCards } from "../searchForm";
export const header = createContainerComponent({
  id: "header",
  className: "header",
  children: [headerLogoContainer, filterCards],
});
