import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-r from-secondary to-primary text-white border-none">✕</label>
                    <h3 className="font-bold text-lg">Booking for: <span className='text-secondary font-bold'>{name}</span></h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} className="mt-5 input input-bordered w-full max-w-xs" readOnly />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" required />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn bg-gradient-to-r from-secondary to-primary text-white border-none w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;