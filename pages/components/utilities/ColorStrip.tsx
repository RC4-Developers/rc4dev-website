import { createStyles } from "@mantine/core";

const useStyles = createStyles(
  (theme, { height, color, translateX, dropShadow }: ColorStripProps) => ({
    rectangle: {
      height,
      width: "100%", // necessary to allow rectangle to appear. see https://www.codecademy.com/forum_questions/51015b60b85830d9c1005c22
      backgroundColor: theme.colors[color][5],
      zIndex: 0,
      transform: `translateX(${translateX}) rotate(310deg)`,
      boxShadow: dropShadow ? "inset 0px 25px 4px rgba(0, 0, 0, 0.25)" : "none",
      position: "absolute",
    },
  }),
);

interface ColorStripProps {
  height: string;
  color: string;
  translateX: string;
  dropShadow: boolean;
}

export function ColorStrip({ height, color, translateX, dropShadow }: ColorStripProps) {
  const { classes } = useStyles({ height, color, translateX, dropShadow });
  return <div className={classes.rectangle}></div>;
}
