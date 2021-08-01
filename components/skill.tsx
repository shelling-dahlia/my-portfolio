import * as React from 'react';
import WorkIcons from '../public/images/work';
import TaskIcons from '../public/images/task';
import LapIcons from '../public/images/lap';

export interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
    return (
        <div className="p-2 space-y-8">
            <h1 className="space-x-1 text-lg font-semibold tracking-wider md:text-center md:space-x-4 md:text-4xl md:uppercase ">
                <span>My</span>
                <span className="text-punch-500">Skills</span>
            </h1>
            <div className="justify-center space-y-2 lg:space-x-16 lg:space-y-0 lg:flex">
                <div className="py-4 space-y-2 bg-white border shadow-2xl lg:w-80 border-nobel-500 md:p-8">
                    <div className="hidden md:grid place-items-center">
                        <WorkIcons />
                    </div>
                    <h1 className="pl-8 text-2xl font-semibold md:text-4xl md:text-center text-punch-500 md:pl-0">Design</h1>
                    <ul className="pl-8 list-disc md:text-lg md:font-medium">
                        <li>Web Design</li>
                        <li>Mobile App Design</li>
                        <li>Desktop App Design</li>
                        <li>Graphic/Print Design</li>
                    </ul>
                </div>
                <div className="py-4 space-y-2 bg-white border shadow-2xl lg:w-80 border-nobel-500 md:p-8">
                    <div className="hidden md:grid place-items-center">
                        <LapIcons />
                    </div>
                    <h1 className="pl-8 text-2xl font-semibold md:text-4xl md:text-center text-punch-500 md:pl-0">Development</h1>
                    <ul className="pl-8 list-disc md:text-lg md:font-medium">
                        <li>Front-end Web App</li>
                        <li>Mobile App</li>
                        <li>Desktop App</li>
                        <li>Data Structures</li>
                    </ul>
                </div>
                <div className="py-4 space-y-2 bg-white border shadow-2xl lg:w-80 border-nobel-500 md:p-8">
                    <div className="hidden md:grid place-items-center">
                        <TaskIcons />
                    </div>
                    <h1 className="pl-8 text-2xl font-semibold md:text-4xl md:text-center text-punch-500 md:pl-0">Soft Skills</h1>
                    <ul className="pl-8 list-disc md:text-lg md:font-medium">
                        <li>Teamwork Skills</li>
                        <li>Content Creation</li>
                        <li>Interpersonal Skills</li>
                        <li>Public Speaking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
