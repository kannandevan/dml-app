import React from 'react';

// Import images for this page
import cashewNutImage from '../images/cashew_nut.webp';
import galleryImg1 from '../images/images.jpeg';
import galleryImg2 from '../images/69a8b6_1f6e49dad7a4435192bdffa41819a4bf.png';
import galleryImg3 from '../images/69a8b6_2ff41843b7b740ba96da89a8b088d875.jpg';
import galleryImg4 from '../images/69a8b6_ec5f09df23b54e55b7858c885aa3bc42.jpg';
import galleryImg5 from '../images/69a8b6_2d7446c6ae904bb5a9f7702794563750.jpg';
import galleryImg6 from '../images/69a8b6_b679c36d657344abb8dbc737d7dfe149.jpg';
import galleryImg7 from '../images/69a8b6_2567ad6f294a46119066a7db207b4ea6.jpg';


const CashewTrade = () => {

    // Style object for the image container border
    const imageContainerStyle = {
        border: 'solid 1px rgb(225 228 242)',
        borderRadius: '20px'
    };

    return (
        <>
            {/* CASHEW TRADE section */}
            <div className="about pt-5">
                <div className="container">
                    <h1>Cashew Trade</h1>
                    <h3>We Deliver to Your Sea Port</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-justify mt-5">
                                We do Raw Cashew Nut Trade to all over the world. Our warehouse for export purpose is
                                situated at the port city of Nacala.
                                <br />
                                <b>We do export only against confirmed orders.</b>
                            </p>
                            <hr />
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <td className="text-start"><i className="fa-solid fa-hashtag"></i> Count</td>
                                        <td className="text-start">180 - 195</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"><i className="fa-solid fa-percent"></i> KOR</td>
                                        <td className="text-start">46 - 48</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"><i className="fa-solid fa-droplet"></i> Moisture</td>
                                        <td className="text-start">Below 10%</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start"><i className="fa-solid fa-box-open"></i> Packed in</td>
                                        <td className="text-start">80 kg jute bag</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <img src={cashewNutImage} className="w-100" alt="Raw Cashew Nuts" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CASHEW TRADE Area */}
            <div className="food-area p-5 why-us">
                <div className="container">
                    <div className="row gallery mb-4">
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg1} alt="Gallery 1" className="thumbnail" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg2} alt="Gallery 2" className="thumbnail" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg3} alt="Gallery 3" className="thumbnail" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg4} alt="Gallery 4" className="thumbnail" />
                            </div>
                        </div>
                    </div>
                    <div className="row gallery">
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg5} alt="Gallery 5" className="thumbnail" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg6} alt="Gallery 6" className="thumbnail" />
                            </div>
                        </div>
                        <div className="col-3">
                             <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg7} alt="Gallery 7" className="thumbnail" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="image-container" style={imageContainerStyle}>
                                <img src={galleryImg7} alt="Gallery 8" className="thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CASHEW TRADE Area end */}
        </>
    );
};

export default CashewTrade;