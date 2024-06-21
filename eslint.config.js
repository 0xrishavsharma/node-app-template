import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import "@typescript-eslint/parser";

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        prettier,
    ],
    ignores: ["node_modules", "dist/*"],
    rules: {
        "no-console": "error",
        "dot-notation": "error",
    },
});
