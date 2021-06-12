import * as React from 'react';
import { useRouter } from 'next/router';

import NextJSIcon from '../public/asset/icons/nextjs';
import NestJSIcon from '../public/asset/icons/nestjs';
import MysqlIcon from '../public/asset/icons/mysql';
import RedisIcon from '../public/asset/icons/redis';
import routers from '../common/constants/router';

import SeoHead from '../components/seoHead';
import { useDebounce } from '../common/hooks/useDebounce';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    const [currentSelect, setCurrentSelect] = React.useState(0);
    const debounceSelect = useDebounce(currentSelect, 500);

    return (
        <>
            <SeoHead {...routers.home.header} />
            <div className="relative flex items-center justify-center flex-1 min-h-screen p-4 bg-container">
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
                <div className="flex flex-col-reverse overflow-hidden md:flex-row md:space-x-8 sm:w-4/5 xl:w-3/5">
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
                                Highly adaptable, problem solver loves to build programs more productive and flexible. I love to build website that
                                helps people solve problem.
                            </p>
                        </div>

                        <div>
                            <a
                                href=""
                                className="inline-block px-8 py-4 text-lg font-semibold duration-200 transform bg-red-500 rounded-2xl text-coolGray-50 hover:-translate-y-1"
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
            </div>
            <div className="w-full px-2 py-8 mx-auto space-y-4 md:w-4/5">
                <h1 className="text-2xl font-semibold tracking-wider text-coolGray-50">FEATURED PROJECT</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-md bg-coolGray-100 ">
                        <div className="relative w-full overflow-hidden h-72 ">
                            <img className="block object-cover w-full h-full " src="/asset/images/mychess.jpg" alt="My Chess Project" />
                            <div className="absolute top-0 w-full h-full bg-sunset-orange-500 loader-wave"></div>
                            <div className="absolute top-0 w-full h-full bg-sunset-orange-500 render-wave"></div>
                            <div className="absolute p-2 bg-gray-800 bg-opacity-70 bottom-2 right-2 banner-fade-in ">
                                <h2 className="text-2xl text-coolGray-50">My Chess</h2>
                                <p className="text-coolGray-400">An Online Chess Board Project</p>
                            </div>
                        </div>
                        <div className="p-2 text-black">
                            <div className="flex space-x-2">
                                <NestJSIcon />
                                <NextJSIcon />
                                <MysqlIcon />
                                <RedisIcon />
                            </div>
                            <p>
                                My chess is an online web games allow people can play chess or tic tac toe and share their happiness across the world.
                                This website is inspired by Chess.com and Steam.
                            </p>
                            <h1>Role: Fullstack + Planner</h1>
                            <h1>Contact Me</h1>
                            <h1>Contact Me</h1>
                            <a></a>
                        </div>
                    </div>
                    <div className="rounded-md bg-coolGray-100 ">
                        <div className="relative w-full overflow-hidden h-72 ">
                            <img className="block object-cover w-full h-full " src="/asset/images/mychess.jpg" alt="My Chess Project" />
                            <div className="absolute top-0 w-full h-full bg-sunset-orange-500 loader-wave"></div>
                            <div className="absolute top-0 w-full h-full bg-sunset-orange-500 render-wave"></div>
                            <div className="absolute p-2 bg-gray-800 bg-opacity-70 bottom-2 right-2 banner-fade-in ">
                                <h2 className="text-2xl text-coolGray-50">My Chess</h2>
                                <p className="text-coolGray-400">An Online Chess Board Project</p>
                            </div>
                        </div>
                        <div className="p-2 text-black">
                            <div className="flex space-x-2">
                                <NestJSIcon />
                                <NextJSIcon />
                                <MysqlIcon />
                                <RedisIcon />
                            </div>
                            <p>
                                My chess is an online web games allow people can play chess or tic tac toe and share their happiness across the world.
                                This website is inspired by Chess.com and Steam.
                            </p>
                            <h1>Role: Fullstack + Planner</h1>
                            <h1>Contact Me</h1>
                            <h1>Contact Me</h1>
                            <a></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
