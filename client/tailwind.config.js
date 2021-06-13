const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: { ...theme.spacing, banner: '43rem', contact: '29rem' },
        extend: {},
        colors: {
            ...colors,
            downriver: {
                DEFAULT: '#040E1B',
                50: '#2676DF',
                100: '#1E6ACD',
                200: '#1853A0',
                300: '#113C74',
                400: '#0B2547',
                500: '#040E1B',
                600: '#000000',
                700: '#000000',
                800: '#000000',
                900: '#000000',
            },
            'sunset-orange': {
                DEFAULT: '#FF4D5A',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFE6E8',
                300: '#FFB3B9',
                400: '#FF8089',
                500: '#FF4D5A',
                600: '#FF1A2B',
                700: '#E60011',
                800: '#B3000D',
                900: '#800009',
            },
        },
        backgroundImage: {
            ...theme.backgroundImage,
            navbar: 'linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a)',
            container: 'linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)',
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
