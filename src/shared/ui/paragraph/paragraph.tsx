import * as styles from "./styles.css";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Paragraph: FC<Props> = ({ children }) => {
  return <p className={styles.p}>{children}</p>;
};
