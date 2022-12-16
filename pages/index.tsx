import { Container, createStyles, Group, Title } from "@mantine/core";
import { HomepageHero } from "./components/homepage/HomepageHero";
import { HomepageNavigationRow } from "./components/homepage/HomepageNavigationRow";

const useStyles = createStyles(() => ({
  root: {
    paddingLeft: "0%",
    paddingRight: "0%",
  },
  navigationRow: {
    width: "100%",
    height: "14vh",
  },
  navigationBox: {
    height: "100%",
    backgroundSize: "cover",
  },
  navigationLabel: {
    alignSelf: "flex-end",
    marginBottom: "3%",
    paddingLeft: "4%",
    paddingRight: "1%",
    borderTopRightRadius: "7px 7px",
    borderBottomRightRadius: "7px 7px",
  },
}));

export default function Homepage() {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.root}>
      <HomepageHero />
      <HomepageNavigationRow />

      <Group className>
        <Title size={57}>News Bulletin</Title>
        <Title size={57}>What&apos;s New?</Title>
      </Group>
    </Container>
  );
}
