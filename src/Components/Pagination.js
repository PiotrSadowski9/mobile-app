import React from 'react'

export default function Pagination({postPerPage,totalPosts, paginate}) {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        
       <nav className="block">
           <ul className="flex list-reset border border-grey-light rounded w-auto font-sans">
               {pageNumbers.map(number => (
                   <li key={number}>
                       <a 
                       onClick={() => paginate(number)}
                       className="block hover:text-white hover:bg-blue-700 text-blue border-r border-grey-light px-3 py-2">
                       {number}</a>
                   </li>
               ))}
           </ul>
       </nav>
    )
}
