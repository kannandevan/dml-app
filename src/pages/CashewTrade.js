import React from 'react';
import cashewNutImage from '../images/cashew_nut.webp';
import galleryImg1 from '../images/images.jpeg';
import galleryImg2 from '../images/69a8b6_1f6e49dad7a4435192bdffa41819a4bf.png';
import galleryImg3 from '../images/69a8b6_2ff41843b7b740ba96da89a8b088d875.jpg';
import galleryImg4 from '../images/69a8b6_ec5f09df23b54e55b7858c885aa3bc42.jpg';
import galleryImg5 from '../images/69a8b6_2d7446c6ae904bb5a9f7702794563750.jpg';
import galleryImg6 from '../images/69a8b6_b679c36d657344abb8dbc737d7dfe149.jpg';
import galleryImg7 from '../images/69a8b6_2567ad6f294a46119066a7db207b4ea6.jpg';

const CashewTrade = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${cashewNutImage}) center/cover no-repeat fixed`, minHeight: '550px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>
                <div className="container position-relative z-2 text-center">
                    <span className="badge bg-white text-dark mb-4 px-4 py-2 rounded-pill fw-bold letter-spacing-2 shadow">EXPORT QUALITY</span>
                    <h1 className="display-2 fw-bold mb-3 text-shadow">Cashew Trade</h1>
                    <p className="lead mb-0 fs-4 text-shadow-sm opacity-100">Delivering Premium Raw Cashew Nuts to Global Ports</p>
                </div>
            </section>

            {/* Specifications Section - Standard BG */}
            <section className="section py-5 bg-light-subtle">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6">
                            <h6 className="text-secondary fw-bold text-uppercase letter-spacing-2 mb-3">
                                <span className="d-inline-block border-bottom border-secondary border-2 pb-1">Our Ops</span>
                            </h6>
                            <h2 className="display-5 fw-bold mb-4">Export Specifications</h2>
                            <p className="lead text-muted mb-5 fs-5">
                                Based in the port city of Nacala, our export warehouse facilitates global trade.
                                We deal exclusively in confirmed orders, ensuring reliability and quality.
                            </p>

                            <div className="card border-0 shadow-card overflow-hidden rounded-4">
                                <div className="card-header bg-primary text-white p-3 fw-bold">
                                    Quality Parameters
                                </div>
                                <table className="table table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="ps-4 py-4"><i className="fa-solid fa-hashtag text-primary me-3"></i> Nut Count</td>
                                            <td className="pe-4 py-4 text-end fw-bold fs-5">180 - 195</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-4 py-4"><i className="fa-solid fa-percent text-primary me-3"></i> KOR (Kernel Output)</td>
                                            <td className="pe-4 py-4 text-end fw-bold fs-5">46 - 48</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-4 py-4"><i className="fa-solid fa-droplet text-primary me-3"></i> Moisture</td>
                                            <td className="pe-4 py-4 text-end fw-bold fs-5">&lt; 10%</td>
                                        </tr>
                                        <tr>
                                            <td className="ps-4 py-4"><i className="fa-solid fa-box-open text-primary me-3"></i> Packaging</td>
                                            <td className="pe-4 py-4 text-end fw-bold fs-5">80 kg Jute Bag</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={cashewNutImage} className="img-fluid rounded-4 shadow-lg hover-lift" alt="Raw Cashew Nuts" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h6 className="text-secondary fw-bold text-uppercase letter-spacing-2">Gallery</h6>
                        <h2 className="fw-bold display-4">From Harvest to Export</h2>
                    </div>

                    <div className="row g-3">
                        {[
                            galleryImg1, galleryImg2, galleryImg3, galleryImg4,
                            galleryImg5, galleryImg6, galleryImg7, galleryImg7
                        ].map((img, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <div className="rounded-4 overflow-hidden shadow-card h-100 position-relative group-hover-zoom cursor-pointer">
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 group-hover-opacity-20 transition-all z-1"></div>
                                    <img src={img} alt={`Gallery ${index + 1}`} className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale-110" style={{ minHeight: '200px' }} />
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