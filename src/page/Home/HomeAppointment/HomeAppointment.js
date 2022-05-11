import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const HomeAppointment = () => {
    return (
        <section className='flex' 
        style={{background: `url(${appointment})`} }>
            <div className='flex-1 justify-center items-center'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4>Appointment</h4>
                <h3>Make an appointment Today</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button>Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppointment;