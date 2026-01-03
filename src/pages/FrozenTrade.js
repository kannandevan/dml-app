import React, { useState, useEffect } from 'react';
import heroImage from '../images/hero_frozen_trade_new.png';

import chickenWings from '../images/products/forzen-wings.webp';
import chickenUpperBack from '../images/products/uper-back.webp';
import chickenLowerBack from '../images/products/lower-back.webp';
import chickenTails from '../images/products/tails.webp';
import chickenFrank from '../images/products/frank.webp';
import chickenNeck from '../images/products/neck.webp';
import wholeChicken from '../images/products/whole-chicken.webp';

import beefWhole from '../images/products/frozen-beaf-whole.webp';
import beefLiver from '../images/products/frozen-beaf-liver.webp';

import fishHorseMackerel from '../images/prod_horse_mackerel.png';
import fishChubMackerel from '../images/prod_chub_mackerel.png';
import fishSardine from '../images/prod_sardine.png';
import fishSprat from '../images/prod_sprat.png';

const FrozenTrade = () => {
    const [activeCategory, setActiveCategory] = useState('frozen-chicken');

    const handleCategoryClick = (targetId) => {
        setActiveCategory(targetId);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 180;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        const sections = ['frozen-chicken', 'frozen-fish', 'frozen-meat'];
        const offset = 200;

        const handleScrollHighlight = () => {
            const scrollY = window.scrollY;
            let currentSection = '';

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section && section.offsetTop <= scrollY + offset) {
                    currentSection = sectionId;
                }
            });

            if (currentSection && activeCategory !== currentSection) {
                setActiveCategory(currentSection);
            }
        };

        window.addEventListener('scroll', handleScrollHighlight);
        return () => window.removeEventListener('scroll', handleScrollHighlight);
    }, [activeCategory]);

    const ProductCard = ({ img, title }) => (
        <div className="col-md-6 col-lg-3">
            <div className="card border-0 h-100 shadow-sm hover-lift overflow-hidden rounded-4 bg-white">
                <div className="position-relative p-3">
                    <img src={img} alt={title} className="w-100 rounded-3 object-fit-cover shadow-sm" style={{ height: '200px' }} />
                </div>
                <div className="card-body text-center pt-0 px-4 pb-4">
                    <h6 className="fw-bold mb-0 text-dark">{title}</h6>
                </div>
            </div>
        </div>
    );

    return (
        <div className="page-wrapper bg-soft-gray">
            {/* Split Hero Section */}
            <div className="hero-section-modern bg-white overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <span className="badge bg-danger text-white mb-3 px-3 py-2 rounded-pill fw-bold letter-spacing-1 shadow-sm">COLD CHAIN EXPERTS</span>
                            <h1 className="display-3 fw-bold text-dark mb-4">
                                Frozen Product <br />
                                <span className="text-danger">Supply</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Ensuring food safety and quality across Mozambique with a comprehensive range of frozen proteins.
                                Sourced globally for premium reliability.
                            </p>
                            <div className="d-flex align-items-center gap-3 mt-4">
                                <button onClick={() => handleCategoryClick('frozen-chicken')} className="btn btn-outline-danger rounded-pill px-4 fw-bold">Chicken</button>
                                <button onClick={() => handleCategoryClick('frozen-fish')} className="btn btn-outline-primary rounded-pill px-4 fw-bold">Fish</button>
                                <button onClick={() => handleCategoryClick('frozen-meat')} className="btn btn-outline-dark rounded-pill px-4 fw-bold">Meat</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
                                <img src={heroImage} className="img-fluid rounded-3 w-100 object-fit-cover" style={{ minHeight: '450px' }} alt="Frozen Trade Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Nav Buttons */}
            <div className="sticky-top bg-white bg-opacity-95 backdrop-blur shadow-sm z-3 py-3 border-bottom">
                <div className="container d-flex justify-content-center gap-2 flex-wrap">
                    {[
                        { id: 'frozen-chicken', label: 'Frozen Chicken', icon: 'fa-drumstick-bite' },
                        { id: 'frozen-fish', label: 'Frozen Fish', icon: 'fa-fish' },
                        { id: 'frozen-meat', label: 'Frozen Meat', icon: 'fa-burger' }
                    ].map(cat => (
                        <button
                            key={cat.id}
                            className={`btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 transition-all ${activeCategory === cat.id ? 'btn-danger shadow-sm' : 'btn-light text-muted border'}`}
                            onClick={() => handleCategoryClick(cat.id)}>
                            <i className={`fa-solid ${cat.icon}`}></i> {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Frozen Chicken Section */}
            <section id="frozen-chicken" className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="d-flex align-items-center mb-5 pb-3 border-bottom border-warning border-opacity-25">
                        <div className="d-inline-flex align-items-center justify-content-center bg-warning-subtle text-warning-dark rounded-circle me-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                            <i className="fa-solid fa-drumstick-bite"></i>
                        </div>
                        <div>
                            <h6 className="text-warning-dark fw-bold text-uppercase letter-spacing-2 mb-1">Poultry</h6>
                            <h2 className="display-5 fw-bold mb-0">Frozen Chicken</h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        <ProductCard img={chickenWings} title="Frozen Chicken Wings" />
                        <ProductCard img={chickenUpperBack} title="Frozen Chicken Upper Back" />
                        <ProductCard img={chickenLowerBack} title="Frozen Chicken Lower Back" />
                        <ProductCard img={chickenTails} title="Frozen Chicken Tails" />
                        <ProductCard img={chickenFrank} title="Frozen Chicken Frank" />
                        <ProductCard img={chickenNeck} title="Frozen Chicken Neck" />
                        <ProductCard img={wholeChicken} title="Whole Chicken with Livers & Gizzards" />
                    </div>
                </div>
            </section>

            {/* Frozen Fish Section */}
            <section id="frozen-fish" className="section py-5 bg-soft-gray">
                <div className="container py-4">
                    <div className="d-flex align-items-center mb-5 pb-3 border-bottom border-primary border-opacity-25">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary-light text-primary rounded-circle me-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                            <i className="fa-solid fa-fish"></i>
                        </div>
                        <div>
                            <h6 className="text-primary fw-bold text-uppercase letter-spacing-2 mb-1">Seafood</h6>
                            <h2 className="display-5 fw-bold mb-0">Frozen Fish</h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        <ProductCard img={fishHorseMackerel} title="Horse Mackerel (Carapao)" />
                        <ProductCard img={fishChubMackerel} title="Chub Mackerel (Atum)" />
                        <ProductCard img={fishSardine} title="Frozen Sardine" />
                        <ProductCard img={fishSprat} title="Frozen Sprat" />
                    </div>
                </div>
            </section>

            {/* Frozen Meat Section */}
            <section id="frozen-meat" className="section py-5 bg-white">
                <div className="container py-4">
                    <div className="d-flex align-items-center mb-5 pb-3 border-bottom border-danger border-opacity-25">
                        <div className="d-inline-flex align-items-center justify-content-center bg-danger-subtle text-danger rounded-circle me-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                            <i className="fa-solid fa-burger"></i>
                        </div>
                        <div>
                            <h6 className="text-danger fw-bold text-uppercase letter-spacing-2 mb-1">Meat Products</h6>
                            <h2 className="display-5 fw-bold mb-0">Frozen Meat</h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        <ProductCard img={beefWhole} title="Frozen Beef Whole" />
                        <ProductCard img={beefLiver} title="Frozen Beef Liver" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrozenTrade;
