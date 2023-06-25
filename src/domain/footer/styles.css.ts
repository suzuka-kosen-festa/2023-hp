import { style } from "@vanilla-extract/css";
import { NewTogomin } from "~/style/global.css";
import { vars } from "~/style/theme.css";

export const footer = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  alignItems: "center",
  padding: "2rem 2.5rem",
});

export const p = style({
  fontFamily: NewTogomin,
  fontSize: "clamp(0.625rem, 3vw, 1rem)",
  color: vars.color.black,
});
