import { createStyles, Flex, Group, Text } from "@mantine/core";

const useStyles = createStyles(() => ({
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

export default function HomepageNavigationRow() {
  const { classes } = useStyles();
  return (
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
            backgroundColor: "rgba(255, 187, 48, 0.7)",
          }}
        >
          What do we do?
        </Text>
      </Flex>
    </Group>
  );
}
