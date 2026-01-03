import React from 'react';

// Import images
import heroImage from '../images/hero_fish_trade_new.png';
import infraImage from '../images/infra_cold_chain.png';
import storageImage from '../images/infra_cold_storage.png';
import safetyImage from '../images/infra_food_safety.png';
// import supportImage from '../images/infra_cold_chain.png'; // Reusing logical image

import productHorseMackerel from '../images/prod_horse_mackerel.png';
import productChubMackerel from '../images/prod_chub_mackerel.png';
import productSardine from '../images/prod_sardine.png';
import productSprat from '../images/prod_sprat.png';

const FishTrade = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">GLOBAL SUPPLY CHAIN</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Seafood Processing <br />
                                <span className="text-primary">& Supply</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Ensuring food safety and quality across Mozambique through a robust cold chain network and state-of-the-art facilities.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-primary mb-0">5,000 MT</h5>
                                    <small className="text-muted text-uppercase">Storage</small>
                                </div>
                                <div className="border-start h-100 py-3"></div>
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-primary mb-0">ISO</h5>
                                    <small className="text-muted text-uppercase">Certified</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={heroImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Fish Trade Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Stats */}
            <section className="section py-5 bg-hero">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0 p-4 h-100 text-center hover-lift bg-white rounded-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary-light text-primary rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-snowflake"></i>
                                </div>
                                <h4 className="fw-bold mb-2">Cold Storage</h4>
                                <p className="text-muted small mb-0">Strategically located facilities with 5,000 MT capacity for efficient distribution.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0 p-4 h-100 text-center hover-lift bg-white rounded-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <h4 className="fw-bold mb-2">Nationwide Reach</h4>
                                <p className="text-muted small mb-0">Integrated logistical network ensuring delivery from origin to final consumer.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0 p-4 h-100 text-center hover-lift bg-white rounded-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-warning-subtle text-warning-dark rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <h4 className="fw-bold mb-2">Food Safety</h4>
                                <p className="text-muted small mb-0">Adherence to rigorous international standards and quality control measures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure 1 */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={infraImage} alt="Cold Chain Infrastructure" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-uppercase text-primary fw-bold letter-spacing-2 mb-3">Infrastructure</h6>
                            <h2 className="display-5 fw-bold mb-4">Nationwide Cold Chain</h2>
                            <p className="text-muted lead mb-4">
                                We have established a robust cold chain infrastructure to support nationwide distribution.
                                Our integrated system maintains strict temperature controls from the point of origin
                                to final delivery, ensuring freshness and quality at every step.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure 2 - Storage */}
            <section className="section py-5 bg-soft-gray">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
                                <img src={storageImage} alt="Cold Storage" className="img-fluid rounded-3 shadow-card hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-uppercase text-success fw-bold letter-spacing-2 mb-3">Capacity</h6>
                                <h2 className="display-5 fw-bold mb-4">Strategic Storage Facilities</h2>
                                <p className="text-muted lead mb-4">
                                    With a holding capacity of 5,000 metric tonnes, our storage facilities are strategically
                                    located to facilitate efficient distribution. This capacity enables us to manage large
                                    volumes of frozen products, catering to both wholesale and retail demands.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure 3 - Safety */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={safetyImage} alt="Food Safety" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-uppercase text-warning-dark fw-bold letter-spacing-2 mb-3">Quality Assurance</h6>
                            <h2 className="display-5 fw-bold mb-4">Focus on Food Safety</h2>
                            <p className="text-muted lead mb-4">
                                Food safety is at the forefront of our operations. We adhere to rigorous international
                                standards, implementing thorough quality control measures at every stage of our supply chain
                                to ensure safe, nutritious food for our consumers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frozen Fish Gallery */}
            <section className="section py-5 bg-primary-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-primary fw-bold mb-2">Our Products</h6>
                        <h2 className="display-4 fw-bold">Frozen Fish Selection</h2>
                        <p className="text-muted w-75 mx-auto lead">High-quality frozen fish varieties sourced for taste, freshness, and nutrition.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            { img: productHorseMackerel, title: "Horse Mackerel", subtitle: "Carapao" },
                            { img: productChubMackerel, title: "Chub Mackerel", subtitle: "Atum" },
                            { img: productSardine, title: "Frozen Sardine", subtitle: "Premium Quality" },
                            { img: productSprat, title: "Frozen Sprat", subtitle: "Small Fish" }
                        ].map((item, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="card border-0 h-100 shadow-sm hover-lift overflow-hidden rounded-4 bg-white">
                                    <div className="position-relative p-3">
                                        <img src={item.img} alt={item.title} className="w-100 rounded-3 object-fit-cover shadow-sm" style={{ height: '200px' }} />
                                    </div>
                                    <div className="card-body text-center pt-0 px-4 pb-4">
                                        <h5 className="fw-bold mb-1 fs-5 text-dark">{item.title}</h5>
                                        <span className="badge bg-light text-primary border">{item.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FishTrade;