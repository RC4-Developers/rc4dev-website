import { createStyles, Group, Text, Title } from "@mantine/core";
import { ColorStrip } from "../utilities/ColorStrip";
import CustomLogo from "../utilities/CustomLogo";

const useStyles = createStyles((theme) => ({
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
  gearIcon: {
    transform: "translateY(-10%)",
    backgroundColor: "#FFFFFF",
  },
}));

export function HomepageHero() {
  const { classes } = useStyles();
  return (
    <Group className={classes.hero}>
      <Title size={98} className={classes.heroTitle}>
        We are RC4Developers.
      </Title>
      <Text size={36}>Systems Thinking, Making the Future</Text>
      <ColorStrip
        height={"25%"}
        color={"rc4teal"}
        translateX={"25%"}
        rotate={"310deg"}
        dropShadow
      />
      <ColorStrip height={"25%"} color={"rc4yellow"} rotate={"310deg"} translateX={"34.3%"} />
      <ColorStrip height={"25%"} color={"rc4red"} rotate={"310deg"} translateX={"43.5%"} />
      <CustomLogo imgSrc={"/gear.png"} size={{ width: 80, height: 80 }} />
    </Group>
  );
}
