import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../../images/login.webp'
import useFirebase from '../../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {users, userLogin} = useFirebase()
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginUser = e => {
        e.preventDefault();
        userLogin(loginData.email, loginData.password)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img width={'100%'} src={login} alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='center mt-5'>
                    <form onSubmit={handleLoginUser}>
                        <h1 className='text-center text-success mb-4'>Please Login</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleOnBlur} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handleOnBlur} type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' />
                        </div>
                        <p>If you haven't account? <Link to="/register">
                        Create Account
                        </Link></p>
                        <button type="submit" className="btn btn-primary">Log In</button>

                    </form>
                    <p className='text-center'>-----------------------------------</p>
                    <div className='text-center'>
                    <button>Google Sign In</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;