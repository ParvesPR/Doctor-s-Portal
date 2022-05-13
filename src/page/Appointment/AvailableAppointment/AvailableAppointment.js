import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointmentService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-secondary font-semibold text-lg mb-5'>Available Appointment on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                    ></AppointmentService>)
                }
            </div>
        </div >
    );
};

export default AvailableAppointment;