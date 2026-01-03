import React from 'react';
import frozenOctopusImage from '../images/frozen-octopus.png';
import frozenLobsterImage from '../images/frrozen_lobster_tail.png';
import prawnsImage from '../images/prawns.jpg';
import frozenFishImage from '../images/frozen-fish.png';

const FishProcess = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h6 className="text-uppercase text-primary fw-bold letter-spacing-2 mb-3">Seafood Processing</h6>
                            <h1 className="display-4 fw-bold text-dark mb-4">
                                Harvesting Excellence, <br />
                                <span className="text-primary">Since 2010</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                EU Approval No. 757.1 • Delivering the finest quality seafood from the pristine waters of Angoche Bay.
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center text-primary">
                                    <i className="fa-solid fa-certificate fa-2x me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0">EU Approved</h6>
                                        <small>Highest Standards</small>
                                    </div>
                                </div>
                                <div className="border-start h-100 mx-2"></div>
                                <div className="d-flex align-items-center text-primary">
                                    <i className="fa-solid fa-leaf fa-2x me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0">Sustainable</h6>
                                        <small>Eco-Friendly</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={frozenFishImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '400px' }} alt="Seafood Processing facility" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Section - Features */}
            <section className="section py-5 bg-hero"> {/* Using new bg-hero color */}
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 p-4 hover-lift">
                                <div className="text-center mb-3">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-light rounded-circle p-3 mb-3" style={{ width: '80px', height: '80px' }}>
                                        <i className="fa-solid fa-water fa-2x text-primary"></i>
                                    </div>
                                    <h5 className="fw-bold fs-4">Sustainable Fishing</h5>
                                </div>
                                <p className="text-muted text-center mb-0">Partnering with local fishermen using time-honored, sustainable techniques to preserve marine life.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 p-4 hover-lift">
                                <div className="text-center mb-3">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-light rounded-circle p-3 mb-3" style={{ width: '80px', height: '80px' }}>
                                        <i className="fa-solid fa-industry fa-2x text-primary"></i>
                                    </div>
                                    <h5 className="fw-bold fs-4">Modern Facility</h5>
                                </div>
                                <p className="text-muted text-center mb-0">State-of-the-art plant with stringent quality control and strict adherence to EU hygiene standards.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 p-4 hover-lift">
                                <div className="text-center mb-3">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-primary-light rounded-circle p-3 mb-3" style={{ width: '80px', height: '80px' }}>
                                        <i className="fa-solid fa-users fa-2x text-primary"></i>
                                    </div>
                                    <h5 className="fw-bold fs-4">Community Focus</h5>
                                </div>
                                <p className="text-muted text-center mb-0">Empowering 100+ skilled local workers and contributing significantly to the Angoche economy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Octopus */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={frozenOctopusImage} alt="Frozen Octopus" className="img-fluid rounded-3 shadow-lg w-100 hover-lift" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="badge bg-primary-light text-primary mb-3 px-3 py-2 rounded-pill fw-bold">Ocean Fresh</div>
                            <h2 className="display-5 fw-bold mb-3">Frozen Octopus</h2>
                            <h5 className="text-muted fst-italic mb-4">(Octopus spp)</h5>

                            <p className="text-muted mb-4 lead">
                                Individually Quick Frozen with 3% Protective Glaze, wrapped in polythene and packed in 15kg master cartons.
                            </p>

                            <div className="row g-3 mb-4">
                                <div className="col-auto">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-box-open text-primary"></i>
                                        <span>15kg Master Cartons</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-temperature-snowflake text-primary"></i>
                                        <span>IQF Frozen</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 bg-light p-4 rounded-4">
                                <h6 className="fw-bold mb-3 text-primary">Grading Sizes</h6>
                                <div className="row g-2 small">
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>TB</span> <strong>0-300g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>T5</span> <strong>1200-1500g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>TA</span> <strong>300-500g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>T4</span> <strong>1500-2000g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>T7</span> <strong>500-800g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>T3</span> <strong>2000-3000g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>T6</span> <strong>800-1200g</strong></div>
                                    <div className="col-6 d-flex justify-content-between border-bottom pb-2"><span>T2</span> <strong>3000-4500g</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lobster */}
            <section className="section py-5 bg-soft-gray">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
                                <img src={frozenLobsterImage} alt="Frozen Lobster" className="img-fluid rounded-3 shadow-card w-100 hover-lift" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="badge bg-danger bg-opacity-10 text-danger mb-3 px-3 py-2 rounded-pill fw-bold">Premium Shellfish</div>
                            <h2 className="display-5 fw-bold mb-3">Frozen Lobster Tail</h2>
                            <h5 className="text-muted fst-italic mb-4">(Panulirus spp)</h5>
                            <p className="text-muted mb-4 lead">
                                Individually Quick Frozen, polythene wrapped, and packed in Master Cartons or EPS Boxes. 16kg standard packing.
                            </p>

                            <div className="table-responsive bg-white rounded-4 shadow-sm p-3">
                                <table className="table table-borderless table-hover mb-0 text-center">
                                    <thead className="text-primary fw-bold border-bottom">
                                        <tr>
                                            <th className="py-3">Grade (OZ)</th>
                                            <th className="py-3">Weight (gms)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>2/4</td><td>56-113</td></tr>
                                        <tr><td>4/6</td><td>113-170</td></tr>
                                        <tr><td>6/8</td><td>170-226</td></tr>
                                        <tr><td>8/10</td><td>226-283</td></tr>
                                        <tr><td>10/12</td><td>283-340</td></tr>
                                        <tr><td>12+</td><td>&gt; 340</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prawns */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={prawnsImage} alt="Frozen Prawns" className="img-fluid rounded-3 shadow-lg w-100 hover-lift" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="badge bg-warning bg-opacity-10 text-warning-dark mb-3 px-3 py-2 rounded-pill fw-bold">Sea Harvest</div>
                            <h2 className="display-5 fw-bold mb-3">Frozen Prawns</h2>
                            <h5 className="text-muted fst-italic mb-4">(Penaeus spp)</h5>

                            <p className="text-muted mb-4 lead">
                                High-quality frozen prawns packed in 2kg duplex cartons (Master carton: 6 x 2kg). Processed to EU standards.
                            </p>

                            <h6 className="fw-bold mb-3 text-primary">Available Grades</h6>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-white text-dark border shadow-sm p-3">U/5</span>
                                <span className="badge bg-white text-dark border shadow-sm p-3">6/10</span>
                                <span className="badge bg-white text-dark border shadow-sm p-3">11/20</span>
                                <span className="badge bg-white text-dark border shadow-sm p-3">21/30</span>
                                <span className="badge bg-white text-dark border shadow-sm p-3">31/40</span>
                                <span className="badge bg-white text-dark border shadow-sm p-3">41/50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FishProcess;