import * as React from 'react';

export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
    return (
        <div className="px-2 py-8 bg-macaroni-and-cheese-500">
            <form className="w-2/5 mx-auto space-y-2">
                <h1 className="text-2xl text-center text-yellow-800 font ">GET IN TOUCH</h1>
                {/* <p className="font-semibold text-green-500">Go21321321321321321321321od</p> */}
                <div className="justify-between space-y-2 md:space-x-4 md:flex md:space-y-0">
                    <div className="md:flex-1">
                        <input placeholder="Your name *" className="w-full p-2 focus:outline-none" />
                        {/* <p className="text-yellow-600">Some thing wrong</p> */}
                    </div>
                    <div className="md:flex-1">
                        <input placeholder="Your email *" className="w-full p-2 focus:outline-none" />
                    </div>
                </div>
                <div>
                    <input
                        placeholder="Subject"
                        className="w-full p-2 placeholder-black border border-black border-dashed focus:outline-none bg-macaroni-and-cheese-500"
                    />
                </div>
                <div>
                    <textarea placeholder="Your Message *" name="" id="" className="w-full h-64 p-2 focus:outline-none"></textarea>
                </div>
                <button className="p-2 text-black border border-black border-dashed focus:outline-none">SEND MESSAGE</button>
                {/* <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
            </form>
        </div>
    );
};

export default Contact;
