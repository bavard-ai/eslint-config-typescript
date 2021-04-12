module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "linebreak-style": "off",
    "@typescript-eslint/camelcase": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/first": "off",
    "import/order": "off",
    "import/no-unresolved": "off",
    "prefer-destructuring": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/ban-types": "off",
    "no-empty-pattern": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-nested-ternary": "off",
    "no-console": "error",
    "no-debugger": "warn",
    radix: "off",
    "no-implicit-coercion": [
      2,
      {
        boolean: true,
        number: true,
        string: true,
        allow: [],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
      },
    ],
  },
};
