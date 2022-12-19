import { createStyles, Flex } from "@mantine/core";
import AboutUsTitleContainer from "components/about-us/AboutUsTitleContainer";

const useStyles = createStyles(() => ({
  root: {
    flexDirection: "column",
  },
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

export default function AboutUs() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <AboutUsTitleContainer />
    </Flex>
  );
}
