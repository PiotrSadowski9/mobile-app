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

    
    
    let products = user.map((e,index) => {
         if(index % 2 == 0) {
             return <tr>
                        <td className="w-1/3 text-left py-3 px-4">{e.name}</td>
                        <td className="w-1/3 text-left py-3 px-4">{e.price}</td>
                        <td className="text-left py-3 px-4"><FontAwesomeIcon icon={faMinus} onClick={() =>deleteItem(e.name)}/></td>
                    </tr>
               }  
        return  <tr class="bg-gray-100">
                    <td class="w-1/3 text-left py-3 px-4">{e.name}</td>
                    <td class="w-1/3 text-left py-3 px-4">{e.price}</td>
                    <td class="text-left py-3 px-4"><FontAwesomeIcon icon={faMinus} onClick={() =>deleteItem(e.name)}/></td>
                    
                </tr>         
    })



    return (<>
            <div className="md:px-32 p-8 w-full">
                <div className="shadow overflow-hidden rounded border-b border-gray-200">
                    <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nazwa</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Cena</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Usuń</th>
                        
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                    {products}
                    
                    </tbody>
                    </table>
                </div>
            </div>
            <div class="ml-16">
                    <div class="flex items-center">
                        <div class="flex flex-col justify-center">
                            <div class="text-lg">{sum} PLN</div>
                            <div class="text-sm text-gray-400">Suma</div>
                        </div>
                        <button type="button" class="ml-20 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Kup teraz</button>
                    </div>
                
            </div>
</>
    )
}
