import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from '../AppointmentService/AppointmentService';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-secondary font-semibold text-xl'>Available Appointment on {format(date, 'PP')}</h4>
            <div>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                    ></AppointmentService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;