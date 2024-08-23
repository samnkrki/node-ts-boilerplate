import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  // 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended',
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  // {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  {rules: {
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-rest-params': ['off'],
  },},
  {ignores: ["node_modules", "dist", "build", "out", "coverage", "public", "static", "temp", "tmp", "vendor", ".*"]},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

];