import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { PageContext } from "./types";

const Context = createContext<PageContext>(undefined as unknown as PageContext);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ReactNode;
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
