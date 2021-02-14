import React, {useState} from 'react';

export default function Register({Login, error}) {
    const [details, setDetails] = useState({name:'', email:'', password:''});
    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }
    return (
        <form className={'flex flex-col p-10'}
              onSubmit={submitHandler} >
                    <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                                    id="username" 
                                    type="text"
                                    name='name' 
                                    placeholder="Username"
                                    onChange={e => setDetails({...details, name: e.target.value})}
                                    value={details.name}
                                    />
                    </div>
                    <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                                   id="email" 
                                   type="email" 
                                   placeholder="Email"
                                   onChange={e => setDetails({...details, email: e.target.value})}
                                   value={details.email}
                                   />
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                               id="password" 
                               type="password" 
                               placeholder="******************"
                               onChange={e => setDetails({...details, password: e.target.value})}
                               value={details.password}
                               />
                       <input className="bg-black border-2 border-black text-white font-bold py-2 px-4 mt-5 rounded w-full"
                               type="submit"
                               value="Register"
                            
                        />
                    </div>
            </form>
    )
}
