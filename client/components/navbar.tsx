import * as React from 'react';
import Link from 'next/link';
import Logo from '../public/images/logo';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-2 pt-4 space-y-2 md:mx-auto md:w-4/5 md:justify-between md:flex-row">
                <Link href="/">
                    <Logo />
                </Link>
                <div>
                    <ul className="flex space-x-4 font-semibold md:text-lg md:space-x-12">
                        <li className="duration-300 hover:text-punch-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="duration-300 hover:text-punch-500">
                            <Link href="/">About</Link>
                        </li>
                        <li className="duration-300 hover:text-punch-500">
                            <Link href="/">Blog</Link>
                        </li>
                        <li className="duration-300 hover:text-punch-500">
                            <a href="https://github.com/shelling94" target="__blank">
                                Repository
                            </a>
                        </li>
                        <li className="duration-300 hover:text-punch-500">
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
