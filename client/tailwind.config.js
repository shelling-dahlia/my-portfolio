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
            punch: {
                DEFAULT: '#DC3545',
                50: '#FEF9F9',
                100: '#FAE3E5',
                200: '#F3B7BD',
                300: '#EB8C95',
                400: '#E4606D',
                500: '#DC3545',
                600: '#BD2130',
                700: '#921925',
                800: '#66121A',
                900: '#3B0A0F',
            },
            'papaya-whip': {
                DEFAULT: '#FFEFD7',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#FFFFFF',
                500: '#FFEFD7',
                600: '#FFDBA4',
                700: '#FFC671',
                800: '#FFB23E',
                900: '#FF9D0B',
            },
            'wine-berry': {
                DEFAULT: '#612224',
                50: '#D89093',
                100: '#D27D80',
                200: '#C4585B',
                300: '#AD3C40',
                400: '#872F32',
                500: '#612224',
                600: '#3B1516',
                700: '#150808',
                800: '#000000',
                900: '#000000',
            },
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
