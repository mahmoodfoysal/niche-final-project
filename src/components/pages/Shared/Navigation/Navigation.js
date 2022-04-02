import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const {users, logOut} = useAuth();
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home"><i class="fas fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products"><i class="fas fa-laptop"></i> Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/customerOrder"><i class="fas fa-shopping-cart"></i> Orders</Link>
                            </li>

                            {users.email && <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashBoard"><i class="fas fa-tachometer-alt"></i> Admin Dashboard</Link>
                            </li>}
                            

                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {users?.displayName && <li className='text-white me-1'>Welcome, </li>}
                            <li className='text-white nav-item me-2'>{users?.displayName} </li>
                            {users?.displayName ? <button className='nav-log-out' onClick={logOut}><i className="fas fa-sign-out-alt"></i> Log Out</button>:
                            <Link to="/login"><button className='nav-login-btn'><i className="fas fa-sign-in-alt"></i> Log In</button></Link>}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;