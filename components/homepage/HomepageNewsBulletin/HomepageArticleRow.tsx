import { createStyles, Flex, Image, Text } from "@mantine/core";

const useStyles = createStyles(() => ({
  root: {
    borderBottom: "1px solid #9F9F9F",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
  },
  articleDesc: {
    width: "300%",
    marginRight: "5%",
    marginLeft: "5%",
  },
}));

export default function HomepageArticleRow() {
  const { classes } = useStyles();
  return (
    <Flex className={classes.root} pt={"2%"} pb={"2%"}>
      <Flex direction={"column"} className={classes.articleDesc}>
        <Text fz={"lg"} fw={700}>
          Sample Header
        </Text>
        <Text fz={"md"}>Sub-Header</Text>
        <Text fz={"sm"}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque enim egestas sagittis vulputate
          viverra pharetra nunc ultrices aliquam. Morbi sit id malesuada sit aliquam. Eget eu proin
          faucibus egestas urna ut vulputate scelerisque. Magna nisl phasellus amet duis. Vitae ac
          vitae amet rhoncus. Id sapien sodales et pellentesque facilisis. In euismod sed ut a
          mauris ut ipsum eu maecenas. Aenean faucibus id feugiat pellentesque. Habitant eget
          volutpat ac eleifend sagittis. Viverra nisi metus nullam duis. Id elementum convallis.
        </Text>
      </Flex>
      <Image
        className={classes.image}
        radius={"md"}
        width={"200%"}
        height={"190px"}
        mr={"4%"}
        src={
          "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        }
        alt={"Random unsplash image"}
      />
    </Flex>
  );
}
