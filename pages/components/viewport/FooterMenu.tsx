import { Anchor, Container, createStyles, Flex, Text } from "@mantine/core";
import { CONFIG_HEADER_FOOTER_HEIGHT } from "../../config/viewport/HeaderMenu";

const useStyles = createStyles((theme) => ({
  inner: {
    backgroundColor: theme.colors.rc4teal[6],
    height: CONFIG_HEADER_FOOTER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    boxShadow: "inset 0px 8px 4px rgba(0, 0, 0, 0.25)",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },

  link: {
    color: theme.colors.dark[9],
  },

  linkContactUs: {
    color: "#ffffff",
    textDecoration: "underline",
  },

  innerFooterText: {
    maxWidth: "65%",
  },
}));

export interface FooterMenuProps {
  links: Array<{ link: string; label: string }>;
}

export function FooterMenu({ links }: FooterMenuProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      className={classes.link}
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Container fluid className={classes.inner}>
      <Flex direction={"column"} ml={17}>
        <Text fz={"lg"} fw={700}>
          Join us!
        </Text>
        <Text fz={"sm"} className={classes.innerFooterText}>
          We would love to see you around. Interested in joining us? Click on{" "}
          <Anchor className={classes.linkContactUs}>Contact Us</Anchor> to find out more!
        </Text>
      </Flex>
      <Flex gap={20} className={classes.links} mr={17}>
        {items}
      </Flex>
    </Container>
  );
}
