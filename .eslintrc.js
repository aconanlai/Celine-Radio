module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "strict": 0,
    "spaced-comment": [
      "warn",
      "always", {
        "exceptions": ["/"]
      }
    ],
    "arrow-body-style": 0,
    "no-unused-expressions": 0,
    "react/no-danger": 0,
    "no-use-before-define": ["warn"],
    "indent": ["warn"],
    "no-unused-vars": ["warn"],
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx"]
      }
    ],
    "jsx-a11y/anchor-is-valid": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "quotes": [
      "warn", "single"
    ],
    "quote-props": [
      "warn", "as-needed"
    ],
    "no-underscore-dangle": 0,
    "comma-dangle": [
      "warn", {
        "arrays": "never",
        "objects": "always",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }
    ],
    "no-lonely-if": ["warn"],
    "max-len": ["warn"]
  },
  "plugins": ["react", "jsx-a11y", "import"]
};