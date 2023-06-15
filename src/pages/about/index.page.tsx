import { css } from "@linaria/core";

export const Page = () => {
  return (
    <>
      <h1>About</h1>
      <p
        className={css`
          code {
            font-family: monospace;
            background-color: #eaeaea;
            padding: 3px 5px;
            border-radius: 4px;
          }
        `}
      >
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  );
};
