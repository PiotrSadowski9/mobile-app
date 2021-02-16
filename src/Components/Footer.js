import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutubeSquare,faPinterestSquare,faInstagram,faFacebookSquare,faTwitterSquare,faCoffee} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className={'bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full'}>
            &copy; Copyright 2021
            <FontAwesomeIcon
        icon={faCoffee}
        />
        </footer>
    )
}
