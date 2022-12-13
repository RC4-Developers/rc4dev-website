import HeaderMenu from "./components/utilities/HeaderMenu";
import { CONFIG_HEADERMENU } from "./config/HeaderMenu";
import { Container, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  root: {
    padding: 0,
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.root}>
      <HeaderMenu links={CONFIG_HEADERMENU.links} />
      <Container></Container>
    </Container>
  );
}
