import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-5'>
             <section className="footer-section">
        <div className="container">
            <div className="row footer-section-row">
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                            {/* <img src="location.png"/> */}
                        </div>
                        <div className="right-text">
                            <h3>Address</h3>
                            <p>Uttar Badda, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                            {/* <img src="mail.png"/> */}
                        </div>
                        <div className="right-text">
                            <h3>Mail Id</h3>
                            <p>foysalcse033@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                            {/* <img src="call.png"/> */}
                        </div>
                        <div className="right-text">
                            <h3>Phone</h3>
                            <p>+8801714226177 </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <h3 className="footer-title"><span className="footer-title-text">Quick Link</span><span className="footer-title-underline"></span></h3>
                    <ul className="quick-link-list">
                        <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/products"> Products</Link></li>
                        <li><Link to="/customerOrder"> Orders</Link></li>


                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title-transparent">Quick Link</h3>
                    <ul className="quick-link-list">
                    <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/products"> Products</Link></li>
                        <li><Link to="/customerOrder"> Orders</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title-transparent">Quick Link</h3>
                    <ul className="quick-link-list">
                    <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/products"> Products</Link></li>
                        <li><Link to="/customerOrder"> Orders</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title"><span className="footer-title-text">Get Updates</span><span className="footer-title-underline"></span></h3>
                    <p className="newsletter">Signup to Our Newsletter.</p>
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-new" id="usr" name="username" placeholder="Enter Your Mail Id"/>
                        </div>
                        <button type="submit" className="btn btn-primary subscribe">Subscribe</button>
                    </form>
                    <div id="social">
                        <a className="facebookBtn smGlobalBtn" href="#"></a>
                        <a className="twitterBtn smGlobalBtn" href="#"></a>
                        <a className="youtubeBtn smGlobalBtn" href="#"></a>
                        <a className="linkedinBtn smGlobalBtn" href="#"></a>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="footer-section-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-6 footer-bottom-left">
                    <p>©2022 All Rights Reserved Foysal Mahmood</p>
                </div>
                <div className="col-md-6 footer-bottom-right">
                    <p>Developed by: <a href="#">Foysal Mahmood</a></p>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Footer;