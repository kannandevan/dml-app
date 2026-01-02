import React from 'react';
import heroImage from '../images/hero_commodity_trade_new.png';
import riceImage from '../images/rice.webp';
import flourImage from '../images/floor.jpg';
import sugarImage from '../images/suagr2.webp';
import oilImage from '../images/oil.jpg';

const CommodityTrade = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${heroImage}) center/cover no-repeat fixed`, minHeight: '550px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>
                <div className="container position-relative z-2 text-center">
                    <span className="badge bg-warning text-dark mb-4 px-4 py-2 rounded-pill fw-bold letter-spacing-2 shadow">ESSENTIAL GOODS</span>
                    <h1 className="display-2 fw-bold mb-3 text-shadow">Commodity Trade</h1>
                    <p className="lead mb-0 w-75 mx-auto opacity-100 fs-4 text-shadow-sm">Supplying quality staple foods to households and businesses across Mozambique.</p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="section py-5 bg-white">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-4 display-5">Supporting Daily Life</h2>
                            <p className="lead text-muted fs-4 lh-base">
                                We specialize in the wholesale and retail distribution of essential food commodities.
                                Our commitment to quality ensures that every meal served in Mozambican households
                                meets high standards of nutrition and taste.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Rice - Standard BG (Light Grey) */}
            <section className="section py-5 bg-light-subtle border-top border-bottom">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <img src={riceImage} alt="White Rice" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="ps-lg-4">
                                <h6 className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-primary border-2 pb-1">Staple Food</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">White Long Grain Rice</h2>
                                <p className="text-muted mb-4 lead fs-5">
                                    Carefully selected for even cooking and perfect texture. Rigorous processing removes impurities,
                                    making it clean, safe, and ready for every family table.
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-center mb-4 bg-white p-3 rounded-3 shadow-sm border">
                                        <div className="icon-circle bg-primary-subtle text-primary me-3 flex-shrink-0">
                                            <i className="fa-solid fa-droplet px-2"></i>
                                        </div>
                                        <div>
                                            <span className="fw-bold d-block text-dark">Moisture Content</span>
                                            <small className="text-muted">Below 15% for optimal storage</small>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm border">
                                        <div className="icon-circle bg-primary-subtle text-primary me-3 flex-shrink-0">
                                            <i className="fa-solid fa-eye px-2"></i>
                                        </div>
                                        <div>
                                            <span className="fw-bold d-block text-dark">Quality Check</span>
                                            <small className="text-muted">Max 25% broken rice percentage</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maize Flour - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <img src={flourImage} alt="Maize Flour" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6">
                            <div className="pe-lg-4">
                                <h6 className="text-warning fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-warning border-2 pb-1">Traditional Favorite</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Premium Maize Flour</h2>
                                <p className="text-muted mb-5 lead fs-5">
                                    Derived from clean white maize, our flour is versatile and perfect for traditional dishes like Xima and Porridge.
                                    Milled thoroughly to maintain nutritional integrity.
                                </p>
                                <div className="p-4 bg-warning-subtle rounded-4 border-start border-4 border-warning shadow-sm">
                                    <p className="mb-0 text-dark fw-medium">
                                        <i className="fa-solid fa-check-circle text-warning me-2 fa-lg"></i>
                                        Available in bulk for wholesale and convenient packs for retail.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sugar - Light BG */}
            <section className="section py-5 bg-light-subtle border-top border-bottom">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <img src={sugarImage} alt="Sugar" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="ps-lg-4">
                                <h6 className="text-danger fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-danger border-2 pb-1">Sweeteners</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Sugar (White & Brown)</h2>
                                <p className="text-muted mb-5 lead fs-5">
                                    Sourced from reputable producers, our sugar meets the diverse needs of bakeries, industries, and homes.
                                </p>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="card bg-white border-0 shadow-card h-100 hover-lift">
                                            <div className="card-body p-4 text-center">
                                                <div className="bg-light rounded-circle d-inline-block p-3 mb-3 text-dark">
                                                    <i className="fa-solid fa-cube fa-lg"></i>
                                                </div>
                                                <h5 className="fw-bold text-dark">White Sugar</h5>
                                                <p className="small text-muted mb-0">Highly refined, ideal for general food processing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card bg-white border-0 shadow-card h-100 hover-lift">
                                            <div className="card-body p-4 text-center">
                                                <div className="bg-warning-subtle rounded-circle d-inline-block p-3 mb-3 text-warning-emphasis">
                                                    <i className="fa-solid fa-cube fa-lg"></i>
                                                </div>
                                                <h5 className="fw-bold text-dark">Brown Sugar</h5>
                                                <p className="small text-muted mb-0">Rich flavor with natural molasses retained.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Oil - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <img src={oilImage} alt="Edible Oil" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6">
                            <div className="pe-lg-4">
                                <h6 className="text-success fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-success border-2 pb-1">Cooking Essentials</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Edible Vegetable Oil</h2>
                                <p className="text-muted mb-4 lead fs-5">
                                    From frying to dressing, our range of oils caters to every cooking style. Purity and quality guaranteed.
                                </p>
                                <ul className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden border-0">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-4 border-bottom-0 bg-light-subtle">
                                        <span className="fw-bold"><i className="fa-solid fa-bottle-droplet text-success me-3"></i> Refined Oil</span>
                                        <span className="badge bg-success rounded-pill px-3 py-2">Neutral Taste</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-4 bg-white">
                                        <span className="fw-bold"><i className="fa-solid fa-leaf text-success me-3"></i> Non-Refined Oil</span>
                                        <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Healthier Option</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommodityTrade;