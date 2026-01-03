import React from 'react';
import frozenOctopusImage from '../images/frozen-octopus.png';
import frozenLobsterImage from '../images/frrozen_lobster_tail.png';
import prawnsImage from '../images/prawns.jpg';
import frozenFishImage from '../images/frozen-fish.png';
// import seafoodProcessingImage from '../images/seafood-processing.png'; // Unused in original, keeping commented or removed if not needed

const FishProcess = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 overlay-gradient text-white" style={{ background: `url(${frozenFishImage}) center/cover no-repeat`, minHeight: '400px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div> {/* Darker Overlay for readability */}
                <div className="container position-relative z-2 text-center">
                    <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Seafood Processing</h1>
                    <p className="lead mb-0" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)', opacity: 0.9 }}>Harvesting Excellence Since 2010 • EU Approval No. 757.1</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card shadow-card border-0 p-5 mt-n5" style={{ marginTop: '-80px', zIndex: 3, position: 'relative' }}>
                                <h3 className="mb-4 text-primary text-center">Diamante Mariscos Lda</h3>
                                <p className="text-muted text-center mb-5 w-75 mx-auto">
                                    Delivering the finest quality seafood from the pristine waters of Angoche Bay.
                                    Our facility ensures that seafood procured from local fishermen is handled with
                                    utmost care to maintain freshness and flavor.
                                </p>
                                <div className="row g-4 text-center">
                                    <div className="col-md-4">
                                        <div className="p-4 bg-light rounded-4 h-100">
                                            <i className="fa-solid fa-water fa-2x text-primary mb-3"></i>
                                            <h5 className="fw-bold">Sustainable Fishing</h5>
                                            <p className="small text-muted mb-0">Partnering with local fishermen using time-honored, sustainable techniques.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-4 bg-light rounded-4 h-100">
                                            <i className="fa-solid fa-industry fa-2x text-primary mb-3"></i>
                                            <h5 className="fw-bold">Modern Facility</h5>
                                            <p className="small text-muted mb-0">State-of-the-art plant with stringent quality control and EU standards.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-4 bg-light rounded-4 h-100">
                                            <i className="fa-solid fa-users fa-2x text-primary mb-3"></i>
                                            <h5 className="fw-bold">Community Focus</h5>
                                            <p className="small text-muted mb-0">Empowering 100+ skilled local workers and supporting the local economy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Sections - Zig Zag Layout */}

            {/* Octopus */}
            <section className="section py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative">
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-circle opacity-10" style={{ transform: 'scale(0.8)', zIndex: -1 }}></div>
                                <img src={frozenOctopusImage} alt="Frozen Octopus" className="img-fluid hover-lift" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-primary text-uppercase letter-spacing-2 fw-bold mb-2">Ocean Fresh</h6>
                            <h2 className="mb-3">Frozen Octopus <small className="text-muted fw-normal">(Octopus spp)</small></h2>
                            <div className="d-inline-block bg-primary text-white px-3 py-1 rounded-pill small mb-4">Origin: Mozambique</div>
                            <p className="text-muted mb-4">
                                Individually Quick Frozen with 3% Protective Glaze, wrapped in polythene and packed in 15kg master cartons.
                                We strictly adhere to National and EU Bacteriological Standards.
                            </p>

                            <h5 className="fw-bold mb-3">Grading</h5>
                            <div className="row g-3">
                                <div className="col-6">
                                    <ul className="list-group list-group-flush small">
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>TB</span> <span className="fw-bold">0-300g</span></li>
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>TA</span> <span className="fw-bold">300-500g</span></li>
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>T7</span> <span className="fw-bold">500-800g</span></li>
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>T6</span> <span className="fw-bold">800-1200g</span></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-group list-group-flush small">
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>T5</span> <span className="fw-bold">1200-1500g</span></li>
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>T4</span> <span className="fw-bold">1500-2000g</span></li>
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>T3</span> <span className="fw-bold">2000-3000g</span></li>
                                        <li className="list-group-item d-flex justify-content-between px-0 bg-transparent"><span>T2</span> <span className="fw-bold">3000-4500g</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lobster */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative text-center">
                                <img src={frozenLobsterImage} alt="Frozen Lobster" className="img-fluid hover-lift" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-secondary text-uppercase letter-spacing-2 fw-bold mb-2">Premium Shellfish</h6>
                            <h2 className="mb-3">Frozen Lobster Tail <small className="text-muted fw-normal">(Panulirus spp)</small></h2>
                            <div className="d-inline-block bg-secondary text-white px-3 py-1 rounded-pill small mb-4">Origin: Mozambique</div>
                            <p className="text-muted mb-4">
                                Individually Quick Frozen, polythene wrapped, and packed in Master Cartons or EPS Boxes.
                                16kg standard packing available.
                            </p>

                            <h5 className="fw-bold mb-3">Size Grading</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-sm table-hover mb-0">
                                            <thead className="table-light">
                                                <tr><th>Grade (OZ)</th><th>Weight (gms)</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>2/4</td><td>56-113</td></tr>
                                                <tr><td>4/6</td><td>113-170</td></tr>
                                                <tr><td>6/8</td><td>170-226</td></tr>
                                                <tr><td>8/10</td><td>226-283</td></tr>
                                                <tr><td>10/12</td><td>283-340</td></tr>
                                                <tr><td>12/14</td><td>340-396</td></tr>
                                                <tr><td>14 UP</td><td>&gt; 396</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prawns */}
            <section className="section py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative text-center">
                                <img src={prawnsImage} alt="Frozen Prawns" className="img-fluid hover-lift rounded-4 shadow-card" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-warning text-uppercase letter-spacing-2 fw-bold mb-2">Sea Harvest</h6>
                            <h2 className="mb-3">Frozen Prawns <small className="text-muted fw-normal">(Penaeus spp)</small></h2>
                            <div className="d-inline-block bg-warning text-dark px-3 py-1 rounded-pill small mb-4">Origin: Mozambique</div>
                            <p className="text-muted mb-4">
                                High-quality frozen prawns packed in 2kg duplex cartons (Master carton: 6 x 2kg).
                                Processed to meet strict EU export standards.
                            </p>

                            <h5 className="fw-bold mb-3">Available Grades</h5>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-light text-dark border p-2">U/5</span>
                                <span className="badge bg-light text-dark border p-2">6/10</span>
                                <span className="badge bg-light text-dark border p-2">11/20</span>
                                <span className="badge bg-light text-dark border p-2">21/30</span>
                                <span className="badge bg-light text-dark border p-2">31/40</span>
                                <span className="badge bg-light text-dark border p-2">41/50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FishProcess;