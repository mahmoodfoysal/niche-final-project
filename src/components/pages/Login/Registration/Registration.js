import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import register from '../../../../images/registration.webp'
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';


const Registration = () => {
    const [loginData, setLoginData] =useState({});
    const {user, createUser, googleSignIn} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        createUser(loginData.displayName, loginData.email, loginData.password, history, location)
    }

    const handleGoogleSignIn = () => {
        googleSignIn(history, location);
    }
    return (
<div className='container'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img width={'100%'} src={register} alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='center mt-5'>
                    <form onSubmit={handleOnSubmit}>
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
                        <p>If you have account? <Link to="/login">
                        Please Login
                        </Link></p>
                        <button type="submit" className="btn btn-primary">Register</button>

                    </form>
                    <p className='text-center'>-----------------------------------</p>
                    <div className='text-center'>
                    <button onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;