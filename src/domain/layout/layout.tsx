import { Icon } from "~/shared/ui";
import * as styles from "./styles.css";
import type { FC, ReactElement, ReactNode } from "react";

type Props = {
  content: ReactElement;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ content, children }) => {
  return (
    <div className={styles.div}>
      <Icon type="defect" />
      <main className={styles.main}>{children}</main>
      {content}
    </div>
  );
};
