import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const NewTogomin = "New Tegomin";

globalFontFace(NewTogomin, {
  src: 'url("/assets/fonts/subset.woff2") format("woff2"), url("/assets/fonts/subset.woff") format("woff")',
  fontDisplay: "swap",
  fontWeight: 400,
});

globalStyle("body", {
  backgroundColor: vars.color.brand.deepPrimary,
});

createGlobalTheme(":root", vars, {
  color: {
    brand: {
      deepPrimary: "#681E82",
      primary: "#725D79",
      shallowPrimary: "#866A90",
      deepSecondary: "#9B84A3",
      secondary: "#B6A1BD",
      shallowSecondary: "#C1A5CB",
      deepBeige: "#FFF9E4",
      beige: "#F5EDE3",
    },
    black: "#000000",
    white: "#FFFFFF",
  },
});
