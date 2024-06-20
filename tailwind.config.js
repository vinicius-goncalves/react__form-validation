/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'c-gray': '#E4E4E4',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
