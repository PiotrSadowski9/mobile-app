import React from 'react'
import Navigation from './Navigation';

export default function Header(props) {
    console.log(props)
    return (
        <header className={"fixed top-0 w-full"}>
            <nav className={"border-b p-3 flex bg-white justify-between items-center"}>
            <span className={'font-bold'}>
                MyStore 
            </span>
            <Navigation user={props.user} />
            </nav>
        </header>
    )
}
