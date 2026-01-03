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
import slider2Img1 from '../images/dml-office.png';
import { Link } from 'react-router-dom';


const Home = () => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(2);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

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

    const testimonials = [
        {
            text: "This store is dedicated to delivering unparalleled quality and maintaining the highest standards of hygiene. From premium seafood to frozen chicken and globally sourced fish, every product reflects a commitment to freshness and excellence.",
            author: "Verified Customer",
            rating: 5
        },
        {
            text: "Absolutely impressed with the freshness of the prawns and crab I ordered. DML Group never disappoints when it comes to quality seafood. The delivery was prompt and the packaging ensured everything stayed frozen perfectly.",
            author: "Sarah Jenkins",
            rating: 5
        },
        {
            text: "A reliable partner for our restaurant's seafood needs. The consistency in quality and the sustainability practices they follow give us peace of mind. Highly recommended for bulk orders!",
            author: "Michael Chen",
            rating: 5
        }
    ];

    // Auto-rotate testimonials
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

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
            {/* Image View Modal */}
            {selectedImage && (
                <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="image-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <img src={selectedImage} alt="Product View" className="image-modal-img" />
                    </div>
                </div>
            )}

            {/* Modern Hero Section */}
            <div className="hero-section-modern bg-hero">
                <div className="hero-shape-bg"></div>
                <div className="container position-relative z-1">
                    <div className="row align-items-center min-vh-75 py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="display-3 fw-bold text-dark mb-4 slide-in-up" style={{ animationDelay: '0.2s' }}>
                                Harvesting Excellence, <br />
                                <span className="text-primary">Delivering Freshness</span>
                            </h1>
                            <p className="lead text-muted mb-5 slide-in-up" style={{ animationDelay: '0.4s' }}>
                                DML Group is dedicated to delivering the freshest and highest quality seafood, sourced responsibly from the pristine waters of Mozambique to your table.
                            </p>
                            <div className="d-flex flex-wrap gap-3 slide-in-up" style={{ animationDelay: '0.6s' }}>
                                <button className="btn btn-primary-custom shadow-lg">
                                    <i className="fa-regular fa-circle-play me-2"></i> See how we work
                                </button>
                                <Link to="/contact-us" className="btn btn-outline-primary rounded-pill px-5 py-3 fw-bold border-2">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img-container bg-white p-2">
                                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                                    <div className="carousel-inner rounded-4 overflow-hidden">
                                        <div className="carousel-item active">
                                            <img src={banner1} className="d-block w-100 object-fit-cover" style={{ height: '500px' }} alt="Seafood" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={image3} className="d-block w-100 object-fit-cover" style={{ height: '500px' }} alt="Octopus" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={image5} className="d-block w-100 object-fit-cover" style={{ height: '500px' }} alt="Prawns" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Overlay - Mobile Fixed */}
            <div className="container position-relative" style={{ marginTop: '-40px', zIndex: 10 }}>
                <div className="glass-panel p-4 shadow-lg text-center bg-white">
                    <div className="row g-4 align-items-center justify-content-center">
                        <div className="col-6 col-md-3 border-end-md">
                            <h3 className="fw-bold mb-0 text-primary display-6">{yearsOfExperience}</h3>
                            <p className="small text-muted mb-0 fw-bold text-uppercase ls-1">Years Experience</p>
                        </div>
                        <div className="col-6 col-md-3 border-end-md">
                            <h3 className="fw-bold mb-0 text-primary display-6">100%</h3>
                            <p className="small text-muted mb-0 fw-bold text-uppercase ls-1">Satisfaction</p>
                        </div>
                        <div className="col-6 col-md-3 border-end-md">
                            <h3 className="fw-bold mb-0 text-primary display-6">1000+</h3>
                            <p className="small text-muted mb-0 fw-bold text-uppercase ls-1">Daily Orders</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h3 className="fw-bold mb-0 text-primary display-6">10+</h3>
                            <p className="small text-muted mb-0 fw-bold text-uppercase ls-1">Product Lines</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About section */}
            <div className="section bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <h6 className="text-uppercase text-primary fw-bold letter-spacing-2 mb-2">About Us</h6>
                            <h2 className="display-6 fw-bold text-dark mb-4">Our passion drives us to provide the finest seafood.</h2>
                            <p className="text-muted mb-4">Diamante Mariscos is a leading name in sustainable seafood processing and distribution. From our origins in processing, we have expanded into a diverse group covering seafood trade, agricultural commodities, cashew processing, and farming.</p>
                            <p className="text-muted mb-4">Headquartered in Angoche City, Mozambique, we employ over 500 professionals across 17 facilities in Mozambique, UAE, and India, ensuring a global reach with local expertise.</p>
                            <p className="text-muted">Our robust cold chain infrastructure, including 5000 tonnes of cold storage, guarantees the freshest, highest-quality products from catch to consumer.</p>

                            <Link to="/about-us" className="btn btn-outline-primary rounded-pill mt-3 px-4">Read More</Link>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="position-relative">
                                <div className="about-pic-wrapper overflow-hidden rounded-4 shadow-lg">
                                    <img className="img-fluid w-100 scale-on-hover" src={aboutPic} alt="About us" />
                                </div>
                                <div className="position-absolute bg-primary text-white p-4 rounded-4 shadow-lg d-none d-md-block" style={{ bottom: '-30px', left: '-30px', maxWidth: '200px' }}>
                                    <h3 className="fw-bold mb-0">15+</h3>
                                    <small>Years of Excellence in Seafood Industry</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Area */}
            <div className="section bg-soft-gray">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-primary fw-bold mb-2">Our Exquisite Products</h6>
                        <h2 className="display-5 fw-bold">Seafood Symphony</h2>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { img: squid, title: "Squid" },
                            { img: oyster, title: "Oyster" },
                            { img: cuttlefish, title: "Cuttlefish" },
                            { img: image4, title: "Lobster" },
                            { img: image5, title: "Prawns" },
                            { img: image6, title: "Crab" },
                            { img: image7, title: "Red Snapper" },
                            { img: image3, title: "Octopus" }
                        ].map((item, index) => (
                            <div className="col-lg-3 col-md-4 col-6" key={index}>
                                <div className="card border-0 shadow-card h-100 overflow-hidden text-center product-card-hover">
                                    <div className="card-img-top overflow-hidden position-relative" style={{ height: '220px' }}>
                                        <img src={item.img} alt={item.title} className="w-100 h-100 object-fit-cover transition-transform" />
                                        <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100 opacity-0 transition-opacity d-flex align-items-center justify-content-center bg-primary-transparent">
                                            <button
                                                className="btn btn-outline-light rounded-pill px-4 fw-bold scale-on-hover"
                                                onClick={() => setSelectedImage(item.img)}
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body bg-white py-3">
                                        <h5 className="card-title fw-bold text-dark mb-0">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial area - Auto Rotating */}
            <div className="section position-relative overflow-hidden" style={{ background: 'var(--gradient-soft)' }}>
                <div className="container position-relative z-1">
                    <div className="row align-items-center mb-5">
                        <div className="col-md-8">
                            <h6 className="text-uppercase text-primary fw-bold mb-2">Testimonials</h6>
                            <h2 className="display-5 fw-bold">What Our Customers Say</h2>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0 d-none d-md-block">
                            <div className="d-flex gap-2 justify-content-end">
                                {testimonials.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`rounded-circle transition-fast ${idx === activeTestimonial ? 'bg-primary' : 'bg-secondary opacity-25'}`}
                                        style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                                        onClick={() => setActiveTestimonial(idx)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="glass-panel p-5 shadow-lg position-relative transition-normal" key={activeTestimonial} style={{ animation: 'fadeIn 0.5s ease' }}>
                                <i className="fa-solid fa-quote-left text-primary opacity-25 display-1 position-absolute top-0 start-0 ms-4 mt-2"></i>
                                <div className="row align-items-center position-relative z-1">
                                    <div className="col-lg-12 text-center text-md-start">
                                        <p className="lead fst-italic text-dark mb-4 mx-auto mx-md-0" style={{ lineHeight: '1.8', maxWidth: '90%' }}>
                                            "{testimonials[activeTestimonial].text}"
                                        </p>
                                        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                                            <div className="d-flex text-warning">
                                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                                    <i key={i} className="fa-solid fa-star"></i>
                                                ))}
                                            </div>
                                            <span className="fw-bold text-dark">- {testimonials[activeTestimonial].author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR VISION - Redesigned */}
            <div className="section vision-section-bg position-relative overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-white mb-3">Our Vision</h2>
                        <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
                            We are committed to building a sustainable future through innovation, empowerment, and excellence.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="vision-card text-center">
                                <div className="vision-icon-wrapper mx-auto">
                                    <i className="fa-solid fa-trophy fa-2x text-white"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-3">Global Leader</h3>
                                <p className="text-white-50">Striving to set the industry standard by driving innovation, sustainability, and excellence in every aspect of our operations.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vision-card text-center">
                                <div className="vision-icon-wrapper mx-auto">
                                    <i className="fa-solid fa-briefcase fa-2x text-white"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-3">Job Creation</h3>
                                <p className="text-white-50">Investing in local talent to provide meaningful employment opportunities that contribute to economic growth in Mozambique.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vision-card text-center">
                                <div className="vision-icon-wrapper mx-auto">
                                    <i className="fa-solid fa-graduation-cap fa-2x text-white"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-3">Empowerment</h3>
                                <p className="text-white-50">Equipping the next generation with skills, knowledge, and mentorship to build a brighter, more sustainable future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our mission */}
            <div className="section bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-primary fw-bold mb-2">Our Core Values</h6>
                        <h2 className="display-5 fw-bold">Our Mission</h2>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-card border-0 p-4 hover-lift">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="display-4 fw-bold text-primary opacity-25 me-3">01</span>
                                    <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                                        <img src={sustainabilityIcon} alt="Sustainability" style={{ width: '30px', height: '30px' }} />
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3">Healthiest Protein</h4>
                                <p className="text-muted">Delivering the highest quality, nutrient-rich protein to consumers worldwide, ensuring health and sustainability through careful sourcing.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-card border-0 p-4 hover-lift">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="display-4 fw-bold text-primary opacity-25 me-3">02</span>
                                    <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                                        <i className="fa-solid fa-leaf text-primary fa-lg"></i>
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3">Add Value Locally</h4>
                                <p className="text-muted">Responsibly utilizing Mozambique’s natural resources to create economic opportunities, focusing on ethical sourcing and stewardship.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-card border-0 p-4 hover-lift">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="display-4 fw-bold text-primary opacity-25 me-3">03</span>
                                    <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                                        <i className="fa-solid fa-handshake text-primary fa-lg"></i>
                                    </div>
                                </div>
                                <h4 className="fw-bold mb-3">Global Partnerships</h4>
                                <p className="text-muted">Collaborating with trusted global producers who prioritize quality and ethics, ensuring every product meets high standards.</p>
                            </div>
                        </div>
                    </div>

                    {/* More Products Section */}
                    <div className="mt-5 pt-5">
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <Link to="/fish-process" className="card h-100 border-0 shadow-lg bg-primary text-white text-decoration-none transition-transform hover-translate-up">
                                    <div className="card-body p-4 text-center">
                                        <i className="fa-solid fa-fish fa-3x mb-4 text-white-50"></i>
                                        <h4 className="fw-bold text-white mb-3">Seafood Processing</h4>
                                        <p className="text-white-50 small">Harvested from pristine waters, delivered globally with exceptional freshness.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <Link to="/frozen-trade" className="card h-100 border-0 shadow-lg bg-success text-white text-decoration-none transition-transform hover-translate-up">
                                    <div className="card-body p-4 text-center">
                                        <i className="fa-solid fa-store fa-3x mb-4 text-white-50"></i>
                                        <h4 className="fw-bold text-white mb-3">Frozen Trade</h4>
                                        <p className="text-white-50 small">Premium frozen seafood, chicken, and meat with guaranteed consistent quality.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <Link to="/farming" className="card h-100 border-0 shadow-lg bg-warning text-white text-decoration-none transition-transform hover-translate-up">
                                    <div className="card-body p-4 text-center">
                                        <i className="fa-solid fa-tractor fa-3x mb-4 text-white-50"></i>
                                        <h4 className="fw-bold text-white mb-3">Farming</h4>
                                        <p className="text-white-50 small">Agricultural crop production, poultry farming, and livestock development.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <Link to="/cashew-processing" className="card h-100 border-0 shadow-lg bg-info text-white text-decoration-none transition-transform hover-translate-up">
                                    <div className="card-body p-4 text-center">
                                        <i className="fa-solid fa-seedling fa-3x mb-4 text-white-50"></i>
                                        <h4 className="fw-bold text-white mb-3">Cashew Processing</h4>
                                        <p className="text-white-50 small">Handpicked cashews, skillfully processed for quality and global markets.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why choose us - Redesigned */}
            <div className="section bg-primary-light">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <div className="position-relative">
                                <img src={whyUsPic} alt="Why choose us" className="img-fluid rounded-4 shadow-lg w-100" />
                                <div className="position-absolute bottom-0 start-0 bg-white p-4 m-4 rounded-3 shadow-lg">
                                    <h4 className="fw-bold text-primary mb-0">Why Us?</h4>
                                    <p className="small mb-0 text-muted">Excellence in every detail.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h6 className="text-uppercase text-primary fw-bold mb-2">The DML Difference</h6>
                            <h2 className="display-5 fw-bold mb-5">Why Partner With Us?</h2>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="feature-card">
                                        <i className="fa-solid fa-star feature-icon"></i>
                                        <h4 className="fw-bold mb-3">Uncompromising Quality</h4>
                                        <p className="text-muted small text-justify">True quality requires dedication and care. We ensure that everything we create meets the highest standards of craftsmanship.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-card">
                                        <i className="fa-solid fa-book-open-reader feature-icon"></i>
                                        <h4 className="fw-bold mb-3">Sustainability Leadership</h4>
                                        <p className="text-muted small text-justify">Leading with a focus on energy-efficient methods, reducing waste, and sourcing responsibly to preserve our planet.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-card">
                                        <i className="fa-solid fa-earth-americas feature-icon"></i>
                                        <h4 className="fw-bold mb-3">Global Reach</h4>
                                        <p className="text-muted small text-justify">Bridging international innovation with local knowledge to create sustainable, high-quality solutions worldwide.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-card">
                                        <i className="fa-solid fa-person-circle-check feature-icon"></i>
                                        <h4 className="fw-bold mb-3">Customer Centric</h4>
                                        <p className="text-muted small text-justify">We prioritize understanding your needs, ensuring personalized experiences and solutions that enhance satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Usually Asked Questions */}
            <div className="section bg-pattern">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-primary fw-bold mb-2">FAQ</h6>
                        <h2 className="display-5 fw-bold">Usually Asked Questions</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {faqData.map((faq, index) => (
                                    <div className={`card border-0 shadow-sm transition-fast ${activeFaqIndex === index ? 'active shadow-lg' : ''}`} key={index}
                                        style={{ overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                        onClick={() => handleFaqClick(index)}>
                                        <div className={`card-header bg-white border-0 p-4 d-flex align-items-center justify-content-between ${activeFaqIndex === index ? 'bg-light' : ''}`}>
                                            <h5 className={`mb-0 fw-bold ${activeFaqIndex === index ? 'text-primary' : 'text-dark'}`}>{faq.question}</h5>
                                            <i className={`fa-solid fa-chevron-down transition-transform ${activeFaqIndex === index ? 'rotate-180' : ''}`}></i>
                                        </div>
                                        {activeFaqIndex === index && (
                                            <div className="card-body px-4 pb-4 pt-0">
                                                <p className="text-muted mb-0">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom slider */}
            <div className="bottom-slider mt-0">
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