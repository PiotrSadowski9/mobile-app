import React from 'react'
import Navigation from './Navigation';
import shopLogo from './assets/shopLogo.png';

export default function Header({user}) {
    
    return (
        <header className={"fixed top-0 w-full"}>
            <nav className={"border-b p-3 flex bg-white justify-between items-center"}>
            <img className={'h-6'} alt="shop logo" src={shopLogo}/>
            <Navigation user={user}/>
            </nav>
        </header>
    )
}
