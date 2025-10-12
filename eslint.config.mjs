import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier/recommended";
import query from "@tanstack/eslint-plugin-query";

export default [
  {
    ignores: [
      "dist/*",
      ".next/",
      "out/",
      "node_modules/",
      "next-env.d.ts",
      "*.config.*js",
    ],
  },

  // Apply to JavaScript/TypeScript source files
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  // CommonJS settings for plain .js files
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },

  // Global variables (Node.js)
  { languageOptions: { globals: { ...globals.node } } },

  // Recommended ESLint and TypeScript configs
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Plugins
  {
    plugins: {
      react,
      prettier,
      "@typescript-eslint": tseslint.plugin,
      "@tanstack/query": query,
    },
  },

  // Rules
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
    },
  },
];
