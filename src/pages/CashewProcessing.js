import React from 'react';

import carouselImg1 from '../images/hero_cashew_processing_new.png';
import carouselImg2 from '../images/factory_interior.png';
import sustainabilityImg from '../images/sustainability_banner.png';

const CashewProcessing = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-primary-light text-primary mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">ESTABLISHED 2019</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                State-of-the-Art <br />
                                <span className="text-secondary">Cashew Processing</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Angoche's premier semi-automatic processing unit. Combining modern technology
                                with traditional care to deliver the finest Mozambican cashews to the world.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-dark mb-0">Angoche</h5>
                                    <small className="text-muted text-uppercase">Location</small>
                                </div>
                                <div className="border-start h-100 py-3"></div>
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-dark mb-0">Premium</h5>
                                    <small className="text-muted text-uppercase">Quality</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={carouselImg1} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Cashew Processing Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Importance Section */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={carouselImg2} alt="Factory Interior" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                                <div className="position-absolute bottom-0 end-0 bg-white p-4 rounded-top-4 shadow-card m-4 d-none d-md-block border-start border-4 border-primary" style={{ maxWidth: '200px' }}>
                                    <h3 className="fw-bold text-dark mb-1">Angoche</h3>
                                    <p className="small text-muted mb-0">Northern Mozambique</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-uppercase text-primary fw-bold letter-spacing-2 mb-3">Location & Origin</h6>
                                <h2 className="display-5 fw-bold mb-4">The Heart of Cashew Quality</h2>
                                <p className="text-muted lead mb-5">
                                    Angoche is renowned for its pristine environment and favorable conditions for cashew cultivation.
                                    Our facility is strategically located to source raw nuts directly from local growers,
                                    ensuring freshness and supporting the regional economy.
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-4 border h-100">
                                            <div className="bg-white p-3 rounded-circle text-primary shadow-sm">
                                                <i className="fa-solid fa-leaf fa-lg"></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-0 text-dark">Organic Potential</h6>
                                                <small className="text-muted">Virgin, nutrient-rich soil</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-4 border h-100">
                                            <div className="bg-white p-3 rounded-circle text-warning shadow-sm">
                                                <i className="fa-solid fa-people-carry-box fa-lg"></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-0 text-dark">Community</h6>
                                                <small className="text-muted">Direct farmer sourcing</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section py-5 bg-primary-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-primary fw-bold mb-2">How We Do It</h6>
                        <h2 className="display-4 fw-bold">Processing Technology</h2>
                        <p className="text-muted w-75 mx-auto lead">Semi-automatic precision meets strict quality control.</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* Steps */}
                        {[
                            { step: "01", title: "Cleaning & Sorting", desc: "Raw cashews undergo a thorough cleaning process to remove foreign matter using localized cleaning systems.", icon: "fa-broom" },
                            { step: "02", title: "Steaming & Shelling", desc: "Nuts are steam-softened and shelled using advanced semi-automatic machines to preserve kernel integrity.", icon: "fa-temperature-high" },
                            { step: "03", title: "Drying & Peeling", desc: "Shelled kernels are dried to optimal moisture levels and peeled to reveal the creamy white nut.", icon: "fa-wind" },
                            { step: "04", title: "Grading & QC", desc: "Rigorous selection based on size (W180, W240, etc.), color, and quality standards.", icon: "fa-magnifying-glass" },
                            { step: "05", title: "Vacuum Packaging", desc: "Flushed with CO2/Nitrogen and vacuum packed to ensure long-lasting freshness and crunch.", icon: "fa-box-open" }
                        ].map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card border-0 shadow-sm h-100 p-4 hover-lift rounded-4 bg-white">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-light text-primary rounded-circle" style={{ width: '60px', height: '60px' }}>
                                            <i className={`fa-solid ${item.icon} fs-4`}></i>
                                        </div>
                                        <span className="display-5 fw-bold text-light text-opacity-50" style={{ color: '#e9ecef' }}>{item.step}</span>
                                    </div>
                                    <h4 className="fw-bold mb-3">{item.title}</h4>
                                    <p className="text-muted mb-0 small">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Sustainability Banner */}
            <section className="section py-5 position-relative text-white overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: `url(${sustainabilityImg}) center/cover no-repeat` }}></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary" style={{ opacity: '0.92' }}></div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h6 className="text-uppercase text-white-50 fw-bold letter-spacing-2 mb-3">Sustainability</h6>
                            <h2 className="display-4 fw-bold mb-4">Commitment to Quality</h2>
                            <p className="lead opacity-90 mb-5">
                                We are initiating organic certification to position our products globally.
                                Our facility adheres to strict HACCP and GMP standards to ensure the highest quality.
                            </p>
                            <div className="d-flex gap-5">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="border border-white border-opacity-25 rounded-circle p-3">
                                        <i className="fa-solid fa-clipboard-check fa-2x"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-white mb-0">HACCP</h5>
                                        <small className="text-white-50">Standard</small>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="border border-white border-opacity-25 rounded-circle p-3">
                                        <i className="fa-solid fa-flask fa-2x"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-white mb-0">GMP</h5>
                                        <small className="text-white-50">Certified</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5 rounded-4 shadow-lg bg-white text-dark position-relative">
                                <i className="fa-solid fa-quote-left text-primary opacity-25 display-3 position-absolute top-0 start-0 ms-4 mt-3"></i>
                                <div className="position-relative z-1 pt-4">
                                    <h4 className="fw-bold mb-3 text-primary">Procurement Excellence</h4>
                                    <p className="text-muted mb-0 lead fs-6 fst-italic">
                                        "Our commitment begins at the source. We work directly with farmers to ensure
                                        fair trade and high-quality raw material sorting before it even reaches our factory gate.
                                        This empowers local communities and guarantees premium quality."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CashewProcessing;