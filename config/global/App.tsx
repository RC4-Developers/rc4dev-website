import { MantineThemeOverride } from "@mantine/core";

export const CONFIG_WEBSITE_THEME: MantineThemeOverride = {
  fontFamily: "Readex Pro, sans-serif",
  fontSizes: {
    sm: 16,
    md: 18,
    lg: 21,
  },
  headings: {
    fontFamily: "Readex Pro, sans-serif",
    sizes: {
      h1: { fontSize: 34 },
      h2: { fontSize: 30 },
      h3: { fontSize: 24 },
    },
  },
  colors: {
    rc4teal: [
      "#A1C3C2",
      "#88BCB9",
      "#6EB9B5",
      "#51BBB6",
      "#37BCB6",
      "#23BAB3",
      "#0FBAB2", // main
      "#1D9892",
      "#257E7A",
      "#011C2A", // dark background
    ],
    rc4yellow: [
      "#F8F5F0",
      "#EBE2D0",
      "#E5D3AE",
      "#E5C789",
      "#EDBF60",
      "#FFBB30", // main
      "#E7A929",
      "#C9962C",
      "#A78236",
      "#8C713B",
    ],
    rc4red: [
      "#F5EFEE",
      "#E6D2D1",
      "#DCB6B4",
      "#D79794",
      "#D87772",
      "#E0534C", // main
      "#CB4A43",
      "#B04843",
      "#954A46",
      "#7F4946",
    ],
  },
};
