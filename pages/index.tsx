import * as React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import SeoHead from '../components/seoHeader';
import routers from '../common/constants/router';
import AboutMe from '../components/aboutme';
import Skills from '../components/skill';
import Footer from '../components/footer';
import Contact from '../components/contact';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <SeoHead {...routers.home.header} />
            <Navbar />
            <Banner />
            <AboutMe />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
