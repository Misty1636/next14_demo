import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended'
    ),
    {
        rules: {
            // 基本代碼風格規則
            'no-console': 'warn', // 警告 `console.log` 的使用
            'no-debugger': 'warn', // 警告 debugger 的使用
            'react/react-in-jsx-scope': 'off', // Next.js 不需要 React 在 JSX 中的引入
            'react/jsx-uses-react': 'off', // Next.js 使用 JSX 時不需要 React 變數

            // 縮進設置：強制使用 4 格縮進
            indent: ['error', 4], // 強制 4 格縮進

            // 行長設置：強制每行最大字符數
            'max-len': [
                'error',
                {
                    code: 80, // 每行最大字符數為 80
                    comments: 100, // 註解行長限制
                    ignoreUrls: true, // 不對 URL 設置行長限制
                    ignoreStrings: true, // 不對字符串設置行長限制
                    ignoreTemplateLiterals: true, // 不對模板字面量設置行長限制
                },
            ],

            // 禁止無用的變數
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' }, // 忽略以 _ 開頭的變量
            ],

            // 強制行尾有分號
            semi: ['error', 'always'], // 行尾強制加上分號

            // 強制使用單引號
            quotes: ['error', 'single'], // 強制使用單引號而非雙引號

            // 使用空格代替 tab
            'no-tabs': 'error', // 禁止使用 Tab 字符，強制使用空格

            // 自動修正開關
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true, // 使用單引號
                    trailingComma: 'es5', // 在多行數組或對象中，尾隨逗號
                    semi: true, // 行尾強制分號
                    tabWidth: 4, // 設置 Tab 寬度為 4
                    printWidth: 80, // 設置每行最大字符數為 80
                },
            ],

            // React hooks 規則
            'react-hooks/rules-of-hooks': 'error', // 確保 hooks 只在函數組件中使用
            'react-hooks/exhaustive-deps': 'warn', // 檢查依賴項是否完整

            // 無障礙設置
            'jsx-a11y/anchor-is-valid': 'warn', // 提醒 <a> 標籤的有效性

            // Next.js 特定設置
            'next/next-server-pages-target': 'off', // 在 Next.js 中啟用 SSR 頁面
        },
        ignores: ['node_modules/**', 'dist/**'],
    },
];

export default eslintConfig;
