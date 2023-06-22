import * as styles from "./styles.css";
import type { FC } from "react";

type Props = {
  content: string;
};

export const Footer: FC<Props> = ({ content }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>&copy; {content}</p>
    </footer>
  );
};
