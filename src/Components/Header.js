import React from 'react'
import Navigation from './Navigation';
import shopLogo from './assets/shopLogo.png';
import {Link} from "react-router-dom";

export default function Header({user,setUser}) {
    
    return (
        <header className={"fixed top-0 w-full"}>
            <nav className={"border-b p-3 flex bg-white justify-between items-center"}>
            <Link to ='/' 
                  >
                    <img className={'h-6'} alt="shop logo" src={shopLogo}/>
            </Link>
            <Navigation user={user} setUser={setUser}/>
            </nav>
        </header>
    )
}
