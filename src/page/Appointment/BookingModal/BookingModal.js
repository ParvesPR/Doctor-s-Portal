import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-r from-secondary to-primary text-white border-none">✕</label>
                    <h3 className="font-bold text-lg">Booking for: <span className='text-secondary font-bold'>{name}</span></h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} className="mt-5 input input-bordered w-full max-w-xs" readOnly/>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn bg-gradient-to-r from-secondary to-primary text-white border-none w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;