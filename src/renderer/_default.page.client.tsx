import { createRoot, hydrateRoot } from "react-dom/client";
import { getPageTitle } from "~/shared/utils";
import { Layout } from "~/feature";
import type { Root } from "react-dom/client";
import type { PageContextClient } from "~/shared/store";

let root: Root;

export const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  );
  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};

export const clientRouting = true;

export const hydrationCanBeAborted = true;
