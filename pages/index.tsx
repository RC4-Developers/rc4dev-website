import { Container, createStyles } from "@mantine/core";
import { HomepageHero } from "./components/homepage/HomepageHero";
import { HomepageNavigationRow } from "./components/homepage/HomepageNavigationRow";
import { HomepageNewsBulletinHeader } from "./components/homepage/HomepageNewsBulletinHeader";

const useStyles = createStyles(() => ({
  root: {
    paddingLeft: "0%",
    paddingRight: "0%",
  },

  newsBulletinHeader: {
    position: "relative",
    overflow: "hidden",
  },
}));

export default function Homepage() {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.root}>
      <HomepageHero />
      <HomepageNavigationRow />
      <HomepageNewsBulletinHeader />
    </Container>
  );
}
