import { css } from "@linaria/core";

export const globals = css`
  :global() {
    @font-face {
      font-family: "New Tegomin";
      src: url("/fonts/subset.woff2") format("woff2") url("/fonts/subset.woff")
        format("woff");
      font-display: swap;
      font-weight: 400;
    }
  }
`;
