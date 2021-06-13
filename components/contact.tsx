import * as React from 'react';
import { useForm } from 'react-hook-form';

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const defaultValues: ContactForm = {
    email: '',
    message: '',
    name: '',
};
export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
    const { register, handleSubmit } = useForm<ContactForm>({ defaultValues });
    const errors = useFormError<ContactForm>(defaultValues);
    return (
        <div className="mx-auto rounded-md bg-gradient-to-bl from-green-600 via-red-600 md:w-contact">
            <form className="px-2 py-16 space-y-4 transform bg-white rounded-md md:px-8 md:-translate-x-4 md:translate-y-4 bg-opacity-80 md:w-contact">
                <div className="mb-8">
                    <h1 className="text-4xl font-semibold text-center text-gray-900">Get In Touch</h1>
                    <p className="text-center text-gray-500 ">Thank For Your Message, I will response your message as soon as possible.</p>
                </div>
                <div className="">
                    <label className="block font-medium text-gray-800">Full Name</label>
                    <input className="block w-full outline-none rounded-sm bg-tuna py-2 px-1.5 border border-gray-600 border-opacity-70" />
                    {/* <p className="text-red-500">Full Name</p> */}
                </div>
                <div>
                    <label className="block font-medium text-gray-800">Email</label>
                    <input
                        type="email"
                        className="block w-full outline-none rounded-sm bg-tuna py-2 px-1.5 border border-gray-600 border-opacity-70"
                    />
                    {/* <p className="text-red-500">Email</p> */}
                </div>
                <div>
                    <label className="block font-medium text-gray-800">Your Message</label>
                    <textarea
                        className="block w-full outline-none rounded-sm bg-tuna py-2 px-1.5  text-mercury border border-gray-600 border-opacity-70"
                        placeholder="Message..."
                    ></textarea>
                    {/* <p className="text-red-500">Your Message</p> */}
                </div>
                <div>
                    <button className="inline-block p-2 font-semibold duration-300 bg-red-500 rounded-sm hover:bg-red-600 text-coolGray-50">
                        Submit Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
