import js from "@eslint/js";

import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],

    plugins: {
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node
    },

    rules: {
      // Only add parents when needed: `fn = param =>`
      "arrow-parens": ["error", "as-needed"],

      // Only allow non camelCase for destruct
      "camelcase": ["off", { "properties": "always" }],

      // Enforces 2 space indentation
      "indent": ["error", 2],

      // Soft rule of max length 190
      "max-len": ["warn", 190, 2],

      // Warn for console.log and allow info and error
      "no-console": ["warn", { "allow": ["info", "error"] }],

      // We allow param reassign
      "no-param-reassign": "off",

      // Turned off to avoid moving on new line with objects
      "object-curly-newline": "off",

      // Operators at the end instead of the beginning
      "operator-linebreak": ["error", "after"],

      // Use double quotes
      "quotes": ["error", "double"],

      // Allow dynamic require
      "import/no-dynamic-require": "off",

      // Can use function before they are defined
      "no-use-before-define": ["error", { "variables": false }],

      // Allow e.g. `company._id`
      "no-underscore-dangle": "off",

      // No multiple empty lines
      "no-multiple-empty-lines": ["error", { "max": 1 }],

      // Don't require `this` in classes
      "class-methods-use-this": "off",

      // Allow extension .js as this is needed for node ESM
      "import/extensions": ["error", "ignorePackages", {
        js: "always",
        json: "always",
      }],

      // ESM rules
      "import/no-unresolved": "error",
      "import/no-commonjs": "error",
      "import/extensions": ["error", "always"]
    }
  }
];
