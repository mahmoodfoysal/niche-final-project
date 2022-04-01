import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, productName, details, discount, price, image} = product;
    const history = useHistory()
    const keyPoint = details?.split("*")

    return (
        <div>
            <div className="col">
                    <div className="card" onClick={() => history.push(`/product/${_id}`)}>
                        <img src={image} className="card-img-top" alt="Product_image" />
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                            <h5 className="card-title">{productName}</h5>
                            <h6 className="card-title text-danger">{discount}</h6>
                            </div>
                            <hr />
                            <ul>
                                {
                                    keyPoint?.map(details => <li key={details}>{details}</li>)
                                }
                            </ul>
                            <div className='d-flex justify-content-between'>
                            <h6>$ {price}</h6>
                            <button className='purchase-btn'>Purchase</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;