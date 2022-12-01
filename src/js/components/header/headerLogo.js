import {
  createImageComponent,
  createContainerComponent,
} from "../createElements/index";

const headerLogo = createImageComponent({
  alt: "headerLogo",
  className: "image header__logo",
});

headerLogo.src = new URL(
  "../../../assets/img/wb_logo_bf_2022_r.png",
  import.meta.url
);

export const headerLogoContainer = createContainerComponent({
  className: "header__logo-container",
  children: [headerLogo],
});
