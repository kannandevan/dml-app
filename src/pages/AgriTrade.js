import React from 'react';
import heroImage from '../images/hero_agri_trade_new.png';
import peaImage from '../images/pea.png';
import wheatImage from '../images/wheat.jpg';

const AgriTrade = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-success text-white mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">SINCE 2016</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Agri Trade <br />
                                <span className="text-success">Division</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Procuring, processing, and exporting Mozambique’s unique agricultural commodities.
                                Harvested from virgin, nutrient-rich soils, exceeding organic standards.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-success mb-0">100%</h5>
                                    <small className="text-muted text-uppercase">Natural</small>
                                </div>
                                <div className="border-start h-100 py-3"></div>
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-success mb-0">Global</h5>
                                    <small className="text-muted text-uppercase">Export</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={heroImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Agri Trade Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="section py-5 position-relative bg-white overflow-hidden">
                <div className="container position-relative z-1 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={peaImage} alt="Agri Produce" className="position-relative z-1 img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-uppercase text-success fw-bold letter-spacing-2 mb-3">Sustainable Sourcing</h6>
                            <h2 className="display-5 fw-bold mb-4">Harvesting Nature’s Bounty</h2>
                            <p className="lead text-dark fw-medium mb-4 fs-5">
                                "The Wilds of Mozambique" represents our commitment to purity.
                            </p>
                            <p className="text-muted mb-4 lead">
                                Our division focuses on sourcing products that are nurtured by nature itself.
                                The nutrient-rich, virgin soils of Mozambique produce commodities that are naturally superior.
                            </p>

                            <div className="d-flex gap-4 pt-2">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-sm" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-seedling"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Nutrient Rich</h6>
                                        <small className="text-muted">Virgin Soil</small>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-warning text-dark rounded-circle shadow-sm" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-cloud-sun"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">Climate</h6>
                                        <small className="text-muted">Perfect Conditions</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgriTrade;