import { Container, createStyles, Flex, Group, Text, Title } from "@mantine/core";
import { HomepageHero } from "./components/homepage/HomepageHero";

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

      <Group spacing={0} className={classes.navigationRow} grow>
        <Flex
          className={classes.navigationBox}
          style={{
            backgroundImage: "url(/who.png)",
          }}
        >
          <Text
            size={30}
            className={classes.navigationLabel}
            style={{
              backgroundColor: "rgba(224, 83, 76, 0.7)",
            }}
          >
            Who are we?
          </Text>
        </Flex>
        <Flex
          className={classes.navigationBox}
          style={{
            backgroundImage: "url(/what.png)",
          }}
        >
          <Text
            size={30}
            className={classes.navigationLabel}
            style={{
              backgroundColor: "rgba(255, 187, 48, 0.7);",
            }}
          >
            What do we do?
          </Text>
        </Flex>
      </Group>

      <Group className>
        <Title size={57}>News Bulletin</Title>
        <Title size={57}>What&apos;s New?</Title>
      </Group>
    </Container>
  );
}
