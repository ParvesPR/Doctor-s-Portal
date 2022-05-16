import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentService from './AppointmentService';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const dateFormat = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', dateFormat], () => fetch(`http://localhost:5000/available?date=${dateFormat}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-center text-secondary font-semibold text-lg mb-5'>Available Appointment on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div >
    );
};

export default AvailableAppointment;