import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './ProductDetails.css';

const ProductDetails = () => {
    const {users} = useAuth()
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const {_id, image, productName, details, price, description } = productDetails;
    const keyPoint = details?.split("*")
    useEffect(() => {
        fetch(`http://localhost:5000/productDetails/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name= users?.displayName;
        data.productImage = image;
        data.productName = productName;
        fetch('http://localhost:5000/rating', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Thanks for your valuable review')
                reset();
            }
        })
        console.log(data)
    };
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
            <h2 className='mt-5 mb-5'>Add Review</h2>

            <div className='rating-style'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input disabled defaultValue={users?.displayName} {...register("name")} />
      <input type="number" {...register("rating", { required: true})} placeholder="Enter Your Rating 1 to 5"/>
      <textarea {...register("comment", { required: true})} placeholder="Comment please"/>
      <input className='rating-btn' type="submit" />
    </form>
            </div>
        </div>
    );
};

export default ProductDetails;