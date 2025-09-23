"use client"
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const VisaProcess = () => {
    const processSteps = [
        {
            step: "01",
            title: "Consultation",
            description: "Free initial consultation to understand your visa requirements and travel plans.",
            icon: "bi bi-chat-dots"
        },
        {
            step: "02", 
            title: "Document Preparation",
            description: "We help you gather and prepare all required documents for your visa application.",
            icon: "bi bi-file-earmark-text"
        },
        {
            step: "03",
            title: "Application Submission",
            description: "Expert submission of your visa application with proper documentation and forms.",
            icon: "bi bi-send"
        },
        {
            step: "04",
            title: "Follow-up & Support",
            description: "Continuous monitoring and support throughout the visa processing period.",
            icon: "bi bi-headset"
        },
        {
            step: "05",
            title: "Visa Collection",
            description: "Assistance with visa collection and final travel preparation guidance.",
            icon: "bi bi-check-circle"
        }
    ];

    return (
        <section className="visa-process py-5">
            <div className="container">
                <SectionTitle 
                    Title="Our Visa Process"
                    SubTitle="Simple Steps to Your Visa"
                />
                <p className="text-center text-muted mb-5">
                    Our streamlined process ensures a hassle-free visa application experience with expert guidance at every step.
                </p>
                <div className="row">
                    <div className="col-12">
                        <div className="process-timeline">
                            {processSteps.map((step, index) => (
                                <div key={index} className="process-step d-flex align-items-center mb-4">
                                    <div className="step-number me-4">
                                        <div className="step-circle d-flex align-items-center justify-content-center">
                                            <span className="step-text">{step.step}</span>
                                        </div>
                                    </div>
                                    <div className="step-content flex-grow-1">
                                        <div className="step-card p-4 rounded shadow-sm">
                                            <div className="d-flex align-items-center mb-3">
                                                <i className={`${step.icon} text-primary me-3 fs-4`}></i>
                                                <h5 className="mb-0">{step.title}</h5>
                                            </div>
                                            <p className="text-muted mb-0">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaProcess;
