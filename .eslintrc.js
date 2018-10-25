module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb", "prettier", "prettier/react"],
    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true
    },
    plugins: [
        "react", 'prettier'
    ],
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: "scripts/webpack.prod.js"
            }
        }
    },
    rules: {
        'semi': 'off',
        "generator-star-spacing": [0],
        "react/prefer-stateless-function": "off",
        "react/forbid-prop-types": ['error', {
            // forbid: ['any', 'array', 'object'],
            forbid: ['any', 'array']
        }],
        'react/no-array-index-key': 'off',
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to", "hrefLeft", "hrefRight"],
            "aspects": ["noHref", "invalidHref", "preferButton"]
        }],
        "jsx-a11y/label-has-for": [2, {
            "components": ["Label"],
            "required": {
                "every": ["id"]
            },
            "allowChildren": false
        }],
        'linebreak-style': ["off", "windows"],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        "react/jsx-indent": ["error", 4],
    }
};