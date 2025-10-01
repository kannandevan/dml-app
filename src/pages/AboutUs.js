import React from 'react';

// We will import the profile picture once and reuse it.
// Make sure you have this image in the 'src/images/profiles/' folder.
import profilePlaceholder from '../images/profiles/img1.png';

const AboutUs = () => {
    return (
        <>
            <div className="about-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                           {/* You can add an image or other content here if you like */}
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

            <div className="our-team-section section">
                <div className="container">
                    <h1 className="text-center">Our Team</h1>

                    <div className="row pt-5">
                        {/* Team Member 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card pt-5 rounded-20 h-100">
                                <div className="img-circle justify-content-center d-flex">
                                    <img src={profilePlaceholder} alt="Mr. RAJEESAN CHELLAPPAN" />
                                </div>
                                <div className="container text-center mt-3">
                                    <hr />
                                    <h4>Mr. RAJEESAN CHELLAPPAN</h4>
                                    <hr />
                                    <p>CHAIRMAN</p>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card pt-5 rounded-20 h-100">
                                <div className="img-circle justify-content-center d-flex">
                                    <img src={profilePlaceholder} alt="Mr. DEVARAJAN VAMADEVAN" />
                                </div>
                                <div className="container text-center mt-3">
                                    <hr />
                                    <h4>Mr. DEVARAJAN VAMADEVAN</h4>
                                    <hr />
                                    <p>NON-EXECUTIVE DIRECTOR</p>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card pt-5 rounded-20 h-100">
                                <div className="img-circle justify-content-center d-flex">
                                    <img src={profilePlaceholder} alt="Mr. SAROJAKSHAN" />
                                </div>
                                <div className="container text-center mt-3">
                                    <hr />
                                    <h4>Mr. SAROJAKSHAN</h4>
                                    <hr />
                                    <p>NON-EXECUTIVE DIRECTOR</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        {/* Team Member 4 */}
                        <div className="col-md-4 mb-4">
                            <div className="card pt-5 rounded-20 h-100">
                                <div className="img-circle justify-content-center d-flex">
                                    <img src={profilePlaceholder} alt="Mr. ARUN THANKAN" />
                                </div>
                                <div className="container text-center mt-3">
                                    <hr />
                                    <h4>Mr. ARUN THANKAN</h4>
                                    <hr />
                                    <p>EXECUTIVE DIRECTOR<br/>(CHIEF EXECUTIVE OFFICER)</p>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        {/* Team Member 5 */}
                        <div className="col-md-4 mb-4">
                            <div className="card pt-5 rounded-20 h-100">
                                <div className="img-circle justify-content-center d-flex">
                                    <img src={profilePlaceholder} alt="Mr. ARUN RAVI" />
                                </div>
                                <div className="container text-center mt-3">
                                    <hr />
                                    <h4>Mr. ARUN RAVI</h4>
                                    <hr />
                                    <p>EXECUTIVE DIRECTOR<br/>(DIRECTOR OF OPERATIONS SOUTH)</p>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        {/* Team Member 6 */}
                        <div className="col-md-4 mb-4">
                            <div className="card pt-5 rounded-20 h-100">
                                <div className="img-circle justify-content-center d-flex">
                                    <img src={profilePlaceholder} alt="Mr. MUSTHAFA CHERIKKAL" />
                                </div>
                                <div className="container text-center mt-3">
                                    <hr />
                                    <h4>Mr. MUSTHAFA CHERIKKAL</h4>
                                    <hr />
                                    <p>EXECUTIVE DIRECTOR<br/>(DIRECTOR OF OPERATIONS NORTH)</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
