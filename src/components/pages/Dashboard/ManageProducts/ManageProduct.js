import React from 'react';

const ManageProduct = ({product}) => {
    const {_id, productName, price, image} = product;
    const handleDeleteClick = (id) => {
        const process = window.confirm("Are you sure! You Want to delete")
        if(process) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1) {
                    alert('Deleted Successfully')
                }
            })
        }
    }
    return (
        <div className='container'>
            <h2 className='mt-5 mb-3'>Manage Products</h2>
            <div class="col">
    <div class="card">
      <img src={image} class="card-img-top" alt="productImage"/>
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
       <div className='text-center'>
       <button onClick={() => handleDeleteClick(product._id)} className='btn btn-danger'>Delete</button>
       </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default ManageProduct;