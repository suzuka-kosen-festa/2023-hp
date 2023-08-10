import { clsx } from "clsx";
import * as styles from "./styles.css";
import { iconType } from "./styles.css";
import type { FC } from "react";

type Props = {
  type:
    | "cloud1"
    | "cloud2"
    | "cloud3"
    | "cloud4"
    | "cloud5"
    | "defect"
    | "logoStatic";
};

export const Icon: FC<Props> = ({ type }) => {
  return <span className={clsx(styles.icon, iconType({ type }))} />;
};
