import React,{useState} from 'react';
import Loader from "../Components/Loader"

export default function Contact() {
  const [details, setDetails] = useState({firstName:'',lastName:'', email:'', message:''});
  let content;
  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    content = <Loader/>
    
    setTimeout(() => {
      alert("Thanks for your message!")
    }, 3000);
 }
  content = <form className="w-full h-screen" onSubmit={submitHandler}>
  <div className="flex flex-wrap">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="FirstName" 
             type="text"
             onChange={e => setDetails({...details, firstName: e.target.value})} />
      
    </div>
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="LastName" 
             type="text"
             onChange={e => setDetails({...details, lastName: e.target.value})} />
    </div>
  </div>
  <div className="flex flex-wrap ">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="Email" 
             type="email"
             onChange={e => setDetails({...details, email: e.target.value})}
             />
      
    </div>
  </div>
  <div className="flex flex-wrap ">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea className=" no-resize shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                id="Message"
                onChange={e => setDetails({...details, message: e.target.value})}></textarea>
      
    </div>
  </div>
  <div >
    <div>
    <input className="bg-black border-2 border-black text-white font-bold py-2 px-4 mt-5  rounded w-full"
                               type="submit"
                               value="SEND"
                            
                        />
    </div>
   
  </div>
</form>
    return (
      <>
        {content}
      </>
        
    )
}
