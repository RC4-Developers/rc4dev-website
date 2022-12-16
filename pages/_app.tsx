import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, createStyles, MantineProvider } from "@mantine/core";
import { CONFIG_WEBSITE_THEME } from "./config/global/App";
import HeaderMenu from "./components/viewport/HeaderMenu";
import { CONFIG_HEADERMENU } from "./config/viewport/HeaderMenu";
import { FooterMenu } from "./components/viewport/FooterMenu";
import { CONFIG_FOOTERMENU } from "./config/viewport/FooterMenu";

const useStyles = createStyles(() => ({
  root: {
    padding: 0,
    height: "fit-content",
  },
}));

export default function App({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();
  return (
    <MantineProvider theme={CONFIG_WEBSITE_THEME} withGlobalStyles withNormalizeCSS>
      <Container fluid className={classes.root}>
        <HeaderMenu links={CONFIG_HEADERMENU.links} />
        <Component {...pageProps} />
        <FooterMenu links={CONFIG_FOOTERMENU.links} />
      </Container>
    </MantineProvider>
  );
}
