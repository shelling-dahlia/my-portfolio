require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

module.exports = {
    assetPrefix: '.',
    env: {
        SERVER_URL: process.env.SERVER_URL,
        DOMAIN: process.env.DOMAIN,
        FB_APP_ID: process.env.FB_APP_ID,
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
            },
        });
        return config;
    },
};
