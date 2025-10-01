import React from 'react';

// Import images used on this page
// Note: Make sure these images exist in your 'src/images/image/' folder
import carouselImg1 from '../images/image/createmultimedia_n_a_bustling_factory_setting_a_diverse_group_o_86836805-b365-41c9-9236-8a112e55eb2e.png';
import carouselImg2 from '../images/image/createmultimedia_n_a_bustling_factory_setting_a_diverse_group_o_ccabe09b-524c-4f70-9c55-03142b3fe276.png';
import carouselImg3 from '../images/image/createmultimedia_n_a_bustling_factory_setting_a_diverse_group_o_8e0948f1-f7b4-464a-ad7c-cdadb858cf7b.png';
import sustainabilityImg from '../images/image/RJXywEoYOK4hONGeUBeS9r5qE7LBRLqNpeWiI7T2TBqIC9gnA.jpg';

const CashewProcessing = () => {
    // Style objects for inline styles
    const contentBoxStyle = {
        backgroundColor: '#00000087',
        borderRadius: '10px',
        padding: '10px'
    };

    const sectionBgStyle = {
        backgroundImage: 'url(https://demo.cocobasic.com/volos-wp/demo-1/wp-content/uploads/2019/11/home.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    
    return (
        <>
            <section className="text-center text-white">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="contents d-lg-block" style={contentBoxStyle}>
                                <h3 className="fw-light">DML Cashew Processing</h3>
                                <p>The establishment of a state-of-the-art semi-automatic cashew nut processing unit in Angoche in 2019 marked a significant milestone for the cashew industry in northern Mozambique...</p>
                            </div>
                            <img src={carouselImg1} className="d-block w-100" alt="Cashew Processing" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                             <div className="contents d-lg-block" style={contentBoxStyle}>
                                <h3>DML Cashew Processing</h3>
                                <p>The establishment of a state-of-the-art semi-automatic cashew nut processing unit in Angoche in 2019 marked a significant milestone for the cashew industry in northern Mozambique...</p>
                            </div>
                            <img src={carouselImg2} className="d-block w-100" alt="Cashew Factory" />
                        </div>
                        <div className="carousel-item">
                             <div className="contents d-lg-block" style={contentBoxStyle}>
                                <h3>DML Cashew Processing</h3>
                                <p>The establishment of a state-of-the-art semi-automatic cashew nut processing unit in Angoche in 2019 marked a significant milestone for the cashew industry in northern Mozambique...</p>
                            </div>
                            <img src={carouselImg3} className="d-block w-100" alt="Cashew Nuts" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <div className="lobster section">
                <div className="container slidanim-show">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 justify-content-center align-items-center d-flex" style={sectionBgStyle}>
                            {/* Background image is applied here */}
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <h2 className="lobster-color fw-light">Location and Importance</h2>
                            <hr />
                            <p className="text-justify">Angoche is renowned for its pristine environment and favorable conditions for cashew cultivation...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section why-us" style={{ backgroundColor: 'white' }}>
                <div className="container slidanim-show">
                    <div className="missions py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h2 className="text-center lobster-color fw-light">Processing Technology and Techniques</h2>
                                    <hr />
                                    <p className="text-center">The semi-automatic processing unit incorporates the latest technology to enhance efficiency and maintain quality.<br/>The processing stages include:</p>
                                </div>
                            </div>
                            <div className="row mission">
                                <div className="col-md-6 log-lg-12 p-5 border-right"><h1>01</h1><h2>Cleaning and Sorting</h2><p>Raw cashews undergo a thorough cleaning process to remove impurities...</p></div>
                                <div className="col-md-6 log-lg-12 p-5"><h1>02</h1><h2>Steaming and Shelling</h2><p>The nuts are steamed to soften the shells, which are then removed using semi-automatic shelling machines...</p></div>
                            </div>
                            <div className="row mission">
                                <div className="col-md-6 log-lg-12 p-5 border-right"><h1>03</h1><h2>Drying and Peeling</h2><p>The shelled nuts are dried to reduce moisture content, followed by peeling machines...</p></div>
                                <div className="col-md-6 log-lg-12 p-5"><h1>04</h1><h2>Grading and Quality Control</h2><p>The peeled kernels are graded based on size, color, and overall quality...</p></div>
                            </div>
                             <div className="row mission">
                                <div className="col-md-6 log-lg-12 p-5 border-right"><h1>05</h1><h2>Packaging</h2><p>The graded nuts are carefully packed to preserve their quality and freshness...</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lobster section">
                <div className="container slidanim-show p-5" style={{ borderRadius: '15px', ...sectionBgStyle }}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 p-4" style={{ backgroundColor: '#ffffffb3', borderRadius: '15px' }}>
                            <h2 className="lobster-color fw-light text-center" style={{ color: '#36566f' }}>Procurement of Raw Cashews</h2>
                            <hr />
                            <p className="text-justify">Our commitment to excellence begins at the very first stage of the supply chain: the procurement of raw cashews...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container py-1">
                    <div className="p-5 text-center" style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
                        <div className="container py-2">
                            <h2 className="fw-light">Organic Certification Process</h2>
                            <p className="col-lg-8 mx-auto lead">
                                To further enhance the quality and marketability of our cashews, we have initiated an organic certification process... <code>positioning our cashews as a premium product globally.</code>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row flex-lg-row-reverse align-items-center py-1">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={sustainabilityImg} className="d-block mx-lg-auto img-fluid" alt="Sustainability" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="lobster-color fw-light">Commitment to Sustainability and Quality</h2>
                            <hr />
                            <p>Ensuring food safety and maintaining high standards of hygiene are paramount...</p>
                            <div className="content-wrap">
                                <h3 style={{ fontSize: '22px', marginTop: '25px', marginBottom: '16px' }}><span>HACCP</span></h3>
                                <div className="desc" style={{ fontSize: '15px', lineHeight: '26px', marginBottom: '25px' }}>
                                    <p>This plan identifies and controls potential hazards throughout the production process...</p>
                                </div>
                            </div>
                            <div className="content-wrap">
                                <h3 style={{ fontSize: '22px', marginTop: '25px', marginBottom: '16px' }}><span>GMP</span></h3>
                                <div className="desc" style={{ fontSize: '15px', lineHeight: '26px', marginBottom: '25px' }}>
                                    <p>Our GMP plan focuses on maintaining hygiene and quality control within the facility...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CashewProcessing;