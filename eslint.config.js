// ESLint v9 flat config
// Migrated from .eslintrc.json

// @eslint/js provides the core recommended rules
const js = require("@eslint/js");
const babelParser = require("@babel/eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    ignores: [
      "dist/**",
      "modules/math/optim/*.js",
      "modules/math/qr.js",
    ],
  },

  // Base JS/JSX config
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            require.resolve("@babel/preset-env"),
            require.resolve("@babel/preset-react"),
          ],
          plugins: [
            [require.resolve("@babel/plugin-proposal-decorators"), { legacy: true }],
          ],
        },
      },
      globals: {
        THREE: "readonly",
        CSG: "readonly",
        PNLTRI: "readonly",
        __DEBUG__: "readonly",
        __CAD_APP: "readonly",
        Module: "readonly",
        _free: "readonly",
        _malloc: "readonly",
        writeAsciiToMemory: "readonly",
        __E0_ENGINE_EXCHANGE_VAL: "readonly",
        verb: "readonly",
        $: "readonly",
      },
    },
    ...js.configs.recommended,
    rules: {
      "comma-dangle": "off",
      "no-unused-vars": "off",
      "max-len": "off",
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
    },
  },

  // TypeScript overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: false,
      },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "comma-dangle": "off",
      "no-unused-vars": "off",
      "max-len": "off",
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extra-semi": "error",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
];
