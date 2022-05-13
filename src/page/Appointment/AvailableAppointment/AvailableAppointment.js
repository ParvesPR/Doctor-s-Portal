import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <p className='text-center text-secondary font-semibold text-xl'>Available Appointment on {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;