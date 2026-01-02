import React from 'react';

import carouselImg1 from '../images/image/createmultimedia_n_a_bustling_factory_setting_a_diverse_group_o_86836805-b365-41c9-9236-8a112e55eb2e.png';
import carouselImg2 from '../images/image/createmultimedia_n_a_bustling_factory_setting_a_diverse_group_o_ccabe09b-524c-4f70-9c55-03142b3fe276.png';
import sustainabilityImg from '../images/image/RJXywEoYOK4hONGeUBeS9r5qE7LBRLqNpeWiI7T2TBqIC9gnA.jpg';

const CashewProcessing = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${carouselImg1}) center/cover no-repeat fixed`, minHeight: '600px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>
                <div className="container position-relative z-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <div className="d-inline-block border border-light border-opacity-25 rounded-pill px-4 py-2 mb-4 backdrop-blur-md bg-white bg-opacity-10">
                                <span className="text-warning fw-bold letter-spacing-2 small">ESTABLISHED 2019</span>
                            </div>
                            <h1 className="display-2 fw-bold mb-4 text-shadow">State-of-the-Art Processing</h1>
                            <p className="lead mb-0 text-white fs-4 text-shadow-sm lh-base opacity-100">
                                Angoche's premier semi-automatic processing unit. Combining modern technology
                                with traditional care to deliver the finest Mozambican cashews to the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img src={carouselImg2} alt="Factory Interior" className="img-fluid rounded-4 shadow-lg hover-lift" />
                                <div className="position-absolute bottom-0 end-0 bg-white p-4 rounded-top-4 shadow-card m-4 d-none d-md-block border-start border-4 border-primary" style={{ maxWidth: '200px' }}>
                                    <h3 className="fw-bold text-dark mb-1">Angoche</h3>
                                    <p className="small text-muted mb-0">Northern Mozambique</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-primary border-2 pb-1">Location & Origin</span>
                                </h6>
                                <h2 className="display-5 fw-bold mb-4">The Heart of Cashew Quality</h2>
                                <p className="text-muted lead fs-5 mb-5 lh-lg">
                                    Angoche is renowned for its pristine environment and favorable conditions for cashew cultivation.
                                    Our facility is strategically located to source raw nuts directly from local growers,
                                    ensuring freshness and supporting the regional economy.
                                </p>
                                <div className="d-flex gap-4">
                                    <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-4 border">
                                        <div className="bg-primary-subtle p-3 rounded-circle text-primary">
                                            <i className="fa-solid fa-leaf fa-xl"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-0 text-dark">Organic Potential</h6>
                                            <small className="text-muted">Virgin, nutrient-rich soil</small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-4 border">
                                        <div className="bg-warning-subtle p-3 rounded-circle text-warning">
                                            <i className="fa-solid fa-people-carry-box fa-xl"></i>
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
            </section>

            {/* Process Steps - Vertical Timeline Style */}
            <section className="section py-5 bg-light-subtle">
                <div className="container py-4">
                    <div className="text-center mb-6">
                        <h6 className="text-warning fw-bold text-uppercase letter-spacing-2 mb-2">How We Do It</h6>
                        <h2 className="display-4 fw-bold">Processing Technology</h2>
                        <p className="text-muted w-75 mx-auto lead">Semi-automatic precision meets strict quality control.</p>
                    </div>

                    <div className="row g-4 pt-3">
                        {/* Steps */}
                        {[
                            { step: "01", title: "Cleaning & Sorting", desc: "Raw cashews undergo a thorough cleaning process to remove foreign matter using localized cleaning systems.", color: "bg-primary" },
                            { step: "02", title: "Steaming & Shelling", desc: "Nuts are steam-softened and shelled using advanced semi-automatic machines to preserve kernel integrity.", color: "bg-primary" },
                            { step: "03", title: "Drying & Peeling", desc: "Shelled kernels are dried to optimal moisture levels and peeled to reveal the creamy white nut.", color: "bg-primary" },
                            { step: "04", title: "Grading & QC", desc: "Rigorous selection based on size (W180, W240, etc.), color, and quality standards.", color: "bg-primary" },
                            { step: "05", title: "Vacuum Packaging", desc: "Flushed with CO2/Nitrogen and vacuum packed to ensure long-lasting freshness and crunch.", color: "bg-success" }
                        ].map((item, index) => (
                            <div className={index >= 3 ? "col-md-6" : "col-md-4"} key={index}>
                                <div className="card border-0 shadow-card h-100 p-5 text-center hover-lift rounded-4 bg-white position-relative overflow-hidden">
                                    <div className={`position-absolute top-0 start-0 w-100 h-2 ${item.color}`}></div>
                                    <div className={`d-inline-flex align-items-center justify-content-center ${item.color} text-white rounded-circle fs-3 fw-bold mb-4 shadow-sm`} style={{ width: '70px', height: '70px' }}>{item.step}</div>
                                    <h4 className="fw-bold mb-3">{item.title}</h4>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Sustainability Banner */}
            <section className="section py-5 position-relative overflow-hidden text-white">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: `url(${sustainabilityImg}) center/cover no-repeat fixed` }}></div>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-95"></div>

                <div className="container position-relative z-2 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h2 className="display-4 fw-bold mb-4">Commitment to Quality</h2>
                            <p className="lead opacity-90 mb-5 fs-4">
                                We are initiating organic certification to position our products globally.
                                Our facility adheres to strict HACCP and GMP standards.
                            </p>
                            <div className="d-flex gap-5">
                                <div className="text-center">
                                    <div className="border border-white border-2 rounded-circle p-3 d-inline-block mb-2">
                                        <i className="fa-solid fa-clipboard-check fa-2x"></i>
                                    </div>
                                    <h4 className="fw-bold text-warning mb-0">HACCP</h4>
                                    <small className="text-white-50">Critical Control Points</small>
                                </div>
                                <div className="text-center">
                                    <div className="border border-white border-2 rounded-circle p-3 d-inline-block mb-2">
                                        <i className="fa-solid fa-flask fa-2x"></i>
                                    </div>
                                    <h4 className="fw-bold text-warning mb-0">GMP</h4>
                                    <small className="text-white-50">Good Manufacturing</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="glass-panel p-5 rounded-5 text-dark shadow-lg bg-white bg-opacity-90 position-relative">
                                <i className="fa-solid fa-quote-right position-absolute top-0 end-0 m-4 text-black-50 fa-3x opacity-25"></i>
                                <h3 className="fw-bold mb-3 text-primary">Procurement Excellence</h3>
                                <p className="text-muted mb-0 fs-5 lh-lg">
                                    "Our commitment begins at the source. We work directly with farmers to ensure
                                    fair trade and high-quality raw material sorting before it even reaches our factory gate.
                                    This empowers local communities and guarantees premium quality."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CashewProcessing;