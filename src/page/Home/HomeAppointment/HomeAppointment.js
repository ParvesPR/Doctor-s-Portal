import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const HomeAppointment = () => {
    return (
        <section>
            <div>
                <img src={appointment} alt="" />
            </div>
            <div>
                <h4>Appoinment</h4>
                <h3>Make an appointment Today</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button></button>
            </div>
        </section>
    );
};

export default HomeAppointment;