import { Container, createStyles } from "@mantine/core";
import HomepageHero from "components/homepage/HomepageHero";
import HomepageNavigationRow from "components/homepage/HomepageNavigationRow";
import HomepageArticlesHeader from "components/homepage/HomepageNewsBulletin/HomepageArticlesHeader";
import HomepageArticlesContainer from "components/homepage/HomepageNewsBulletin/HomepageArticlesContainer";

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
    <Container fluid className={classes.root}>
      <HomepageHero />
      <HomepageNavigationRow />
      <HomepageArticlesHeader />
      <HomepageArticlesContainer />
    </Container>
  );
}
