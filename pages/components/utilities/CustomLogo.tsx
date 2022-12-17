import Image from "next/image";
import { createStyles } from "@mantine/core";
import { ImageSize } from "../../../types/utilities/ImageSize";

interface CustomLogoProps {
  imgSrc: string;
  size: ImageSize;
}

const useStyles = createStyles((theme, { width, height }: ImageSize) => ({
  logo: {
    objectFit: "contain",
  },
  logoContainer: {
    position: "relative",
    width,
    height,
  },
}));

function CustomLogo(props: CustomLogoProps) {
  const {
    imgSrc,
    size: { width, height },
  } = props;
  const { classes } = useStyles({ width, height });
  return (
    <div className={classes.logoContainer}>
      <Image className={classes.logo} src={imgSrc} alt={"some logo"} fill />
    </div>
  );
}

export default CustomLogo;
