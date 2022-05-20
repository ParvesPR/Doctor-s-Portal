import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    return (
        <div className='px-12'>
            <h2 className='text-2xl text-purple-500 font-bold'>Please Pay for: <span className='text-red-600'>{id}</span></h2>
        </div>
    );
};

export default Payment;