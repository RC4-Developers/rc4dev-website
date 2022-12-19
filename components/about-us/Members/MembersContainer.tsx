import { createStyles, Flex, Text } from "@mantine/core";
import MemberRow from "components/about-us/Members/MemberRow";
import { CONFIG_EXCO, CONFIG_MEMBERS } from "config/about-us/MembersContainer";

const useStyles = createStyles(() => ({
  root: {
    flexDirection: "column",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
}));

export default function MembersContainer() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <Text className={classes.subtitle}>Who are we?</Text>
      <Text className={classes.title}>EXCO</Text>
      <MemberRow people={CONFIG_EXCO} />
      <Text className={classes.title}>Members</Text>
      <MemberRow people={CONFIG_MEMBERS} />
    </Flex>
  );
}
