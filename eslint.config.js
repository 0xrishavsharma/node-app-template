/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        extends: [prettier],
        ignores: ["node_modules", "dist"],
        rules: {
            "no-console": "error",
            "dot-notation": "error",
        },
    },
);

// export default tseslint.config(...tseslint.configs.recommendedTypeChecked);
