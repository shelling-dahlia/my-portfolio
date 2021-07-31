const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: { ...theme.spacing },
        extend: {},
        colors: {
            ...colors,
        },
        backgroundImage: {
            ...theme.backgroundImage,
        },
        gridTemplateColumns: {
            ...theme.gridTemplateColumns,
        },
        boxShadow: {
            ...theme.boxShadow,
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        float: false,
    },
    plugins: [],
};
