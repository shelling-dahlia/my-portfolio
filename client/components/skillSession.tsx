import * as React from 'react';

export interface SkillSessionProps {}

interface SkillSet {
    name: string;
    skills: string[];
}

const data: SkillSet[] = [
    { name: 'Programming Language', skills: ['Javascript + Typescript', 'Java', 'C#'] },
    {
        name: 'Frontend',
        skills: ['ReactJS', 'Redux', 'JQuery', 'CSS + HTML'],
    },
    {
        name: 'Backend',
        skills: ['NestJS', 'ExpressJS', 'Graphql', 'Socket.io'],
    },
    {
        name: 'Databases',
        skills: ['Mysql', 'SQL Server', 'MongoDB', 'Redis'],
    },
    {
        name: 'Devops',
        skills: ['Docker', 'Github Action', 'AWS', 'Linux'],
    },
    {
        name: 'Others',
        skills: ['Figma', 'Vim', 'Git', 'Scrum'],
    },
];

const SkillSession: React.FunctionComponent<SkillSessionProps> = () => {
    return (
        <div className="rounded-lg bg-gradient-to-tl from-green-600 via-red-500">
            <div className="p-4 space-y-4 duration-300 transform translate-y-4 bg-white rounded-lg lg:space-y-16 lg:translate-x-4 opacity-90 ">
                <h1 className="text-4xl font-semibold lg:text-center">Technical Skills</h1>
                <div className="">
                    {data.map((item) => {
                        return (
                            <div className="flex flex-col flex-wrap space-y-2 lg:space-y-0 lg:space-x-4 lg:items-center lg:flex-row" key={item.name}>
                                <h2 className="flex-1 text-2xl font-semibold border-t-2 border-gray-500 lg:text-right lg:border-none">{item.name}</h2>
                                <div className="flex-col items-center hidden w-4 h-20 lg:flex">
                                    <div className="h-20 border border-gray-400"></div>
                                    <div className="flex items-center justify-center w-4 h-4 border border-gray-400 rounded-full">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1 py-1 space-x-2 lg:space-x-4 ">
                                    {item.skills.map((skill) => {
                                        return (
                                            <p
                                                key={skill}
                                                className="inline-block p-1 font-semibold text-white bg-gray-800 border border-black rounded-sm md:text-lg"
                                            >
                                                {skill}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillSession;
