module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    eqeqeq: "error",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-var": "error",
    "prettier/prettier": ["error", {}],
    "react/no-unescaped-entities": ["error", { forbid: [">", '"', "}"] }],
    "react-hooks/exhaustive-deps": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
