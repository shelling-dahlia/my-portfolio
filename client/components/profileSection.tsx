import * as React from 'react';

export interface ProfileProps {
    handleOnClick: (index: number) => void;
}

const ProfileSection: React.FunctionComponent<ProfileProps> = ({ handleOnClick }) => {
    return (
        <div className="flex flex-col-reverse overflow-hidden md:flex-row-reverse md:space-x-8 sm:w-11/12 xl:w-3/5">
            <div className="z-20 flex-1 space-y-8 fade-left">
                <div className="space-y-2">
                    <div>
                        <h1 className="text-4xl font-semibold tracking-widest transform -translate-x-1 text-coolGray-50 xl:text-6xl 2xl:text-7xl">
                            Pham Vinh
                            <br className="hidden md:block" /> Nhan
                        </h1>
                        <h2 className="text-lg text-coolGray-200">Full-stack Web Developer (MEAN stack, NestJS core)</h2>
                    </div>
                    <div className="space-y-1 ">
                        <div className="h-1 bg-red-500 rounded-full w-36"></div>
                        <div className="w-16 h-1 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div className="text-lg text-coolGray-400">
                    <p className="max-w-lg">
                        Highly adaptable, problem solver loves building programs more productive and flexible. I love to build website that helps
                        people solving problem.
                    </p>
                </div>

                <div>
                    <button
                        onClick={() => handleOnClick(3)}
                        className="px-4 py-2 text-base font-semibold duration-200 bg-red-500 rounded-md md:text-lg md:py-4 md:px-6 focus:border-none text-coolGray-50 md:rounded-xl hover:bg-red-600 focus:outline-none"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            <div className="flex-1 md:text-right">
                <div className="relative inline-block overflow-hidden rounded-lg bg-gradient-to-r from-green-600 via-red-600 md:w-96 md:h-96 fade-in">
                    <img
                        className="block object-cover w-64 h-full transform translate-y-4 rounded-lg md:translate-y-8 md:w-80"
                        src="/asset/images/avatar.jpg"
                        alt="My Chess Project"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
