import React from 'react';
import peaImage from '../images/pea.png';
import wheatImage from '../images/wheat.jpg';

const AgriTrade = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${wheatImage}) center/cover no-repeat fixed`, minHeight: '600px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>

                <div className="container position-relative z-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <div className="d-inline-flex align-items-center bg-white bg-opacity-10 backdrop-blur rounded-pill pe-4 ps-2 py-2 mb-4 border border-white border-opacity-25 shadow-lg">
                                <span className="badge bg-success rounded-pill me-3 px-3 py-2">SINCE 2016</span>
                                <span className="text-white fw-bold letter-spacing-1">Wilds of Mozambique</span>
                            </div>
                            <h1 className="display-2 fw-bold mb-4 text-shadow">Agri Trade Division</h1>
                            <p className="lead fw-normal w-75 mx-auto fs-4 text-shadow-sm lh-base">
                                Procuring, processing, and exporting Mozambique’s unique agricultural commodities.
                                Harvested from virgin, nutrient-rich soils, exceeding organic standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section py-5 position-relative bg-white overflow-hidden">
                <div className="position-absolute z-0 top-0 end-0 opacity-10" style={{ transform: 'translate(30%, -30%)' }}>
                    <i className="fa-brands fa-envira fa-10x text-success" style={{ fontSize: '400px' }}></i>
                </div>

                <div className="container position-relative z-1 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-4">
                                <div className="absolute-square bg-success opacity-10 rounded-circle w-75 h-75 position-absolute top-50 start-50 translate-middle z-0 blur-xl"></div>
                                <img src={peaImage} alt="Agri Produce" className="position-relative z-1 img-fluid drop-shadow-2xl hover-scale transition-transform duration-700" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-success fw-bold text-uppercase letter-spacing-2 mb-3">
                                <span className="d-inline-block border-bottom border-success border-2 pb-1">Sustainable Sourcing</span>
                            </h6>
                            <h2 className="display-4 fw-bold mb-4">Harvesting Nature’s Bounty</h2>
                            <p className="lead text-dark fw-medium mb-4 fs-4">
                                "The Wilds of Mozambique" represents our commitment to purity.
                            </p>
                            <p className="text-muted mb-5 fs-5 lh-lg">
                                Our division focuses on sourcing products that are nurtured by nature itself.
                                The nutrient-rich, virgin soils of Mozambique produce commodities that are naturally superior.
                                We handle every step from procurement to export, ensuring the world gets to taste the
                                authentic, unadulterated flavors of our land.
                            </p>

                            <div className="row g-3">
                                <div className="col-4">
                                    <div className="text-center p-3 rounded-4 bg-light hover-lift h-100">
                                        <div className="icon-circle bg-success text-white mb-3 mx-auto shadow-sm">
                                            <i className="fa-solid fa-seedling"></i>
                                        </div>
                                        <small className="fw-bold text-dark d-block text-uppercase">100% Natural</small>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="text-center p-3 rounded-4 bg-light hover-lift h-100">
                                        <div className="icon-circle bg-warning text-dark mb-3 mx-auto shadow-sm">
                                            <i className="fa-solid fa-earth-africa"></i>
                                        </div>
                                        <small className="fw-bold text-dark d-block text-uppercase">Local Origin</small>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="text-center p-3 rounded-4 bg-light hover-lift h-100">
                                        <div className="icon-circle bg-primary text-white mb-3 mx-auto shadow-sm">
                                            <i className="fa-solid fa-ship"></i>
                                        </div>
                                        <small className="fw-bold text-dark d-block text-uppercase">Global Export</small>
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