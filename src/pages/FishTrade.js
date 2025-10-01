import React from 'react';

// Import images for this page, assuming they are in src/images/
import heroImage from '../images/fish-trade.webp';
import infraImage from '../images/fish-trade01.jpg';
import storageImage from '../images/fish-trade02.jpg';
import safetyImage from '../images/fish-trade03.jpg';
import supportImage from '../images/fish-trade04.jpg';

// Import product images, assuming they are in src/images/products/
import productHorseMackerel from '../images/products/frozen-fish01.webp';
import productChubMackerel from '../images/products/frozen-fish02.webp';
import productSardine from '../images/products/frozen-fish03.webp';
import productSprat from '../images/products/frozen-fish04.webp';


const FishTrade = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="section bg-light-gray py-5">
                <div className="container py-5">
                    <div className="section-trans-bg1">
                        <h1>
                            Frozen Product Supply Chain at Diamante Mariscos Lda
                        </h1>
                        <div className="row ">
                            <div className="col-md-8">
                                <p className="lead">Ensuring Food Safety and Quality Across Mozambique</p>
                                <p className="text-justify">
                                    At Diamante Mariscos Lda, we are proud to be a key player in
                                    Mozambique's food safety management, with a well-established and
                                    efficient frozen product supply chain. Our extensive distribution
                                    network ensures the availability of a diverse range of
                                    high-quality, frozen products across the country.
                                </p>
                                <p className="text-justify">
                                    Beyond fish, our product range also includes chicken products,
                                    meat, and a variety of other frozen foods, making us a
                                    comprehensive supplier of essential protein-rich items. Our
                                    commitment to offering reliable access to nutritious food
                                    contributes significantly to improving food security and public
                                    health in Mozambique.
                                </p>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <img className="w-100 rounded-5" src={heroImage} alt="Fish Trade" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Infrastructure Sections */}
            <div className="py-4">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="h3 mb-2">
                                Nationwide Cold Chain Infrastructure
                            </h2>
                            <div className="col-md-10 d-flex align-items-center">
                                <p>
                                    To support our nationwide distribution, we have established a
                                    robust cold chain infrastructure, ensuring the freshness and
                                    quality of our products from point of origin to final
                                    delivery. This integrated system allows us to
                                    maintain strict temperature controls throughout the entire
                                    supply chain.
                                </p>
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <img src={infraImage} className="w-100 rounded-4" alt="Cold Chain Infrastructure" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="h3 mb-2">Cold Storage Facilities</h2>
                            <div className="col-md-10 d-flex align-items-center">
                                <p>
                                    Our cold storage facilities, with a holding capacity of 5,000
                                    metric tonnes, are strategically located to facilitate
                                    efficient distribution and storage. This capacity enables us
                                    to manage large volumes of frozen products.
                                </p>
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <img src={storageImage} className="w-100 rounded-4" alt="Cold Storage Facilities" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="h3 mb-2">Focus on Food Safety</h2>
                            <div className="col-md-10 d-flex align-items-center">
                                <p>
                                    At Diamante Mariscos, food safety is at the forefront of our
                                    operations. We adhere to rigorous international standards,
                                    implementing thorough quality control measures at every stage of
                                    our supply chain.
                                </p>
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <img src={safetyImage} className="w-100 rounded-4" alt="Food Safety" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="h3 mb-2">
                                Supporting Food Security and Sustainability
                            </h2>
                            <div className="col-md-10 d-flex align-items-center">
                                <p>
                                    Our focus on sustainability, food safety, and efficient
                                    logistics makes Diamante Mariscos a trusted partner in
                                    Mozambique’s food supply chain.
                                </p>
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <img src={supportImage} className="w-100 rounded-4" alt="Food Security" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frozen Fish Products Gallery */}
            <div id="frozen-fish" className="py-5 bg-light">
                <div className="container my-5">
                    <h1 className="text-center mb-4">Frozen Fish</h1>
                    <p className="text-center lead">
                        We offer a selection of high-quality frozen fish, ensuring freshness and rich taste.
                    </p>
                    <div className="row gallery pt-5">
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={productHorseMackerel} alt="Frozen Horse Mackerel" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Horse Mackerel (Carapao)</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={productChubMackerel} alt="Frozen Chub Mackerel" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chub Mackerel (Atum)</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={productSardine} alt="Frozen Sardine" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Sardine</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={productSprat} alt="Frozen Sprat" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Sprat</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FishTrade;