import { Container, createStyles } from "@mantine/core";
import HomepageHero from "pages/components/homepage/HomepageHero";
import HomepageNavigationRow from "pages/components/homepage/HomepageNavigationRow";
import HomepageNewsBulletinHeader from "pages/components/homepage/HomepageNewsBulletinHeader";
import HeaderMenu from "pages/components/viewport/HeaderMenu";
import { CONFIG_HEADERMENU } from "config/viewport/HeaderMenu";
import FooterMenu from "pages/components/viewport/FooterMenu";
import { CONFIG_FOOTERMENU } from "config/viewport/FooterMenu";

const useStyles = createStyles(() => ({
  container: {
    padding: 0,
    height: "fit-content",
  },

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
    <Container fluid className={classes.container}>
      <HeaderMenu links={CONFIG_HEADERMENU.links} />
      <Container fluid className={classes.root}>
        <HomepageHero />
        <HomepageNavigationRow />
        <HomepageNewsBulletinHeader />
      </Container>
      <FooterMenu links={CONFIG_FOOTERMENU.links} />
    </Container>
  );
}
