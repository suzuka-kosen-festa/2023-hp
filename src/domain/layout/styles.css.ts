import { style } from "@vanilla-extract/css";
import { vars } from "~/style/theme.css";

export const div = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundImage:
    'linear-gradient(to right, rgb(166 113 51 / 10%), rgb(166 113 51 / 10%)), url("/assets/back.svg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxSizing: "border-box",
  border: `12px solid ${vars.color.brand.deepPrimary}`,
});

export const defect = style({
  position: "absolute",
  top: "-3px",
  left: "-3px",
  height: "10vw",
});

export const main = style({
  paddingTop: "10vw",
  flex: "auto",
});
