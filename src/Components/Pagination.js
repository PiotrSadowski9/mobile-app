import React from 'react'

export default function Pagination({postPerPage,totalPosts, paginate}) {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)
    }
    
    
    return (
        
       <nav className="flex justify-center">
           <ul className="flex list-reset  w-auto">
               {pageNumbers.map(number => (
                   <li key={number}
                   onClick={() => window.scrollTo(0,0)}>
                       <div 
                       onClick={() => paginate(number)}
                       
                       
                       className="block hover:text-white hover:bg-blue-500 hover:border-blue-500 text-blue border border-grey-light px-3 py-2">
                       {number}</div>
                   </li>
               ))}
           </ul>
       </nav>
    )
}
