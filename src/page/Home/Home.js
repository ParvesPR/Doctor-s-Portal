import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import Info from './Info/Info';
import ServiceInfo from './Services/ServiceInfo/ServiceInfo';
import Services from './Services/Services';
import Testimonial from './Testimonials/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceInfo></ServiceInfo>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;