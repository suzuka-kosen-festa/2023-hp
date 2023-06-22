import { createContext, useContext } from "react";
import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from "vite-plugin-ssr/types";
import type { ReactElement } from "react";

type Page = (pageProps: PageProps) => ReactElement;
type PageProps = Record<string, unknown>;

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  documentProps?: {
    title: string;
  };
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
  PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;

const Context = createContext<PageContext>(undefined as unknown as PageContext);

export const Provider = ({
  value,
  children,
}: {
  value: PageContext;
  children: ReactElement;
}) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
