import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
import register from '../../../../images/registration.webp'
import useAuth from '../../../hooks/useAuth';


const Registration = () => {
    const [createData, setCreateData] =useState({});
    const {users, createUser, googleSignIn, isLoading, authError} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = {...createData}
        newUserData[field] = value;
        setCreateData(newUserData);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        createUser(createData.displayName, createData.email, createData.password, history, location)
    }
    const handleGoogleSignIn = () => {
        googleSignIn(history, location);
    }

    const loginTrue = () => {
        Swal.fire(
            `Success `,
            `Welcome ${users?.displayName} `,
            'success'
        )
    }
    return (
<div className='container'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img width={'100%'} src={register} alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='center mt-5'>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                        <h1 className='text-center text-success mb-4'>Please Registration</h1>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
                            <input onBlur={handleOnBlur} type="text" name='displayName' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Full Name' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleOnBlur} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handleOnBlur} type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' />
                        </div>
                        <p>If you have account? <Link className='' to="/login">
                        Please Login
                        </Link></p>
                        <button type="submit" className="btn login-btn"><i className="fas fa-sign-in-alt"></i> Register</button>

                    </form>}
                    {isLoading && <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {users?.email && loginTrue()}

{authError && <Alert variant="filled" severity="error">
    {authError}
</Alert>}
                    <p className='text-center'>-----------------------------------</p>
                    <div className='text-center'>
                    <button className='google-signin-btn' onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;