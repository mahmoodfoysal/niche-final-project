import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-lake-15285.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='mt-5 mb-5 text-center'>Products</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">   
                {
                    products.slice(0, 6).map(product => <Product
                    key={product._id}
                    product = {product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;