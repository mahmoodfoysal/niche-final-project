import React from 'react';
import Rating from 'react-rating';
import './RatingCard.css';

const RatingCard = ({ productRating }) => {
    const { name, rating, comment, productImage, productName } = productRating;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={productImage} class="card-img-top" alt="product_image" height="150px"/>
                    <div class="card-body">
                        <h5 class="card-title">{productName}</h5>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star star-color"
                            fullSymbol="fas fa-star star-color"
                            readonly
                        ></Rating>
                        <p>{comment}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-bold">by: {name}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingCard;