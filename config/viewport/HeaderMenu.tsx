import { HeaderMenuProps } from "components/viewport/HeaderMenu";
import { ImageSize } from "types/utilities/ImageSize";

export const CONFIG_HEADER_FOOTER_HEIGHT = 122;

export const CONFIG_HEADERMENU: HeaderMenuProps = {
  links: [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/about-us",
      label: "About Us",
    },
    {
      link: "/projects",
      label: "Projects",
    },
    {
      link: "/contact",
      label: "Contact",
    },
  ],
};

export const CONFIG_LOGO_SIZE: ImageSize = {
  width: 120,
  height: 120,
};
