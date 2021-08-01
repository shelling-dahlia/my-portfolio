import * as React from 'react';
import GmailIcons from '../public/images/gmail';
import LinkedinIcons from '../public/images/linkedin-lg';
import FacebookIcons from '../public/images/facebook';
import PhoneIcons from '../public/images/phone';
import LocationIcons from '../public/images/location';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-2 bg-sandy-brown-500">
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/ltnhu.shelling" target="__blank">
                    <FacebookIcons />
                </a>
                <a href="mailto: tamnhulam94ls@gmail.com">
                    <GmailIcons />
                </a>
                <a href="tel:+84901951454">
                    <PhoneIcons />
                </a>
                <a href="https://goo.gl/maps/VD5Lfb5VQwJwkFLf7" target="__blank">
                    <LocationIcons />
                </a>
                <a href="https://www.linkedin.com/in/t%C3%A2m-nh%C6%B0-l%C3%A2m-0ab792218/" target="__blank">
                    <LinkedinIcons />
                </a>
            </div>
            <p className="font-medium">&copy;Copyright by Shelling</p>
        </div>
    );
};

export default Footer;
