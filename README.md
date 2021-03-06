# eslint-config-typescript

Bavard's ESLint config with TypeScript support

## Setup

### 1) Install

```
npm install @bavard/eslint-config-typescript --save-dev
```

### 2) Install devDependencies

If your app is a `Node.js` app:

Install the following devDependencies:

```
npm install @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-config-airbnb-typescript \
            eslint-config-prettier \
            eslint-plugin-import \
            eslint-plugin-jest \
            eslint-plugin-prettier \
            prettier \
            --save-dev
```

If your app is a `React.js` app:

```
npm install @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-config-airbnb-typescript \
            eslint-config-prettier \
            eslint-plugin-import \
            eslint-plugin-jest \
            eslint-plugin-jsx-a11y \
            eslint-plugin-prettier \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            prettier \
            --save-dev
```

If your app is `Vue.js` app:

```
npm install @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            eslint-config-airbnb-typescript \
            eslint-config-prettier \
            eslint-plugin-import \
            eslint-plugin-jest \
            eslint-plugin-vue \
            eslint-plugin-prettier \
            prettier \
            --save-dev
```

### 2) Configure ESLint

Create a `.eslintrc.js` ESLint config file at the root of your repo.

Paste the following code in the file:

If your app is a `Node.js` app:

```
module.exports = {
  root: true,
  extends: [
    "@bavard/eslint-config-typescript/node",
  ],
};
```

If your app is a `React.js` app:

```
module.exports = {
  root: true,
  extends: [
    "@bavard/eslint-config-typescript/react",
  ],
};
```

If your app is a `Vue.js` app:

```
module.exports = {
  root: true,
  extends: [
    "@bavard/eslint-config-typescript/vue",
  ],
};
```

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).
