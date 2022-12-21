import ColorStrip from "components/utilities/ColorStrip";
import { createStyles, Flex, Text } from "@mantine/core";
import CustomLogo from "components/utilities/CustomLogo";
import ProjectsContainer from "components/projects/Projects/ProjectsContainer";
import ProjectsDescriptionContainer from "components/projects/ProjectsDescriptionContainer";

const useStyles = createStyles(() => ({
  root: {
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

export default function Projects() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <Text className={classes.subtitle}>Projects</Text>
      <Flex className={classes.title}>
        <Text mr={20}>RC4Developers</Text>
        <CustomLogo imgSrc={"/gear-dark.png"} size={{ width: 120, height: 120 }} />
      </Flex>
      <ColorStrip
        width={"45vw"}
        height={"45vw"}
        color={"rc4teal"}
        zIndex={-1}
        translateX={"60vw"}
        translateY={"-17vw"}
        rotate={"20deg"}
      />
      <ProjectsDescriptionContainer />
      <ProjectsContainer />
    </Flex>
  );
}
