import { createStyles, Flex, Image, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    marginTop: "2rem",
    width: "104%",
    height: "104%",
  },
  strip: {
    marginTop: "2rem",
    borderTop: `10px solid ${theme.colors.rc4teal[5]}`,
    backgroundColor: theme.colors.rc4teal[9],
    rotate: "2.5deg",
    width: "103%",
    height: "100%",
    transform: "translateX(-1em)",
    position: "absolute",
  },
  textContainer: {
    flexDirection: "column",
    color: "#FFFFFF",
    marginTop: "5rem",
    marginLeft: "2em",
    position: "relative",
  },
  image: {
    marginTop: "6rem",
  },
  title: {
    fontWeight: "bold",
    fontSize: "2.8vh",
  },
  desc: {
    fontSize: "1.7vh",
    width: "70vw",
    marginTop: "1em",
  },
}));

function CustomStrip() {
  const { classes } = useStyles();
  return <div className={classes.strip}></div>;
}

export default function AboutUsDescriptionContainer() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <CustomStrip />
      <Flex className={classes.textContainer}>
        <Text className={classes.title}>What do we do?</Text>
        <Text className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur. Cursus vel vitae iaculis bibendum mauris proin at
          elementum proin. Dictum in neque aenean tempor varius adipiscing. Eget nunc massa aliquam
          pretium enim semper leo. Vitae diam tellus vitae mi. Sed sit purus sed mi ultrices. Sapien
          nibh condimentum ipsum eget accumsan lorem. Elit integer suspendisse egestas convallis
          netus neque. Lectus tellus nunc imperdiet condimentum ut vitae volutpat vitae pharetra. Et
          leo quis ipsum urna viverra aliquet.
        </Text>
      </Flex>
      <Image
        className={classes.image}
        width={"60%"}
        mb={40}
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
        ml={30}
      />
    </Flex>
  );
}
