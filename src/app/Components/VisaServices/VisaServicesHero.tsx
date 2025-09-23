"use client"
import React from 'react';
import SectionTitle from '../Common/SectionTitle';

const VisaServicesHero = () => {
    return (
        <section className="visa-services-hero py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="visa-hero-content">
                            <SectionTitle 
                                Title="Comprehensive Visa Solutions"
                                SubTitle="Your Gateway to Global Travel"
                            />
                            <p className="mt-3">
                                At Trasealla, we specialize in providing expert visa services for travelers worldwide. From UAE tourist visas to complex international visa applications, our experienced team ensures a smooth and successful visa process.
                            </p>
                            <div className="visa-stats mt-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="stat-item text-center">
                                            <h3 className="text-primary">5000+</h3>
                                            <p>Visas Processed</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="stat-item text-center">
                                            <h3 className="text-primary">98%</h3>
                                            <p>Success Rate</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="stat-item text-center">
                                            <h3 className="text-primary">24/7</h3>
                                            <p>Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="visa-hero-image">
                            <img src="/assets/img/visa/visa-hero.jpg" alt="Visa Services" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaServicesHero;
