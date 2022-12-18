import { createStyles } from "@mantine/core";

const useStyles = createStyles(
  (
    theme,
    {
      height,
      width,
      zIndex,
      color,
      translateX,
      rotate,
      dropShadow,
      isPositionAbsolute,
    }: ColorStripProps,
  ) => ({
    rectangle: {
      height,
      width, // necessary to allow rectangle to appear. see https://www.codecademy.com/forum_questions/51015b60b85830d9c1005c22
      backgroundColor: theme.colors[color ?? "rc4teal"][5],
      zIndex,
      transform: `translateX(${translateX ?? "0%"}) rotate(${rotate ?? "0deg"})`,
      boxShadow: dropShadow,
      position: isPositionAbsolute ?? true ? "absolute" : "static",
    },
  }),
);

interface ColorStripProps {
  height?: string;
  width?: string;
  zIndex?: number;
  color?: string;
  translateX?: string;
  rotate?: string;
  dropShadow?: string;
  isPositionAbsolute?: boolean; // Unable to pass position as a string, so have to resort to boolean value
}

export default function ColorStrip({
  height = "100%",
  width = "100%",
  zIndex = 0,
  color = "rc4teal",
  translateX = "0",
  rotate = "0deg",
  dropShadow = "none",
  isPositionAbsolute = true,
}: ColorStripProps) {
  const { classes } = useStyles({
    height,
    width,
    zIndex,
    color,
    translateX,
    rotate,
    dropShadow,
    isPositionAbsolute,
  });
  return <div className={classes.rectangle}></div>;
}
