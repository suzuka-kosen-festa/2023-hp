import { createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    brand: {
      deepPrimary: "deep-primary",
      primary: "primary",
      shallowPrimary: "shallow-primary",
      deepSecondary: "deep-secondary",
      secondary: "secondary",
      shallowSecondary: "shallow-secondary",
      deepBeige: "deep-beige",
      beige: "beige",
    },
    black: "custom-black",
    white: "custom-white",
  },
});
