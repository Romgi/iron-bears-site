import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#f26100",
                "primary-dark": "#d55300",
                "primary-light": "#ff8a3d",
            },
        },
    },
    plugins: [],
};

export default config;
