"use client"
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const SupportServices = () => {
    const supportServices = [
        {
            icon: "bi bi-shield-check",
            title: "Travel Insurance",
            description: "Comprehensive travel insurance for visa approval and peace of mind during your travels.",
            features: ["Visa approval coverage", "Medical emergency", "Trip cancellation", "Baggage protection"]
        },
        {
            icon: "bi bi-building",
            title: "Hotel & Flight Booking",
            description: "Confirmed hotel and flight bookings required for visa applications with flexible cancellation policies.",
            features: ["Confirmed bookings", "Flexible cancellation", "Best price guarantee", "24/7 support"]
        },
        {
            icon: "bi bi-calendar-check",
            title: "Embassy Appointments",
            description: "Expert assistance with embassy appointment scheduling and application support.",
            features: ["Appointment scheduling", "Application support", "Document review", "Follow-up assistance"]
        },
        {
            icon: "bi bi-translate",
            title: "Document Translation",
            description: "Professional document translation and attestation services in Arabic and English.",
            features: ["Arabic ↔ English", "Certified translation", "Document attestation", "Fast turnaround"]
        },
        {
            icon: "bi bi-headset",
            title: "24/7 Customer Support",
            description: "Round-the-clock assistance for all your visa-related queries and concerns.",
            features: ["24/7 availability", "Multi-language support", "Expert guidance", "Quick response"]
        },
        {
            icon: "bi bi-file-earmark-medical",
            title: "Document Assistance",
            description: "Complete guidance on required documents including bank statements, invitations, and financial proof.",
            features: ["Document checklist", "Bank statement help", "Invitation letters", "Financial proof guidance"]
        }
    ];

    return (
        <section className="support-services py-5 bg-light">
            <div className="container">
                <SectionTitle 
                    Title="Value-Added Support Services"
                    SubTitle="Complete Travel Solutions"
                />
                <p className="text-center text-muted mb-5">
                    Beyond visa processing, we provide comprehensive support services to ensure your travel experience is seamless and stress-free.
                </p>
                <div className="row g-4">
                    {supportServices.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="support-service-card h-100 p-4 bg-white rounded shadow-sm">
                                <div className="service-icon mb-3">
                                    <i className={`${service.icon} text-primary fs-1`}></i>
                                </div>
                                <h5 className="mb-3">{service.title}</h5>
                                <p className="text-muted mb-4">{service.description}</p>
                                <ul className="list-unstyled">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportServices;
