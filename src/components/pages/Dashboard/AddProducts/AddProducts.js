import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://vast-lake-15285.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Product Added Successfully')
                reset()
            }
        })
        
        console.log(data)};

    return (
        <div className='form-style'>
            <h2 className='text-center'>Please add products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("productName", { required: true})} placeholder="Enter product name" />
                <textarea {...register("description", { required: true})} placeholder="Please give product description" />
                <textarea {...register("details", { required: true})} placeholder="Please give product details" />
                <input {...register("discount")} placeholder="If you have any discount" />
                <input type="number" {...register("price", { required: true})} placeholder="Enter product price" />
                <input {...register("image", { required: true})} placeholder="Please input product image url" />
                <div className='text-center'>
                <input className='submit-btn' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProducts;