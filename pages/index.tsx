import { Container, createStyles, Flex, Group, Text, Title } from "@mantine/core";
import { ColorStrip } from "./components/utilities/ColorStrip";
import CustomLogo from "./components/utilities/CustomLogo";

const useStyles = createStyles((theme) => ({
  root: {
    paddingLeft: "0%",
    paddingRight: "0%",
  },
  hero: {
    backgroundColor: theme.colors.rc4teal[9],
    color: "white",
    paddingTop: "3%",
    paddingBottom: "2%",
    position: "relative",
    overflow: "hidden",
    paddingLeft: "3%",
  },
  heroTitle: {
    width: "80%",
  },
  heroText: {},
  gearIcon: {
    transform: "translateY(-10%)",
    backgroundColor: "#FFFFFF",
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
      <Group className={classes.hero}>
        <Title size={98} className={classes.heroTitle}>
          We are RC4Developers.
        </Title>
        <Text size={36} className={classes.heroText}>
          Systems Thinking, Making the Future
        </Text>
        <ColorStrip height={"25%"} color={"rc4teal"} translateX={"25%"} dropShadow />
        <ColorStrip height={"25%"} color={"rc4yellow"} translateX={"34.3%"} />
        <ColorStrip height={"25%"} color={"rc4red"} translateX={"43.5%"} />
        <CustomLogo imgSrc={"/gear.png"} size={{ width: 80, height: 80 }} />
      </Group>

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
    </Container>
  );
}
