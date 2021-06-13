import * as React from 'react';

export interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    return (
        <div className="flex flex-col-reverse overflow-hidden md:flex-row md:space-x-8 sm:w-11/12 xl:w-3/5">
            <div className="z-20 flex-1 space-y-4 fade-left">
                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold tracking-widest text-coolGray-50 md:text-8xl">
                        Phạm Vĩnh
                        <br className="hidden md:block" /> Nhân
                    </h1>
                    <div className="space-y-1 ">
                        <div className="h-1 bg-red-500 rounded-full w-36"></div>
                        <div className="w-16 h-1 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div className="text-lg text-coolGray-400">
                    <h2>Full-stack Web Developer</h2>
                    <h2>MEAN STACK, NestJS core</h2>
                    <p>
                        Highly adaptable, problem solver loves to build programs more productive and flexible. I love to build website that helps
                        people solve problem.
                    </p>
                </div>

                <div>
                    <a
                        href="/"
                        className="inline-block px-8 py-4 text-lg font-semibold duration-200 transform bg-red-500 hover:bg-red-600 rounded-2xl text-coolGray-50 hover:-translate-y-1"
                    >
                        Show Me More
                    </a>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-600 via-red-600 w-96 h-96 fade-in">
                <img
                    className="block object-cover h-full transform translate-y-10 rounded-lg w-80"
                    src="/asset/images/avatar.jpg"
                    alt="My Chess Project"
                />
            </div>
        </div>
    );
};

export default Profile;
