import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// Assuming logo is in src/images folder
import logoImage from '../images/logo_1.png';
import './Header.css'
const Header = () => {
    // This state manages the mobile menu toggle (collapsed or expanded)
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const location = useLocation();

    // This function closes the mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsNavCollapsed(true);
    };

    // Helper to check if any DML Group route is active
    const isDmlGroupActive = () => {
        const dmlRoutes = [
            '/fish-process', '/fish-trade',
            '/cashew-processing', '/cashew-trade',
            '/commodity-trade', '/agri-trade', '/frozen-trade'
        ];
        return dmlRoutes.includes(location.pathname);
    };

    return (
        <nav className="navbar navbar-expand-lg top-nav sticky-top">
            <div className="container">
                {/* Brand Logo */}
                <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
                    <img src={logoImage} className="logo-img" alt="Logo" />
                </Link>

                {/* Mobile Menu Toggler Button */}
                <button
                    className={`navbar-toggler ${isNavCollapsed ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {/* Use NavLink for active styling */}
                            <NavLink className="nav-link" to="/" onClick={handleLinkClick} end>Home</NavLink>
                        </li>

                        {/* Mega Menu Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${isDmlGroupActive() ? 'active text-primary fw-bold' : ''}`}
                                href="#"
                                id="megaMenuDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                DML Group
                            </a>
                            <div className="dropdown-menu mega-menu" aria-labelledby="megaMenuDropdown">
                                <div className="row p-2">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <p className="fw-bold text-uppercase text-muted small ps-3 mb-2">Sea Food</p>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/fish-process' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/fish-process"
                                                    onClick={handleLinkClick}
                                                >
                                                    Sea Food Processing
                                                </Link>
                                            </li>
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/fish-trade' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/fish-trade"
                                                    onClick={handleLinkClick}
                                                >
                                                    Frozen Fish Trade
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <p className="fw-bold text-uppercase text-muted small ps-3 mb-2">Cashew</p>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/cashew-processing' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/cashew-processing"
                                                    onClick={handleLinkClick}
                                                >
                                                    Cashew Processing
                                                </Link>
                                            </li>
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/cashew-trade' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/cashew-trade"
                                                    onClick={handleLinkClick}
                                                >
                                                    Cashew Trade
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <p className="fw-bold text-uppercase text-muted small ps-3 mb-2">Trade</p>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/commodity-trade' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/commodity-trade"
                                                    onClick={handleLinkClick}
                                                >
                                                    Commodity Trade
                                                </Link>
                                            </li>
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/agri-trade' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/agri-trade"
                                                    onClick={handleLinkClick}
                                                >
                                                    Agri Trade
                                                </Link>
                                            </li>
                                            <li className="list-group-item-action">
                                                <Link
                                                    className={`nav-link ${location.pathname === '/frozen-trade' ? 'active fw-bold text-primary bg-light' : ''}`}
                                                    to="/frozen-trade"
                                                    onClick={handleLinkClick}
                                                >
                                                    Frozen Trade
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about-us" onClick={handleLinkClick}>About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/social-commitment" onClick={handleLinkClick}>Social Commitment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact-us" onClick={handleLinkClick}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
