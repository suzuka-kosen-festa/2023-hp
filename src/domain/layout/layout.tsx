import Defect from "~/assets/icons/defect.svg";
import * as styles from "./styles.css";
import type { FC, ReactElement, ReactNode } from "react";

type Props = {
  content: ReactElement;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ content, children }) => {
  return (
    <div className={styles.div}>
      <img src={Defect} alt="defect" className={styles.defect} />
      <main className={styles.main}>{children}</main>
      {content}
    </div>
  );
};
