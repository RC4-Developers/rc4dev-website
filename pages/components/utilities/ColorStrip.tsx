import { createStyles } from "@mantine/core";

const useStyles = createStyles(
  (theme, { height, width, zIndex, color, translateX, rotate, dropShadow }: ColorStripProps) => ({
    rectangle: {
      height,
      width, // necessary to allow rectangle to appear. see https://www.codecademy.com/forum_questions/51015b60b85830d9c1005c22
      backgroundColor: theme.colors[color][5],
      zIndex,
      transform: `translateX(${translateX}) rotate(${rotate})`,
      boxShadow: dropShadow ?? false ? "inset 0px 25px 4px rgba(0, 0, 0, 0.25)" : "none",
      position: "absolute",
    },
  }),
);

interface ColorStripProps {
  height: string;
  width?: string;
  zIndex?: number;
  color: string;
  translateX: string;
  rotate: string;
  dropShadow?: boolean;
}

export function ColorStrip({
  height,
  width = "100%",
  zIndex = 0,
  color,
  translateX,
  rotate,
  dropShadow = false,
}: ColorStripProps) {
  const { classes } = useStyles({ height, width, zIndex, color, translateX, rotate, dropShadow });
  return <div className={classes.rectangle}></div>;
}
