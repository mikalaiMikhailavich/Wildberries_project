import {
  createImageComponent,
  createContainerComponent,
} from "../createElements/index";

const headerLogo = createImageComponent({
  src: "imageUrl",
  alt: "headerLogo",
  className: "image header__logo",
});

export const headerLogoContainer = createContainerComponent({
  className: "header__logo-container",
  children: [headerLogo],
});
