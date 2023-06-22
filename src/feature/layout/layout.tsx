import { StrictMode } from "react";
import { PageContextProvider } from "~/provider";
import { Footer, Layout as LayoutDomain } from "~/domain";
import type { FC, ReactNode } from "react";
import type { PageContext } from "~/shared/store";
import "atra.css";

type Props = {
  children: ReactNode;
  pageContext: PageContext;
};

export const Layout: FC<Props> = ({ children, pageContext }) => {
  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <LayoutDomain
          content={<Footer content="第58回鈴鹿高専祭 実行委員会" />}
        >
          {children}
        </LayoutDomain>
      </PageContextProvider>
    </StrictMode>
  );
};
