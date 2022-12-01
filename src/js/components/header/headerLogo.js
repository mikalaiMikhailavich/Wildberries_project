import {
  createImageComponent,
  createContainerComponent,
  renderElement,
} from "../createElements/index";

const headerLogo = createImageComponent({
  alt: "headerLogo",
  className: "image header__logo",
});

headerLogo.src = new URL(
  "../../../assets/icons/wildberries-logo.svg",
  import.meta.url
);

export const headerLogoContainer = createContainerComponent({
  className: "header__logo-container",
  children: [headerLogo],
});
