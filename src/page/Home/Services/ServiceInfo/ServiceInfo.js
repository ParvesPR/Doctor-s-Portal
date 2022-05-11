import React from 'react';
import image from '../../../../assets/images/treatment.png';

const ServiceInfo = () => {
    return (
        <div class="hero min-h-screen w-3/4 mx-auto">
            <div class="hero-content flex-col lg:flex-row">
                <img src={image} class="sm:my-5 max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='ml-10'>
                    <h1 class="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;