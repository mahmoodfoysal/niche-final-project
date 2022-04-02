import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
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