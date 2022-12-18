import { createStyles, Flex, Text, Title } from "@mantine/core";
import ColorStrip from "components/utilities/ColorStrip";
import CustomLogo from "components/utilities/CustomLogo";

const useStyles = createStyles((theme) => ({
  heroTitle: {
    marginRight: "20px",
    flexDirection: "column",
    color: "white",
    fontSize: "6vw",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "8vh",
    },
  },

  heroSubtitle: {
    fontSize: "2.2vw",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "2.8vh",
    },
  },
  hero: {
    backgroundColor: theme.colors.rc4teal[9],
    display: "flex",
    height: "50vh",
    position: "relative",
    overflow: "hidden",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      position: "static",
      height: "70vh",
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  stripsContainer: {
    position: "absolute",
    top: "-50%",
    right: "-20%",
    transform: "rotate(40deg)",
    transformOrigin: "top right",
    width: "20%",
    height: "200vh",
  },
}));

export default function HomepageHero() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.hero}>
      <Flex className={classes.heroTitle} pl={50} pt={15}>
        <Flex align={"center"} justify={"flex-start"}>
          <Title className={classes.heroTitle}>We are</Title>
          <CustomLogo imgSrc={"/gear.png"} size={{ width: 100, height: 100 }} />
        </Flex>
        <Title className={classes.heroTitle}>RC4Developers.</Title>
        <Text className={classes.heroSubtitle}>Systems Thinking, Making the Future</Text>
      </Flex>
      <Flex className={classes.stripsContainer}>
        <ColorStrip
          color={"rc4teal"}
          width={"33.333%"}
          isPositionAbsolute={false}
          dropShadow={"inset 16px 4px 3px rgba(0, 0, 0, 0.25)"}
        />
        <ColorStrip color={"rc4yellow"} width={"33.333%"} isPositionAbsolute={false} />
        <ColorStrip color={"rc4red"} width={"33.333%"} isPositionAbsolute={false} />
      </Flex>
    </Flex>
  );
}
