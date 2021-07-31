import * as React from 'react';
import Image from 'next/image';

export interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
    return (
        <div className="flex justify-center space-x-16 md:py-8">
            <div className="px-2 py-4 space-y-2">
                <h1 className="text-lg font-semibold text-punch-500 md:text-4xl">About Me</h1>
                <p className="max-w-lg opacity-70">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-8 md:flex-row">
                    <ul className="space-y-2 md:space-y-4">
                        <li className="flex items-center gap-1">
                            <img src="/images/location.png" alt="" width="24" height="24" /> Location: Ho Chi City, Vietnam
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/uni.png" alt="" width="24" height="24" /> University: FPT University
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/phone.png" alt="" width="24" height="24" /> Phone: 0901951454
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/level.png" alt="" width="24" height="24" /> Level: Fresher
                        </li>
                    </ul>
                    <ul className="space-y-2 md:space-y-4">
                        <li className="flex items-center gap-1">
                            <img src="/images/address.png" alt="" width="24" height="24" /> Address: Binh Thanh District
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/degree.png" alt="" width="24" height="24" /> Degree: Undergraduate
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/email.png" alt="" width="24" height="24" /> Email: tamnhulam94ls@gmail.com
                        </li>
                        <li className="flex items-center gap-1">
                            <img src="/images/major.png" alt="" width="24" height="24" /> Major: Front-end Developer, UI designer
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative hidden m-8 h-96 cus-border lg:block">
                <img src="/images/image.png" alt="lam tam nhu" className="z-10 h-full " />
            </div>
        </div>
    );
};

export default AboutMe;
