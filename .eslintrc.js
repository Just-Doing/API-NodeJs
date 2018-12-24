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
        "comma-dangle": 1, // 限制必须添加末尾 逗号
        "space-in-parens": ["error", "always"], // 禁止括号内有多余空格
        "comma-spacing": ["error", { "before": false, "after": true }], // 逗号前不加空格 在后面加空格
        "quotes": ["error", "double"], // 强制使用双引号
        "semi-spacing": "error", // 分号后面的强制间距
        "camelcase": "error", // 驼峰式命名
        "no-trailing-spaces": "error", // 禁止行位添加尾随空格
        "semi": ['error','always'], // 表达式必须使用分号
        "linebreak-style": ["error", "windows"], // 换行 使用windows 格式
        "func-names":  ["error", "never"], // 允许匿名函数
        "prefer-arrow-callback":["error", { "allowNamedFunctions": true }], // 允许使用箭头函数
        "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}], // 允许 promise reject 传入普通类型变量
        "for-direction": "error",  // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'generator-star-spacing': 0,
        "class-methods-use-this": "off",
        'no-console': 'off',
        "indent": ["error", 4] // 2格缩进
    },
    settings: {
        "polyfills": ["promises"]
    }
};