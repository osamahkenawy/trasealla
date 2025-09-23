"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const HeroBanner2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);    

        const [isActive, setIsActive] = useState('uae');

    return (
<section className="hero-section-2">
            <div className="hero-2 bg-cover" data-background="/assets/img/hero/main-bg-three.jpg">
                <div className="container custom-container-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="sub-title wow fadeInUp">
                                    Your Trusted Visa Partner
                                </div>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                    Expert Visa Services <br/>
                                     For Your Global Travel
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Connecting travelers worldwide to their dream destinations through expert visa solutions. <br/> From Europe to Asia, Americas to Africa - your global travel journey starts here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-price-section mb-0">
                <div className="container custom-container-3">
                    <div className="hero-bottom">
                        <div className="row">
                            <div className="best-price-wrapper">
                                <div className="content wow fadeInUp" data-wow-delay=".3s">
                                    <h2>Find Your Visa Service</h2>
                                </div>
                                <ul className="nav">
                                    <li className={`nav-item wow fadeInUp ${isActive === 'uae' ? 'active' : ''}`} onClick={() => setIsActive('uae')} data-wow-delay=".3s">
                                        <a className="nav-link"  data-bs-toggle="tab">
                                            UAE Visa
                                        </a>
                                    </li>
                                    <li className={`nav-item wow fadeInUp ${isActive === 'schengen' ? 'active' : ''}`} onClick={() => setIsActive('schengen')}  data-wow-delay=".5s">
                                        <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                            Schengen
                                        </a>
                                    </li>
                                    <li className={`nav-item wow fadeInUp ${isActive === 'international' ? 'active' : ''}`} onClick={() => setIsActive('international')}  data-wow-delay=".7s">
                                        <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                            International
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className={`tab-pane ${isActive === 'uae' ? 'active' : ''}`} >
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form220" method="POST">
                                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Visa Type</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Visa Type</option>
                                                                <option>Tourist Visa (30 days)</option>
                                                                <option>Tourist Visa (60 days)</option>
                                                                <option>Tourist Visa (90 days)</option>
                                                                <option>Multiple Entry Visa</option>
                                                                <option>Extension & Renewal</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Nationality</span>
                                                        <input type="text" name="nationality" id="nationality1" placeholder="Your Nationality" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Purpose</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Purpose</option>
                                                                <option>Tourism</option>
                                                                <option>Business</option>
                                                                <option>Family Visit</option>
                                                                <option>Medical</option>
                                                                <option>Transit</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Travel Date</span>
                                                        <div className="form-clt">
                                                            <input type="date" id="date1" name="date1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Get Quote</span>
                                                        <button type="submit" className="theme-btn w-100">
                                                            Get Quote
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'schengen' ? 'active' : ''}`} id="thumb2" >
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form22" method="POST">
                                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Country</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Country</option>
                                                                <option>France</option>
                                                                <option>Germany</option>
                                                                <option>Italy</option>
                                                                <option>Spain</option>
                                                                <option>Netherlands</option>
                                                                <option>Switzerland</option>
                                                                <option>Other Schengen</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Visa Type</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Type</option>
                                                                <option>Tourist Visa</option>
                                                                <option>Business Visa</option>
                                                                <option>Family Visit</option>
                                                                <option>Transit Visa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Duration</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Duration</option>
                                                                <option>Short Stay (90 days)</option>
                                                                <option>Multiple Entry</option>
                                                                <option>Long Stay</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Travel Date</span>
                                                        <div className="form-clt">
                                                            <input type="date" id="date2" name="date2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Get Quote</span>
                                                        <button type="submit" className="theme-btn w-100">
                                                            Get Quote
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'international' ? 'active' : ''}`}  >
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form32" method="POST">
                                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Destination</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Country</option>
                                                                <option>Brazil</option>
                                                                <option>UK</option>
                                                                <option>USA</option>
                                                                <option>Canada</option>
                                                                <option>Malaysia</option>
                                                                <option>Singapore</option>
                                                                <option>Thailand</option>
                                                                <option>Saudi Arabia</option>
                                                                <option>Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Visa Type</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Type</option>
                                                                <option>Tourist</option>
                                                                <option>Business</option>
                                                                <option>Family Visit</option>
                                                                <option>Study</option>
                                                                <option>Work</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Duration</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Select Duration</option>
                                                                <option>Short Stay</option>
                                                                <option>Long Stay</option>
                                                                <option>Multiple Entry</option>
                                                                <option>Single Entry</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Travel Date</span>
                                                        <div className="form-clt">
                                                            <input type="date" id="date3" name="date3" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Get Quote</span>
                                                        <button type="submit" className="theme-btn w-100">
                                                            Get Quote
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner2;