import React from 'react';

const ManageProduct = ({product}) => {
    const {_id, productName, details, discount, price, image} = product;
    return (
        <div className='container'>
            <h2 className='mt-5 mb-3'>Manage Products</h2>
            <div class="col">
    <div class="card">
      <img src={image} class="card-img-top" alt="productImage"/>
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
       <div className='text-center'>
       <button className='btn btn-danger'>Delete</button>
       </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default ManageProduct;