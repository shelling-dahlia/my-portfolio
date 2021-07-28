import React from 'react';
import Document, { Head, Html, NextScript, Main } from 'next/document';

//* Import

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" sizes="57x57" href={`${process.env.BASE_PATH}/asset/share/apple-icon-57x57.png`} />
                    <link rel="apple-touch-icon" sizes="60x60" href={`${process.env.BASE_PATH}/asset/share/apple-icon-60x60.png`} />
                    <link rel="apple-touch-icon" sizes="72x72" href={`${process.env.BASE_PATH}/asset/share/apple-icon-72x72.png`} />
                    <link rel="apple-touch-icon" sizes="76x76" href={`${process.env.BASE_PATH}/asset/share/apple-icon-76x76.png`} />
                    <link rel="apple-touch-icon" sizes="114x114" href={`${process.env.BASE_PATH}/asset/share/apple-icon-114x114.png`} />
                    <link rel="apple-touch-icon" sizes="120x120" href={`${process.env.BASE_PATH}/asset/share/apple-icon-120x120.png`} />
                    <link rel="apple-touch-icon" sizes="144x144" href={`${process.env.BASE_PATH}/asset/share/apple-icon-144x144.png`} />
                    <link rel="apple-touch-icon" sizes="152x152" href={`${process.env.BASE_PATH}/asset/share/apple-icon-152x152.png`} />
                    <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.BASE_PATH}/asset/share/apple-icon-180x180.png`} />
                    <link rel="icon" type="image/png" sizes="192x192" href={`${process.env.BASE_PATH}/asset/share/android-icon-192x192.png`} />
                    <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.BASE_PATH}/asset/share/favicon-32x32.png`} />
                    <link rel="icon" type="image/png" sizes="96x96" href={`${process.env.BASE_PATH}/asset/share/favicon-96x96.png`} />
                    <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.BASE_PATH}/asset/share/favicon-16x16.png`} />
                    <link rel="mask-icon" href={`${process.env.BASE_PATH}/asset/share/favicon-32.png`} color="orange" />
                    <link rel="manifest" href={`${process.env.BASE_PATH}/asset/share/manifest.json`} />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content={`${process.env.BASE_PATH}/asset/share/ms-icon-144x144.png`} />
                    <meta name="theme-color" content="#ffffff" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7Q1XL029H8"></script>
                    <script src={`${process.env.BASE_PATH}/static/google.js`}></script>
                </Head>

                <body className="preload">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
