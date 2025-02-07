import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import tailwindcss from 'eslint-plugin-tailwindcss'
import reactHooks from 'eslint-plugin-react-hooks'
import nextjs from '@next/eslint-plugin-next'

export default [{
        ignores: ['node_modules/', 'dist/', '.next/']
    },
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parser: tsParser
        },
        plugins: {
            prettier,
            '@typescript-eslint': typescript,
            tailwindcss,
            'react-hooks': reactHooks,
            '@next/next': nextjs
        },
        rules: {
            ...js.configs.recommended.rules,
            ...typescript.configs.recommended.rules,
            ...prettier.configs.recommended.rules,
            ...nextjs.configs.recommended.rules,
            'prettier/prettier': ['error', {
                singleQuote: true,
                semi: false
            }],
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-custom-classname': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        },
        settings: {
            tailwindcss: {
                callees: ['cn', 'clsx', 'classnames']
            }
        }
    }
]