module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
        'standard',
        // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // use legacy indent rule because the new indent rule doesn't play nice with vue/script-indent
        'indent': 0,
        'indent-legacy': [2, 4, {'SwitchCase': 1}],
        'vue/script-indent': [2, 4, {'baseIndent': 1, 'switchCase': 1}],
        'vue/html-indent': [2, 4],
        'no-extra-semi': 0,
        'semi': 0,
        'vue/max-attributes-per-line': [2, {
            'singleline': Infinity,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        // require trailing commas
        'comma-dangle': [2, 'always-multiline'],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // allow console during development
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        // require or disallow a space before function parenthesis
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'never'
        }]
    }
}
