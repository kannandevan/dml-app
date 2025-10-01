import React from 'react';

// Import images for this page
import riceImage from '../images/rice.webp';
import flourImage from '../images/floor.jpg';
import sugarImage from '../images/suagr2.webp';
import oilImage from '../images/oil.jpg';


const CommodityTrade = () => {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h1 className="fw-normal fs-1">Commodity Trade Division at Diamante Mariscos Lda</h1>
                    <p>
                        At Diamante Mariscos Lda, our Commodity Trade Division plays a vital role in ensuring access to essential
                        food commodities across Mozambique. We specialize in both wholesale and retail distribution, supplying a
                        wide range of staple foods to supermarkets, retailers, and wholesalers. Our offerings are designed to
                        meet the everyday needs of Mozambican households and businesses, while adhering to strict quality
                        standards. Below are the key commodities we trade, with detailed descriptions of each.
                    </p>
                </div>
            </div>

            <div className="section bg-commodity">
                <div className="container">
                    {/* White Rice Section */}
                    <div className="row bg-white rounded-5 p-5 mt-5">
                        <div className="col-md-6">
                            <div className="h2 fw-light">White Rice</div>
                            <p className="text-justify">
                                We supply high-quality White Long Grain Rice, a staple food in Mozambique and many parts of the
                                world. Our rice is carefully selected to meet the highest standards of quality, ensuring that it
                                cooks evenly and maintains its texture and taste.
                            </p>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>Moisture Content</td>
                                        <td className="align-items-center gap-2"><strong>Below 15%</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i> Broken Rice Percentage</td>
                                        <td className="align-items-center gap-2"><strong> 25%</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-justify">
                                Our rice undergoes rigorous processing to remove impurities, ensuring it is clean, safe, and
                                ready for consumption. It is available in various packaging options to suit both wholesale and
                                retail buyers.
                            </p>
                        </div>
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img src={riceImage} alt="White Rice" className="rounded-5 w-50" />
                        </div>
                    </div>

                    {/* Maize Flour Section */}
                    <div className="row bg-white rounded-5 p-5 mt-5">
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img src={flourImage} alt="Maize Flour" className="rounded-5 w-50" />
                        </div>
                        <div className="col-md-6">
                            <div className="h2 fw-light">Maize Flour</div>
                            <p className="text-justify">
                                At Diamante Mariscos, we offer premium-grade Maize Flour, which is derived from clean, white
                                maize (corn). This flour is a versatile staple used in a variety of traditional Mozambican
                                dishes, such as Xima and Porridge, making it a key food commodity in the country.
                            </p>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>Quality</td>
                                        <td className="align-items-center gap-2"><strong>Clean White Maize</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>Processing</td>
                                        <td className="align-items-center gap-2"><strong>Thoroughly milled to maintain nutritional integrity</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-justify">
                                Our maize flour is available in bulk quantities for wholesale, as well as in smaller packages
                                for retail supermarkets, ensuring accessibility for households and businesses alike.
                            </p>
                        </div>
                    </div>

                    {/* Sugar Section */}
                    <div className="row bg-white rounded-5 p-5 mt-5">
                        <div className="col-md-6">
                            <div className="h2 fw-light">Sugar (White and Brown)</div>
                            <p className="text-justify">
                                We supply both white and brown sugar, sourced from reputable producers to meet the diverse needs
                                of our customers. Sugar is a key ingredient in households and industries, and we ensure that our
                                sugar products are of the finest quality.
                            </p>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>White Sugar</td>
                                        <td className="align-items-center gap-2"><strong>Refined to high standards, ideal for everyday use and food processing</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>Brown Sugar</td>
                                        <td className="align-items-center gap-2"><strong>Less refined, retaining more natural molasses for a rich flavor</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-justify">
                                Both types of sugar are available in various packaging sizes, suitable for retail stores,
                                bakeries, and large-scale food industries.
                            </p>
                        </div>
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img src={sugarImage} alt="Sugar" className="rounded-5 w-50" />
                        </div>
                    </div>

                    {/* Edible Oil Section */}
                    <div className="row bg-white rounded-5 p-5 mt-5">
                        <div className="col-md-6 align-self-center justify-content-center d-flex">
                            <img src={oilImage} alt="Edible Oil" className="rounded-5 w-50" />
                        </div>
                        <div className="col-md-6">
                            <div className="h2 fw-light">Edible Oil</div>
                            <p className="text-justify">
                                Our Edible Oil products include both refined and non-refined vegetable oils, catering to the
                                diverse preferences and cooking styles of Mozambican consumers.
                            </p>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>Refined Vegetable Oil</td>
                                        <td className="align-items-center gap-2"><strong>Purified and processed for a neutral taste, perfect for frying and general cooking</strong></td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex align-items-center gap-2"><i className="bi text-success bi-arrow-right-circle-fill fs-4"></i>Non-Refined Vegetable Oil</td>
                                        <td className="align-items-center gap-2"><strong>Retains more natural flavor, offering a healthier option with added nutrients</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-justify">
                                We source our oils from trusted suppliers to ensure purity and quality, making them suitable for
                                both household and industrial use. Available in a range of sizes, from small retail bottles to
                                large wholesale drums.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <p className="text-center fw-light">
                        At Diamante Mariscos Lda, our Commodity Trade Division is dedicated to ensuring that these essential
                        food commodities are accessible to communities and businesses throughout Mozambique. Our strong
                        logistics network, coupled with our commitment to quality and food safety, enables us to deliver these
                        products efficiently and reliably across the country.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CommodityTrade;