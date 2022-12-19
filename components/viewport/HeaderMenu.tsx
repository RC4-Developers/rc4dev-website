import {
  Anchor,
  Burger,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CustomLogo from "components/utilities/CustomLogo";
import { CONFIG_HEADER_FOOTER_HEIGHT, CONFIG_LOGO_SIZE } from "config/viewport/HeaderMenu";

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    zIndex: 1,
    boxShadow: "0px 8px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: "0px!important", // Bad practice, but some component is adding "margin-bottom: 120px"
  },

  dropdown: {
    position: "absolute",
    top: CONFIG_HEADER_FOOTER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

// NOTE: This component supports sub-links for each menu item. Refer to https://ui.mantine.dev/component/header-menu
export interface HeaderMenuProps {
  links: Array<{ link: string; label: string; links?: Array<{ link: string; label: string }> }>;
}

export default function HeaderMenu({ links }: HeaderMenuProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { width, height } = CONFIG_LOGO_SIZE;
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems != null) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <Anchor href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </Anchor>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Anchor key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Anchor>
    );
  });

  return (
    <Header height={CONFIG_HEADER_FOOTER_HEIGHT} mb={120} className={classes.root}>
      <Container fluid className={classes.header}>
        <Group spacing={5} ml={20}>
          <CustomLogo imgSrc={"/nus-logo.png"} size={{ width, height }} />
          <CustomLogo imgSrc={"/rc4-logo.png"} size={{ width, height }} />
        </Group>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
