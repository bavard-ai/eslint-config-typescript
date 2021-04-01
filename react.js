module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:jest/recommended",
    "./base.js",
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
