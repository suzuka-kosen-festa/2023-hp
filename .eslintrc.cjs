module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  extends: ["@re-taro", "plugin:storybook/recommended"],
};
