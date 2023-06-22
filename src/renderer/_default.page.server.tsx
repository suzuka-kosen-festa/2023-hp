import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
import { getPageTitle } from "~/shared/utils";
import { Layout } from "~/feature";
import type { PageContextServer } from "~/shared/store";

export const render = async (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;

  const stream = await renderToStream(
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>,
    { disable: true },
  );

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;

  return {
    documentHtml,
  };
};

export const passToClient = ["pageProps", "documentProps"];
