import React from 'react'

export default function Cart({user, setUser}) {
     
    console.log(user)
    user.map((e) => {
        console.log(e)
    })



    return (
        <div>
            <h1>Twój koszyk</h1>
            <ul>
                
            </ul>
        </div>
    )
}
