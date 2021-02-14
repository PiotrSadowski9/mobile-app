import React from 'react'

export default function Register() {
    return (
        <div className={'flex flex-col p-10'}>
                    <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Email"/>
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
                        <button className="bg-black border-2 border-black text-white font-bold py-2 px-4 mt-5 rounded w-full" type="button">
                            Register
                        </button>
                    </div>
            </div>
    )
}
