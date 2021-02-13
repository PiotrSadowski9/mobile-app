import React from 'react'

export default function LoginForm() {
    return (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                    </div>
                    
                    <div className="mb-6">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
                        <p className="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue border-2 hover:bg-blue text-blue font-bold py-2 px-4 rounded" type="button">
                            Sign In
                        </button>
                        <button className="bg-blue border-2 hover:bg-blue text-blue font-bold py-2 px-4 rounded" type="button">
                            Register
                        </button>
                        
                    </div>
            </div>
    )
}
