import React, { useState } from 'react';

// Import all the images from the src/images folder
import banner1 from '../images/banner1.png';
import aboutPic from '../images/about.png';
import image1 from '../images/Image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';
import squid from '../images/squid.png';
import oyster from '../images/oyster.png';
import cuttlefish from '../images/cuttlefish.png';
import tunaPlaceholder from '../images/tuna.png';
import quoteIcon from '../images/quote.png';
import rating5 from '../images/rating5.png';
import sustainabilityIcon from '../images/sustainability.png';
import whyUsPic from '../images/why-us.png';
import slider2Img1 from '../images/slider2-img1.png';
import { Link } from 'react-router-dom';


const Home = () => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(2);

    const faqData = [
        {
            question: "What is the source of your seafood?",
            answer: "Our seafood is sustainably sourced from the wilds of Mozambique, ensuring high-quality, ethically harvested products that support local communities and protect marine ecosystems."
        },
        {
            question: "How do you ensure the sustainability of your sea food - products?",
            answer: "We ensure sustainability by discouraging the catch of small-sized fish and training local fishermen to use government-regulated gear, promoting responsible fishing practices."
        },
        {
            question: "What is the shipping process like, and where do you deliver?",
            answer: "Once you place an order, we offer worldwide delivery via sea for bulk orders and air for faster, time-sensitive needs, ensuring safe and efficient delivery wherever you are."
        },
        {
            question: "How do you handle and maintain the freshness of your seafood during shipping?",
            answer: "We ship by sea in reefer containers kept below -18°C and by air using isothermal boxes to maintain the freshness and quality of our frozen seafood."
        }
    ];

    const handleFaqClick = (index) => {
        if (index === activeFaqIndex) {
            setActiveFaqIndex(null);
        } else {
            setActiveFaqIndex(index);
        }
    };
    const startYear = 2010;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;
    return (
        <>
            {/* Banner Slider */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="contents d-none d-lg-block ">
                            <h3>Harvesting Excellence, Delivering Freshness</h3>
                            <p>DML Group, we are dedicated to delivering the freshest and highest quality seafood...</p>
                            <div className="see-how-work justify-content-start align-items-center d-flex gap-2 px-3 mt-5">
                                <i className="fa-regular fa-circle-play"></i><span className="text-white ">See how we work</span>
                            </div>
                        </div>
                        <div className="contents contents-full d-lg-none ">
                            <h3>Harvesting Excellence, Delivering Freshness</h3>
                            <p>At DML Group, we are dedicated to delivering the freshest and highest quality seafood...</p>
                            <div className="see-how-work justify-content-start align-items-center d-flex gap-2 px-3 mt-5">
                                <i className="fa-regular fa-circle-play"></i><span className="text-white ">See how we work</span>
                            </div>
                        </div>
                        <div className="counts d-none d-lg-block">
                            <div className="row">
                                <div className="col-md-3"><h3>{yearsOfExperience}</h3><p>years of experience</p></div>
                                <div className="col-md-3"><h3>100%</h3><p>customer satisfaction rating</p></div>
                                <div className="col-md-3"><h3>1000+</h3><p>orders delivered daily</p></div>
                                <div className="col-md-3"><h3>10+</h3><p>healthy food products</p></div>
                            </div>
                        </div>
                        <img src={banner1} className="d-block w-100" alt="First Slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* About section */}
            <div className="about pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h3>ABOUT US</h3><h1>Our passion drives us to provide the finest, seafood</h1>
                            <p class="text-justify mt-5">Diamante Mariscos is a Private Limited company dedicated to providing
                                the healthiest protein to the community. In recent years, we have evolved from a seafood
                                processing company to a group of companies in different areas of operations such as Sea food
                                processing, Fish and meat import and its distribution Network, Agricultural commodity trade, Raw
                                cashew nut export, Cashew nut processing and Agri/Animal farming to meet the needs of today’s
                                consumers.</p>
                            <p class="text-justify">Our Headquartered is in Angoche City of Mozambique, we have grown to employ
                                more than 500 team members across 17 facilities in three countries, Mozambique, UAE (Dubai) and
                                India and selling products across the Mozambique and the world.</p>

                            <p class="text-justify">We have a cold chain from fishing to processing and distribution to provide
                                our customers with the freshest, highest-quality, most sustainable products possible. We have
                                5000 tonnes of cold storage capacity installed across Mozambique for the storage and
                                distribution cold chain to meet our customers’ satisfaction.</p>
                        </div>
                        <div className="col-md-6 col-sm-12 justify-content-center align-items-center d-flex">
                            <img className="about-pic" src={aboutPic} alt="About us" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Area */}
            <div className="food-area p-5">
                <div className="container">
                    <h3 className="text-center">OUR EXQUISITE PRODUCTS</h3>
                    <div className="sea-food-area food-section">
                        <h1 className="text-center">Seafood Symphony</h1>
                        <div className="row gallery pt-5">
                            {/* <div className="col-md-3 col-sm-2 cardz"><img src={image1} alt="Salmon" /><div className="fish-title">Salmon</div></div>
                            <div className="col-md-3 col-sm-2 cardz"><img src={image2} alt="Tuna" /><div className="fish-title">Tuna</div></div> */}
                            <div className="col-md-3 col-sm-2 cardz"><img src={squid} alt="Squid" /><div className="fish-title">Squid</div></div>
                            <div className="col-md-3 col-sm-2 cardz"><img src={oyster} alt="Oyster" /><div className="fish-title">Oyster</div></div>
                            <div className="col-md-3 col-sm-2 cardz"><img src={cuttlefish} alt="Cuttlefish" /><div className="fish-title">Cuttlefish</div></div>
                            <div className="col-md-3 col-sm-2 cardz"><img src={image4} alt="Lobster" /><div className="fish-title">Lobster</div></div>
                        </div>
                        <div className="row gallery pt-5">
                            <div className="col-md-3 col-sm-2 cardz"><img src={image5} alt="Prawns" /><div className="fish-title">Prawns</div></div>
                            <div className="col-md-3 col-sm-2 cardz"><img src={image6} alt="Crab" /><div className="fish-title">Crab</div></div>
                            <div className="col-md-3 col-sm-2 cardz"><img src={image7} alt="Red Snapper" /><div className="fish-title">Red Snapper</div></div>
                            {/* <div className="col-md-3 col-sm-2 cardz"><img src={image8} alt="Tuna" /><div className="fish-title">Tuna</div></div> */}
                            <div className="col-md-3 col-sm-2 cardz"><img src={image3} alt="Octopus" /><div className="fish-title">Octopus</div></div>

                        </div>
                    </div>


                </div>
            </div>

            {/* Testimonial area */}
            <div className="testimonial pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12"><h3>TESTIMONIALS</h3><h1>What Our Customers Say About Us</h1></div>
                        <div className="col-md-4 col-sm-12"><div className="testimonial-arrows"><i className="fa-solid testimonial-arrow fa-arrow-left"></i><i className="fa-solid testimonial-arrow fa-arrow-right"></i></div></div>
                    </div>
                    <div className="row testimonials">
                        <div className="col-md-12 col-sm-12">
                            <div className="card d-flex flex-row"><img src={quoteIcon} className="quote" alt="Quote" />
                                <div><p>This store is dedicated to delivering unparalleled quality and maintaining the highest standards of hygiene. From premium seafood to frozen chicken and globally sourced fish, every product reflects a commitment to freshness and excellence. Complemented by a team of friendly and attentive staff, each visit is designed to ensure customer satisfaction and a consistently superior shopping experience.

                                </p><div className="rating"><img src={rating5} alt="Rating" /></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR VISION */}
            <div className="vision py-5 bg-dml-blue">
                <div className="container">
                    <h1 className="text-center text-white">Our Vision</h1>
                    <div class="row py-5 text-white d-flex justify-content-center align-items-center">
                        <div class=" px-4  border-top border-bottom py-3 border-dark-subtle border-dashed">   
                            <h5><i class="fa-solid fa-trophy me-2"></i><strong>Be the global leader</strong></h5>
                            <p class="text-justify text-white-50">
                                We strive to set the industry standard by driving innovation, sustainability, and excellence in everything we do.
                            </p>
                        </div>

                        <div class=" px-4   py-3 border-dark-subtle border-dashed">
                            <h5><i class="fa-solid fa-briefcase me-2"></i><strong>Create jobs for Mozambique's youth</strong></h5>
                            <p class="text-justify text-white-50">
                                By investing in local talent and industries, we provide meaningful employment opportunities that contribute to economic growth and stability.
                            </p>
                        </div>

                        <div class=" px-4 border-top border-bottom py-3 border-dark-subtle border-dashed">
                            <h5><i class="fa-solid fa-graduation-cap me-2"></i><strong>Empower the next generation</strong></h5>
                            <p class="text-justify text-white-50">
                                Through education, training, and mentorship, we equip young people with the skills and knowledge to build a brighter future.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Our mission */}
            <div className="missions py-5 te">
                <div className="container">
                    <h1 className="text-center">Our Mission</h1>
                    <div className="row mission">
                        <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center border-right p-5"><div className="mission-icon d-flex justify-content-center align-items-center"><img src={sustainabilityIcon} alt="Sustainability" /></div></div>
                        <div className="col-md-6 log-lg-12 p-5"><h1>01</h1><h2>Provide the healthiest protein worldwide.</h2><p>We are committed to delivering the highest quality, nutrient-rich protein to consumers worldwide, ensuring health and sustainability. Our products are carefully sourced and processed to maintain superior nutritional value.</p></div>
                    </div>
                    <div className="row mission">
                        <div className="col-md-6 log-lg-12 p-5 border-right"><h1>02</h1><h2>Add value to Mozambique’s natural resources.</h2><p>By responsibly utilizing Mozambique’s abundant natural resources, we create economic opportunities and sustainable growth. Our approach focuses on ethical sourcing, local partnerships, and long-term environmental stewardship.</p></div>
                        <div className="col-md-6 d-none d-md-flex align-items-center p-5"><div className="mission-icon d-flex justify-content-center align-items-center"><img src={sustainabilityIcon} alt="Sustainability" /></div></div>
                    </div>
                    <div className="row mission">
                        <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center border-right p-5"><div className="mission-icon d-flex justify-content-center align-items-center"><img src={sustainabilityIcon} alt="Sustainability" /></div></div>
                        <div className="col-md-6 log-lg-12 p-5"><h1>03</h1><h2>Source from global producers with shared values.</h2><p>We collaborate with trusted global producers who prioritize quality, sustainability, and ethical practices. This ensures that every product we offer meets the highest standards of responsibility and excellence.</p></div>
                    </div>
                    <div className="more-products py-5">
                        <h3>MORE TYPE OF</h3><h1 className="mb-5">Our Products</h1>
                        <div className="row products-bg">
                            <div className="col-md-3 col-sm-12 text-center text-white p-5 product">
                                <Link to="/fish-process" className="text-decoration-none text-white" >
                                    <i className="fa-solid fa-fish"></i>
                                    <h4 className="mb-5">Seafood Processing</h4>
                                    <p className="text-white">
                                        Harvested from the pristine, crystal-clear waters of Mozambique, our seafood is carefully selected to meet the highest standards of quality. Delivered globally, we ensure year-round availability, bringing exceptional freshness and unbeatable taste to tables around the world.
                                    </p>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-12 text-center text-white p-5 product">
                                <Link to="/frozen-trade" className="text-decoration-none text-white" >
                                    <i className="fa-solid fa-store"></i>
                                    <h4 className="mb-5">Frozen Trade</h4>
                                    <p className="text-white">
                                        Freshness Preserved in Every Freeze – Premium Frozen Seafood, Chicken, and Meat, available in stores nationwide. With strict hygiene practices, we guarantee consistent quality and freshness throughout Mozambique.
                                    </p>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-12 text-center text-white p-5 product">
                                <Link to="/farming" className="text-decoration-none text-white" >
                                    <i className="fa-solid fa-tractor"></i>
                                    <h4 className="mb-5">Farming</h4>
                                    <p className="text-white">
                                        Farming includes agricultural crop production covering cereals, fruits, and vegetables, poultry farming dedicated to raising birds for meat and eggs, animal rearing for livestock development and care, and the international trade of agricultural commodities, ensuring surplus produce and poultry goods reach markets worldwide.
                                    </p>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-12 text-center text-white p-5 product">
                                <Link to="/cashew-processing" className="text-decoration-none text-white" >
                                    <i className="fa-solid fa-seedling"></i>
                                    <h4 className="mb-5">Cashew Processing</h4>
                                    <p className="text-white">
                                        From the heart of Mozambique, cashews are handpicked from sun-kissed trees, skillfully processed with a focus on quality, and shared across global markets. A natural delicacy, nurtured with care and sustaining worldwide trade.
                                    </p>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Why choose us */}
            <div className="why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 justify-content-center align-items-center d-flex"><img src={whyUsPic} alt="Why choose us" className="why-us-img" /></div>
                        <div className="col-md-8"><h1 className="mb-5">Why Choose Us </h1>
                            <div className="row">
                                <div className="col-md-6"><i className="fa-solid fa-star"></i><h3>Uncompromising Quality</h3><p className="text-justify">Every detail is crafted with precision...</p></div>
                                <div className="col-md-6"><i className="fa-solid fa-book-open-reader"></i><h3>Sustainability Leadership</h3><p className="text-justify">Leading with a focus on sustainability...</p></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6"><i className="fa-solid fa-earth-americas"></i><h3>Global Reach, Local Expertise</h3><p className="text-justify">We bridge international innovation with local knowledge...</p></div>
                                <div className="col-md-6"><i className="fa-solid fa-person-circle-check"></i><h3>Customer-Centric Approach</h3><p className="text-justify">We prioritize understanding and meeting customer needs...</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Usually Asked Questions */}
            <div className="usually-asked">
                <div className="container">
                    <h3>WHAT PEOPLE</h3><h1 className="mb-5">Usually Asked</h1>
                    <div className="row d-flex flex-column gap-2">
                        {faqData.map((faq, index) => (
                            <div className="col-md-8 ms-auto" key={index}>
                                <div className={`card px-3 faq py-3 ${activeFaqIndex === index ? 'active' : ''}`} onClick={() => handleFaqClick(index)}>
                                    <div className="d-flex flex-row align-items-center"><h5><strong>{faq.question}</strong></h5><i className="fa-solid fa-chevron-down ms-auto"></i></div>
                                    <div className="explanation">{faq.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom slider */}
            <div className="bottom-slider">
                <div className="container">
                    <div id="myCarousel1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6"><div className="carousel-content px-5"><h2 className="text-white">Feeding the human population the healthiest protein</h2><p className="text-white text-justify">Diamante Mariscos is a Private Limited company...</p></div></div>
                                        <div className="col-md-6 justify-content-center align-items-center d-flex p-5"><div className="img"><img src={slider2Img1} className="slider2-img" alt="Slider" /></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6"><div className="carousel-content px-5"><h2 className="text-white">Feeding the human population the healthiest protein</h2><p className="text-white text-justify">Diamante Mariscos is a Private Limited company...</p></div></div>
                                        <div className="col-md-6 justify-content-center align-items-center d-flex p-5"><div className="img"><img src={slider2Img1} className="slider2-img" alt="Slider" /></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel1" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel1" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;