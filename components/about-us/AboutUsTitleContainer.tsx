import { createStyles, Flex, Text } from "@mantine/core";
import CustomLogo from "components/utilities/CustomLogo";
import ColorStrip from "components/utilities/ColorStrip";

const useStyles = createStyles(() => ({
  titleContainer: {
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  },
  subtitle: {
    marginLeft: "2.5rem",
    marginTop: "1em",
    marginBottom: "-0.3em",
    paddingLeft: "8px",
    fontSize: "2.8vw",
    fontWeight: "bold",
  },
  title: {
    marginLeft: "2.5rem",
    fontSize: "5vw",
    alignItems: "center",
  },
}));

export default function AboutUsTitleContainer() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.titleContainer}>
      <Text className={classes.subtitle}>About Us</Text>
      <Flex className={classes.title}>
        <Text mr={20}>RC4Developers</Text>
        <CustomLogo imgSrc={"/gear-dark.png"} size={{ width: 120, height: 120 }} />
      </Flex>
      <ColorStrip
        width={"50vw"}
        height={"100vw"}
        color={"rc4yellow"}
        zIndex={-1}
        translateX={"55vw"}
        translateY={"-15vw"}
        rotate={"30deg"}
      />
    </Flex>
  );
}
