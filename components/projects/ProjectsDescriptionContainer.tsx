import { createStyles, Flex, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    marginTop: "2rem",
    width: "104%",
    height: "104%",
  },
  strip: {
    marginTop: "2rem",
    borderTop: `10px solid ${theme.colors.rc4yellow[5]}`,
    borderBottom: `10px solid ${theme.colors.rc4yellow[5]}`,
    backgroundColor: theme.colors.rc4red[5],
    rotate: "-4deg",
    width: "105vw",
    height: "45vh",
    transform: "translateX(-1em)",
    position: "absolute",
  },
  textContainer: {
    flexDirection: "column",
    color: "#FFFFFF",
    marginTop: "9rem",
    marginLeft: "2em",
    position: "relative",
  },
  image: {
    marginTop: "6rem",
  },
  title: {
    fontWeight: "bold",
    fontSize: "2.2rem",
  },
  desc: {
    fontSize: "1.2rem",
    width: "70vw",
    marginTop: "1em",
  },
}));

function CustomStrip() {
  const { classes } = useStyles();
  return <div className={classes.strip}></div>;
}

export default function ProjectsDescriptionContainer() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root}>
      <CustomStrip />
      <Flex className={classes.textContainer}>
        <Text className={classes.title}>Our Projects</Text>
        <Text className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur. Cursus vel vitae iaculis bibendum mauris proin at
          elementum proin. Dictum in neque aenean tempor varius adipiscing. Eget nunc massa aliquam
          pretium enim semper leo. Vitae diam tellus vitae mi. Sed sit purus sed mi ultrices. Sapien
          nibh condimentum ipsum eget accumsan lorem. Elit integer suspendisse egestas convallis
          netus neque. Lectus tellus nunc imperdiet condimentum ut vitae volutpat vitae pharetra. Et
          leo quis ipsum urna viverra aliquet. Lorem ipsum dolor sit amet consectetur. Cursus vel
          vitae iaculis bibendum mauris proin at elementum proin. Dictum in neque aenean tempor
          varius adipiscing. Eget nunc massa aliquam pretium enim semper leo. Vitae diam tellus
          vitae mi. Sed sit purus sed mi ultrices. Sapien nibh condimentum ipsum eget accumsan
          lorem. Elit integer suspendisse egestas convallis netus neque. Lectus tellus nunc
          imperdiet condimentum ut vitae volutpat vitae pharetra. Et leo quis ipsum urna viverra
          aliquet.
        </Text>
      </Flex>
    </Flex>
  );
}
