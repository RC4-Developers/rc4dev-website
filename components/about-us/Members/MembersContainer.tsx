import { Container, createStyles, Text } from "@mantine/core";
import MemberRow from "components/about-us/Members/MemberRow";
import { CONFIG_EXCO, CONFIG_MEMBERS } from "config/about-us/MembersContainer";

const useStyles = createStyles(() => ({
  root: {
    padding: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "0.5em",
    marginBottom: "0.2em",
  },
}));

export default function MembersContainer() {
  const { classes } = useStyles();
  return (
    <Container className={classes.root}>
      <Text className={classes.title}>EXCO</Text>
      <MemberRow people={CONFIG_EXCO} />
      <Text className={classes.title}>Members</Text>
      <MemberRow people={CONFIG_MEMBERS} />
    </Container>
  );
}
