/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8BA358',
                    light: '#94B056',
                },
                secondary: '#8B2734',
                'bg-organic': '#FBFBFA',
                'accent-red': '#D32F2F',
                'text-main': '#1A1A1A',
                'text-muted': '#666666',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
