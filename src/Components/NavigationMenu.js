import React from 'react';
import {Link} from "react-router-dom";
import shopLogo from './assets/shopLogo.png';

export default function NavigationMenu(props) {
    return (
        <div>
            <img className={'h-6 mb-4'} alt="shop logo" src={shopLogo}/>
                    <ul>
                        <li><Link to ='/login' className={'text-blue-500 py-3 border-t border-b block'} onClick={props.closeMenu}>Login</Link></li>
                        <li><Link to ='/' className={'text-blue-500 py-3 border-t border-b block'} onClick={props.closeMenu}>Home</Link></li>
                        <li><Link to ='/products' className={'text-blue-500 py-3 border-t border-b block'} onClick={props.closeMenu}>Products</Link></li>
                        <li><Link to ='/about' className={'text-blue-500 py-3 border-b block'} onClick={props.closeMenu}>About Us</Link></li>
                        <li><Link to ='/contact' className={'text-blue-500 py-3 border-b block'} onClick={props.closeMenu}>Contact Us</Link></li>
                    </ul>
        </div>
    )
}
