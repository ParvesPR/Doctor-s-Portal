import React from 'react';
import chair from '../../../assets/images/chair.png';
import Button from '../../Shared/Button/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-center bg-no-repeat bg-cover w-auto h-auto bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl mb-4" />
                <div>
                    <h1 className="text-5xl font-bold mt-5">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;