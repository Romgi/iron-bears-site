import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2596be",
                "primary-dark": "#1e7fa0",
                "primary-light": "#4bb3d8",
            },
        },
    },
    plugins: [],
};

export default config;
