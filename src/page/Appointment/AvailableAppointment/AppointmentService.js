import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-secondary font-bold text-xl">{name}</h2>
                <p>
                    {slots.length > 0 ? <span className='font-semibold '>{slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>}
                </p>
                <p> {slots.length} {slots?.length > 1 ? 'Spaces' : 'Space'} Available </p>
                <p>Price: <span className='font-semibold'>${price}</span></p>
                <div className="card-actions mx-auto">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white font-bold border-none" disabled={slots?.length === 0}>Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;