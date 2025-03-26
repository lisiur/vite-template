import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
    { files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,vue}"] },
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,vue}"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,vue}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
    },
    eslintConfigPrettier,
]);
