import React, { useState } from 'react';

const ContactUs = () => {
    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Function to update state when user types in an input field
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission (page reload)
        console.log('Form Submitted:', formData);
        alert('Thank you for your message!');
        // Here you would typically send the data to a server
    };

    return (
        // The form tag is now controlled by React's state
        <form onSubmit={handleSubmit}>
            <div className="contact py-5">
                <h3 className="text-center">Contact us</h3>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="card text-center align-items-center p-4 w-100">
                                <i className="fa-solid fa-location-dot fa-2x text-primary"></i>
                                <hr className="w-100" />
                                <p className="mt-4">
                                    Avenida de Liberdade<br />
                                    C.P. 234, Cidade de Angoche<br />
                                    Nampula, Mozambique.<br />
                                    Telefax: +258 26 720439
                                </p>
                                <h4 className="text-center mt-4">
                                    Call us today<br />
                                    +258 84 3366908
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column gap-3">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name *"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="subject"
                                placeholder="Subject *"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                className="form-control flex-grow-1"
                                name="message"
                                placeholder="Message *"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="5"
                            ></textarea>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="map-area mt-4">
                    <div className="container">
                        {/* To get your own map:
                          1. Go to Google Maps and find your location.
                          2. Click "Share", then "Embed a map".
                          3. Copy the HTML (it will be an iframe) and paste it here.
                          I have added an example map of Mozambique below.
                        */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705790.353381013!2d22.03473188956973!3d-18.66569528775073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f6499cf80344d5%3A0x1ebd32cc8a238698!2sMozambique!5e0!3m2!1sen!2sin!4v1719244670277!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactUs;