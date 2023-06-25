import type { Config } from "@markuplint/ml-config";

const config: Config = {
  extends: ["markuplint:recommended-react"],
  parser: {
    "\\.tsx$": "@markuplint/jsx-parser",
  },
  specs: {
    "\\.tsx$": "@markuplint/react-spec",
  },
};

export default config;
