/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/tailwind.css';
import { store } from '../store';

import Navbar from '../components/navbar';
import { useDebounce } from '../common/hooks/useDebounce';
import { data } from '../components/navbar';
export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    const [currentSelect, setCurrentSelect] = React.useState(0);
    const debounceSelect = useDebounce(currentSelect, 500);

    function handleOnScroll(event: WheelEvent) {
        if (event.deltaY > 0) {
            if (debounceSelect < 3) setCurrentSelect(debounceSelect + 1);
        } else {
            if (debounceSelect > 0) setCurrentSelect(debounceSelect - 1);
        }
    }

    const handleOnClick = (index: number) => setCurrentSelect(index);

    React.useEffect(() => {
        window.addEventListener('wheel', handleOnScroll);

        return () => {
            window.removeEventListener('wheel', handleOnScroll);
        };
    }, [debounceSelect]);

    return (
        <Provider store={store}>
            <div className="relative flex flex-col min-h-screen overflow-hidden bg-container">
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 z-0 object-cover w-full h-full"
                    poster="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/ec90698a3cfe069cc86cf70708b83203afc064fe.jpg"
                >
                    <source
                        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/d17957ce794db348363a33a29782e070ead89fb9.webm"
                        type="video/webm"
                    />
                    <source
                        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/93b3c3ec3a9ebe0d0b069ffebb695bfae44fbbb3.mp4"
                        type="video/mp4"
                    />
                </video>
                <Navbar handleOnClick={handleOnClick} />

                <div
                    className={`hidden btn-scroll lg:block duration-300 transform ${
                        data.length - 1 === debounceSelect ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
                    } `}
                >
                    SCROLLDOWN
                </div>
                <Component currentSelect={debounceSelect} {...pageProps} />
            </div>
        </Provider>
    );
};

export default App;
