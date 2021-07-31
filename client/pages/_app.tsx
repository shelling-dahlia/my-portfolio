/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/tailwind.css';
import { store } from '../store';

export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <div className="relative flex flex-col min-h-screen overflow-hidden bg-container">hello there</div>
        </Provider>
    );
};

export default App;
