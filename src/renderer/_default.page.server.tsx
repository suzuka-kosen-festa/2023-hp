import { renderToStream } from "react-streaming/server";
import { escapeInject } from "vite-plugin-ssr/server";
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

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="未視感、視たことのない高専祭を。" lang="ja" />
      <meta name="name" content="未視感 | 第58回鈴鹿高専祭" />
      <meta name="image" content="/seo/ogp.png" />
      <meta property="og:title" content="未視感 | 第58回鈴鹿高専祭" />
      <meta property="og:description" content="未視感、視たことのない高専祭を。" />
      <meta property="og:type" content="webpage" />
      <meta property="og:url" content="https://snct-fes.info" />
      <meta property="og:image" content="/seo/ogp.png" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="未視感" />
      <meta name="twitter:title" content="未視感 | 第58回鈴鹿高専祭" />
      <meta name="twitter:description" content="未視感、視たことのない高専祭を。" />
      <meta name="twitter:image" content="/seo/ogp.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@KOSENFESTA" />
      <meta name="twitter:creator" content="@KOSENFESTA" />
      <link rel="icon" type="image/svg+xml" href="/seo/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/seo/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/seo/favicon-16x16.png" />
      <link rel="icon" href="/seo/favicon.ico" />
      <link rel="mask-icon" href="/seo/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <link rel="apple-touch-icon" href="/seo/apple-touch-icon.png" />
      <meta name="theme-color" content="#fff" />
      <title>未視感 | 第58回鈴鹿高専祭</title>
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
