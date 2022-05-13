import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AppointmentService from './AppointmentService/AppointmentService';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <AppointmentService></AppointmentService>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;