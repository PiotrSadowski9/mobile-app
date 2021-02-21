import React, {useState} from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequests';
import Pagination from '../Components/Pagination'

export default function Products() {
    


    const url = `https://601bd2cf1a9c22001705fb28.mockapi.io/api/v1/products`;
    const [postsPerPage] = useState(10); 
    const [currentPage,setCurrentPage] = useState(1)
    
    let products = useAxiosGet(url)

    let content = null;
    let pagination = null;
    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    if(products.loading){
        content = <Loader/>
    }
    if(products.error){
        content = <p>Error</p>
    }
    if(products.data){
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentProducts = products.data.slice(indexOfFirstPost,indexOfLastPost)

        pagination = <Pagination postPerPage={postsPerPage} totalPosts={products.data.length} paginate={paginate} />;
        content = currentProducts.map((product) => 
            <div key={product.id}>
                <ProductCard
                    product={product}
                />
            </div>
        )
            
    }

    return (
        <div>
            <h1 className={'fond-bold text-2xl p-3'}>Nasza oferta</h1>
            {content}
            {pagination}
        </div>
    )
}
