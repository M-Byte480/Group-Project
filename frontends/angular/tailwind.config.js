/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: '#3490dc',
                    dark: '#1e3a8a',
                },
            },
        },
    },
    plugins: [],
}
