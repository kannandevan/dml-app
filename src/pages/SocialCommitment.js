import React from 'react';

// Import images for this page. Make sure these exist in your src/images/ folder.
import heroImage from '../images/Socialcommitment.png';
import housingFinanceImage from '../images/Housing Finance.jpeg';
import microFinanceImage from '../images/microFinance.jpeg';
import genderEqualityImage from '../images/genderEquality.jpeg';
import nonDiscriminationImage from '../images/NonDiscrimination.jpeg';

const SocialCommitment = () => {
    return (
        <>
            <div className="social-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="socialcommitment-color fw-light">
                                <strong>Social Commitment</strong>
                            </h1>
                            <p className="text-justify socialcontent-text">
                                At DML Group, our commitment to social responsibility goes beyond
                                our business operations. We believe in making a tangible, positive
                                impact on the communities in which we operate, fostering
                                inclusivity, supporting the underprivileged, and promoting
                                sustainable development. Our social initiatives are aimed at
                                creating opportunities for those in need, while upholding values
                                of fairness, equality, and community support.
                            </p>
                        </div>
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img className="w-50" src={heroImage} alt="Social Commitment" />
                        </div>
                    </div>
                </div>
            </div>

            {/* second section */}
            <div className="section sectionBackground">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img className="w-50" src={housingFinanceImage} alt="Housing Finance Scheme" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h1 className="socialcommitment-color fw-light">
                                <strong>Housing Finance Scheme</strong>
                            </h1>
                            <p className="text-justify socialcontent-text">
                                Recognizing that affordable housing is a fundamental need, DML
                                Group has established a <b>Housing Finance Scheme</b> to support
                                those who require it most. Every year, we provide financial
                                assistance to five of our most deserving employees, enabling them
                                to secure safe and reliable housing for their families.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third section */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="socialcommitment-color fw-light">
                                <strong>Micro-Finance for<br />Fishermen</strong>
                            </h1>
                            <p className="text-justify socialcontent-text">
                                In addition to our commitment to employees, DML Group also extends
                                financial support to the communities around us. Our Micro-Finance
                                Scheme for Fishermen provides interest-free emergency financing to
                                fishermen operating within our network.
                            </p>
                        </div>
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img className="w-50" src={microFinanceImage} alt="Micro-Finance for Fishermen" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="section sectionBackground">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img className="w-50" src={genderEqualityImage} alt="Gender Equality" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h1 className="socialcommitment-color fw-light textAlignitem">
                                <strong>Gender Equality and Equal Opportunity</strong>
                            </h1>
                            <p className="text-justify socialcontent-text">
                                At DML Group, we are proud to be a gender-unbiased,
                                equal-opportunity organization. Our core values emphasize
                                inclusivity, diversity, and fairness. We strongly
                                believe that diversity drives innovation and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth section */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="socialcommitment-color fw-light textAlignitem">
                                <strong>Commitment to Non-Discrimination</strong>
                            </h1>
                            <p className="text-justify socialcontent-text">
                                DML Group takes a firm stand against all forms of discrimination.
                                We adhere to the principles of fairness, ensuring that every
                                employee, partner, and community member is treated with respect
                                and dignity. By fostering a culture of acceptance and
                                understanding, we create an inclusive workplace where everyone has
                                the opportunity to thrive.
                            </p>
                        </div>
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img className="w-50" src={nonDiscriminationImage} alt="Non-Discrimination" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialCommitment;
