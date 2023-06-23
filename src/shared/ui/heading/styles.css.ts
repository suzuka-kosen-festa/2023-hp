import { recipe } from "@vanilla-extract/recipes";
import { NewTogomin } from "~/style/global.css";
import { vars } from "~/style/theme.css";

export const heading = recipe({
  base: {
    color: vars.color.black,
    fontFamily: NewTogomin,
  },

  variants: {
    size: {
      h1: {
        fontSize: "3rem",
      },
      h2: {
        fontSize: "3rem",
      },
      h3: {
        fontSize: "2.5rem",
      },
      h4: {
        fontSize: "2rem",
      },
      h5: {
        fontSize: "1.5rem",
      },
      h6: {
        fontSize: "1.25rem",
      },
    },
  },
});
