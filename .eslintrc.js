module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "prettier", "airbnb", "airbnb-typescript", "plugin:import/typescript", "plugin:prettier/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ["./tsconfig.json"],
    sourceType: 'module'
  },
  plugins: ["react", "react-hooks", "prettier", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "semi": ["warn", "always"],
    "quotes": ["warn", "double", {
      "avoidEscape": true
    }],
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/state-in-constructor": 0,
    "no-unused-vars": "off",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn",
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function"
    }],
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "react/no-array-index-key": 'off',
    "no-restricted-exports": 'off',
    "react/jsx-props-no-spreading": 'off',
    "import/no-extraneous-dependencies": 'off',
    "no-restricted-syntax": "off",
    "prettier/prettier": ["error", {
      trailingComma: "es5",
      singleQuote: false,
      printWidth: 100,
      tabWidth: 2,
      semi: true,
      endOfLine: "auto"
    }]
  },
};