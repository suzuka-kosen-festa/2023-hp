import Cloud1 from "~/assets/icons/cloud-1.svg";
import Cloud2 from "~/assets/icons/cloud-2.svg";
import Cloud3 from "~/assets/icons/cloud-3.svg";
import Cloud4 from "~/assets/icons/cloud-4.svg";
import Cloud5 from "~/assets/icons/cloud-5.svg";
import LogoStatic from "~/assets/icons/logo-static.svg";
import * as styles from "./styles.css";
import type { FC } from "react";

type Props = {
  soon: boolean;
};

export const Hero: FC<Props> = ({ soon }) => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <img
          src={Cloud1}
          alt="cloud assets"
          className={styles.cloud({ gridArea: 1 })}
        />
        {soon && (
          <img
            src={Cloud4}
            alt="cloud assets"
            className={styles.cloud({ gridArea: 4 })}
          />
        )}
      </div>
      <div className={styles.center}>
        <img src={LogoStatic} alt="未視感" className={styles.logo} />
        {soon && (
          <h1 className={styles.title}>
            視たことのない高専祭を。
            <br />
            新しい世界へご招待します。
            <br />
            Comming soon...
          </h1>
        )}
      </div>
      <div className={styles.right}>
        <img
          src={Cloud2}
          alt="cloud assets"
          className={styles.cloud({ gridArea: 2 })}
        />
        <img
          src={Cloud3}
          alt="cloud assets"
          className={styles.cloud({ gridArea: 3 })}
        />
        {soon && (
          <img
            src={Cloud5}
            alt="cloud assets"
            className={styles.cloud({ gridArea: 5 })}
          />
        )}
      </div>
    </section>
  );
};
