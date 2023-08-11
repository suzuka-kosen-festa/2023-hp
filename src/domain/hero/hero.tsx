import { Icon } from "~/shared/ui";
import * as styles from "./styles.css";
import type { FC } from "react";

type Props = {
  soon: boolean;
};

export const Hero: FC<Props> = ({ soon }) => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Icon type="cloud1" />
        {soon && <Icon type="cloud4" />}
      </div>
      <div className={styles.center}>
        <Icon type="logoStatic" />
        {soon && (
          <h1 className={styles.title}>
            視たことのない高専祭を。
            <br />
            新しい世界へご招待します。
            <br />
            Coming soon...
          </h1>
        )}
      </div>
      <div className={styles.right}>
        <Icon type="cloud2" />
        <Icon type="cloud3" />
        {soon && <Icon type="cloud5" />}
      </div>
    </section>
  );
};
