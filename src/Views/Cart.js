import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

export default function Cart({user, setUser}) {
    
    const deleteItem = name => {
        setUser({...user,cart:user.filter(e => e.name !== name)}); //removing product from cart in state
        console.log(user) 
     }

     const sum = user.reduce(function(prev,cur){
         return prev + cur.price
     },0);
     console.log(sum)

    
    
    let products = user.map(e => {
        return <li key={e.name}>
                    Nazwa: {e.name} 

                    Cena: {e.price} 
                    <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={() =>deleteItem(e.name)}
                            
                          />
                    
               </li>

    })



    return (
        <div>
            <h1>Twój koszyk</h1>
            <ul>
                {products}
            </ul>

            <p>Suma:{sum}</p>
        </div>
    )
}
