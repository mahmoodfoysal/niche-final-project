import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-lake-15285.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-success text-center mt-3 mb-5'>Products</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                    products.map(product => <Product
                    key={product._id}
                    product = {product}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Products;