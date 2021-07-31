import * as React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import SeoHead from '../components/seoHeader';
import routers from '../common/constants/router';
import AboutMe from '../components/aboutme';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <SeoHead {...routers.home.header} />
            <Navbar />
            <Banner />
            <AboutMe />
        </>
    );
};

export default Home;
