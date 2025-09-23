"use client"
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const VisaTypes = () => {
    const visaTypes = [
        {
            icon: "🛂",
            title: "UAE Visa Services",
            description: "Complete UAE visa solutions for all your travel needs",
            services: [
                "UAE Tourist & Visit Visa (30, 60, 90 days)",
                "UAE Multiple Entry Visa (short & long term)",
                "Extension & Renewal Services",
                "Express processing available"
            ],
            color: "primary"
        },
        {
            icon: "🇪🇺",
            title: "Schengen Visa (Europe)",
            description: "Expert assistance for all 27 Schengen countries",
            services: [
                "Tourist visa for 27 Schengen countries",
                "Business visa support",
                "Family visit visa",
                "Appointment scheduling & embassy support"
            ],
            color: "secondary"
        },
        {
            icon: "🇧🇷",
            title: "Brazil Visa",
            description: "Comprehensive Brazil visa services",
            services: [
                "Tourist visa (short stays)",
                "Business visa (meetings, conferences)",
                "Family & visit visa",
                "Travel insurance for Brazil trips"
            ],
            color: "primary"
        },
        {
            icon: "🌐",
            title: "International Visa Assistance",
            description: "Global visa support for worldwide travel",
            services: [
                "UK Visa (tourist, business, study)",
                "USA Visa (B1/B2) support",
                "Canada Visa (visit, family, business)",
                "Asian & Middle East visas"
            ],
            color: "secondary"
        }
    ];

    return (
        <section className="visa-types py-5 bg-light">
            <div className="container">
                <SectionTitle 
                    Title="Our Visa Services"
                    SubTitle="Expert Solutions for Every Destination"
                />
                <p className="text-center text-muted mb-5">
                    We provide comprehensive visa services for destinations worldwide, ensuring your travel plans proceed smoothly.
                </p>
                <div className="row g-4">
                    {visaTypes.map((visa, index) => (
                        <div key={index} className="col-lg-6 col-md-6">
                            <div className={`visa-type-card h-100 p-4 rounded shadow-sm border-start border-4 border-${visa.color}`}>
                                <div className="visa-icon mb-3">
                                    <span className="display-4">{visa.icon}</span>
                                </div>
                                <h4 className="mb-3">{visa.title}</h4>
                                <p className="text-muted mb-4">{visa.description}</p>
                                <ul className="list-unstyled">
                                    {visa.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4">
                                    <button className={`btn btn-${visa.color === 'primary' ? 'primary' : 'outline-primary'} w-100`}>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisaTypes;
