import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-lake-15285.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products])
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