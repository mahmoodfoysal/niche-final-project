import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const OrderProduct = () => {
    const {id} = useParams();
    const {users} = useAuth();
    const [product, setProduct] = useState([]);
    const {image, price, productName} = product
    useEffect(() => {
        fetch(`https://vast-lake-15285.herokuapp.com/productDetails/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {console.log(data)
        data.productName = productName;
        data.price = price;
        data.orderStatus = 'Pending'
        fetch('https://vast-lake-15285.herokuapp.com/order', {
            method:"POST",
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Order Placed")
                reset();

            }
        })
    };

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Place your Order</h1>
            <div className="row">
                <div className="col-md-6">
                    <img style={{width:'100%'}} src={image} alt="image" />
                    <h1>Price:</h1>
                    <h2>$ {price}</h2>
                </div>
                <div className="col-md-6">
                    <div className='form-style'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={users?.displayName} {...register("name", { required: true})}/>
                <input defaultValue={users?.email} {...register("userEmail", { required: true})}/>
                <input {...register("address", { required: true})} placeholder="Enter your Full Address" />
                <input type="number" {...register("contactNumber", { required: true})} placeholder="Contact Number" />
                <div className='text-center'>
                <input className='submit-btn' type="submit" />
                </div>
            </form>
            </div>
                </div>
            </div>

        </div>
    );
};

export default OrderProduct;