"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Choose2 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section
        className="choose-us-section section-padding bg-cover fix"
        data-background="/assets/img/choose-us-bg-2.jpg"
        aria-labelledby="choose-us-heading"
      >
        <div className="container">
          <div className="choose-us-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="choose-us-content">
                  <div className="section-title">
                    <span className="sub-title wow fadeInUp">Why Choose Us</span>
                    <h2 id="choose-us-heading" className="wow fadeInUp" data-wow-delay=".2s">
                      Your Journey, Handled End-to-End
                    </h2>
                  </div>
      
                  <p className="wow fadeInUp" data-wow-delay=".25s">
                    We’re a UAE-based team specializing in flight bookings, visas (UAE • Schengen • International),
                    UAE residency support, education travel, immigration pathways (Brazil, Australia, New Zealand),
                    and curated trips to Egypt, Morocco, and the Black Sea. One partner. Zero hassle.
                  </p>
      
                  <div className="choose-us-area">
                    <div className="line-shape" aria-hidden="true">
                      <Image src="/assets/img/line-shape2.png" alt="" width={2} height={279} />
                    </div>
      
                    {/* 01 */}
                    <div className="choose-us-items wow fadeInUp" data-wow-delay=".3s">
                      <h3 className="number">01</h3>
                      <div className="content">
                        <h4>Tailor-Made Itineraries</h4>
                        <p>
                          Trips designed around your budget, dates, and style—whether it’s family holidays, honeymoon escapes,
                          study travel, or business journeys.
                        </p>
                      </div>
                    </div>
      
                    {/* 02 */}
                    <div className="choose-us-items wow fadeInUp" data-wow-delay=".4s">
                      <h3 className="number">02</h3>
                      <div className="content">
                        <h4>Visa & Residency Expertise</h4>
                        <p>
                          Clear checklists, accurate forms, and guided submissions for UAE visas & residency, Schengen, UK/EU study,
                          and Brazil/Australia/New Zealand immigration.
                        </p>
                      </div>
                    </div>
      
                    {/* 03 */}
                    <div className="choose-us-items wow fadeInUp" data-wow-delay=".5s">
                      <h3 className="number">03</h3>
                      <div className="content">
                        <h4>Best Value Booking</h4>
                        <p>
                          Competitive fares and hotel rates via trusted airline and DMC partners—no hidden fees, transparent options,
                          and flexible plans.
                        </p>
                      </div>
                    </div>
      
                    {/* 04 */}
                    <div className="choose-us-items wow fadeInUp" data-wow-delay=".6s">
                      <h3 className="number">04</h3>
                      <div className="content">
                        <h4>24/7 Human Support</h4>
                        <p>
                          Real people on WhatsApp/phone when you need us—before, during, and after your trip. English & Arabic support.
                        </p>
                      </div>
                    </div>
      
                    {/* 05 */}
                    <div className="choose-us-items wow fadeInUp" data-wow-delay=".7s">
                      <h3 className="number">05</h3>
                      <div className="content">
                        <h4>UAE-Based. Compliant. Trusted.</h4>
                        <p>
                          Operated from the UAE with local knowledge and adherence to licensing requirements—giving you confidence and peace of mind.
                        </p>
                      </div>
                    </div>
      
                    {/* 06 */}
                    <div className="choose-us-items wow fadeInUp" data-wow-delay=".8s">
                      <h3 className="number">06</h3>
                      <div className="content">
                        <h4>Signature Destinations</h4>
                        <p>
                          Expert curation for Egypt & Morocco classics and the Black Sea gems (Trabzon, Rize, Batumi, Varna, Constanța)—beaches, mountains, and culture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Visual */}
              <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".35s">
                <div className="choose-us-thumb">
                  <Image
                    src="/assets/img/choose-us-bg.png"
                    className="img-custom-anim-left"
                    alt="Happy travelers with iconic landmarks and beaches"
                    width={828}
                    height={620}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default Choose2;