import React from 'react';
import logo from '../images/logo_1.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="absolute bottom-brand d-none d-lg-flex"><img src={logo} alt="" /></div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 social justify-content-center align-items-center d-flex flex-columnte">
                    </div>
                    <div className="col-md-3 list">
                        <ul className="text-white">
                            <li><a href="/">Home</a></li>
                            <li><a href="#">DML Group</a></li>
                            <li><a href="#">Social Commitment</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 social justify-content-center align-items-center d-flex flex-column">
                        <p className="text-white"> DML GROUP,<br /> C.P. 234, ANGOCHE, NAMPULA, MOZAMBIQUE</p>

                    </div>
                    <div className="col-md-3 social justify-content-center align-items-center d-flex flex-column">
                        <h5 className="text-white">Follow us</h5>
                        <ul className="text-white">
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-square-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright text-center">
                Copyright © 2024 DML Group. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;