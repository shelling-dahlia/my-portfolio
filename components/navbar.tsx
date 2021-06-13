import * as React from 'react';
import Link from 'next/link';
import GithubIcon from '../public/asset/icons/github';
import FacebookIcon from '../public/asset/icons/facebook';
import LinkedinIcon from '../public/asset/icons/linkedin';

const socialConfig = {
    github: 'https://github.com/Heaty566',
    facebook: 'https://www.facebook.com/Heaty566/',
    linkedin: 'https://www.linkedin.com/in/heaty566/',
};

interface NavbarItem {
    label: string;
    color: string;
}

export const data: NavbarItem[] = [
    { label: 'HOME', color: 'hover:bg-rose-500' },
    { color: 'hover:bg-green-700', label: 'PROJECTS' },
    { color: 'hover:bg-yellow-700', label: 'ABOUT ME' },
    { color: 'hover:bg-blue-600', label: 'CONTACT ME' },
];

export interface NavbarProps {
    handleOnClick: (index: number) => void;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ handleOnClick }) => {
    const [isActive, setActive] = React.useState(false);

    return (
        <div className="fixed z-50 flex w-full p-4 md:p-8 text-coolGray-50">
            <div className="z-50 flex items-center justify-between flex-1 ">
                <Link href="/">
                    <h1 className="text-xl font-medium tracking-wider duration-300 cursor-pointer hover:text-rose-400">Phạm Vĩnh Nhân</h1>
                </Link>
                <div className="flex space-x-16">
                    <div className="hidden space-x-8 md:flex">
                        <a target="__blank" href={socialConfig.github}>
                            <GithubIcon />
                        </a>
                        <a target="__blank" href={socialConfig.facebook}>
                            <FacebookIcon />
                        </a>
                        <a target="__blank" href={socialConfig.linkedin}>
                            <LinkedinIcon />
                        </a>
                    </div>
                    <button className="space-y-2 focus:outline-none" onClick={() => setActive(!isActive)}>
                        <div
                            className={`w-8 h-1 rounded-sm bg-coolGray-50 duration-200 transform ${isActive ? 'translate-y-1 rotate-45' : ''}`}
                        ></div>
                        <div
                            className={`w-8 h-1 rounded-sm bg-coolGray-50 duration-200  transform ${isActive ? '-translate-y-2 -rotate-45' : ''}`}
                        ></div>
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 z-40 w-full h-screen duration-500 transform bg-navbar ${
                    isActive ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-4xl font-semibold md:text-6xl">
                    {data.map((item, index) => (
                        <div className="overflow-hidden " key={item.label}>
                            <button
                                onClick={() => {
                                    handleOnClick(index);
                                    setActive(false);
                                }}
                                className={`inline-block duration-300 delay-500 transform rounded-tl-xl  rounded-br-xl overflow-hidden focus:outline-none ${
                                    isActive ? '' : 'translate-y-full'
                                }`}
                            >
                                <span className={`inline-block p-2 duration-200 transform  ${item.color}`}>{item.label}</span>
                            </button>
                        </div>
                    ))}

                    <div className={`flex md:hidden  space-x-4 duration-300 delay-500 transform ${isActive ? '' : 'scale-x-0'}`}>
                        <a target="__blank" href={socialConfig.github}>
                            <GithubIcon />
                        </a>
                        <a target="__blank" href={socialConfig.facebook}>
                            <FacebookIcon />
                        </a>
                        <a target="__blank" href={socialConfig.linkedin}>
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
