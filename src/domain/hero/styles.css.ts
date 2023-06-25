import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { NewTogomin } from "~/style/global.css";
import { vars } from "~/style/theme.css";

export const section = style({
  display: "grid",
  gridTemplateColumns: "1fr 3fr 1fr",
  overflow: "hidden",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "1fr 2fr 1fr",
    },
  },
});

export const left = style({
  display: "grid",
  gridTemplate: `
  '     .' 1fr
  'cloud1' 2fr
  '     .' 7fr
  'cloud4' 1fr
  '     .' 0.25fr /
  1fr
  `,
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplate: `
      '     .' 1fr
      'cloud1' 2fr
      '     .' 1.5fr
      'cloud4' 1fr
      '     .' 0.25fr /
      1fr
      `,
    },
  },
});

export const center = style({
  display: "grid",
  gridTemplate: `
  '    .' 1.5fr
  ' logo' 2.5fr
  'title' 1fr
  '    .' 2fr /
  1fr
  `,
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplate: `
      ' logo' 2.5fr
      'title' 1fr /
      1fr
      `,
    },
  },
});

export const right = style({
  display: "grid",
  gridTemplate: `
  'cloud2' 1fr
  '     .' 5fr
  'cloud3' 1.5fr
  '     .' 4.5fr
  'cloud5' 0.25fr /
  1fr
  `,
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplate: `
      'cloud2' 1fr
      '     .' 1fr
      'cloud3' 1.5fr
      '     .' 1fr
      'cloud5' 0.25fr /
      1fr
      `,
    },
  },
});

export const cloud = recipe({
  variants: {
    gridArea: {
      1: {
        gridArea: "cloud1",
        height: "13vw",
      },
      2: {
        gridArea: "cloud2",
        height: "10vw",
      },
      3: {
        gridArea: "cloud3",
        height: "12vw",
      },
      4: {
        gridArea: "cloud4",
        height: "8vw",
      },
      5: {
        gridArea: "cloud5",
        height: "7vw",
      },
    },
  },
});

export const logo = style({
  gridArea: "logo",
  width: "60vw",
  "@media": {
    "screen and (min-width: 640px)": {
      width: "50vw",
    },
  },
});

export const title = style({
  fontSize: "clamp(0.25rem, 4vw, 1.25rem)",
  gridArea: "title",
  textAlign: "center",
  color: vars.color.black,
  fontFamily: NewTogomin,
  "@media": {
    "screen and (min-width: 433px)": {
      fontSize: "clamp(1.25rem, 2.5vw, 3rem)",
    },
  },
});
