/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/tailwind.css';
import { store } from '../store';

import Navbar from '../components/navbar';
import { useDebounce } from '../common/hooks/useDebounce';
import { data } from '../components/navbar';
import { useThrottle } from '../common/hooks/useThrottle';
import { useTouch } from '../common/hooks/useTouch';
export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    const [currentSelect, setCurrentSelect] = React.useState(0);
    const [isScroll, setScroll] = React.useState(true);
    const scrollBar = React.useRef<HTMLDivElement>();
    const touch = useTouch();
    const handleOnScroll = useThrottle((event: WheelEvent) => {
        if (isScroll)
            if (event.deltaY > 0) {
                if (currentSelect < 3) setCurrentSelect(currentSelect + 1);
            } else {
                if (currentSelect > 0) setCurrentSelect(currentSelect - 1);
            }
    }, 1200);

    function handleOnScrollStart() {
        setScroll(false);
    }
    function handleOnScrollEnd() {
        setScroll(true);
    }

    React.useEffect(() => {
        if (isScroll)
            if (touch < -0.5) {
                if (currentSelect < 3) setCurrentSelect(currentSelect + 1);
            } else if (touch >= 0.5) {
                if (currentSelect > 0) setCurrentSelect(currentSelect - 1);
            }
    }, [touch]);

    const handleOnClick = (index: number) => setCurrentSelect(index);

    React.useEffect(() => {
        window.addEventListener('wheel', handleOnScroll, false);
        if (scrollBar.current) {
            scrollBar.current.addEventListener('transitionstart', handleOnScrollStart, false);
            scrollBar.current.addEventListener('transitionend', handleOnScrollEnd, false);
        }

        return () => {
            window.removeEventListener('wheel', handleOnScroll, false);
            if (scrollBar.current) {
                scrollBar.current.removeEventListener('transitionstart', handleOnScrollStart, false);
                scrollBar.current.removeEventListener('transitionend', handleOnScrollEnd, false);
            }
        };
    }, [currentSelect, isScroll]);

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
                        data.length - 1 === currentSelect ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
                    } `}
                >
                    SCROLLDOWN
                </div>
                <div
                    className={`hidden btn-scroll-2 lg:block duration-300 transform ${
                        data.length - 1 === currentSelect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    } `}
                >
                    SCROLLTOP
                </div>
                <Component register={scrollBar} handleOnClick={handleOnClick} currentSelect={currentSelect} {...pageProps} />
            </div>
        </Provider>
    );
};

export default App;
