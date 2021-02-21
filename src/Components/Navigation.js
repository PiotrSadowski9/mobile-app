import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faUser,faSignOutAlt, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring';
import NavigationMenu from './NavigationMenu';
import {Link} from "react-router-dom";




export default function Navigation({user,setUser}) {
   
    
    const [showMenu, setShowMenu] = useState(false);
    
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
        })
    let loginIcon;
    let signOutIcon;
    if(user){
        signOutIcon = <FontAwesomeIcon 
                            icon={faSignOutAlt}
                            className={"mr-5"}
                            onClick={() => setUser({...user,logged:false})}
                            />;
        loginIcon = <FontAwesomeIcon
        icon={faUser}
        className={'mr-5 text-green-600'}/>
        
    }
    if(!user){
        loginIcon = <FontAwesomeIcon
                        icon={faUser}
                        className={'mr-5 text-red-600'}/>
    }
    
   
    
    return (
        <nav>
            <span className={'text-xl'}>
                
                <Link to ='/cart'>
                    <FontAwesomeIcon 
                        icon={faShoppingCart}
                        className={"mr-5"}
                        />
                </Link>
                <Link to ='/login'>
                    {loginIcon}
                </Link>
                {signOutIcon}
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}

                />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className={'bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'}
                    onClick={() => setShowMenu(false)}>
                </animated.div>
    )    
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className={'fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3'}>
                    
                    <NavigationMenu closeMenu={() => setShowMenu(false)}/>
                </animated.div>
    )    
            }
        </nav>
    )
}
