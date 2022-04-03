import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
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
                        <li><a href="#"> The Secretary</a></li>
                        <li><a href="#">  Shree Ramakrishna Dev</a></li>
                        <li><a href="#">  Maa Sarada Devi</a></li>
                        <li><a href="#"> Swami Vivekananda</a></li>
                        <li><a href="#"> Education</a></li>
                        <li><a href="#"> Medical</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title-transparent">Quick Link</h3>
                    <ul className="quick-link-list">
                        <li><a href="#"> Old Age Home</a></li>
                        <li><a href="#"> Video Archive</a></li>
                        <li><a href="#"> News & Events</a></li>
                        <li><a href="#"> News & Events</a></li>
                        <li><a href="#"> Youth Welfare Programme</a></li>
                        <li><a href="#"> Relief Work</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title-transparent">Quick Link</h3>
                    <ul className="quick-link-list">
                        <li><a href="#"> Donation</a></li>
                        <li><a href="#"> Future Plan</a></li>
                        <li><a href="#"> Feedback</a></li>
                        <li><a href="#"> Site Map</a></li>
                        <li><a href="#"> Contact Us</a></li>
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