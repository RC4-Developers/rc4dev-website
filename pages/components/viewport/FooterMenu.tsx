import { Anchor, Container, createStyles, Group } from "@mantine/core";
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
      <Group className={classes.links}>{items}</Group>
    </Container>
  );
}
