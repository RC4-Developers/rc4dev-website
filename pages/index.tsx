import { Container, createStyles, Group, Text, Title } from "@mantine/core";
import { ColorStrip } from "./components/utilities/ColorStrip";
import CustomLogo from "./components/utilities/CustomLogo";

const useStyles = createStyles((theme) => ({
  root: {
    paddingLeft: "0%",
    paddingRight: "0%",
    position: "relative",
    overflow: "hidden",
  },
  hero: {
    backgroundColor: theme.colors.rc4teal[9],
    color: "white",
    paddingTop: "3%",
    paddingBottom: "2%",
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
    </Container>
  );
}
