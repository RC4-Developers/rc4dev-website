import { HeaderMenuProps } from "../../components/viewport/HeaderMenu";
import { ImageSize } from "../../types/utilities/ImageSize";

export const CONFIG_HEADER_FOOTER_HEIGHT = 100;

export const CONFIG_HEADERMENU: HeaderMenuProps = {
  links: [
    {
      link: "/home",
      label: "Home",
    },
    {
      link: "/aboutUs",
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
