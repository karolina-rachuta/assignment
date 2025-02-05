/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            lg: '1100px'
        },
        extend: {

            colors: {
                background: "var(--background)",
                color: "var(--text-color",
            },
        },
        plugins: [],
    }
}