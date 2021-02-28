import React from 'react'

export default function About() {
    return (
        <div className={"flex justify-center items-center flex-col p-5"}>
            <h1 className={'font-bold text-2xl mb-6'}>
                About Us
            </h1>
            <p className={"text-lg leading-7 mb-6"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus quam, 
            rhoncus et venenatis a, porttitor id purus. Quisque et tempus turpis.
             Vivamus lobortis mauris eget est rhoncus, at congue eros mollis.</p>
             <p className={"text-lg leading-7 mb-6"}>Sed semper varius mi, in viverra ante ultrices consectetur. 
             Nullam ligula purus, rhoncus id dignissim ac, laoreet vel ante.</p>
             <p className={"text-lg leading-7 mb-6"}>Sed iaculis lorem.
             Nunc fermentum sit amet velit vel cursus. Donec mattis est at mollis scelerisque.</p>
        </div>
    )
}
