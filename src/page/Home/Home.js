import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import ServiceInfo from './Services/ServiceInfo/ServiceInfo';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceInfo></ServiceInfo>
        </div>
    );
};

export default Home;