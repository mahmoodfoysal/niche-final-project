import React, { useEffect, useState } from 'react';
import RatingCard from './RatingCard/RatingCard';

const ProductsRatings = () => {
    const [productsRatings, setProductsRatings] = useState([])
    useEffect(() => {
        fetch('https://vast-lake-15285.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => setProductsRatings(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='mt-5 mb-5 text-center'>Customer Rating</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                productsRatings.map(productRating => <RatingCard
                key={productRating._id}
                productRating={productRating}
                ></RatingCard>)
            }

            </div>
        </div>
    );
};

export default ProductsRatings;