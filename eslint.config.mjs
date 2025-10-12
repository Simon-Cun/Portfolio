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
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react,
      prettier,
      "@typescript-eslint": tseslint.plugin,
      "@tanstack/query": query,
    },
  },
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
