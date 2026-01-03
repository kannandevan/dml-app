import React from 'react';
import './AboutUs.css';

// Images
import aboutHero from '../images/dml-about.png';
import profilePlaceholder from '../images/profiles/img1.png';

const AboutUs = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* 1. Split Hero Section (Exact Match to Mega Menu Pages) */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-primary-light text-primary mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">ESTABLISHED 2010</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Global Vision, <br />
                                <span className="text-secondary">Local Roots</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Diamante Mariscos is committed to delivering the healthiest sources of protein to communities.
                                From a single processing unit to a diversified global group.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-dark mb-0">17+</h5>
                                    <small className="text-muted text-uppercase">Facilities</small>
                                </div>
                                <div className="border-start h-100 py-3"></div>
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-dark mb-0">500+</h5>
                                    <small className="text-muted text-uppercase">Employees</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={aboutHero} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="About Us Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Mission & Values (Consistent Card Grid) */}
            <section className="section py-5 bg-white">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 p-4 hover-lift rounded-4 bg-light">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa-solid fa-earth-americas fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Global Reach</h4>
                                <p className="text-muted mb-0">
                                    Headquartered in Angoche, extending to Dubai and India. We bridge the gap between local producers and international markets.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 p-4 hover-lift rounded-4 bg-light">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white text-success rounded-circle mb-4 shadow-sm" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa-solid fa-leaf fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Sustainability</h4>
                                <p className="text-muted mb-0">
                                    Our integrated cold chain and ethical sourcing ensure that every product respects the environment and empowers communities.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100 p-4 hover-lift rounded-4 bg-light">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white text-warning rounded-circle mb-4 shadow-sm" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa-solid fa-users fs-4"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Community</h4>
                                <p className="text-muted mb-0">
                                    Creating over 500 jobs and supporting varied industries including agri-farming, meat distribution, and cashew processing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Journey (Vertical Layout matching Processing Steps) */}
            <section className="section py-5 bg-soft-gray">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-secondary fw-bold letter-spacing-2 mb-2">Milestones</h6>
                        <h2 className="display-4 fw-bold">Our Journey</h2>
                    </div>

                    <div className="row g-4">
                        {[
                            { year: "2010", title: "The Foundation", desc: "Started as a focused seafood processing unit." },
                            { year: "2015", title: "Expansion", desc: "Established extensive cold storage network (5000 MT)." },
                            { year: "2019", title: "Diversification", desc: "Entered Cashew and Agri-trading sectors." },
                            { year: "2023", title: "Global Presence", desc: "Operations expanded to UAE and India." }
                        ].map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="position-relative p-4 bg-white rounded-4 shadow-sm hover-lift h-100 border-bottom border-4 border-primary">
                                    <h2 className="display-5 fw-bold text-primary opacity-25 mb-3">{item.year}</h2>
                                    <h5 className="fw-bold text-dark">{item.title}</h5>
                                    <p className="text-muted small mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Leadership Team (Consistent Layout) */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h6 className="text-secondary fw-bold text-uppercase letter-spacing-2">Leadership</h6>
                        <h2 className="display-4 fw-bold">Meet Our Team</h2>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { name: "Mr. RAJEESAN CHELLAPPAN", role: "CHAIRMAN" },
                            { name: "Mr. SAROJAKSHAN", role: "NON-EXECUTIVE DIRECTOR" },
                            { name: "Mr. ARUN THANKAN", role: "CEO & EXECUTIVE DIRECTOR" },
                            { name: "Mr. ARUN RAVI", role: "DIRECTOR OF OPERATIONS SOUTH" },
                            { name: "Mr. MUSTHAFA CHERIKKAL", role: "DIRECTOR OF OPERATIONS NORTH" }
                        ].map((member, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card border-0 h-100 shadow-card hover-lift overflow-hidden rounded-4 bg-light text-center p-4">
                                    <div className="mx-auto mb-4 p-1 rounded-circle bg-white shadow-sm" style={{ width: '140px', height: '140px' }}>
                                        <img src={profilePlaceholder} alt={member.name} className="w-100 h-100 rounded-circle object-fit-cover" />
                                    </div>
                                    <h5 className="fw-bold mb-1 text-dark">{member.name}</h5>
                                    <p className="text-primary small fw-bold text-uppercase mb-0 letter-spacing-1">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
