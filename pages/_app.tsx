/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import '../styles/tailwind.css';

import Navbar from '../components/navbar';
export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <div className="relative flex flex-col min-h-screen bg-container">
            <Navbar />

            <Component {...pageProps} />
        </div>
    );
};

export default App;
