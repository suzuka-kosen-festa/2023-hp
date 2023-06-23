import { createElement, useMemo } from "react";
import { heading } from "./styles.css";
import type { FC, HTMLAttributes } from "react";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading: FC<Props> = ({ as = "h4", children }) => {
  const Level = useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      function ({ ...props }: HTMLAttributes<HTMLHeadingElement>) {
        return createElement(as, props, children);
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [as],
  );

  return <Level className={`${heading({ size: as })}`}>{children}</Level>;
};
