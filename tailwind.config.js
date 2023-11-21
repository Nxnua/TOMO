
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/img/hero-pattern.svg')",
                "light-banner": "url('/images/background.png')",
                "footer-texture": "url('/img/footer-texture.png')",
            },
            colors: {
                info: "var(--info)",
                orange: "var(--orange)",
                success: "var(--success)",
                error: "var(--error)",
                warning: "var(--warning)",
                darkbg: "var(--background-dark)",
                darknav: "var(--navigation-dark)",
                black75: "rgba(var(--black-75))",
                black50: "rgba(var(--black-50))",
                
            },
            keyframes: {},
        },
    },
    plugins: [require("tailwind-scrollbar-hide"), require("flowbite/plugin")],
};