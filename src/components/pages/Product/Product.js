import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, productName, details, discount, price, image} = product;
    const history = useHistory()
    const keyPoint = details?.split("*")

    return (
        <div>
            <div className="col">
                    <div className="card card-style" >
                        <img onClick={() => history.push(`/product/${_id}`)} src={image} className="card-img-top" alt="Product_image" height="200px" />
                        <div className="card-body">
                            <div onClick={() => history.push(`/product/${_id}`)}>
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
                            </div>
                            
                            <div className='d-flex justify-content-between'>
                            <h6>$ {price}</h6>
                            <Link to={`/orderProduct/${_id}`}>
                            <button className='purchase-btn'>Purchase</button>
                            </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;