export default [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/eslint-config-prettier",
    ],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["vue"],
    rules: {},
  },
];
