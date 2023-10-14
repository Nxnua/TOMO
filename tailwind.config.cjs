/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
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
                "black-75": "rgba(var(--black-75))",
            },
        },
    },
    plugins: [],
};
