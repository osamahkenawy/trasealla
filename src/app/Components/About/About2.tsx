import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
<section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src="/assets/img/about/03.jpg" className="wow img-custom-anim-left" alt="img" width={330} height={512}   />
                              
                                <div className="shape-image float-bob-y">
                                    <Image src="/assets/img/about/tourist_four.jpg" alt="img" width={196} height={109}   />
                                </div>
                                <div className="group-image float-bob-x">
                                    <Image src="/assets/img/about/group.png" alt="img" width={170} height={50}   />
                                </div>
                                <div className="about-image-2">
                                    <Image src="/assets/img/about/05.jpg" className="wow img-custom-anim-top" alt="img" width={284} height={411}   />
                                    <div className="plane-shape">
                                        <Image src="/assets/img/about/plane-shape2.png" alt="img" width={370} height={205}   />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        About Trasealla
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Your Trusted Partner for
                                        Global Visa Solutions
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    Trasealla is a leading visa services company based in UAE, specializing in comprehensive visa solutions for travelers worldwide. With years of experience and a dedicated team of experts, we ensure your visa application process is smooth, efficient, and successful.
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/check.png" alt="img" width={34} height={30}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Expert Visa <br/> Processing
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Professional visa processing with <br/> 98% success rate and fast turnaround.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/check.png" alt="img" width={34} height={30}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                24/7 Customer <br/> Support
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Round-the-clock assistance for all <br/> your visa-related queries and concerns.
                                        </p>
                                    </div>
                                </div>
                                <Link href="/visa-services" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">Our Visa Services<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;