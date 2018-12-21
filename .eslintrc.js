module.exports = {
    extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
    plugins: [
        "react"
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    globals: {
      APP_TYPE: true,
      page: true,
    },
    rules: {
        "semi": 1,
        "linebreak-style": ["error", "windows"],
        "func-names":  ["error", "never"], // 允许匿名函数
        "prefer-arrow-callback":["error", { "allowNamedFunctions": true }],
        "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
        "class-methods-use-this": "off",
        'no-console': 'off'
    },
    settings: {
        "polyfills": ["promises"]
    }
};