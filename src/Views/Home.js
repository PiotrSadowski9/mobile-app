import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequests'

export default function Home() {
    
    const url = `https://601bd2cf1a9c22001705fb28.mockapi.io/api/v1/products?page=1&limit=10`;
    
    let products = useAxiosGet(url)

    let content = null;
    if(products.loading){
        content = <Loader/>
    }
    if(products.error){
        content = <p>Error</p>
    }
    if(products.data){
        content = products.data.map((product) => 
            <div key={product.id}>
                <ProductCard
                    product={product}
                />
            </div>
        )
            
    }

    return (
        <div>
            <h1 className={'fond-bold text-2xl'}>Best Sellers</h1>
            {content}
           
        </div>
    )
}
