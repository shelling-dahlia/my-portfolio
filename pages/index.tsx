import * as React from 'react';

import routers from '../common/constants/router';
import Profile from '../components/profile';
import SeoHead from '../components/seoHead';

import Projects from '../components/project';
import SkillSession from '../components/skill';
import Contact from '../components/contact';
export interface HomeProps {
    currentSelect: number;
}

const Home: React.FunctionComponent<HomeProps> = ({ currentSelect }) => {
    return (
        <>
            <SeoHead {...routers.home.header} />
            <div className="h-screen duration-1000 transform" style={{ transform: `translateY(-${100 * currentSelect}%)` }}>
                <div className="relative flex items-center justify-center h-full p-4">
                    <Profile />
                </div>
                <div className="flex items-center justify-center h-full" id="projects">
                    <div className="z-10 w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                        <Projects />
                    </div>
                </div>
                <div className="flex items-center justify-center h-full">
                    <div className="z-10 w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                        <SkillSession />
                    </div>
                </div>
                <div className="flex items-center justify-center h-full">
                    <div className="z-10 w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
