import React from 'react';
import logo from '../images/logo_1.png'

const Footer = () => {
    return (
        <footer className="footer text-white">
            <div className="container">
                <div className="row gy-5">
                    {/* Brand / About */}
                    <div className="col-lg-4 col-md-6">
                        <div className="mb-4 bg-white p-3 rounded-circle d-inline-block" style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={logo} alt="DML Logo" className="img-fluid" style={{ maxWidth: '100%' }} />
                        </div>
                        <h5 className="text-white mb-3">DML Group</h5>
                        <p className="small mb-4 text-white-50">Harvesting Excellence, Delivering Freshness.<br />Providing the healthiest protein to the world.</p>
                        <div className="social-links">
                            <ul className="list-unstyled d-flex gap-3 social">
                                <li><a href="#" className="text-white"><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a href="#" className="text-white"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#" className="text-white"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="#" className="text-white"><i className="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/social-commitment">Social Commitment</a></li>
                            <li><a href="/contact-us">Contact</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-3">Our Products</h5>
                        <ul className="list-unstyled">
                            <li><a href="/fish-process">Seafood Processing</a></li>
                            <li><a href="/frozen-trade">Frozen Trade</a></li>
                            <li><a href="/cashew-processing">Cashew Processing</a></li>
                            <li><a href="/farming">Farming</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-3">Contact Us</h5>
                        <ul className="list-unstyled text-white-50 small">
                            <li className="mb-2"><i className="fa-solid fa-location-dot me-2 text-warning"></i> C.P. 234, Angoche, Nampula, Mozambique</li>
                            <li className="mb-2"><i className="fa-solid fa-phone me-2 text-warning"></i> +258 84 123 4567</li>
                            <li className="mb-2"><i className="fa-solid fa-envelope me-2 text-warning"></i> info@dml-group.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright text-center">
                <div className="container">
                    <p className="mb-0 text-white-50 small">Copyright © {new Date().getFullYear()} DML Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;