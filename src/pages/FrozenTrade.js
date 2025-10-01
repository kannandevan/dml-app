import React, { useState, useEffect } from 'react';

// Import images for this page
import heroImage from '../images/fish-trade.webp';

// Import product images from the 'products' sub-folder
import chickenWings from '../images/products/forzen-wings.webp';
import chickenUpperBack from '../images/products/uper-back.webp';
import chickenLowerBack from '../images/products/lower-back.webp';
import chickenTails from '../images/products/tails.webp';
import chickenFrank from '../images/products/frank.webp';
import chickenNeck from '../images/products/neck.webp';
import wholeChicken from '../images/products/whole-chicken.webp';

import beefWhole from '../images/products/frozen-beaf-whole.webp';
import beefLiver from '../images/products/frozen-beaf-liver.webp';

import fishHorseMackerel from '../images/products/frozen-fish01.webp';
import fishChubMackerel from '../images/products/frozen-fish02.webp';
import fishSardine from '../images/products/frozen-fish03.webp';
import fishSprat from '../images/products/frozen-fish04.webp';


const FrozenTrade = () => {

    // State to track the currently active category button
    const [activeCategory, setActiveCategory] = useState('frozen-chicken');

    // Function to handle smooth scrolling when a button is clicked
    const handleCategoryClick = (targetId) => {
        // We set the active category on click as well for immediate feedback
        setActiveCategory(targetId);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Offset to account for the sticky header (70px) and category buttons (65px)
            const headerOffset = 150; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // This useEffect hook adds a scroll listener to automatically update the
    // active button based on the user's scroll position.
    useEffect(() => {
        const sections = ['frozen-chicken', 'frozen-fish', 'frozen-meat'];
        const offset = 160; // Offset from the top of the viewport

        const handleScrollHighlight = () => {
            const scrollY = window.scrollY;
            let currentSection = '';

            // This logic finds which section is currently in view
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section && section.offsetTop <= scrollY + offset) {
                    currentSection = sectionId;
                }
            });
            
            // We only update the state if the active section has changed
            // to prevent unnecessary re-renders.
            if (currentSection && activeCategory !== currentSection) {
                setActiveCategory(currentSection);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScrollHighlight);

        // This is a cleanup function to remove the listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScrollHighlight);
    }, [activeCategory]); // The effect depends on `activeCategory` to avoid stale state


    return (
        <>
            {/* Hero Section */}
            <div className="section bg-light-gray py-5">
                <div className="container py-5">
                    <h1>Frozen Product Supply Chain at Diamante Mariscos Lda</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="lead">Ensuring Food Safety and Quality Across Mozambique</p>
                            <p className="text-justify">
                                At Diamante Mariscos Lda, we are proud to be a key player in
                                Mozambique's food safety management, with a well-established and
                                efficient frozen product supply chain.
                            </p>
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <img className="w-100 rounded-5" src={heroImage} alt="Fish Trade" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Buttons - The className is now dynamic */}
            <div id="category-buttons" className="sticky-top d-flex flex-wrap align-items-center w-100 justify-content-center bg-warning-subtle py-3 gap-3">
                <button 
                    className={`btn ${activeCategory === 'frozen-chicken' ? 'btn-danger' : 'btn-outline-secondary'}`} 
                    onClick={() => handleCategoryClick('frozen-chicken')}>
                    Frozen Chicken
                </button>
                <button 
                    className={`btn ${activeCategory === 'frozen-fish' ? 'btn-danger' : 'btn-outline-secondary'}`} 
                    onClick={() => handleCategoryClick('frozen-fish')}>
                    Frozen Fish
                </button>
                <button 
                    className={`btn ${activeCategory === 'frozen-meat' ? 'btn-danger' : 'btn-outline-secondary'}`} 
                    onClick={() => handleCategoryClick('frozen-meat')}>
                    Frozen Meat
                </button>
            </div>

            {/* Frozen Chicken Section */}
            <div id="frozen-chicken" className="frozen-chicken py-5">
                <div className="container my-5">
                    <h1 className="text-center mb-4">Frozen Chicken</h1>
                    <p className="text-center lead">We provide high-quality frozen chicken, ensuring freshness and great taste.</p>
                    <div className="row gallery pt-5">
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={chickenWings} alt="Frozen Chicken Wings" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chicken Wings</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={chickenUpperBack} alt="Frozen Chicken Upper Back" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chicken Upper Back</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={chickenLowerBack} alt="Frozen Chicken Lower Back" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chicken Lower Back</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={chickenTails} alt="Frozen Chicken Tails" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chicken Tails</div>
                        </div>
                    </div>
                    <div className="row gallery pt-5">
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={chickenFrank} alt="Frozen Chicken Frank" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chicken Frank</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={chickenNeck} alt="Frozen Chicken Neck" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chicken Neck</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={wholeChicken} alt="Frozen Whole Chicken with Livers & Gizzards" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Whole Chicken with Livers & Gizzards</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frozen Fish Section */}
            <div id="frozen-fish" className="frozen-fish py-5 bg-light-gray">
                <div className="container my-5">
                    <h1 className="text-center mb-4">Frozen Fish</h1>
                    <p className="text-center lead">We offer a selection of high-quality frozen fish, ensuring freshness and rich taste.</p>
                    <div className="row gallery pt-5">
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={fishHorseMackerel} alt="Frozen Horse Mackerel" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Horse Mackerel (Carapao)</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={fishChubMackerel} alt="Frozen Chub Mackerel" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Chub Mackerel (Atum)</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={fishSardine} alt="Frozen Sardine" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Sardine</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={fishSprat} alt="Frozen Sprat" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Sprat</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frozen Meat Section */}
            <div id="frozen-meat" className="frozen-meat py-5">
                <div className="container my-5">
                    <h1 className="text-center mb-4">Frozen Meat</h1>
                    <p className="text-center lead">We provide high-quality frozen meat, ensuring freshness and great taste.</p>
                    <div className="row gallery pt-5">
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={beefWhole} alt="Frozen Beef Whole" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Beef Whole</div>
                        </div>
                        <div className="col-md-3 col-sm-6 cardz text-center mb-4">
                            <img src={beefLiver} alt="Frozen Beef Liver" className="img-fluid rounded" />
                            <div className="mt-2 fw-bold">Frozen Beef Liver</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrozenTrade;
