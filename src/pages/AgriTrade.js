import React from 'react';

// Import the images for this page from your src/images folder
import peaImage from '../images/pea.png';
import wheatImage from '../images/wheat.jpg';

const AgriTrade = () => {
    return (
        <>
            <div className="section bg-success bg-gradient">
                <div className="container">
                    <div className="row py-5 justify-content-center">
                        <div className="col-md-6 align-self-center">
                            <h1 className="text-warning fw-medium">
                                <span className="fw-bold">Agri Trade</span> Division
                            </h1>
                            <p className="py-5 text-light fs-5">
                                At DML Group, our Agricultural Division has been dedicated to the procurement, processing, and
                                export of Mozambique’s unique agricultural commodities since 2016. This division focuses on
                                sourcing and exporting what we proudly refer to as the 'Wilds of Mozambique', products harvested
                                from the country's virgin, nutrient-rich soils. These commodities, nurtured by nature itself,
                                represent the purest and most natural form of agriculture, exceeding even organic standards.
                            </p>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <img src={peaImage} alt="Agri Produce" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-gradiant">
                <div className="container">
                    <div className="row py-5 justify-content-center">
                        <div className="col-lg-4 align-self-center d-flex justify-content-center">
                            <img src={wheatImage} alt="Wheat" className="rounded-lg w-100" />
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <h1 className="text-dark fw-light">
                                Harvesting <span className="text-success">Nature’s </span>Bounty
                            </h1>
                            <hr />
                            <p className="py-3">
                                At DML Group, our Agricultural Division has been dedicated to the procurement, processing, and
                                export of Mozambique’s unique agricultural commodities since 2016. This division focuses on
                                sourcing and exporting what we proudly refer to as the 'Wilds of Mozambique', products harvested
                                from the country's virgin, nutrient-rich soils. These commodities, nurtured by nature itself,
                                represent the purest and most natural form of agriculture, exceeding even organic standards.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgriTrade;