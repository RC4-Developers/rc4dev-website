import { createStyles, Grid, Title } from "@mantine/core";
import { ColorStrip } from "../utilities/ColorStrip";

const useStyles = createStyles(() => ({
  newsBulletinHeader: {
    position: "relative",
    overflow: "hidden",
  },
}));

export function HomepageNewsBulletinHeader() {
  const { classes } = useStyles();
  return (
    <Grid className={classes.newsBulletinHeader}>
      <ColorStrip
        height={"70%"}
        width={"120%"}
        color={"rc4yellow"}
        translateX={"-46%"}
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
      <Grid.Col span={12}>
        <Title size={45} ml={15} mt={10}>
          News Bulletin
        </Title>
      </Grid.Col>
      <Grid.Col span={4} offset={4}>
        <Title size={50} mt={-15}>
          What&apos;s New?
        </Title>
      </Grid.Col>
    </Grid>
  );
}
