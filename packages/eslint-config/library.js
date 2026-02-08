const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
    extends: ["eslint:recommended", "prettier"],
    plugins: ["@typescript-eslint"],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        browser: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: [".*.js", "node_modules/", "dist/"],
    overrides: [
        {
            files: ["*.js?(x)", "*.ts?(x)"],
        },
    ],
};
