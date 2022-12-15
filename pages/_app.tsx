import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { CONFIG_WEBSITE_THEME } from "./config/global/App";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={CONFIG_WEBSITE_THEME} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
