module.exports = {
  extends: [
    "airbnb-typescript",
    "eslint-config-prettier",
    "plugin:vue/vue3-strongly-recommended",
    "./base.js",
  ],
  env: {
    browser: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  }
};
