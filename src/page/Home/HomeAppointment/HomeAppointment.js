import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor-small.png';
import Button from '../../Shared/Button/Button';

const HomeAppointment = () => {
    return (
        <section className='grid grid-cols-1'
        style={{background: `url(${appointment})`} }>
           <div className='flex justify-center items-center'>
           <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-secondary text-2xl my-5'>Appointment</h4>
                <h3 className='text-3xl font-bold text-white mb-3'>Make an appointment Today</h3>
                <p className='text-1xl text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
           </div>
        </section>
    );
};

export default HomeAppointment;