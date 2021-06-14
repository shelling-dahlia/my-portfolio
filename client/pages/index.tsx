import * as React from 'react';

import ProfileSection from '../components/profileSection';
import SeoHead from '../components/seoHead';
import routers from '../common/constants/router';
import ProjectsSession from '../components/projectsSession';
import SkillSession from '../components/skillSession';
import ContactSection from '../components/contactSection';
export interface HomeProps {
    currentSelect: number;
    handleOnClick: (index: number) => void;
    register: React.LegacyRef<HTMLDivElement> | undefined;
}

const Home: React.FunctionComponent<HomeProps> = ({ handleOnClick, currentSelect, register }) => {
    return (
        <>
            <SeoHead {...routers.home.header} />
            <div className="h-screen duration-1000 transform" ref={register} style={{ transform: `translateY(-${100 * currentSelect}%)` }}>
                <div className={`relative flex items-center justify-center duration-300 h-full p-4 ${currentSelect === 0 ? 'card-wave' : ''} `}>
                    <ProfileSection handleOnClick={handleOnClick} />
                </div>
                <div className={`flex items-center justify-center h-full ${currentSelect === 1 ? 'card-wave fade-in' : ''}`}>
                    <div className="z-10 w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                        <ProjectsSession />
                    </div>
                </div>
                <div className={`flex items-center justify-center h-full ${currentSelect === 2 ? 'card-wave fade-in' : ''}`}>
                    <div className="z-10 w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                        <SkillSession />
                    </div>
                </div>
                <div className={`flex items-center justify-center h-full ${currentSelect === 3 ? 'card-wave fade-in' : ''}`}>
                    <div className="z-10 w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                        <ContactSection />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
