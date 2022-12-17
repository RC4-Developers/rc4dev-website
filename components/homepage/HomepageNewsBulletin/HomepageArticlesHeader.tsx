import { createStyles, Grid, Title } from "@mantine/core";
import ColorStrip from "components/utilities/ColorStrip";

const useStyles = createStyles(() => ({
  root: {
    position: "relative",
    overflow: "hidden",
    paddingBottom: "1%",
    borderBottom: "1px solid #000000",
    margin: 0,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function ColorStrips() {
  return (
    <div>
      <ColorStrip
        height={"70%"}
        width={"200%"}
        color={"rc4yellow"}
        translateX={"-50%"}
        rotate={"-7.5deg"}
        zIndex={-1}
        dropShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      />
      <ColorStrip
        height={"40%"}
        width={"120%"}
        color={"rc4teal"}
        translateX={"1%"}
        rotate={"9.5deg"}
        zIndex={-2}
      />
    </div>
  );
}

export default function HomepageArticlesHeader() {
  const { classes } = useStyles();
  return (
    <Grid className={classes.root}>
      <ColorStrips />
      <Grid.Col span={12}>
        <Title size={45} ml={15} mt={10}>
          News Bulletin
        </Title>
      </Grid.Col>
      <Grid.Col span={4} offset={4} className={classes.textContainer}>
        <Title size={50} mt={-15} mb={15}>
          What&apos;s New?
        </Title>
      </Grid.Col>
    </Grid>
  );
}
