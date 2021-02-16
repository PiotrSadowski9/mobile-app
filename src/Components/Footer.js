import React from 'react';
import FbLogo from './assets/fbLogo.png';
import TTLogo from './assets/TTLogo.png';
import INLogo from './assets/INLogo.png';
import YTLogo from './assets/YTLogo.png';



export default function Footer() {
    return (
        <footer className={'bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full'}>
            
            <ul className={"flex justify-around my-6 "}>
                <li><img className={'h-6'} alt="Facebook logo" src={FbLogo}/></li>
                <li><img className={'h-6'} alt="Twitter logo" src={TTLogo}/></li>
                <li><img className={'h-6'} alt="Instagram logo" src={INLogo}/> </li>
                <li><img className={'h-6'} alt="YouTube logo" src={YTLogo}/></li>
            </ul>
            <p className={'py-0 px-12'}>Zawartość tej strony jest chroniona prawem autorskim i należy do spółki
             Lorem & Ipsum. L&I oferuje produkty najwyższej jakości, 
             które są przyjazna dla ludzi i środowiska.
            </p>
        </footer>
    )
}
