"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

const VisaServicesSlider = () => {

    const visaServicesContent = [
        {
            img: '/assets/img/destination/new/01.jpg', 
            country: 'UAE', 
            visaType: 'Tourist & Visit Visa',
            processingTime: '2-3 Days',
            price: 'Starting from AED 350',
            features: ['30/60/90 Days validity', 'Multiple entry available', 'Express processing']
        },          
        {
            img: '/assets/img/destination/new/02.jpg', 
            country: 'Schengen Europe', 
            visaType: 'Tourist Visa',
            processingTime: '10-15 Days',
            price: 'Starting from AED 280',
            features: ['27 Countries access', 'Up to 90 days stay', 'Business & tourist']
        },          
        {
            img: '/assets/img/destination/new/03.jpg', 
            country: 'Brazil', 
            visaType: 'Tourist Visa',
            processingTime: '5-7 Days',
            price: 'Starting from AED 450',
            features: ['90 days validity', 'Single/Multiple entry', 'Travel insurance included']
        },          
        {
            img: '/assets/img/destination/new/04.jpg', 
            country: 'United Kingdom', 
            visaType: 'Standard Visitor Visa',
            processingTime: '15-20 Days',
            price: 'Starting from AED 420',
            features: ['6 months validity', 'Tourism & business', 'Family visits']
        },
        {
            img: '/assets/img/destination/new/05.jpg', 
            country: 'USA', 
            visaType: 'B1/B2 Tourist Visa',
            processingTime: '3-5 Weeks',
            price: 'Starting from AED 650',
            features: ['Up to 10 years validity', 'Multiple entry', 'Interview support']
        },
        {
            img: '/assets/img/destination/new/06.jpg', 
            country: 'Canada', 
            visaType: 'Visitor Visa',
            processingTime: '2-4 Weeks',
            price: 'Starting from AED 380',
            features: ['Up to 10 years validity', 'Multiple entry', 'eTA processing']
        },
        {
            img: '/assets/img/destination/new/07.jpg', 
            country: 'Saudi Arabia', 
            visaType: 'Hajj Pilgrimage',
            processingTime: '4-6 Weeks',
            price: 'Starting from AED 2,500',
            features: ['Complete Hajj package', 'Accommodation included', 'Guided pilgrimage', 'Group travel support']
        },
        {
            img: '/assets/img/destination/new/08.jpg', 
            country: 'Saudi Arabia', 
            visaType: 'Umrah Pilgrimage',
            processingTime: '1-2 Weeks',
            price: 'Starting from AED 1,200',
            features: ['Year-round availability', 'Flexible packages', 'Hotel bookings', 'Transportation included']
        }
      ]; 

      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


    return (
        <section className="new-destination-section fix section-padding">
        <div className="container">
            <div className="section-title-area">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp">
                        Our Visa Services
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
                        Expert Visa & Pilgrimage Services <br/> For Your Global Journey
                    </h2>
                </div>
                <Link href="/visa-services" className="theme-btn">
                    All Services <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
            <div className="new-destination-wrapper">
                <div className="swiper new-destination-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider {...settings}>
                    {visaServicesContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className={`visa-service-card ${item.visaType.includes('Hajj') || item.visaType.includes('Umrah') ? 'pilgrimage-card' : ''}`}>
                                <div className="visa-card-image">
                                  <Image src={item.img} alt={`${item.country} visa`} width={424} height={505} />
                                  <div className="visa-badge">
                                    <span className="processing-time">{item.processingTime}</span>
                                  </div>
                                </div>
                                <div className="visa-card-content">
                                    <div className="visa-header">
                                        <h3><Link href="/visa-services">{item.country}</Link></h3>
                                        <p className="visa-type">{item.visaType}</p>
                                        <div className="price-tag">{item.price}</div>
                                    </div>
                                    <ul className="visa-features">
                                        {item.features.map((feature, index) => (
                                            <li key={index}>
                                                <i className="bi bi-check-circle-fill"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="visa-actions">
                                        <Link href="/visa-services" className="apply-btn">
                                            Apply Now <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default VisaServicesSlider;