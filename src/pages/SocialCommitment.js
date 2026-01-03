import React from 'react';
import heroImage from '../images/hero_social_commitment_new.png';
import housingFinanceImage from '../images/Housing Finance.jpeg';
import microFinanceImage from '../images/microFinance.jpeg';
import genderEqualityImage from '../images/genderEquality.jpeg';
import nonDiscriminationImage from '../images/NonDiscrimination.jpeg';

const SocialCommitment = () => {
    return (
        <div className="page-wrapper bg-soft-gray">
            {/* 1. Split Hero Section (Exact Match to About Us / Mega Menu) */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-primary-light text-primary mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">COMMUNITY FIRST</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Social <br />
                                <span className="text-secondary">Commitment</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Going beyond business to foster inclusivity, support the underprivileged, and promote sustainable development.
                                Integrating social responsibility into our core DNA.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-dark mb-0">Inclusive</h5>
                                    <small className="text-muted text-uppercase">Growth</small>
                                </div>
                                <div className="border-start h-100 py-3"></div>
                                <div className="text-center px-4 py-2 bg-light rounded-3 border">
                                    <h5 className="fw-bold text-dark mb-0">Ethical</h5>
                                    <small className="text-muted text-uppercase">Sourcing</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={heroImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Social Commitment Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Housing Finance - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={housingFinanceImage} alt="Housing Finance Scheme" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-uppercase text-primary fw-bold letter-spacing-2 mb-3">Employee Welfare</h6>
                                <h2 className="display-5 fw-bold mb-4">Housing Finance Scheme</h2>
                                <p className="text-muted lead mb-4">
                                    Affordable housing is a fundamental need. Our Housing Finance Scheme supports those who need it most.
                                </p>
                                <p className="text-muted mb-4">
                                    Every year, we provide financial assistance to five of our most deserving employees,
                                    enabling them to secure safe and reliable housing for their families.
                                </p>
                                <div className="d-flex align-items-center gap-3 p-3 bg-primary-subtle text-primary rounded-4 border border-primary border-opacity-25">
                                    <i className="fa-solid fa-home fa-2x"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">5 Families</h6>
                                        <small className="text-muted">Supported Annually</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Micro Finance - Soft Gray BG */}
            <section className="section py-5 bg-soft-gray">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
                                <img src={microFinanceImage} alt="Micro-Finance" className="img-fluid rounded-3 shadow-card hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-uppercase text-success fw-bold letter-spacing-2 mb-3">Community Support</h6>
                            <h2 className="display-5 fw-bold mb-4">Micro-Finance for Fishermen</h2>
                            <p className="text-muted lead mb-4">
                                We extend our support beyond our employees to the wider community.
                                Our Micro-Finance Scheme provides interest-free emergency financing.
                            </p>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-start mb-3">
                                    <i className="fa-solid fa-check-circle text-success mt-1 me-3"></i>
                                    <span className="text-muted">Interest-free loans for emergency needs</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <i className="fa-solid fa-check-circle text-success mt-1 me-3"></i>
                                    <span className="text-muted">Supporting local livelihood sustainability</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gender Equality - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="position-relative p-2 bg-light rounded-4">
                                <img src={genderEqualityImage} alt="Gender Equality" className="img-fluid rounded-3 shadow-lg hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-uppercase text-warning-dark fw-bold letter-spacing-2 mb-3">Inclusivity</h6>
                                <h2 className="display-5 fw-bold mb-4">Gender Equality</h2>
                                <p className="text-muted lead mb-4">
                                    We are proud to be a gender-unbiased, equal-opportunity organization.
                                    Diversity drives innovation and growth.
                                </p>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-3 text-center h-100 bg-white shadow-sm hover-lift">
                                            <i className="fa-solid fa-venus-mars text-warning-dark fa-2x mb-2"></i>
                                            <h6 className="fw-bold text-dark mb-0">Equal Opportunity</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-3 text-center h-100 bg-white shadow-sm hover-lift">
                                            <i className="fa-solid fa-handshake text-warning-dark fa-2x mb-2"></i>
                                            <h6 className="fw-bold text-dark mb-0">Fair Leadership</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Non Discrimination - Soft Gray BG */}
            <section className="section py-5 bg-soft-gray">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
                                <img src={nonDiscriminationImage} alt="Non-Discrimination" className="img-fluid rounded-3 shadow-card hover-lift w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h6 className="text-uppercase text-danger fw-bold letter-spacing-2 mb-3">Core Values</h6>
                            <h2 className="display-5 fw-bold mb-4">Non-Discrimination</h2>
                            <p className="text-muted lead mb-4">
                                We take a firm stand against all forms of discrimination.
                                We adhere to strict principles of fairness, ensuring respect and dignity for all.
                            </p>
                            <div className="d-flex align-items-center gap-4">
                                <div className="d-flex align-items-center text-danger">
                                    <i className="fa-solid fa-scale-balanced fa-2x me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">Fairness</h6>
                                        <small className="text-muted">Guaranteed</small>
                                    </div>
                                </div>
                                <div className="border-start h-100 bg-dark opacity-10" style={{ height: '40px' }}></div>
                                <div className="d-flex align-items-center text-danger">
                                    <i className="fa-solid fa-heart fa-2x me-3"></i>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">Respect</h6>
                                        <small className="text-muted">For All</small>
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

export default SocialCommitment;
