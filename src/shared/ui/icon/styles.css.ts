import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const icon = style({
  display: "inline-block",
});

export const iconType = recipe({
  variants: {
    type: {
      defect: {
        content: "url(/assets/icons/defect.svg)",
        position: "absolute",
        top: "-0.5vw",
        left: "-0.5vw",
        height: "10vw",
      },
      cloud1: {
        content: "url(/assets/icons/cloud-1.svg)",
        gridArea: "cloud1",
        height: "13vw",
      },
      cloud2: {
        content: "url(/assets/icons/cloud-2.svg)",
        gridArea: "cloud2",
        height: "10vw",
      },
      cloud3: {
        content: "url(/assets/icons/cloud-3.svg)",
        gridArea: "cloud3",
        height: "12vw",
      },
      cloud4: {
        content: "url(/assets/icons/cloud-4.svg)",
        gridArea: "cloud4",
        height: "8vw",
      },
      cloud5: {
        content: "url(/assets/icons/cloud-5.svg)",
        gridArea: "cloud5",
        height: "7vw",
      },
      logoStatic: {
        content: "url(/assets/icons/logo-static.svg)",
        gridArea: "logo",
        width: "60vw",
        "@media": {
          "screen and (min-width: 640px)": {
            width: "50vw",
          },
        },
      },
    },
  },
});
