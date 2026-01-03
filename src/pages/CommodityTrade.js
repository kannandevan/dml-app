import React from 'react';
import heroImage from '../images/hero_commodity_trade_new.png';
import riceImage from '../images/rice.webp';
import flourImage from '../images/floor.jpg';
import sugarImage from '../images/suagr2.webp';
import oilImage from '../images/oil.jpg';

const CommodityTrade = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">ESSENTIAL GOODS</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Commodity <br />
                                <span className="text-secondary">Trade</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Supplying quality staple foods to households and businesses across Mozambique.
                                Our commitment to quality ensures that every meal served meets high standards of nutrition.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <div className="d-flex align-items-center text-primary">
                                    <i className="fa-solid fa-truck-fast fa-2x me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">Nationwide</h6>
                                        <small className="text-muted">Distribution</small>
                                    </div>
                                </div>
                                <div className="border-start h-100 mx-2"></div>
                                <div className="d-flex align-items-center text-primary">
                                    <i className="fa-solid fa-wheat-awn fa-2x me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">Premium</h6>
                                        <small className="text-muted">Quality</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={heroImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Commodity Trade Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <section className="section py-5 bg-hero">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle p-3 mb-4 shadow-sm" style={{ width: '60px', height: '60px' }}>
                                <i className="fa-solid fa-basket-shopping fa-xl text-primary"></i>
                            </div>
                            <h2 className="fw-bold mb-3 display-6">Supporting Daily Life</h2>
                            <p className="lead text-muted fs-5 lh-base">
                                We specialize in the wholesale and retail distribution of essential food commodities.
                                Prioritizing nutrition and taste for every Mozambican household.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Rice */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={riceImage} alt="White Rice" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-uppercase text-primary fw-bold letter-spacing-2 mb-3">Staple Food</h6>
                            <h2 className="display-5 fw-bold mb-4">White Long Grain Rice</h2>
                            <p className="text-muted lead mb-4">
                                Carefully selected for even cooking and perfect texture. Rigorous processing removes impurities,
                                making it clean, safe, and ready for every family table.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center p-3 border rounded-3 bg-light h-100">
                                        <i className="fa-solid fa-droplet text-primary me-3 fa-lg"></i>
                                        <div>
                                            <span className="d-block fw-bold text-dark">Moisture &lt; 15%</span>
                                            <small className="text-muted">Optimal Storage</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center p-3 border rounded-3 bg-light h-100">
                                        <i className="fa-solid fa-eye text-primary me-3 fa-lg"></i>
                                        <div>
                                            <span className="d-block fw-bold text-dark">Clean Sort</span>
                                            <small className="text-muted">Max 25% Broken</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maize Flour */}
            <section className="section py-5 bg-soft-gray">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
                                <img src={flourImage} alt="Maize Flour" className="img-fluid rounded-3 shadow-card hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-uppercase text-warning-dark fw-bold letter-spacing-2 mb-3">Traditional Favorite</h6>
                                <h2 className="display-5 fw-bold mb-4">Premium Maize Flour</h2>
                                <p className="text-muted lead mb-4">
                                    Derived from clean white maize, our flour is versatile and perfect for traditional dishes like Xima and Porridge.
                                    Milled thoroughly to maintain nutritional integrity.
                                </p>
                                <div className="d-flex align-items-start gap-3 p-3 bg-warning-subtle rounded-4 text-dark border border-warning border-opacity-25">
                                    <i className="fa-solid fa-check-circle text-warning-dark mt-1"></i>
                                    <span>Available in bulk for wholesale and convenient packs for retail distribution.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sugar */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={sugarImage} alt="Sugar" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-uppercase text-danger fw-bold letter-spacing-2 mb-3">Sweeteners</h6>
                            <h2 className="display-5 fw-bold mb-4">Sugar (White & Brown)</h2>
                            <p className="text-muted lead mb-4">
                                Sourced from reputable producers, our sugar meets the diverse needs of bakeries, industries, and homes.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="card border-0 shadow-sm bg-light h-100">
                                        <div className="card-body p-3 text-center">
                                            <h5 className="fw-bold text-dark mb-1">White Sugar</h5>
                                            <p className="small text-muted mb-0">Highly Refined</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card border-0 shadow-sm bg-light h-100">
                                        <div className="card-body p-3 text-center">
                                            <h5 className="fw-bold text-dark mb-1">Brown Sugar</h5>
                                            <p className="small text-muted mb-0">Rich Flavor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Oil */}
            <section className="section py-5 bg-soft-gray">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
                                <img src={oilImage} alt="Edible Oil" className="img-fluid rounded-3 shadow-card hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-uppercase text-success fw-bold letter-spacing-2 mb-3">Cooking Essentials</h6>
                                <h2 className="display-5 fw-bold mb-4">Edible Vegetable Oil</h2>
                                <p className="text-muted lead mb-4">
                                    From frying to dressing, our range of oils caters to every cooking style. Purity and quality guaranteed.
                                </p>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex justify-content-between align-items-center p-3 bg-white rounded-3 shadow-sm">
                                        <span className="fw-bold"><i className="fa-solid fa-bottle-droplet text-success me-3"></i> Refined Oil</span>
                                        <span className="badge bg-success-subtle text-success border border-success border-opacity-25 rounded-pill">Neutral Taste</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center p-3 bg-white rounded-3 shadow-sm">
                                        <span className="fw-bold"><i className="fa-solid fa-leaf text-success me-3"></i> Non-Refined Oil</span>
                                        <span className="badge bg-warning-subtle text-warning-dark border border-warning border-opacity-25 rounded-pill">Healthier Option</span>
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

export default CommodityTrade;