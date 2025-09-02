// ESLint v9 flat config (ESM)
// Migrated from .eslintrc.json

import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default [
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
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json']
        }
      }
    },
    plugins: { import: importPlugin },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
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
      // import hygiene (match TS behavior)
      "import/newline-after-import": "off",
      "import/order": "off",
      "import/no-unresolved": [
        "warn",
        {
          commonjs: true,
          ignore: [
            "^raw-loader!",
            "^!!less-vars-loader"
          ]
        }
      ],
      "import/no-extraneous-dependencies": [
        "warn",
        {
          devDependencies: [
            "**/*.test.{js,jsx,ts,tsx}",
            "**/*.spec.{js,jsx,ts,tsx}",
            "**/__tests__/**",
            "**/test/**",
            "Gruntfile.js",
            "**/*.config.{js,cjs,ts}",
            "**/webpack*.{js,cjs,ts}",
            "scripts/**"
          ]
        }
      ],
    },
  },

  // TypeScript overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json']
        }
      }
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: false,
      },
    },
    plugins: { "@typescript-eslint": tseslint, import: importPlugin },
    rules: {
      "comma-dangle": "off",
      "no-unused-vars": "off",
      "max-len": "off",
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-interface": "off",
      // import hygiene (keep signal tight)
      "import/newline-after-import": "off",
      "import/order": "off",
      "import/no-unresolved": [
        "warn",
        {
          commonjs: true,
          ignore: [
            "^raw-loader!",
            "^!!less-vars-loader"
          ]
        }
      ],
      "import/no-extraneous-dependencies": [
        "warn",
        {
          devDependencies: [
            "**/*.test.{js,jsx,ts,tsx}",
            "**/*.spec.{js,jsx,ts,tsx}",
            "**/__tests__/**",
            "**/test/**",
            "Gruntfile.js",
            "**/*.config.{js,cjs,ts}",
            "**/webpack*.{js,cjs,ts}",
            "scripts/**"
          ]
        }
      ],
    },
  },
];
