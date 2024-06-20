// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// chore: Other changes that don't modify src or test files
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// revert: Reverts a previous commit
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// translation: Contributions made towards translating the documentation or the application
// security: Changes that address security vulnerabilities (example scopes: dependency updates, security patches)
// changeset: A collection of changes that together address a particular issue or add a feature

export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-leading-blank": [1, "always"],
        "body-max-line-length": [2, "always", 180],
        "footer-leading-blank": [1, "always"],
        "footer-max-line-length": [2, "always", 100],
        "header-max-length": [2, "always", 100],
        "scope-case": [2, "always", "lower-case"],
        "subject-case": [
            2,
            "never",
            ["sentence-case", "start-case", "pascal-case", "upper-case"],
        ],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
                "translation",
                "security",
                "changeset",
            ],
        ],
    },
};
