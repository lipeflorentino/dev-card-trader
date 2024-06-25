module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "jsx-a11y",
        "import",
        "prettier",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "react/prop-types": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_" },
        ],
        "import/order": [
            "error",
            {
                groups: [["builtin", "external", "internal"]],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": "off",
            },
        },
    ],
};
