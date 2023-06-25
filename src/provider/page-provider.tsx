import { Provider } from "~/shared/store";
import type { PageContext } from "~/shared/store";
import type { ReactElement } from "react";

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ReactElement;
}) => {
  return <Provider value={pageContext}>{children}</Provider>;
};
