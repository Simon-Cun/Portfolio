export default [
  {
    ignores: [
      "dist/*",
      ".next/",
      "out/",
      "node_modules/",
      "next-env.d.ts",
    ],
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: react,
      prettier: prettier,
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
  {
    ignores: ["*.config.*js"],
  },
];
