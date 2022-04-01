import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const {_id, image, productName, details, price, description } = productDetails;
    const keyPoint = details?.split("*")
    useEffect(() => {
        fetch(`http://localhost:5000/productDetails/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <img style={{width: '100%'}} src={image} alt="product_image" />
                </div>
                <div className="col-md-6">
                    <h2>{productName}</h2>
                    <h4>Features:</h4>
                    <ul>
                        {
                            keyPoint?.map(details => <li key={details}>{details}</li>)
                        }
                    </ul>
                    <h6>$ {price}</h6>
                    <Link to={`/orderProduct/${_id}`}>
                            <button className='purchase-btn'>Purchase</button>
                            </Link>
                </div>
                <h2 className='mt-5'>Product Description</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;