import React from 'react';
import heroImage from '../images/hero_cashew_trade_new.png';
import cashewNutImage from '../images/cashew_pile_raw.png';
import galleryImg1 from '../images/cashew_gallery_1.png';
import galleryImg2 from '../images/69a8b6_1f6e49dad7a4435192bdffa41819a4bf.png';
import galleryImg3 from '../images/69a8b6_2ff41843b7b740ba96da89a8b088d875.jpg';
import galleryImg4 from '../images/69a8b6_ec5f09df23b54e55b7858c885aa3bc42.jpg';
import galleryImg5 from '../images/69a8b6_2d7446c6ae904bb5a9f7702794563750.jpg';
import galleryImg6 from '../images/69a8b6_b679c36d657344abb8dbc737d7dfe149.jpg';
import galleryImg7 from '../images/69a8b6_2567ad6f294a46119066a7db207b4ea6.jpg';

const CashewTrade = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-white border text-dark mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">EXPORT QUALITY</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Premium <br />
                                <span className="text-secondary">Cashew Trade</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Delivering Premium Raw Cashew Nuts to Global Ports. Based in the port city of Nacala,
                                facilitating efficient international trade.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <a href="#specs" className="btn btn-primary rounded-pill px-5 py-3 shadow-lg hover-lift">
                                    View Specs
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={heroImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Cashew Trade Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specifications Section */}
            <section className="section py-5 bg-white" id="specs">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6 order-md-2">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={cashewNutImage} className="img-fluid rounded-3 shadow-lg hover-lift w-100" alt="Raw Cashew Nuts" />
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h6 className="text-uppercase text-secondary fw-bold letter-spacing-2 mb-3">Our Operations</h6>
                            <h2 className="display-5 fw-bold mb-4">Export Specifications</h2>
                            <p className="text-muted lead mb-5">
                                Based in the port city of Nacala, our export warehouse facilitates global trade.
                                We deal exclusively in confirmed orders, ensuring reliability and quality.
                            </p>

                            <div className="card border-0 shadow-sm overflow-hidden rounded-4">
                                <div className="card-header bg-primary text-white p-3 fw-bold">
                                    Quality Parameters
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="ps-4 py-3"><i className="fa-solid fa-hashtag text-primary me-3"></i> Nut Count</td>
                                                <td className="pe-4 py-3 text-end fw-bold">180 - 195</td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4 py-3"><i className="fa-solid fa-percent text-primary me-3"></i> KOR (Kernel Output)</td>
                                                <td className="pe-4 py-3 text-end fw-bold">46 - 48</td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4 py-3"><i className="fa-solid fa-droplet text-primary me-3"></i> Moisture</td>
                                                <td className="pe-4 py-3 text-end fw-bold">&lt; 10%</td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4 py-3"><i className="fa-solid fa-box-open text-primary me-3"></i> Packaging</td>
                                                <td className="pe-4 py-3 text-end fw-bold">80 kg Jute Bag</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section py-5 bg-soft-gray">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-secondary fw-bold letter-spacing-2 mb-2">Gallery</h6>
                        <h2 className="fw-bold display-4">From Harvest to Export</h2>
                    </div>

                    <div className="row g-3">
                        {[
                            galleryImg1, galleryImg2, galleryImg3, galleryImg4,
                            galleryImg5, galleryImg6, galleryImg7, galleryImg7
                        ].map((img, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <div className="rounded-4 overflow-hidden shadow-sm h-100 position-relative hover-lift cursor-pointer bg-white p-1">
                                    <img src={img} alt={`Gallery ${index + 1}`} className="w-100 h-100 object-fit-cover rounded-3" style={{ minHeight: '200px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CashewTrade;