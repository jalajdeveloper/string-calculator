module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'react/prop-types': 'off', // Disabling prop-types rule because we're using TypeScript
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional: if you don't want to enforce explicit return types
        // Add or override any additional rules here
    },
    settings: {
        react: {
            version: 'detect', // Detect the version of React to use
        },
    },
};
