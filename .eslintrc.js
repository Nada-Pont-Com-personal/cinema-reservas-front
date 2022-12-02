// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "jsx-a11y",
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 1,
    "react/jsx-props-no-spreading": 0,
    "no-console": "off",
    "no-unused-vars": "error",
    "react/prop-types": 0,
    "prettier/prettier": ["warn"],
  },
};
