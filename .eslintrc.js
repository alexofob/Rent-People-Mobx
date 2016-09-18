module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        // enable additional rules
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        // personal preferences
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};
