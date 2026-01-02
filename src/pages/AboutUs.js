import React from 'react';

// We will import the profile picture once and reuse it.
// Make sure you have this image in the 'src/images/profiles/' folder.
import profilePlaceholder from '../images/profiles/img1.png';
import aboutImage from '../images/dml-about.png'; // Example image for the about section
import './AboutUs.css'; // Assuming you have some CSS for styling
const AboutUs = () => {
    return (
        <>
            <div className="about-section section py-5 bg-aboutus">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={aboutImage} alt="About Us" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <h1>About us</h1>
                            <p className="text-justify">
                                Diamante Mariscos is a private limited company committed to delivering the healthiest sources of protein to communities. Over the years, we have grown from a seafood processing unit into a diversified group operating in multiple sectors, including seafood processing, fish and meat import and distribution, agricultural commodity trading, raw cashew nut exports, cashew processing, and agri/animal farming—serving the evolving needs of today’s consumers.
                            </p>
                            <p className="text-justify">
                                Headquartered in Angoche City, Mozambique, we have expanded our presence to 17 facilities across Mozambique, the UAE (Dubai), and India, employing over 500 team members and distributing our products both locally and globally.
                            </p>
                            <p className="text-justify">
                                We operate a fully integrated cold chain system—from fishing to processing and distribution—to ensure the delivery of fresh, high-quality, and sustainable products. With 5,000 tonnes of cold storage capacity across Mozambique, our infrastructure is designed to maintain product integrity and meet customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-team-section section py-5 bg-light">
                <div className="container">
                    <h1 className="text-center mb-5" style={{ fontWeight: 700 }}>Our Team</h1>

                    <div className="row g-4 justify-content-center">
                        {/* Team Member 1 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card border-0 shadow-card h-100 text-center p-4 hover-lift">
                                <div className="team-img mx-auto mb-3">
                                    <img
                                        src={profilePlaceholder}
                                        alt="Mr. RAJEESAN CHELLAPPAN"
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                                <h4 className="mb-1">Mr. RAJEESAN CHELLAPPAN</h4>
                                <p className="text-muted mb-0 small uppercase letter-spacing-2">CHAIRMAN</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card border-0 shadow-card h-100 text-center p-4 hover-lift">
                                <div className="team-img mx-auto mb-3">
                                    <img
                                        src={profilePlaceholder}
                                        alt="Mr. SAROJAKSHAN"
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                                <h4 className="mb-1">Mr. SAROJAKSHAN</h4>
                                <p className="text-muted mb-0 small uppercase letter-spacing-2">NON-EXECUTIVE DIRECTOR</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card border-0 shadow-card h-100 text-center p-4 hover-lift">
                                <div className="team-img mx-auto mb-3">
                                    <img
                                        src={profilePlaceholder}
                                        alt="Mr. ARUN THANKAN"
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                                <h4 className="mb-1">Mr. ARUN THANKAN</h4>
                                <p className="text-muted mb-0 small uppercase letter-spacing-2">EXECUTIVE DIRECTOR<br />(CHIEF EXECUTIVE OFFICER)</p>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card border-0 shadow-card h-100 text-center p-4 hover-lift">
                                <div className="team-img mx-auto mb-3">
                                    <img
                                        src={profilePlaceholder}
                                        alt="Mr. ARUN RAVI"
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                                <h4 className="mb-1">Mr. ARUN RAVI</h4>
                                <p className="text-muted mb-0 small uppercase letter-spacing-2">EXECUTIVE DIRECTOR<br />(DIRECTOR OF OPERATIONS SOUTH)</p>
                            </div>
                        </div>

                        {/* Team Member 5 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card border-0 shadow-card h-100 text-center p-4 hover-lift">
                                <div className="team-img mx-auto mb-3">
                                    <img
                                        src={profilePlaceholder}
                                        alt="Mr. MUSTHAFA CHERIKKAL"
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                                <h4 className="mb-1">Mr. MUSTHAFA CHERIKKAL</h4>
                                <p className="text-muted mb-0 small uppercase letter-spacing-2">EXECUTIVE DIRECTOR<br />(DIRECTOR OF OPERATIONS NORTH)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutUs;
