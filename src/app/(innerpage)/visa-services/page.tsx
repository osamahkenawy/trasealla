import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import VisaServicesHero from '../../Components/VisaServices/VisaServicesHero';
import VisaTypes from '../../Components/VisaServices/VisaTypes';
import VisaProcess from '../../Components/VisaServices/VisaProcess';
import SupportServices from '../../Components/VisaServices/SupportServices';
import Cta3 from '../../Components/Cta/Cta3';

const VisaServicesPage = () => {
    return (
        <div>
            <BreadCumb 
                title="Visa Services" 
                subtitle="Expert visa assistance for all your travel needs"
                backgroundImage="/assets/img/breadcrumb/breadcrumb.jpg"
            />
            <VisaServicesHero />
            <VisaTypes />
            <VisaProcess />
            <SupportServices />
            <Cta3 />
        </div>
    );
};

export default VisaServicesPage;
