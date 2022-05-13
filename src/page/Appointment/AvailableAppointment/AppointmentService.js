import React from 'react';

const AppointmentService = ({ service }) => {
    return (
        <div className="card lg:max-w-lg shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-secondary font-bold text-xl">{service?.name}</h2>
                <p>
                    {service?.slots?.length > 0 ? <span className='font-semibold '>{service?.slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>}
                </p>
                <p> {service?.slots?.length} {service?.slots?.length > 1 ? 'Spaces' : 'Space'} Available </p>
                <div className="card-actions mx-auto">
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none" disabled={service?.slots?.length === 0}>Booking Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;