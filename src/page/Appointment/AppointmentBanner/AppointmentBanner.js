import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl mb-5" alt='Dentist Chair' />
                <div className='lg:mr-10'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onDayClick={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;