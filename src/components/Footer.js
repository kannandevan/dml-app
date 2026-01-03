import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_1.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row gy-5">
                    {/* 1. Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <Link to="/" className="d-inline-block mb-4 p-3 bg-white rounded-circle shadow-sm logo-wrapper">
                            <img src={logo} alt="DML Logo" className="img-fluid" width="80" />
                        </Link>
                        <h5 className="text-white fw-bold mb-3 ls-1">DML Group</h5>
                        <p className="text-white-50 small mb-4 lh-lg w-75">
                            Harvesting Excellence, Delivering Freshness. Providing the healthiest protein sources to the world through sustainable practices.
                        </p>
                        <div className="d-flex gap-3 social-links">
                            <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white fw-bold mb-4 ls-1 border-start border-3 border-primary ps-3">Company</h5>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/"><i className="fa-solid fa-chevron-right me-2 small text-primary"></i>Home</Link></li>
                            <li><Link to="/about-us"><i className="fa-solid fa-chevron-right me-2 small text-primary"></i>About Us</Link></li>
                            <li><Link to="/social-commitment"><i className="fa-solid fa-chevron-right me-2 small text-primary"></i>Social Commitment</Link></li>
                            <li><Link to="/contact-us"><i className="fa-solid fa-chevron-right me-2 small text-primary"></i>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* 3. Our Products (All Mega Menu Links) */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white fw-bold mb-4 ls-1 border-start border-3 border-success ps-3">Our Divisions</h5>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/fish-process"><i className="fa-solid fa-chevron-right me-2 small text-success"></i>Seafood Processing</Link></li>
                            <li><Link to="/fish-trade"><i className="fa-solid fa-chevron-right me-2 small text-success"></i>Frozen Fish Trade</Link></li>
                            <li><Link to="/cashew-processing"><i className="fa-solid fa-chevron-right me-2 small text-success"></i>Cashew Processing</Link></li>
                            <li><Link to="/cashew-trade"><i className="fa-solid fa-chevron-right me-2 small text-success"></i>Cashew Trade</Link></li>
                            <li><Link to="/commodity-trade"><i className="fa-solid fa-chevron-right me-2 small text-success"></i>Commodity Trade</Link></li>
                            <li><Link to="/agri-trade"><i className="fa-solid fa-chevron-right me-2 small text-success"></i>Agri Trade</Link></li>
                        </ul>
                    </div>

                    {/* 4. Contact Info Only */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white fw-bold mb-4 ls-1 border-start border-3 border-warning ps-3">Contact Us</h5>
                        <ul className="list-unstyled text-white-50 small contact-list">
                            <li className="mb-3 d-flex"><i className="fa-solid fa-location-dot mt-1 me-3 text-warning"></i> <span>C.P. 234, Angoche, Mozambique</span></li>
                            <li className="mb-3 d-flex"><i className="fa-solid fa-phone mt-1 me-3 text-warning"></i> <span>+258 84 123 4567</span></li>
                            <li className="mb-3 d-flex"><i className="fa-solid fa-envelope mt-1 me-3 text-warning"></i> <span>info@dml-group.com</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright text-center mt-5 py-4 border-top border-white border-opacity-10">
                <div className="container d-md-flex justify-content-between align-items-center">
                    <p className="mb-0 text-white-50 small">© {new Date().getFullYear()} <span className="text-white fw-bold">DML Group</span>. All rights reserved.</p>
                    <div className="mt-3 mt-md-0">
                        <a href="#" className="text-white-50 small me-3 text-decoration-none hover-white">Privacy Policy</a>
                        <a href="#" className="text-white-50 small text-decoration-none hover-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;