import React,{useState} from 'react';
import Loader from "../Components/Loader";
import shopLogo from '../Components/assets/shopLogo.png';

export default function Contact() {
  const [details, setDetails] = useState({firstName:'',lastName:'', email:'', message:''});
  let content;
  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    content = <Loader/>
    
    setTimeout(() => {
      alert("Dziekujemy za wiadomość!")
    }, 1000);
 }
  content = <form className="w-full" onSubmit={submitHandler}>
  <div className="flex flex-wrap">
    <div className="w-full mt-8 p-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Imię
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="FirstName" 
             type="text"
             onChange={e => setDetails({...details, firstName: e.target.value})} />
      
    </div>
    <div className="w-full p-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Nazwisko
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
             id="LastName" 
             type="text"
             onChange={e => setDetails({...details, lastName: e.target.value})} />
    </div>
  </div>
  <div className="flex flex-wrap ">
    <div className="w-full p-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
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
    <div className="w-full p-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Wiadomość
      </label>
      <textarea className=" no-resize shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                id="Message"
                onChange={e => setDetails({...details, message: e.target.value})}></textarea>
      
    </div>
  </div>
  <div >
    <div className="p-3">
    <input className="bg-black border-2 border-black text-white font-bold py-2 px-6 mt-5 rounded w-full"
                               type="submit"
                               value="WYŚLIJ"
                            
                        />
    </div>
   
  </div>
</form>
    return (
      <>
        <h2 className={"pt-3 px-3"}>SKONTAKTUJ SIĘ Z NAMI</h2>
        {content}
        <p className={"p-3 text-xs text-gray-400"}>
        * KLIKAJĄC PRZYCISK "WYŚLIJ" WYRAŻASZ ZGODĘ NA PRZETWARZANIE SWOICH DANYCH OSOBOWYCH 
        PRZEZ LOREM S.A. Z SIEDZIBĄ W Lorem UL. IPSUM 39/44 W CELU UDZIELANIA ODPOWIEDZI NA 
        ZGŁOSZENIA ZAWARTE W FORMULARZU KONTAKTOWYM.
        </p>
        <div className={"p-3"}>
          <img className={'h-6 mb-4'} alt="shop logo" src={shopLogo}/>
          <p className={"text-xs mt-4"}>
            SKLP S.A <br/>
            Ul. Lorem Impsum 32/44 <br/>
            90-922 Warszawa <br/>
          </p>
          <h3 className={"text-xl mt-4"}>INFOLINIA</h3>
          <p className={"text-xs mt-4"}>
            PN-PT 9:00-20:00<br/>
            SOB 10:00-16:00
            <p className={"text-base mt-4"}>Koszt połączenia według taryfy operatora</p>
            <p className={"text-2xl text-red-600 mt-4"}>42 799 97 79</p>
          </p>
        </div>
        
      </>
        
    )
}
