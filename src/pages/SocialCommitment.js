import React from 'react';
import heroImage from '../images/Socialcommitment.png';
import housingFinanceImage from '../images/Housing Finance.jpeg';
import microFinanceImage from '../images/microFinance.jpeg';
import genderEqualityImage from '../images/genderEquality.jpeg';
import nonDiscriminationImage from '../images/NonDiscrimination.jpeg';

const SocialCommitment = () => {
    return (
        <div className="page-wrapper bg-light">
            {/* Hero / Intro Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${heroImage}) center/cover no-repeat fixed`, minHeight: '550px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>
                <div className="container position-relative z-2 text-center">
                    <span className="badge bg-primary text-white mb-4 px-4 py-2 rounded-pill fw-bold letter-spacing-2 shadow">COMMUNITY FIRST</span>
                    <h1 className="display-2 fw-bold mb-3 text-shadow">Social Commitment</h1>
                    <p className="lead mb-0 w-75 mx-auto opacity-100 fs-4 text-shadow-sm">Going beyond business to foster inclusivity, support the underprivileged, and promote sustainable development.</p>
                </div>
            </section>

            {/* Housing Finance - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <img src={housingFinanceImage} alt="Housing Finance Scheme" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-primary border-2 pb-1">Employee Welfare</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Housing Finance Scheme</h2>
                                <p className="text-muted lead fs-5 lh-lg">
                                    Affordable housing is a fundamental need. Our Housing Finance Scheme supports those who need it most.
                                    Every year, we provide financial assistance to five of our most deserving employees,
                                    enabling them to secure safe and reliable housing for their families.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Micro Finance - Light BG */}
            <section className="section py-5 bg-light-subtle border-top border-bottom">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <img src={microFinanceImage} alt="Micro-Finance for Fishermen" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="pe-lg-4">
                                <h6 className="text-success fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-success border-2 pb-1">Community Support</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Micro-Finance for Fishermen</h2>
                                <p className="text-muted lead fs-5 lh-lg">
                                    We extend our support beyond our employees to the wider community.
                                    Our Micro-Finance Scheme provides interest-free emergency financing to fishermen operating within our network,
                                    ensuring they have the safety net they need to sustain their livelihoods.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gender Equality - White BG */}
            <section className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <img src={genderEqualityImage} alt="Gender Equality" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <h6 className="text-warning fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-warning border-2 pb-1">Inclusivity</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Gender Equality</h2>
                                <p className="text-muted lead fs-5 lh-lg">
                                    We are proud to be a gender-unbiased, equal-opportunity organization.
                                    Diversity drives innovation and growth. We actively foster an environment where
                                    women and men have equal opportunities to lead, contribute, and succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Non Discrimination - Light BG */}
            <section className="section py-5 bg-light-subtle border-top">
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2">
                            <img src={nonDiscriminationImage} alt="Non-Discrimination" className="img-fluid rounded-4 shadow-lg hover-lift" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="pe-lg-4">
                                <h6 className="text-danger fw-bold text-uppercase letter-spacing-2 mb-3">
                                    <span className="d-inline-block border-bottom border-danger border-2 pb-1">Core Values</span>
                                </h6>
                                <h2 className="mb-4 display-5 fw-bold">Non-Discrimination Commitment</h2>
                                <p className="text-muted lead fs-5 lh-lg">
                                    We take a firm stand against all forms of discrimination.
                                    We adhere to strict principles of fairness, ensuring that every employee, partner,
                                    and community member is treated with respect and dignity, regardless of their background.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SocialCommitment;
