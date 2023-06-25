import { style } from "@vanilla-extract/css";
import { vars } from "~/style/theme.css";
import { NewTogomin } from "~/style/global.css";

export const p = style({
  color: vars.color.black,
  fontFamily: NewTogomin,
  fontSize: "1.25rem",
});
