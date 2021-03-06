import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';
import {Link} from 'react-router-dom'

export default function Product({user, setUser}) {
    const {id} = useParams()
    const url = `https://601bd2cf1a9c22001705fb28.mockapi.io/api/v1/products/${id}`;
    
    let product = useAxiosGet(url)

    let content = null;
    

    

    
    const addToCart = () => { //Adding product to cart
        
       
        let newUser = user.concat({name:product.data.name,price:Math.round(product.data.price)})
        
        setUser({...user,cart:newUser})
        
        
        
        
    }



    
    if(product.loading){
        content = <Loader/>
    }
    if(product.error){
        content = <p>Error</p>
    }

    if(product.data){
        content = 
            <div className={' mb-4 rounded overflow-hidden px-4 pb-4'}>
                <h1 className={'text-2xl font-bold mb-3'}>{product.data.name}</h1>
                <div className={'w-350 h-256'}>
                    <img  src={product.data.imageUrl} alt={product.data.name}/>
                </div>
                <div className={'font-bold text-xl my-3'}>
                    {product.data.price} PLN
                </div>
                <div>
                    {product.data.description}
                </div>
                <Link to={`/products`} className={'bg-blue-500 text-white p-2 mt-4 flex justify-center rounded-t'}>
                    Wróć
                </Link>
                <button className="bg-blue-500 text-white p-2 mt-4 flex justify-center rounded-t w-full" 
                        type="button"
                        onClick={addToCart}>
                                Dodaj do koszyka
                </button>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}
