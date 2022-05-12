import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png'
import Service from './Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ]
    return (
        <div>
            <div className='text-center py-20'>
                <h3 className='text-secondary mb-2 font-semibold text-2xl'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;