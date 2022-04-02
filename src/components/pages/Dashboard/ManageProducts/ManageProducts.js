import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ManageProduct
                    key={product._id}
                        product={product}
                    ></ManageProduct>)
                }
                </div>
        </div>
    );
};

export default ManageProducts;