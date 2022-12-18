// From https://nextjs.org/docs/advanced-features/custom-document

import { Head, Html, Main, NextScript } from "next/document";
import { Title } from "@mantine/core";

export default function Document() {
  return (
    <Html>
      <Head>
        <Title></Title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
