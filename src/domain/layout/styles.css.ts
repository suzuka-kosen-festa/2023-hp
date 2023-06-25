import { style } from "@vanilla-extract/css";
import { vars } from "~/style/theme.css";

export const div = style({
  position: "relative",
  backgroundImage:
    'linear-gradient(to right, rgb(166 113 51 / 10%), rgb(166 113 51 / 10%)), url("/back.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxSizing: "border-box",
  border: `12px solid ${vars.color.brand.deepPrimary}`,
});

export const defect = style({
  position: "absolute",
  top: "-2px",
  left: "-2px",
  height: "10vw",
});

export const main = style({
  paddingTop: "10vw",
});