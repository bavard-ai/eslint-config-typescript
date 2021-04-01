# eslint-config-typescript

Bavard's ESLint config with TypeScript support

## Setup

### 1) Install

```
npm install @Bavard/eslint-config-typescript --save-dev
```

### 2) Configure ESLint

Create a `.eslintrc.js` ESLint config file at the root of your repo.

Paste the following code in the file:

If your app is a `Node.js` app:
```
module.exports = {
  root: true,
  extends: [
    "@Bavard/eslint-config-typescript/node.js",
  ],
};
```

If your app is a `React.js` app:
```
module.exports = {
  root: true,
  extends: [
    "@Bavard/eslint-config-typescript/react.js",
  ],
};
```

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).
