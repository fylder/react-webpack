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
        "react", "prettier"
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: "scripts/webpack.prod.js"
            }
        }
    },
    rules: {
        "semi": "off",
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-single"],
        "generator-star-spacing": "error",
        "no-useless-constructor": "off",
        "react/prefer-stateless-function": "off",
        "react/forbid-prop-types": ["error", {
            // forbid: ["any", "array", "object"],
            "forbid": ["any", "array"]
        }],
        "react/no-array-index-key": "off",
        "react/jsx-no-bind": "off",
        "react/prop-types": ["error",
            {
                "ignore": ["history"],
                "customValidators": ["history"]
            }
        ],
        "react/destructuring-assignment": "off",
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to", "hrefLeft", "hrefRight"],
            "aspects": ["noHref", "invalidHref", "preferButton"]
        }],
        "jsx-a11y/label-has-for": ["error", {
            "components": ["Label"],
            "required": {
                "every": ["id"]
            },
            "allowChildren": false
        }],
        "linebreak-style": ["off", "windows"],
        "indent": ["error",
            4,
            {
                "SwitchCase": 1,
                "flatTernaryExpressions": true
            }
        ],
        "react/jsx-indent": ["error", 4],
    }
};