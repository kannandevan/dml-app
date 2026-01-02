import React from 'react';

// Import images
import heroImage from '../images/fish-trade.webp';
import infraImage from '../images/fish-trade01.jpg';
import storageImage from '../images/fish-trade02.jpg';
import safetyImage from '../images/fish-trade03.jpg';
import supportImage from '../images/fish-trade04.jpg';

import productHorseMackerel from '../images/products/frozen-fish01.webp';
import productChubMackerel from '../images/products/frozen-fish02.webp';
import productSardine from '../images/products/frozen-fish03.webp';
import productSprat from '../images/products/frozen-fish04.webp';

const FishTrade = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${heroImage}) center/cover no-repeat fixed`, minHeight: '550px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-b from-black to-transparent opacity-50"></div>

                <div className="container position-relative z-2 text-center">
                    <span className="badge bg-warning text-dark mb-4 px-4 py-2 rounded-pill fw-bold letter-spacing-2 shadow">GLOBAL SUPPLY CHAIN</span>
                    <h1 className="display-2 fw-bold mb-3 text-shadow">Seafood Processing & Supply</h1>
                    <p className="lead mb-0 w-75 mx-auto opacity-100 fs-4 text-shadow-sm">Ensuring food safety and quality across Mozambique through a robust cold chain network.</p>
                </div>
            </section>

            {/* Intro Stats */}
            <section className="section py-5 mt-n5 position-relative z-3">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="card shadow-card border-0 p-5 h-100 text-center hover-lift bg-white rounded-4">
                                <div className="icon-circle bg-primary-subtle text-primary mb-4 mx-auto" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-snowflake"></i>
                                </div>
                                <h3 className="fw-bold display-6 mb-2">5,000 MT</h3>
                                <p className="text-muted text-uppercase letter-spacing-1 fw-bold mb-0">Cold Storage Capacity</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-card border-0 p-5 h-100 text-center hover-lift bg-white rounded-4">
                                <div className="icon-circle bg-success-subtle text-success mb-4 mx-auto" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <h3 className="fw-bold display-6 mb-2">Nationwide</h3>
                                <p className="text-muted text-uppercase letter-spacing-1 fw-bold mb-0">Distribution Network</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-card border-0 p-5 h-100 text-center hover-lift bg-white rounded-4">
                                <div className="icon-circle bg-warning-subtle text-warning mb-4 mx-auto" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <h3 className="fw-bold display-6 mb-2">ISO Certified</h3>
                                <p className="text-muted text-uppercase letter-spacing-1 fw-bold mb-0">Food Safety Standards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure 1 */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative ps-lg-4">
                                <div className="blob-bg bg-primary opacity-10 position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle scale-150"></div>
                                <img src={infraImage} alt="Cold Chain Infrastructure" className="img-fluid rounded-4 shadow-lg hover-lift position-relative z-2" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div>
                                <h6 className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-primary border-2 pb-1">Infrastructure</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Nationwide Cold Chain</h2>
                                <p className="text-muted lead fs-5 lh-lg">
                                    We have established a robust cold chain infrastructure to support nationwide distribution.
                                    Our integrated system maintains strict temperature controls from the point of origin
                                    to final delivery, ensuring freshness and quality at every step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure 2 - Storage */}
            <section className="section py-5 bg-light-subtle border-top border-bottom">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative pe-lg-4">
                                <img src={storageImage} alt="Cold Storage" className="img-fluid rounded-4 shadow-lg hover-lift" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-success fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-success border-2 pb-1">Capacity</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Strategic Storage Facilities</h2>
                                <p className="text-muted lead fs-5 lh-lg">
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
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <img src={safetyImage} alt="Food Safety" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="pe-lg-4">
                                <h6 className="text-warning fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-warning border-2 pb-1">Quality Assurance</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Focus on Food Safety</h2>
                                <p className="text-muted lead fs-5 lh-lg">
                                    Food safety is at the forefront of our operations. We adhere to rigorous international
                                    standards, implementing thorough quality control measures at every stage of our supply chain
                                    to ensure safe, nutritious food for our consumers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frozen Fish Gallery */}
            <section className="section py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill mb-3">OUR PRODUCTS</span>
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
                                <div className="card border-0 h-100 shadow-card hover-lift overflow-hidden rounded-4">
                                    <div className="position-relative" style={{ height: '280px' }}>
                                        <img src={item.img} alt={item.title} className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-scale-110" />
                                        <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-dark to-transparent p-4">
                                        </div>
                                    </div>
                                    <div className="card-body text-center p-4">
                                        <h5 className="fw-bold mb-1 fs-4">{item.title}</h5>
                                        <p className="text-primary fw-bold mb-0 small text-uppercase">{item.subtitle}</p>
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