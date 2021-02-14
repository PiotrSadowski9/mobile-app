import React, {useState} from 'react';
import {Link} from "react-router-dom";


export default function Login() {
   
    return (
        <form >
                    <div className="mb-4 p-5">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                                   id="name"
                                   name='name' 
                                   type="text" 
                                   placeholder="Username"
                                   
                                   />
                    </div>
                    
                    <div className="mb-6 p-5">
                        <label className="block text-grey-darker text-sm font-bold mb-2" 
                               htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                               id="password" 
                               type="password" 
                               placeholder="******************"
                               
                               />
                        <input className="bg-black border-2 border-black text-white font-bold py-2 px-4 mt-5 rounded w-full"
                               type="submit"
                               value="LOGIN"
                            
                        />
                    </div>
                    <div className={'bg-gray-200 w-full p-5 flex flex-col p-10 justify-center content-between'}>
                        
                        <p className={'underline'}>Are you here for the first time?</p>
                        <Link to ='/register'>
                            <button className="bg-gray-200 border-2 border-black text-black font-bold py-2 px-4 rounded w-full" 
                                    type="button">
                                Register
                            </button>
                        </Link>
                        
                        
                    </div>
            </form>
    )
}
