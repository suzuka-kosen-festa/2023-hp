import { createRoot, hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import { getPageTitle } from "./getPageTitle";
import type { Root } from "react-dom/client";
import type { PageContextClient } from "./types";

let root: Root;
export const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
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
