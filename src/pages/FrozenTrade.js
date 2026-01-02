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
            <div className="card border-0 h-100 shadow-card hover-lift overflow-hidden group-hover-zoom rounded-4">
                <div className="position-relative overflow-hidden" style={{ height: '260px' }}>
                    <img src={img} alt={title} className="w-100 h-100 object-fit-cover transition-transform duration-500" />
                    <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-dark to-transparent p-5 opacity-50"></div>
                </div>
                <div className="card-body text-center bg-white position-relative p-4">
                    <h6 className="fw-bold mb-0 text-dark fs-5">{title}</h6>
                </div>
            </div>
        </div>
    );

    return (
        <div className="page-wrapper bg-light">
            {/* Hero Section */}
            <section className="position-relative py-5 text-white" style={{ background: `url(${heroImage}) center/cover no-repeat fixed`, minHeight: '550px', display: 'flex', alignItems: 'center' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-80"></div>
                <div className="container position-relative z-2 text-center">
                    <span className="badge bg-danger text-white mb-4 px-4 py-2 rounded-pill fw-bold letter-spacing-2 shadow">COLD CHAIN EXPERTS</span>
                    <h1 className="display-2 fw-bold mb-3 text-shadow">Frozen Product Supply</h1>
                    <p className="lead mb-0 w-75 mx-auto opacity-100 fs-4 text-shadow-sm">Ensuring food safety and quality across Mozambique with a comprehensive range of frozen proteins.</p>
                </div>
            </section>

            {/* Sticky Nav Buttons */}
            <div className="sticky-top bg-white/90 backdrop-blur shadow-sm z-3 py-3 border-bottom">
                <div className="container d-flex justify-content-center gap-2 gap-md-4 flex-wrap">
                    {[
                        { id: 'frozen-chicken', label: 'Frozen Chicken', icon: 'fa-drumstick-bite' },
                        { id: 'frozen-fish', label: 'Frozen Fish', icon: 'fa-fish' },
                        { id: 'frozen-meat', label: 'Frozen Meat', icon: 'fa-burger' }
                    ].map(cat => (
                        <button
                            key={cat.id}
                            className={`btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 transition-all ${activeCategory === cat.id ? 'btn-danger shadow transform-scale-105' : 'btn-light text-muted hover-bg-light-gray'}`}
                            onClick={() => handleCategoryClick(cat.id)}>
                            <i className={`fa-solid ${cat.icon}`}></i> {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Frozen Chicken Section - Chicken (Light BG as standard) */}
            <section id="frozen-chicken" className="section py-5 bg-light-subtle">
                <div className="container py-4">
                    <div className="d-flex align-items-center mb-5 pb-3 border-bottom border-warning">
                        <div className="icon-circle bg-warning text-dark me-4 shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                            <i className="fa-solid fa-drumstick-bite"></i>
                        </div>
                        <div>
                            <h6 className="text-warning fw-bold text-uppercase letter-spacing-2 mb-1">Poultry</h6>
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

            {/* Frozen Fish Section - White BG */}
            <section id="frozen-fish" className="section py-5 bg-white border-top border-bottom">
                <div className="container py-4">
                    <div className="d-flex align-items-center mb-5 pb-3 border-bottom border-info">
                        <div className="icon-circle bg-info text-white me-4 shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                            <i className="fa-solid fa-fish"></i>
                        </div>
                        <div>
                            <h6 className="text-info fw-bold text-uppercase letter-spacing-2 mb-1">Seafood</h6>
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

            {/* Frozen Meat Section - Light BG */}
            <section id="frozen-meat" className="section py-5 bg-light-subtle">
                <div className="container py-4">
                    <div className="d-flex align-items-center mb-5 pb-3 border-bottom border-danger">
                        <div className="icon-circle bg-danger text-white me-4 shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
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
