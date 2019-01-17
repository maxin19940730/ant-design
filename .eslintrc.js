module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    parser: "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        // "indent": [
        //     "off",
        //     "tab"
        // ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-tabs": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};