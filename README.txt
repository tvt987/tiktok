1*. Cài đặt thư viện create-react-app:
    npx create-react-app tiktok

2*. Cài đặt customize-cra
    npm i react-app-rewired customize-cra -D
    Vào package.json thay đổi dependencies
        "start": "react-app start",
        "build": "react-app build",
        "test": "react-app test",
        "eject": "react-app eject"
        -> Thành:
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-app-rewired eject"
    Tạo thêm file config-overrides.js có nội dung:
        const {
            override
        } = require("customize-cra");
  
        module.exports = override();
        
3*. Cài đặt babel-plugin-module-resolver:
    npm install --save-dev babel-plugin-module-resolver
    Tạo file .babelrc có nội dung:
        {
            "plugins": [
                ["module-resolver", {
                    "alias": {
                    "~": "./src",
                    "underscore": "lodash"
                    }
                }]
            ]
        }
    Tạo file jsconfig.json có nội dung:
            {
                "compilerOptions": {
                    "baseUrl": ".",
                    "paths": {
                        "~/*": [
                            "src/*"
                        ]
                    }
                }
            }

4*. Cấu hình prettier auto format while save file:
    Tạo file .prettierrc có nội dung:
        {
            "arrowParens": "always",
            "bracketSameLine": false,
            "bracketSpacing": true,
            "embeddedLanguageFormatting": "auto",
            "htmlWhitespaceSensitivity": "css",
            "insertPragma": false,
            "jsxSingleQuote": false,
            "printWidth": 120,
            "proseWrap": "preserve",
            "quoteProps": "as-needed",
            "requirePragma": false,
            "semi": true,
            "singleQuote": true,
            "tabWidth": 4,
            "trailingComma": "all",
            "useTabs": false,
            "vueIndentScriptAndStyle": false
        }
    Tạo file .vscode/settings.json ngang cấp vs file public có nội dung:
        {
            "editor.formatOnSave": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        }

5*. Cấu hình css/sass
    npm i -D sass

6*. Cấu hình router: 
    npm i react-router-dom

7*. Cài thư viện className: 
    npm i classnames

8. Cài thư viện tippy để sử dụng dropdown and tooltips
    npm i @tippyjs/react