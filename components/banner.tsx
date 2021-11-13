import * as React from 'react';
import BehanceLogo from '../public/images/behance';
import GithubLogo from '../public/images/github';
import LinkedinLogo from '../public/images/linkedin';

export interface BannerProps {}

const Banner: React.FunctionComponent<BannerProps> = () => {
    return (
        <div className="p-4 md:p-0 bg-papaya-whip-500 md:py-4">
            <div className="mx-auto md:w-4/5">
                <h2 className="text-xl font-semibold text-center text-wine-berry-500 md:text-4xl">Welcome Here!</h2>
                <div className="flex flex-col space-y-4 md:space-x-16 md:flex-row md:justify-center">
                    <img className="object-cover md:h-52 " src="/images/banner.jpeg" alt="Lam tam nhu" />

                    <div className="space-y-4">
                        <h1 className="text-2xl font-semibold text-center md:text-4xl text-punch-500 md:text-left">Lâm Tâm Như</h1>
                        <p className="max-w-2xl opacity-70">
                            I’m a Front-end web developer and UI designer. At FPT University, I am pursuing a degree in Software Engineering. I'm also
                            proficient in English, design, and architectural development, as seen by several school assignment projects.
                        </p>
                        <div className="text-center md:text-left">
                            <button className="px-4 py-2 font-semibold text-gray-100 rounded-xl bg-punch-500">Get In Touch</button>
                        </div>
                    </div>
                    <div className="hidden space-y-4 lg:block">
                        <a href="https://www.linkedin.com/in/shelling-dahlia/" className="block" target="__blank">
                            <LinkedinLogo />
                        </a>
                        <a href="https://github.com/shelling94" target="__blank" className="block">
                            <GithubLogo />
                        </a>
                        <a href="https://www.behance.net/tmnhlm1" className="block" target="__blank">
                            <BehanceLogo />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
