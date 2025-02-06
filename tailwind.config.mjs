/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        screens: {
            xs: '602px',
            lg: '1160px',
            md: '768px',
            sm: '680px'
        },
        extend: {
            colors: {
                background: 'var(--background)',
                color: 'var(--text-color)'
            }
        },
        plugins: []
    }
}