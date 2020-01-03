module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "linebreak-style": 0,
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],"no-underscore-dangle": ["error", { "allow": ["_id"] }],
        "max-len": [2, {"code": 150, "tabWidth": 4, "ignoreUrls": true}],
        "quotes": [
            "error",
            "single"
        ],
        "no-param-reassign": 0
    }
   };
   
   