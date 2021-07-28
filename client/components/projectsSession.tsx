import * as React from 'react';
import NextJSIcon from '../public/asset/icons/nextjs';
import NestJSIcon from '../public/asset/icons/nestjs';
import MysqlIcon from '../public/asset/icons/mysql';
import SocketIcon from '../public/asset/icons/socket';
import ReduxIcon from '../public/asset/icons/redux';
import TailwindIcon from '../public/asset/icons/tailwind';
import RedisIcon from '../public/asset/icons/redis';
import EjsIcon from '../public/asset/icons/ejs';
import ExpressIcon from '../public/asset/icons/express';
import ScssIcon from '../public/asset/icons/scss';
import JQueryIcon from '../public/asset/icons/jquery';
import MongoDBIcon from '../public/asset/icons/mongodb';
import ReactIcon from '../public/asset/icons/react';
import TooltipDropBox from './tooltip';

const NextJSLogo = () => (
    <TooltipDropBox content="NextJS" maxLength={0} position="top-full">
        <NextJSIcon />
    </TooltipDropBox>
);

const ReduxLogo = () => (
    <TooltipDropBox content="Redux-Toolkit" maxLength={0} position="top-full">
        <ReduxIcon />
    </TooltipDropBox>
);

const TailwindLogo = () => (
    <TooltipDropBox content="Tailwind" maxLength={0} position="top-full">
        <TailwindIcon />
    </TooltipDropBox>
);

const NestJSLogo = () => (
    <TooltipDropBox content="NestJS" maxLength={0} position="top-full">
        <NestJSIcon />
    </TooltipDropBox>
);

const MysqlLogo = () => (
    <TooltipDropBox content="Mysql" maxLength={0} position="top-full">
        <MysqlIcon />
    </TooltipDropBox>
);
const RedisLogo = () => (
    <TooltipDropBox content="Redis" maxLength={0} position="top-full">
        <RedisIcon />
    </TooltipDropBox>
);

const SocketLogo = () => (
    <TooltipDropBox content="Socket.io" maxLength={0} position="top-full">
        <SocketIcon />
    </TooltipDropBox>
);
const ExpressLogo = () => (
    <TooltipDropBox content="ExpressJS" maxLength={0} position="top-full">
        <ExpressIcon />
    </TooltipDropBox>
);
const JQueryLogo = () => (
    <TooltipDropBox content="JQuery" maxLength={0} position="top-full">
        <JQueryIcon />
    </TooltipDropBox>
);
const EJSLogo = () => (
    <TooltipDropBox content="EJS" maxLength={0} position="top-full">
        <EjsIcon />
    </TooltipDropBox>
);
const SCSSLogo = () => (
    <TooltipDropBox content="SCSS" maxLength={0} position="top-full">
        <ScssIcon />
    </TooltipDropBox>
);

const MongodbLogo = () => (
    <TooltipDropBox content="Mongodb" maxLength={0} position="top-full">
        <MongoDBIcon />
    </TooltipDropBox>
);
const ReactLogo = () => (
    <TooltipDropBox content="ReactJS" maxLength={0} position="top-full">
        <ReactIcon />
    </TooltipDropBox>
);

interface ProjectInformation {
    projectName: string;
    ownerProject: string;
    shortDescription: string;
    frontend: (() => JSX.Element)[];
    backend: (() => JSX.Element)[];
    role: string[];
    longDescription: string;
    imageUrl: string;
    link: string;
}

const data: ProjectInformation[] = [
    {
        projectName: 'My Chess',
        link: 'https://github.com/Heaty566/mychess',
        ownerProject: 'My Personal Project',
        imageUrl: '/asset/images/mychess.jpg',
        role: ['Fullstack', 'Planner'],
        shortDescription: 'An Online Chess Board Project',
        backend: [NestJSLogo, MysqlLogo, RedisLogo, SocketLogo],
        frontend: [NextJSLogo, ReduxLogo, TailwindLogo],

        longDescription:
            'My chess is an online web games allow people can play chess or tic tac toe and share their happiness across the world. This website is inspired by Chess.com and Steam.',
    },
    {
        projectName: 'NotesPicker',
        link: 'https://github.com/Heaty566/NotesPicker',
        ownerProject: 'My Personal Project',
        imageUrl: '/asset/images/colorpicker.jpg',
        role: ['Fullstack'],
        shortDescription: 'Picking Tool For Developer',
        backend: [ExpressLogo, MongodbLogo],
        frontend: [ReactLogo],

        longDescription:
            'A small tool for picking up your notes or palettes quickly and easily, Notespicker can handle multiple notes and reminders at the same time. This is also a big update for my colors-picker project',
    },
    {
        projectName: 'The Hood',
        link: 'https://github.com/Heaty566/thehood',
        ownerProject: 'Working Project',
        role: ['Fullstack'],
        imageUrl: '/asset/images/thehood.jpg',
        shortDescription: 'Vietnamese Restaurant',
        backend: [ExpressLogo],
        frontend: [EJSLogo, JQueryLogo, SCSSLogo],
        longDescription:
            'The Hood is not simply one group. The Hood represents a group of new generation who devote and dedicate their youth to work, play and love.',
    },
];

export interface ProjectsProps {}

const ProjectsSession: React.FunctionComponent<ProjectsProps> = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold tracking-wider text-coolGray-50">FEATURED PROJECT</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {data.map((item, index) => {
                    return (
                        <div
                            key={item.projectName}
                            className={`rounded-md bg-coolGray-100 bg-opacity-90  flex flex-col ${index !== 0 && 'hidden  lg:block'}`}
                        >
                            <div className="relative w-full overflow-hidden h-72 ">
                                <img
                                    className="block object-cover w-full h-full "
                                    src={process.env.BASE_PATH + item.imageUrl}
                                    alt={item.projectName}
                                />
                                <div className="absolute top-0 w-full h-full bg-sunset-orange-500 loader-wave"></div>
                                <div className="absolute top-0 w-full h-full bg-sunset-orange-500 render-wave"></div>
                                <div className="absolute top-0 right-0 p-2 font-semibold bg-blue-700 rounded-bl-xl bg-opacity-60 banner-fade-in ">
                                    <p className="text-coolGray-50">{item.ownerProject}</p>
                                </div>
                                <div className="absolute p-2 bg-gray-800 bg-opacity-70 bottom-2 right-2 banner-fade-in ">
                                    <h2 className="text-2xl text-coolGray-50">{item.projectName}</h2>
                                    <p className="text-coolGray-400">{item.shortDescription}</p>
                                </div>
                            </div>
                            <div className="flex-1 p-2 space-y-2 text-black">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-semibold">Front-end:</span>
                                    <span className="flex space-x-2">
                                        {item.frontend.map((Item, index) => (
                                            <Item key={index} />
                                        ))}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-semibold">Back-end:</span>
                                    <span className="flex space-x-2">
                                        {item.backend.map((Item, index) => (
                                            <Item key={index} />
                                        ))}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-semibold">My Role:</span>
                                    <span className="flex space-x-2">
                                        {item.role.map((item) => (
                                            <p key={item} className="px-2 font-medium border border-black">
                                                {item}
                                            </p>
                                        ))}
                                    </span>
                                </div>

                                <p>{item.longDescription}</p>

                                <a
                                    href={`${item.link}`}
                                    target="__blank"
                                    className="inline-block p-2 font-semibold duration-300 bg-red-500 rounded-sm hover:bg-red-600 text-coolGray-50"
                                >
                                    Project Detail
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <a
                href="https://github.com/Heaty566"
                target="__blank"
                className="inline-block px-8 py-2 font-semibold duration-300 bg-white hover:text-white hover:bg-blue-700"
            >
                Show More
            </a>
        </>
    );
};

export default ProjectsSession;
