import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl mb-5" alt='Dentist Chair' />
                <div className='mr-10'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Your Selected Date is: {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;